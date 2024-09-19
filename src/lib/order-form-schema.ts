import { z } from 'zod';

export const orderFormSchema = [
  z
    .object({
      email: z.string().min(1, 'Kötelező mező').email('Érvénytelen email cím'),
      firstName: z.string().min(1, 'Kötelező mező'),
      lastName: z.string().min(1, 'Kötelező mező'),
      phoneNumber: z
        .string()
        .min(1, 'Kötelező mező')
        .regex(
          /^(\+36)(20|30|31|70|50|51)\d{7}$/,
          'Érvényes magyar telefonszámnak kell lennie +36 formátumban pl.: +36201234567',
        ),

      shippingOption: z.enum(
        ['Személyes átvétel', 'Postai szállítás', 'Foxpost automatába'],
        { message: 'Kérlek válassz egy szállítási módot!' },
      ),

      shippingPostcode: z.string().optional(),
      shippingCity: z.string().optional(),
      shippingAddress: z.string().optional(),
      shippingSubaddress: z.string().optional(),
    })
    .superRefine((val, ctx) => {
      if (
        val.shippingOption === 'Foxpost automatába' &&
        (!val.shippingPostcode || !val.shippingCity || !val.shippingAddress)
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['shippingOption'],
          message: 'Kérlek válassz egy automatát',
        });
      }

      if (val.shippingOption === 'Postai szállítás') {
        if (!val.shippingPostcode) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['shippingPostcode'],
            message: 'Kötelező mező',
          });
        }

        if (!val.shippingCity) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['shippingCity'],
            message: 'Kötelező mező',
          });
        }

        if (!val.shippingAddress) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['shippingAddress'],
            message: 'Kötelező mező',
          });
        }

        return false;
      }
      return true;
    }),
  z.object({
    paymentOption: z.enum(
      ['Előreutalással', 'Átvételkor készpénzel', 'Átvételkor bankártyával'],
      { message: 'Kérlek válassz egy fizetési módot!' },
    ),

    isSameAdressAsShipping: z.boolean(),

    billingPostcode: z.string().min(1, 'Kötelező mező'),
    billingCity: z.string().min(1, 'Kötelező mező'),
    billingAddress: z.string().min(1, 'Kötelező mező'),
    billingSubaddress: z.string().optional(),
  }),
  z.object({
    comment: z.string().optional(),
  }),
] as const;

export const mergedFormSchemaObject = z.intersection(
  z.intersection(orderFormSchema[0], orderFormSchema[1]),
  orderFormSchema[2],
);