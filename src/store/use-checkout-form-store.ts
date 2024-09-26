import 'client-only';
import { create } from 'zustand';

import { OrderForm } from '@/lib/validation-schemas';

type State = {
  /**
   * Stored values of checkout form.
   */
  formValues: OrderForm;
  step: number;
};

type Actions = {
  setFormValues: (formData: Partial<OrderForm>) => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  resetForm: () => void;
};

const initialState: State = {
  step: 0,
  formValues: {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',

    shippingOption: 'Személyes átvétel',

    shippingPostcode: '',
    shippingCity: '',
    shippingAddress: '',
    shippingSubaddress: '',

    paymentOption: 'Előreutalással',

    isSameAdressAsShipping: true,

    billingPostcode: '',
    billingCity: '',
    billingAddress: '',
    billingSubaddress: '',

    comment: '',
  },
};
/**
 * To persist form state when user navigates to other pages during checkout and the checkout form got unmounted.
 */
export const useCheckoutFormStore = create<State & Actions>((set) => ({
  ...initialState,
  setFormValues(formData) {
    set((state) => ({ formValues: { ...state.formValues, ...formData } }));
  },
  nextStep() {
    set((state) => ({ step: state.step + 1 }));
  },
  prevStep() {
    set((state) => ({ step: state.step - 1 }));
  },
  setStep(step) {
    set(() => ({ step }));
  },
  resetForm() {
    set(() => ({
      ...initialState,
    }));
  },
}));