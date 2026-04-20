import { useState } from 'react';
import { validateLeadForm } from '@/lib/validation';
import { useLeadStore } from '@/stores/leads';
import type { LeadFormErrors } from '@/lib/validation';
import type { LeadFormValues } from '@/types/site';

interface UseLeadFormOptions {
  source: string;
  packageInterest?: string;
}

interface UseLeadFormResult {
  values: LeadFormValues;
  errors: LeadFormErrors;
  successMessage: string;
  submitError: string | null;
  isSubmitting: boolean;
  handleChange: (field: 'email' | 'message', value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const useLeadForm = ({ source, packageInterest }: UseLeadFormOptions): UseLeadFormResult => {
  const submitLead = useLeadStore((state) => state.submitLead);
  const isSubmitting = useLeadStore((state) => state.isSubmitting);
  const submitError = useLeadStore((state) => state.submitError);
  const clearSubmitError = useLeadStore((state) => state.clearSubmitError);
  const [values, setValues] = useState<LeadFormValues>({
    email: '',
    message: '',
    source,
    packageInterest,
  });
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (field: 'email' | 'message', value: string) => {
    setValues((current) => ({ ...current, [field]: value, source, packageInterest }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSuccessMessage('');
    clearSubmitError();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextValues: LeadFormValues = { ...values, source, packageInterest };
    const nextErrors = validateLeadForm(nextValues);

    setErrors(nextErrors);
    setSuccessMessage('');

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const response = await submitLead(nextValues);

    if (response.success) {
      setValues({ email: '', message: '', source, packageInterest });
      setErrors({});
      setSuccessMessage(response.message);
      return;
    }

    setSuccessMessage('');
  };

  return {
    values,
    errors,
    successMessage,
    submitError,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
