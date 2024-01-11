import { ApplicationStatus } from '@/services/api/profile';

export const applicationSuccessStatusesInOrder = [
  ApplicationStatus.Received,
  ApplicationStatus.InitialApproval,
  ApplicationStatus.Eligible,
  ApplicationStatus.OffersSent,
  ApplicationStatus.OfferSelected,
  ApplicationStatus.ChecklistSubmitted,
  ApplicationStatus.ChecklistVerified,
  ApplicationStatus.ContractSent,
  ApplicationStatus.ContractSigned,
];

export const isStatusDone = (
  status: ApplicationStatus,
  currentStatus: ApplicationStatus
) => {
  const statusIndex = applicationSuccessStatusesInOrder.indexOf(status);
  const currentStatusIndex =
    applicationSuccessStatusesInOrder.indexOf(currentStatus);
  return statusIndex < currentStatusIndex;
};
