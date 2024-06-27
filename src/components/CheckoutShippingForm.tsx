'use client';
import { AnimatePresence, m } from 'framer-motion';
import { useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { LOCAL_PICKUP_ADDRESS } from '@/lib/constants';
import {
  getTotalPackageInfo,
  isFitInMaxLimit,
  packageMaxLimit,
} from '@/lib/foxpost-package-size';
import { FormSchemaObject } from '@/lib/types';
import { useCartStore } from '@/store/useCartStore';
import FoxpostMap from './FoxpostMap';
import LazyLoadFramerMotion from './LazyLoadFramerMotion';
import ShippingOptionRadioInput from './ShippingOptionRadioInput';

export default function CheckoutShippingForm() {
  const {
    register,
    watch,
    setValue,
    trigger,
    getValues,
    formState: { errors },
  } = useFormContext<FormSchemaObject>();
  const cart = useCartStore((state) => state.cart);

  const [isShowFoxpostMap, setIsShowFoxpostMap] = useState(false);

  const totalPackageSize = useMemo(() => getTotalPackageInfo(cart), [cart]);

  const isFitInFoxpostLimit = isFitInMaxLimit(totalPackageSize);

  const onPersonalPickupClick = () => {
    setValue('shippingPostcode', LOCAL_PICKUP_ADDRESS.shippingPostcode);
    setValue('shippingCity', LOCAL_PICKUP_ADDRESS.shippingCity);
    setValue('shippingAddress', LOCAL_PICKUP_ADDRESS.shippingAddress);

    trigger([
      'shippingOption',
      'shippingPostcode',
      'shippingCity',
      'shippingAddress',
    ]);
  };

  const onFoxpostPickupClick = () => {
    const { shippingPostcode, shippingCity, shippingAddress } = getValues();

    if (
      shippingPostcode === LOCAL_PICKUP_ADDRESS.shippingPostcode &&
      shippingCity === LOCAL_PICKUP_ADDRESS.shippingCity &&
      shippingAddress === LOCAL_PICKUP_ADDRESS.shippingAddress
    ) {
      setValue('shippingPostcode', '');
      setValue('shippingCity', '');
      setValue('shippingAddress', '');
    }

    setIsShowFoxpostMap(true);
  };

  return (
    <>
      <div className="max-w-screen-sm mx-auto">
        <h2 className="underline underline-offset-8">Elérhetőség</h2>
        <div className="d-form-control">
          <label className="d-label">
            <span className="d-label-text text-lg">Email</span>
          </label>
          <input
            type="text"
            placeholder={'mail.papirsarkany@gmail.com'}
            className="d-input d-input-bordered"
            {...register('email')}
          />
          <label className="d-label">
            <span className="d-label-text-alt text-error">
              {errors.email?.message}
            </span>
          </label>
        </div>
        <div className="gap-4 sm:grid sm:grid-cols-2">
          <div className="d-form-control">
            <label className="d-label">
              <span className="d-label-text text-lg">Vezetéknév</span>
            </label>
            <input
              type="text"
              className="d-input d-input-bordered"
              {...register('lastName')}
            />
            <label className="d-label">
              <span className="d-label-text-alt text-error">
                {errors.lastName?.message}
              </span>
            </label>
          </div>
          <div className="d-form-control">
            <label className="d-label">
              <span className="d-label-text text-lg">Keresztnév</span>
            </label>
            <input
              type="text"
              className="d-input d-input-bordered"
              {...register('firstName')}
            />
            <label className="d-label">
              <span className="d-label-text-alt text-error">
                {errors.firstName?.message}
              </span>
            </label>
          </div>
        </div>
        <div className="d-form-control">
          <label className="d-label">
            <span className="d-label-text text-lg">Telefonszám</span>
          </label>
          <input
            type="text"
            placeholder="+36201234567"
            className="d-input d-input-bordered"
            {...register('phoneNumber')}
          />
          <label className="d-label">
            <span className="d-label-text-alt text-error">
              {errors.phoneNumber?.message}
            </span>
          </label>
        </div>
        <h2 className="underline underline-offset-8">Szállítás</h2>
        <ShippingOptionRadioInput
          label={'Személyes átvétel'}
          onClick={onPersonalPickupClick}
          value="Személyes átvétel"
        />
        <ShippingOptionRadioInput
          label={
            <>
              <div className="text-foxpost-red">Foxpost automatába </div>
              {!isFitInFoxpostLimit && (
                <div className="font-normal text-sm sm:text-lg">
                  {`maximum ${packageMaxLimit.weight}kg és (${packageMaxLimit.x}x${packageMaxLimit.y}x${packageMaxLimit.z}cm-ig)`}
                </div>
              )}
            </>
          }
          shippingFee={899}
          onClick={onFoxpostPickupClick}
          value="Foxpost automatába"
          isDisabled={!isFitInFoxpostLimit}
        />
        <span className="text-error">{errors.shippingOption?.message}</span>
      </div>
      <LazyLoadFramerMotion>
        <AnimatePresence>
          {watch('shippingOption') === 'Foxpost automatába' &&
            isShowFoxpostMap && (
              <m.div
                initial={{
                  scaleY: 0,
                  transformOrigin: 'top',
                }}
                animate={{
                  scaleY: 1,
                }}
                exit={{
                  scaleY: 0,
                  opacity: 0,
                  transitionTimingFunction: 'ease-in',
                }}
              >
                <FoxpostMap hideMap={() => setIsShowFoxpostMap(false)} />
              </m.div>
            )}
        </AnimatePresence>
      </LazyLoadFramerMotion>

      {/* {watch('shippingOption') === 'Postai szállítás' && (
        <>
          <div className="d-form-control">
            <label className="d-label">
              <span className="d-label-text text-lg">Irányítószám</span>
            </label>
            <input
              type="text"
              className="d-input d-input-bordered"
              {...register('shippingPostcode')}
            />
            <label className="d-label">
              <span className="d-label-text-alt text-error">
                {errors.shippingPostcode?.message}
              </span>
            </label>
          </div>

          <div className="d-form-control">
            <label className="d-label">
              <span className="d-label-text text-lg">Város</span>
            </label>
            <input
              type="text"
              className="d-input d-input-bordered"
              {...register('shippingCity')}
            />
            <label className="d-label">
              <span className="d-label-text-alt text-error">
                {errors.shippingCity?.message}
              </span>
            </label>
          </div>

          <div className="d-form-control">
            <label className="d-label">
              <span className="d-label-text text-lg">Cím</span>
            </label>
            <input
              type="text"
              placeholder="Utca, házszám"
              className="d-input d-input-bordered"
              {...register('shippingAddress')}
            />
            <label className="d-label">
              <span className="d-label-text-alt text-error">
                {errors.shippingAddress?.message}
              </span>
            </label>

            <input
              type="text"
              placeholder="Emelet, ajtó, egyéb (opcionális)"
              className="d-input d-input-bordered"
              {...register('shippingSubaddress')}
            />
            <label className="d-label">
              <span className="d-label-text-alt text-error">
                {errors.shippingSubaddress?.message}
              </span>
            </label>
          </div>
        </>
      )} */}

      <div className="max-w-screen-sm mx-auto mt-4">
        <div className="flex justify-end">
          <button
            type="submit"
            className="d-btn d-btn-primary uppercase max-sm:d-btn-block"
          >
            Tovább
          </button>
        </div>
      </div>
    </>
  );
}
