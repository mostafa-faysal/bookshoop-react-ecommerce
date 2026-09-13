import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabaseClient';
import { getUser } from '../../../../utils/getUser';

export async function POST(req, { params }) {
  try {
    const { id } = await params;
    const user = await getUser(req);
    
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { qty } = await req.json();

    if (qty === undefined) {
      return NextResponse.json({ message: 'qty is required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('cart')
      .update({ qty: Number(qty) })
      .eq('cartId', id)
      .eq('user_id', user.id);

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'Cart item updated successfully' });
  } catch (error) {
    console.error("Cart update Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const user = await getUser(req);
    
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { error } = await supabase
      .from('cart')
      .delete()
      .eq('cartId', id)
      .eq('user_id', user.id);

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'Cart item removed successfully' });
  } catch (error) {
    console.error("Cart delete Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
