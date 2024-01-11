import { Review } from '..';
import QuoteIcon from '@/assets/icons/quote.svg';
import { useCommonStyles, useDesktopStyles } from '../HappyCustomers.styles';
import Text from '@stryberventures/gaia-react.text';
import { ReviewAuthor } from '../ReviewAuthor/ReviewAuthor';

interface DesktopHappyCustomersItemProps {
  item: Review;
}

export const DesktopHappyCustomersItem = ({
  item,
}: DesktopHappyCustomersItemProps) => {
  const commonClasses = useCommonStyles();
  const classes = useDesktopStyles();
  return (
    <div className={classes.reviewContainer}>
      <div className={commonClasses.quoteIcon}>
        <QuoteIcon />
      </div>
      <Text className={classes.reviewContent}>{item.content}</Text>
      <ReviewAuthor {...item} />
    </div>
  );
};
