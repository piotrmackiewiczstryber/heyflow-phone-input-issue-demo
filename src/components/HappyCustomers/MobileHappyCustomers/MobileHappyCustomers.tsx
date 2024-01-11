import Text from '@stryberventures/gaia-react.text';
import { Review } from '..';
import { useMobileStyles } from '../HappyCustomers.styles';
import { Carousel } from '@/components/Carousel/Carousel';
import { MobileHappyCustomersItem } from './MobileHappyCustomersItem';

interface MobileHappyCustomersItemProps {
  items: Review[];
}

export const MobileHappyCustomers = ({
  items,
}: MobileHappyCustomersItemProps) => {
  const classes = useMobileStyles();
  return (
    <section>
      <Text className={classes.title}>ماذا قالو عملائنا عن تمويلي؟</Text>
      <Carousel
        slidesToShow={1}
        slidesToScroll={1}
        renderItems={() =>
          items.map((item) => (
            <MobileHappyCustomersItem key={item.id} item={item} />
          ))
        }
      />
    </section>
  );
};
