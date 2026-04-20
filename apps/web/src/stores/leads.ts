import { create } from 'zustand';
import { apiUrl } from '@/lib/api';
import type { LeadFormValues, LeadSubmission } from '@/types/site';

interface SubmitLeadResponse {
  success: boolean;
  message: string;
}

interface LeadState {
  submissions: LeadSubmission[];
  isSubmitting: boolean;
  submitError: string | null;
  loading: boolean;
  loaded: boolean;
  loadError: string | null;
  fetchLeads: () => Promise<void>;
  submitLead: (values: LeadFormValues) => Promise<SubmitLeadResponse>;
  clearSubmitError: () => void;
}

export const useLeadStore = create<LeadState>()((set, get) => ({
  submissions: [],
  isSubmitting: false,
  submitError: null,
  loading: false,
  loaded: false,
  loadError: null,
  fetchLeads: async () => {
    if (get().loading || get().loaded) {
      return;
    }

    set({ loading: true, loadError: null });

    try {
      const res = await fetch(apiUrl('/api/leads'));
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const submissions = (await res.json()) as LeadSubmission[];
      set({ submissions, loading: false, loaded: true });
    } catch (error) {
      set({
        loading: false,
        loadError: error instanceof Error ? error.message : 'Failed to load leads',
      });
    }
  },
  submitLead: async (values) => {
    set({ isSubmitting: true, submitError: null });

    try {
      const res = await fetch(apiUrl('/api/leads'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = (await res.json()) as { submission?: LeadSubmission; message?: string; error?: string };

      if (!res.ok) {
        throw new Error(data.error ?? `HTTP ${res.status}`);
      }

      if (!data.submission) {
        throw new Error('Invalid server response');
      }

      set((state) => ({
        submissions: [data.submission as LeadSubmission, ...state.submissions],
        isSubmitting: false,
        submitError: null,
        loaded: true,
      }));

      return {
        success: true,
        message: data.message ?? 'Thanks — an AnchorTech strategist will reply within one business day.',
      };
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to submit lead';
      set({ isSubmitting: false, submitError: message });
      return { success: false, message };
    }
  },
  clearSubmitError: () => set({ submitError: null }),
}));