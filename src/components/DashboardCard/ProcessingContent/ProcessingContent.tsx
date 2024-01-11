'use client';
import Text from '@stryberventures/gaia-react.text';
import useStyles from './ProcessingContent.styles';
import CalendarIcon from '@/assets/icons/grey-circle-calendar.svg';
import RepeatIcon from '@/assets/icons/grey-circle-repeat.svg';

interface ProcessingContentProps {
  title: string;
  subtitle: string;
  deadlineLabel?: string;
  deadline?: string;
  children?: React.ReactNode;
}

export const ProcessingContent = ({
  title,
  subtitle,
  deadlineLabel,
  deadline,
  children,
}: ProcessingContentProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {!children || (deadline && deadlineLabel) ? (
        <div className={classes.statusContainer}>
          {!children ? (
            <div className={classes.status}>
              <RepeatIcon />
              <div>
                الحالة:
                <span>جاري العمل على الطلب</span>
              </div>
            </div>
          ) : null}
          {deadline && deadlineLabel ? (
            <div className={classes.status}>
              <CalendarIcon />
              <div>
                {deadlineLabel}:<span>{deadline}</span>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
      <Text className={classes.title}>{title}</Text>
      <Text className={classes.subtitle}>{subtitle}</Text>
      {children ? (
        <>
          <div className={classes.divider} />
          {children}
        </>
      ) : null}
    </div>
  );
};
