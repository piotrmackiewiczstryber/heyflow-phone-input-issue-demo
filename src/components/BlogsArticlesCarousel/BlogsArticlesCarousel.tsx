'use client';
import BlogImage1 from '@/assets/images/blog-1.jpg';
import BlogImage2 from '@/assets/images/blog-2.jpg';
import BlogImage3 from '@/assets/images/blog-3.jpg';
import Text from '@stryberventures/gaia-react.text';
import useStyles from './BlogsArticlesCarousel.styles';
import { Carousel } from '@/components/Carousel/Carousel';
import { useIsMobile } from '@/hooks/useIsMobile';
import Image from 'next/image';
import Link from 'next/link';
import { Badges } from '@/components/Badges/Badges';

const blogCarouselItems = [
  {
    id: '1',
    image: BlogImage1,
    alt: 'Blog Image 1',
    tags: ['التمويل العقاري'],
    title: 'مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة',
  },
  {
    id: '2',
    image: BlogImage2,
    alt: 'Blog Image 2',
    tags: ['التمويل العقاري'],
    title: 'مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة',
  },
  {
    id: '3',
    image: BlogImage3,
    alt: 'Blog Image 3',
    tags: ['التمويل العقاري'],
    title: 'مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة',
  },
  {
    id: '4',
    image: BlogImage3,
    alt: 'Blog Image 4',
    tags: ['التمويل العقاري'],
    title: 'مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة',
  },
  {
    id: '5',
    image: BlogImage2,
    alt: 'Blog Image 5',
    tags: ['التمويل العقاري'],
    title: 'مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة',
  },
  {
    id: '6',
    image: BlogImage1,
    alt: 'Blog Image 6',
    tags: ['التمويل العقاري'],
    title: 'مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة',
  },
];

interface BlogsArticlesCarouselProps {
  maxSlides?: number;
  mobileTitleAlign?: 'right' | 'center';
}

export const BlogsArticlesCarousel = ({
  maxSlides = 3,
  mobileTitleAlign = 'center',
}: BlogsArticlesCarouselProps) => {
  const classes = useStyles({ mobileTitleAlign });
  const { screenWidth, isMd } = useIsMobile();
  const slidesToShow =
    screenWidth < 800 ? 1 : screenWidth < 1280 ? 2 : maxSlides;

  return (
    <div className={classes.root}>
      <Text weight='bold' component='h3' className={classes.title}>
        مدونة تمويلي
      </Text>
      <Carousel
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToShow}
        hidePaginationDots={!isMd}
        renderItems={() =>
          blogCarouselItems.map((item) => (
            <div className={classes.itemContainer} key={item.id}>
              <Image
                src={item.image}
                alt={item.alt}
                className={classes.itemImage}
              />
              <div className={classes.itemTextContainer}>
                <Badges badges={item.tags} />
                <Text className={classes.itemTitle}>{item.title}</Text>
                <Link href={`/blog/${item.id}`} className={classes.itemLink}>
                  ابدا القرائة
                </Link>
              </div>
            </div>
          ))
        }
      />
    </div>
  );
};
