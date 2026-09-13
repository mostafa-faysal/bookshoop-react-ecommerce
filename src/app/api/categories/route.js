import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*, books(*)');

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Wrap in { data: ... } to match old API
    return NextResponse.json({ data: data });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
                            