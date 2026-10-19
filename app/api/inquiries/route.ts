import { NextRequest, NextResponse } from "next/server";
import { createInquiry, getAllInquiries } from "@/lib/platform/inquiries";
import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  const user = await getCurrentUser();
  if (user?.role !== "superadmin" && user?.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized. Admin role required." }, { status: 403 });
  }

  const inquiries = await getAllInquiries();
  return NextResponse.json(inquiries);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.name || !body.email || !body.details) {
      return NextResponse.json(
        { error: "Name, email, and project scope details are required." },
        { status: 400 }
      );
    }

    const created = await createInquiry(body);
    return NextResponse.json({ success: true, inquiry: created }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
