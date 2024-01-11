'use client';
import React from 'react';
import Image from 'next/image';
import alrajhiBank from '@/assets/images/alrajhi-bank.png';
import riyadBank from '@/assets/images/riyad-bank.png';
import useStyles from './styles';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Carousel } from '@/components/Carousel/Carousel';
import Text from '@stryberventures/gaia-react.text';
import classNames from 'classnames';

const carouselItems = [
  {
    id: 1,
    image: alrajhiBank,
    alt: 'Alrajhi Bank Logo',
  },
  {
    id: 2,
    image: riyadBank,
    alt: 'Riyad Bank Logo',
  },
  {
    id: 3,
    image: alrajhiBank,
    alt: 'Alrajhi Bank Logo',
  },
  {
    id: 4,
    image: riyadBank,
    alt: 'Riyad Bank Logo',
  },
  {
    id: 5,
    image: alrajhiBank,
    alt: 'Alrajhi Bank Logo',
  },
  {
    id: 6,
    image: riyadBank,
    alt: 'Riyad Bank Logo',
  },
  {
    id: 7,
    image: alrajhiBank,
    alt: 'Alrajhi Bank Logo',
  },
  {
    id: 8,
    image: riyadBank,
    alt: 'Riyad Bank Logo',
  },
  {
    id: 9,
    image: alrajhiBank,
    alt: 'Alrajhi Bank Logo',
  },
  {
    id: 10,
    image: riyadBank,
    alt: 'Riyad Bank Logo',
  },
  {
    id: 11,
    image: alrajhiBank,
    alt: 'Alrajhi Bank Logo',
  },
  {
    id: 12,
    image: riyadBank,
    alt: 'Riyad Bank Logo',
  },
  {
    id: 13,
    image: alrajhiBank,
    alt: 'Alrajhi Bank Logo',
  },
  {
    id: 14,
    image: riyadBank,
    alt: 'Riyad Bank Logo',
  },
  {
    id: 15,
    image: alrajhiBank,
    alt: 'Alrajhi Bank Logo',
  },
];

type ValuePropositionHighlightsProps = {
  withDivider?: boolean;
};

export const ValuePropositionHighlights: React.FC<
  ValuePropositionHighlightsProps
> = ({ withDivider = true }) => {
  const { isMobile, screenWidth } = useIsMobile();
  const classes = useStyles();
  const imageSize = screenWidth < 450 ? screenWidth / 4 : undefined;

  return (
    <div
      className={classNames(classes.container, {
        [classes.divider]: withDivider,
      })}
    >
      <Text className={classes.sectionTitle}>شركائنا</Text>
      <Carousel
        slidesToShow={isMobile ? 3 : 5}
        slidesToScroll={isMobile ? 3 : 5}
        hideNavigationButtons={isMobile}
        renderItems={() =>
          carouselItems.map((item) => (
            <div className={classes.element} key={item.id}>
              <Image src={item.image} alt={item.alt} width={imageSize} />
            </div>
          ))
        }
      />
    </div>
  );
};
