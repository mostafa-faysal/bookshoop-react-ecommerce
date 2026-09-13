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
      .from('wishlist')
      .select('*, books(*)')
      .eq('user_id', user.id);

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    // WishlistItem.jsx expects `item.book` and `item.id`
    const formattedData = data.map(item => ({
      id: item.wishlistId,
      book: item.books
    }));

    return NextResponse.json({ data: formattedData });
  } catch (error) {
    console.error("Wishlist GET Error:", error);
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

    // Insert new
    const { error: insertError } = await supabase
      .from('wishlist')
      .insert([{ user_id: user.id, bookId }]);

    // Unique constraint violation (23505) means it's already in the wishlist, which is fine
    if (insertError && insertError.code !== '23505') {
       return NextResponse.json({ message: insertError.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'Added to wishlist' });
  } catch (error) {
    console.error("Wishlist POST Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
