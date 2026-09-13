import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';
import { getUser } from '../../../utils/getUser';

export async function POST(req) {
  try {
    const user = await getUser(req);
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { customerName, customerEmail, customerPhone, customerAddress, notes } = await req.json();

    if (!customerName || !customerEmail || !customerPhone || !customerAddress) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // 1. Create the order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([{
        user_id: user.id,
        customerName,
        customerEmail,
        customerPhone,
        customerAddress,
        notes: notes || null
      }])
      .select()
      .single();

    if (orderError) {
      return NextResponse.json({ message: orderError.message }, { status: 400 });
    }

    // 2. Empty the user's cart
    const { error: cartError } = await supabase
      .from('cart')
      .delete()
      .eq('user_id', user.id);

    if (cartError) {
      console.error("Failed to empty cart after order:", cartError.message);
      // We don't fail the order if the cart deletion fails, but we should log it
    }

    return NextResponse.json({ data: order, message: 'Order placed successfully' });
  } catch (error) {
    console.error("Orders POST Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
