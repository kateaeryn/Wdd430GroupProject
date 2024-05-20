import { processRegistration, registrationSchema } from '@/app/lib/type';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body: unknown = await request.json();

  const result = registrationSchema.safeParse(body);
  if (!result.success) {
    const zodErrors: Record<string, string> = {};
    result.error.issues.forEach((issue) => {
      zodErrors[issue.path[0]] = issue.message;
    });

    return NextResponse.json({ errors: zodErrors });
  }

  const registrationResult = processRegistration(result.data);
  return NextResponse.json({
    success: true,
    result: registrationResult,
  });
}
