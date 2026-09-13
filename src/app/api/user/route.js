import { NextResponse } from 'next/server';
import { getUser } from '../../../utils/getUser';

export async function GET(req) {
  try {
    const user = await getUser(req);
    
    if (!user) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Return the user object so useUser.js can use it
    const userInfo = {
      id: user.id,
      email: user.email,
      name: user.user_metadata?.name || user.email.split('@')[0]
    };
    
    return NextResponse.json({ userInfo });
  } catch (error) {
    console.error("User GET Error:", error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
