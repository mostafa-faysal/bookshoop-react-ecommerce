import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';
import { getUser } from '../../../utils/getUser';

export async function GET(req) {
  try {
    const user = await getUser(req);
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { data, error } = await supabase
      .from('cart')
      .select('*, books(*)')
      .eq('user_id', user.id);

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    const formattedData = data.map(item => ({
      cartId: item.cartId,
      bookId: item.bookId,
      qty: item.qty,
      title: item.books?.title,
      image: item.books?.image,
      description: item.books?.description,
      price: item.books?.price,
      totalPrice: item.books?.price ? item.qty * item.books.price : 0
    }));

    return NextResponse.json({ data: formattedData });
  } catch (error) {
    console.error("Cart GET Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const user = await getUser(req);
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { bookId } = await req.json();

    if (!bookId) {
      return NextResponse.json({ message: 'bookId is required' }, { status: 400 });
    }

    // Check if the item already exists in the user's cart
    const { data: existingCartItem } = await supabase
      .from('cart')
      .select('*')
      .eq('user_id', user.id)
      .eq('bookId', bookId)
      .single();

    if (existingCartItem) {
      // Increment qty
      await supabase
        .from('cart')
        .update({ qty: existingCartItem.qty + 1 })
        .eq('cartId', existingCartItem.cartId);
    } else {
      // Insert new
      const { error: insertError } = await supabase
        .from('cart')
        .insert([{ user_id: user.id, bookId, qty: 1 }]);

      if (insertError) {
         return NextResponse.json({ message: insertError.message }, { status: 400 });
      }
    }

    // Return the updated cart items exactly like GET
    const { data, error } = await supabase
      .from('cart')
      .select('*, books(*)')
      .eq('user_id', user.id);

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    const formattedData = data.map(item => ({
      cartId: item.cartId,
      bookId: item.bookId,
      qty: item.qty,
      title: item.books?.title,
      image: item.books?.image,
      description: item.books?.description,
      price: item.books?.price,
      totalPrice: item.books?.price ? item.qty * item.books.price : 0
    }));

    return NextResponse.json({ data: formattedData });
  } catch (error) {
    console.error("Cart POST Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
