import { NextResponse } from "next/server";

export class CustomResponse extends NextResponse {
  static notFound(body: string | null = null) {
    return new NextResponse(body, { status: 404 });
  }
}
