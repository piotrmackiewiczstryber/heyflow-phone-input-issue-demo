import Text from '@stryberventures/gaia-react.text';
import { Review } from '..';
import { useMobileStyles } from '../HappyCustomers.styles';
import { ReviewAuthor } from '../ReviewAuthor/ReviewAuthor';
import Star from '@/assets/icons/star.svg';
import QuoteIcon from '@/assets/icons/quote.svg';

interface MobileHappyCustomersItemProps {
  item: Review;
}

export const MobileHappyCustomersItem = ({
  item,
}: MobileHappyCustomersItemProps) => {
  const classes = useMobileStyles();

  return (
    <div className={classes.container}>
      <div className={classes.quoteIcon}>
        <QuoteIcon width={20} height={20} viewBox='0 0 25 25' />
      </div>
      <div className={classes.reviewContainer}>
        <Text className={classes.reviewContent}>{item.content}</Text>
        <div className={classes.starsContainer}>
          {Array.from({ length: item.stars }).map((idx) => (
            <Star key={idx} />
          ))}
        </div>
      </div>
      <ReviewAuthor {...item} />
    </div>
  );
};
