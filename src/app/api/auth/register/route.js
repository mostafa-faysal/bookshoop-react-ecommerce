import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabaseClient';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name || email.split('@')[0],
        }
      }
    });

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }

    if (data.user && !data.session) {
      return NextResponse.json(
        { message: 'Registration successful! Please check your email to confirm your account (or disable email confirmations in Supabase).' },
        { status: 400 } // Send 400 so the UI shows the error toast instead of succeeding silently without a token
      );
    }

    return NextResponse.json({
      token: data.session.access_token,
      user: data.user,
    });
  } catch (error) {
    console.error("Register Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
