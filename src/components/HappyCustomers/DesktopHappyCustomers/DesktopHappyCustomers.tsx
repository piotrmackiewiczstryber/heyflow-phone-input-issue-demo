import Text from '@stryberventures/gaia-react.text';
import { useCommonStyles, useDesktopStyles } from '../HappyCustomers.styles';
import { Carousel } from '@/components/Carousel/Carousel';
import { DesktopHappyCustomersItem } from './DesktopHappyCustomersItem';
import { Review } from '..';

interface DesktopHappyCustomersProps {
  items: Review[];
}

export const DesktopHappyCustomers = ({
  items,
}: DesktopHappyCustomersProps) => {
  const classes = useDesktopStyles();
  const commonClasses = useCommonStyles();
  return (
    <div className={commonClasses.container}>
      <div className={classes.titleContainer}>
        <Text variant='h3' className={classes.title}>
          ماذا قالو عملائنا عن تمويلي؟
        </Text>
      </div>
      <div className={classes.reviewsContainer}>
        <Carousel
          slidesToShow={1}
          slidesToScroll={1}
          paginationPosition='top-left'
          slideHorizontalPadding={48}
          renderItems={() =>
            items.map((item) => (
              <DesktopHappyCustomersItem key={item.id} item={item} />
            ))
          }
        />
      </div>
    </div>
  );
};
