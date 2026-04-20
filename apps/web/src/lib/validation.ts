import type { LeadFormValues } from '@/types/site';

export interface LeadFormErrors {
  email?: string;
  message?: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateLeadForm = (values: LeadFormValues): LeadFormErrors => {
  const errors: LeadFormErrors = {};

  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid business email.';
  }

  if (!values.message.trim()) {
    errors.message = 'Tell us what you need help with.';
  } else if (values.message.trim().length < 20) {
    errors.message = 'Please share at least 20 characters so we can route your inquiry.';
  }

  return errors;
};
