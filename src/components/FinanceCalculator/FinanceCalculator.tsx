'use client';
import React from 'react';
import Text from '@stryberventures/gaia-react.text';
import NumberInput from '@stryberventures/gaia-react.number-input';
import { useStyles } from './FinanceCalculator.styles';
import InputRange from 'react-input-range-rtl';
import 'react-input-range-rtl/lib/css/index.css';
import './customSlider.css';
import Divider from '@stryberventures/gaia-react.divider';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import classNames from 'classnames';
import { Controller, useForm } from 'react-hook-form';
import {
  calculateApartmentValue,
  calculateFinancingEligibleAmount,
  calculateMonthlyPayment,
} from '@/components/FinanceCalculator/utils';
import Link from 'next/link';

enum FinanceCalculatorFormField {
  MonthlyIncome = 'monthlyIncome',
  OtherLoanPayments = 'otherLoanPayments',
  LoanTerm = 'loanTerm',
}

type FormData = {
  [FinanceCalculatorFormField.MonthlyIncome]?: number;
  [FinanceCalculatorFormField.OtherLoanPayments]?: number;
  [FinanceCalculatorFormField.LoanTerm]: number;
};

const initialValues: FormData = {
  [FinanceCalculatorFormField.MonthlyIncome]: undefined,
  [FinanceCalculatorFormField.OtherLoanPayments]: undefined,
  [FinanceCalculatorFormField.LoanTerm]: 14,
};

export const FinanceCalculator = () => {
  const { control, watch } = useForm<FormData>({
    defaultValues: initialValues,
  });
  const [showMobileFormResults, setShowMobileFormResults] =
    React.useState(false);
  const classes = useStyles();

  const monthlyIncome = watch(FinanceCalculatorFormField.MonthlyIncome) || 0;
  const otherLoanPayments =
    watch(FinanceCalculatorFormField.OtherLoanPayments) || 0;
  const loanTerm = watch(FinanceCalculatorFormField.LoanTerm);
  const monthlyLoanTerm = loanTerm * 12;

  const monthlyPayment = Math.round(
    calculateMonthlyPayment(monthlyIncome, otherLoanPayments, monthlyLoanTerm)
  );
  const financingEligibleAmount = Math.round(
    calculateFinancingEligibleAmount(
      monthlyIncome,
      otherLoanPayments,
      monthlyLoanTerm
    )
  );
  const apartmentValue = Math.round(
    calculateApartmentValue(financingEligibleAmount)
  );

  return (
    <section className={classes.container}>
      <Text variant='h2' weight='bold' align='center' className={classes.title}>
        حاسبة التمويل العقاري
      </Text>
      <form className={classes.form}>
        <div className={classes.formWrapper}>
          <div
            className={classNames(classes.formInputs, {
              [classes.mobileHidden]: showMobileFormResults,
            })}
          >
            <Controller
              name={FinanceCalculatorFormField.MonthlyIncome}
              control={control}
              render={({ field }) => (
                <NumberInput
                  {...field}
                  className={classes.input}
                  fullWidth
                  label='الدخل الشهري'
                  placeholder='الدخل الشهري'
                  controlled
                />
              )}
            />
            <Controller
              name={FinanceCalculatorFormField.OtherLoanPayments}
              control={control}
              render={({ field }) => (
                <NumberInput
                  {...field}
                  className={classes.input}
                  fullWidth
                  label='دفعات القروض الاخرى ان وجدت'
                  placeholder='دفعات القروض الاخرى'
                  controlled
                />
              )}
            />

            <div>
              <div className={classes.textWrapper}>
                <Text variant='components2'>مدة التمويل</Text>
                <Text variant='components2'>{loanTerm} سنة</Text>
              </div>
              <Controller
                name={FinanceCalculatorFormField.LoanTerm}
                control={control}
                render={({ field }) => (
                  <InputRange
                    //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    direction='rtl'
                    maxLabel=''
                    minLabel=''
                    maxValue={30}
                    minValue={1}
                    {...field}
                  />
                )}
              />
            </div>
            <div className={classes.mobileActionsWrapper}>
              <CustomButton onClick={() => setShowMobileFormResults(true)}>
                احسب
              </CustomButton>
            </div>
          </div>
          <div
            className={classNames(classes.resultsContainer, {
              [classes.mobileHidden]: !showMobileFormResults,
            })}
          >
            <div className={classes.resultWrapper}>
              <Text variant='body2'>القسط الشهري</Text>
              <Text variant='h2' weight='bold'>
                {monthlyPayment}
              </Text>
            </div>
            <Divider />
            <div className={classes.resultWrapper}>
              <Text variant='body2'>يمكنك تمويل</Text>
              <Text variant='body2' weight='bold'>
                {financingEligibleAmount} ريال
              </Text>
            </div>
            <div className={classes.resultWrapper}>
              <Text variant='body2'>لشراء عقار بقيمة</Text>
              <Text variant='body2' weight='bold'>
                {apartmentValue} ريال
              </Text>
            </div>
            <div className={classes.mobileActionsWrapper}>
              <CustomButton onClick={() => setShowMobileFormResults(false)}>
                الرجوع
              </CustomButton>
              <CustomButton
                variant='outlined'
                className={classes.outlinedButton}
              >
                قدم الآن
              </CustomButton>
            </div>
          </div>
        </div>
        <Link href='/apply'>
          <CustomButton className={classes.button}>قدّم الآن</CustomButton>
        </Link>
        <Text variant='caption2' className={classes.supportText}>
          جميع الحسابات هي تقديرات وتقدم لأغراض إعلامية فقط. قد تختلف المبالغ
          الفعلية.
        </Text>
      </form>
    </section>
  );
};
