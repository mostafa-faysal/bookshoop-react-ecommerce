import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabaseClient';
import { getUser } from '../../../../utils/getUser';

export async function GET(req) {
  try {
    const user = await getUser(req);
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { count, error } = await supabase
      .from('wishlist')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id);

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    return NextResponse.json({ data: { count: count || 0 } });
  } catch (error) {
    console.error("Wishlist count Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
