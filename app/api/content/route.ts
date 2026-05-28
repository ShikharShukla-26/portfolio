import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import { getSiteContent, updateSiteContent } from "@/lib/content";
import { siteContentPayloadSchema } from "@/lib/validations";

export async function GET() {
  const content = await getSiteContent();
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const parsed = siteContentPayloadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    await updateSiteContent(parsed.data);
    const content = await getSiteContent();
    return NextResponse.json(content);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to update content";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
