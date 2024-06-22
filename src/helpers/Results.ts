import { NextResponse } from "next/server";

export class Results extends NextResponse {
  static ok(body: unknown) {
    if (body === null) return new NextResponse(null, { status: 200 });
    return NextResponse.json(body, { status: 200 });
  }

  static badRequest(body: unknown | null = null) {
    return new NextResponse(JSON.stringify(body), { status: 400 });
  }

  static unsupportedMediaType(body: unknown | null = null) {
    return new NextResponse(JSON.stringify(body), { status: 415 });
  }

  static internalServerError(body: unknown | null = null) {
    return new NextResponse(JSON.stringify(body), { status: 500 });
  }

  static notImplemented(body: unknown | null = null) {
    return new NextResponse(JSON.stringify(body), { status: 501 });
  }

  static pdf(body: Buffer) {
    return new NextResponse(body, {
      headers: {
        "Content-Type": "application/pdf",
      },
      status: 200,
    });
  }
}
