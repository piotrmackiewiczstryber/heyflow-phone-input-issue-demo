import NukaCarousel from 'nuka-carousel';
import useStyles from './styles';
import { CarouselNavigationButton } from './CarouselNavigationButton/CarouselNavigationButton';
import ChevronRight from '@/assets/icons/chevron-right.svg';
import ChevronLeft from '@/assets/icons/chevron-left.svg';
import { CarouselPagingDots } from './CarouselPaginationDots/CarouselPaginationDots';
import { useIsMobile } from '@/hooks/useIsMobile';

interface CarouselProps {
  slidesToShow?: number;
  slidesToScroll?: number;
  hideNavigationButtons?: boolean;
  paginationPosition?: 'bottom' | 'top-left';
  slideHorizontalPadding?: number;
  hidePaginationDots?: boolean;
  autoplay?: boolean;
  renderItems: () => JSX.Element[];
}

export const Carousel = ({
  slidesToShow,
  slidesToScroll,
  hideNavigationButtons,
  paginationPosition = 'bottom',
  slideHorizontalPadding = 0,
  hidePaginationDots,
  autoplay = true,
  renderItems,
}: CarouselProps) => {
  const classes = useStyles();
  const { isSm } = useIsMobile();

  const leftArrowStyle =
    paginationPosition === 'top-left'
      ? { top: 0, left: 0 + slideHorizontalPadding }
      : { left: isSm ? -13 : 0 };
  const rightArrowStyle =
    paginationPosition === 'top-left'
      ? { top: 0, left: 52 + slideHorizontalPadding }
      : { right: isSm ? -13 : 0 };

  return (
    <div className={classes.root}>
      <NukaCarousel
        autoplay={autoplay}
        autoplayInterval={5000}
        wrapAround={true}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        className={classes.frame}
        defaultControlsConfig={{
          containerClassName: classes.container,
        }}
        renderCenterLeftControls={({ previousSlide }) =>
          hideNavigationButtons ? null : (
            <CarouselNavigationButton
              onClick={previousSlide}
              icon={<ChevronLeft alt='Previous slide' />}
              style={leftArrowStyle}
            />
          )
        }
        renderCenterRightControls={({ nextSlide }) =>
          hideNavigationButtons ? null : (
            <CarouselNavigationButton
              onClick={nextSlide}
              icon={<ChevronRight alt='Next slide' />}
              style={rightArrowStyle}
            />
          )
        }
        renderBottomCenterControls={(props) =>
          hidePaginationDots ? null : <CarouselPagingDots {...props} />
        }
      >
        {renderItems()}
      </NukaCarousel>
    </div>
  );
};
