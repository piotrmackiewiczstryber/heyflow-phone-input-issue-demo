'use client';
import { StaticImageData } from 'next/image';
import { DesktopHappyCustomers } from './DesktopHappyCustomers/DesktopHappyCustomers';
import reviewAvatar from '@/assets/images/review-avatar.jpg';
import { MobileHappyCustomers } from './MobileHappyCustomers/MobileHappyCustomers';
import { useIsMobile } from '@/hooks/useIsMobile';
import { theme } from '../ThemeProvider';

export type Review = {
  id: number;
  content: string;
  name: string;
  location: string;
  stars: number;
  image: StaticImageData;
  googleProfile: string;
};

const reviews: Review[] = [
  {
    id: 1,
    content:
      'قارن عروض التمويل العقاري المقدمة لك من البنوك السعودية واحصل على التمويل اللازم لشراء بيتك بشكل سهل وسريع ومجاني بدون أي رسوم خفية. مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة. مما أم أمدها قبضتهم ',
    name: 'فاطمة',
    location: 'الرياض',
    stars: 5,
    image: reviewAvatar,
    googleProfile: '#',
  },
  {
    id: 2,
    content:
      'قارن عروض التمويل العقاري المقدمة لك من البنوك السعودية واحصل على التمويل اللازم لشراء بيتك بشكل سهل وسريع ومجاني بدون أي رسوم خفية. مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة. مما أم أمدها قبضتهم ',
    name: 'فاطمة',
    location: 'الرياض',
    stars: 3,
    image: reviewAvatar,
    googleProfile: '#',
  },
  {
    id: 3,
    content:
      'قارن عروض التمويل العقاري المقدمة لك من البنوك السعودية واحصل على التمويل اللازم لشراء بيتك بشكل سهل وسريع ومجاني بدون أي رسوم خفية. مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة. مما أم أمدها قبضتهم ',
    name: 'فاطمة',
    location: 'الرياض',
    stars: 4,
    image: reviewAvatar,
    googleProfile: '#',
  },
];

export const HappyCustomers = () => {
  const { screenWidth } = useIsMobile();
  if (screenWidth <= theme.breakpoints.md) {
    return <MobileHappyCustomers items={reviews} />;
  } else {
    return <DesktopHappyCustomers items={reviews} />;
  }
};
