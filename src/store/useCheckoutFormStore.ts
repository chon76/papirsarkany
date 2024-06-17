import { FormSchemaObject } from '@/lib/types';
import { create } from 'zustand';

type State = {
  /**
   * Stored values of checkout form.
   */
  formValues: FormSchemaObject;
  step: number;
};

type Actions = {
  setFormValues: (formData: Partial<FormSchemaObject>) => void;
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

    shippingOption: null,

    shippingPostcode: '',
    shippingCity: '',
    shippingAddress: '',
    shippingSubaddress: '',

    paymentOption: null,

    isSameAdressAsShipping: true,

    billingPostcode: '',
    billingCity: '',
    billingAddress: '',
    billingSubaddress: '',

    comment: '',
  },
};
/**
 * To persist form state when user navigates to other pages during checkout and form got unmounted.
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
