const DEBIT_BURDEN_RATIO = 0.65;
const INTEREST_RATE = 0.05;

export const calculateFinancingEligibleAmount = (
  monthlyIncome: number,
  monthlyLoanPayments: number,
  financingDuration: number
) => {
  return (
    (((monthlyIncome * DEBIT_BURDEN_RATIO - monthlyLoanPayments) *
      financingDuration) /
      financingDuration /
      (1 + INTEREST_RATE)) *
    financingDuration
  );
};

export const calculateMonthlyPayment = (
  monthlyIncome: number,
  monthlyLoanPayments: number,
  financingDuration: number
) => {
  return (
    ((monthlyIncome * DEBIT_BURDEN_RATIO - monthlyLoanPayments) *
      financingDuration) /
    financingDuration
  );
};

export const calculateApartmentValue = (financingEligibleAmount: number) => {
  return financingEligibleAmount / 0.9;
};
