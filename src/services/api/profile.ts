import { API_URL } from '@/env';
import { useFetch } from './utils';
import { useQuery } from '@tanstack/react-query';

export enum VerificationStatus {
  Pending = 'pending',
  Rejected = 'rejected',
  PartialyEligible = 'partialy eligible',
  Eligible = 'eligible',
  Qualified = 'qualified',
}

export enum ApplicationStatus {
  Received = 'received',
  Eligible = 'eligible',
  InitialApproval = 'initial approval',
  OffersSent = 'offers sent',
  OfferSelected = 'offer selected',
  ChecklistSubmitted = 'checklist submitted',
  ChecklistVerified = 'checklist verified',
  ContractSent = 'contract sent',
  ContractSigned = 'contract signed',
  Rejected = 'rejected',
}

export type ProfileData = {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  verificationStatus: VerificationStatus;
  applicationStatus: ApplicationStatus;
};

export const useProfileQuery = () => {
  const url = `${API_URL}/profile`;
  const fetchFn = useFetch<{ data: ProfileData }>(url, 'GET');
  return useQuery({
    queryKey: ['profile'],
    queryFn: fetchFn,
  });
};
