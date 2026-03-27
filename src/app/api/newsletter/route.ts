import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.type === 'click') {
      return NextResponse.json({ ok: true });
    }

    const { email } = body;
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const supabase = getSupabase();
    if (!supabase) return NextResponse.json({ error: 'Not configured' }, { status: 503 });

    const { error } = await supabase
      .from('rhythmguitar_subscribers')
      .upsert({ email, source: 'musictheory.xyz' }, { onConflict: 'email' });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const supabase = getSupabase();
    if (!supabase) return NextResponse.json({ error: 'Not configured' }, { status: 503 });

    const { count, error } = await supabase
      .from('rhythmguitar_subscribers')
      .select('*', { count: 'exact', head: true });

    if (error) throw error;
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
