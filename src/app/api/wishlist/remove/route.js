import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabaseClient';
import { getUser } from '../../../../utils/getUser';

export async function POST(req) {
  try {
    const user = await getUser(req);
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { wishlistId } = await req.json();

    if (!wishlistId) {
      return NextResponse.json({ message: 'wishlistId is required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('wishlist')
      .delete()
      .eq('wishlistId', wishlistId)
      .eq('user_id', user.id);

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: 'Item removed from wishlist successfully' });
  } catch (error) {
    console.error("Wishlist remove Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
