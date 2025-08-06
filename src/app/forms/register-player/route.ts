import { NextRequest, NextResponse } from "next/server";
import { registerPlayer } from "./action";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    await registerPlayer(data);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ success: false, error: (e as Error).message }, { status: 400 });
  }
}
