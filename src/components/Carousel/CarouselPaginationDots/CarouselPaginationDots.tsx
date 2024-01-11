import { ControlProps } from 'nuka-carousel';
import useStyles, { createDotStyles } from './styles';

const Dot = ({ active }: { active: boolean }) => {
  const classes = createDotStyles({ active });
  return <div className={classes.root} />;
};

export const CarouselPagingDots = ({
  slideCount,
  slidesToScroll,
  currentSlide,
  goToSlide,
}: ControlProps) => {
  const classes = useStyles();
  const getIndexes = (count: number, inc: number) => {
    const arr = [];
    for (let i = 0; i < count; i += inc) {
      arr.push(i);
    }
    return arr;
  };

  const indexes = getIndexes(slideCount, slidesToScroll as number);

  return (
    <ul className={classes.root}>
      {indexes.map((index) => {
        return (
          <li className={classes.element} key={index}>
            <button
              className={
                currentSlide === index ? classes.activeButton : classes.button
              }
              onClick={() => goToSlide(index)}
            >
              <Dot active={currentSlide === index} />
            </button>
          </li>
        );
      })}
    </ul>
  );
};
