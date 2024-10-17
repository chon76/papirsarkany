import { formatZodErrors } from '~/lib/formatters';
import { OrderRequestBody } from '~/lib/types';
import { mergedFormSchemaObject } from '~/lib/validation-schemas';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

export async function middleware(request: NextRequest) {
  console.log('hit middleware');
  try {
    const body = (await request.json()) as OrderRequestBody;
    const { formData } = body;
    await mergedFormSchemaObject.parseAsync(formData);

    console.log('valid');
    return NextResponse.next();
  } catch (error) {
    console.log('invalid');
    return NextResponse.json(
      {
        error: `Validation error: ${formatZodErrors(error as ZodError)}`,
      },
      { status: 403 },
    );
  }
}

export const config = {
  matcher: '/api/order',
};