import { env } from './env';
import { currencyFormatter } from './formatters';
import { mergedFormSchemaObject } from './order-form-schema';
import {
  OrderFormSchemaObject,
  ShippingFee,
  ValidatedOrderForm,
} from './types';

export function blurActiveAnchorElement() {
  const element = document.activeElement as HTMLAnchorElement;

  if (element) {
    element.blur();
  }
}

export function isProdEnv(): boolean {
  return (
    process.env.NODE_ENV === 'production' && env.VERCEL_ENV === 'production'
  );
}

export function isPreviewEnv(): boolean {
  return process.env.NODE_ENV === 'production' && env.VERCEL_ENV === 'preview';
}

export async function validateOrderForm(data: OrderFormSchemaObject) {
  return await mergedFormSchemaObject.parseAsync(data);
}

export function normalizeOrderForm(data: ValidatedOrderForm) {
  const { shippingOption, ...restData } = data;

  if (shippingOption === 'Személyes átvétel') {
    return {
      ...restData,
      shippingOption,
      shippingPostcode: undefined,
      shippingCity: undefined,
      shippingAddress: undefined,
      shippingSubaddress: undefined,
    };
  }

  return data;
}

export function formatShippingFee(shippingFee: ShippingFee) {
  if (typeof shippingFee === 'number') {
    return `+${currencyFormatter(shippingFee)}`;
  }

  return `+${shippingFee}`;
}
