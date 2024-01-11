'use client';
import { usePathname } from 'next/navigation';
import useStyles from './Breadcrumbs.styles';
import Text from '@stryberventures/gaia-react.text';
import { HomeIcon } from '@stryberventures/gaia-react.icons';
import DoubleChevronLeft from '@/assets/icons/double-chevron-left.svg';
import Link from 'next/link';
import classNames from 'classnames';

const pathsLabels = {
  blog: 'عن تمويلي',
  faq: 'اسئلة شائعة',
  'about-us': 'عن تمويلي',
};

interface BreadcrumbsProps {
  activeElement?: {
    label: string;
    path: string;
  };
}

export const Breadcrumbs = ({ activeElement }: BreadcrumbsProps) => {
  const classes = useStyles();
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  const elements = [
    {
      label: (
        <Text className={classes.linkText}>
          <HomeIcon className={classes.homeIcon} /> تمويلي
        </Text>
      ),
      link: '/',
    },
  ];

  pathNames.forEach((path) => {
    if (pathsLabels[path as keyof typeof pathsLabels]) {
      elements.push({
        label: (
          <Text className={classes.linkText}>
            {pathsLabels[path as keyof typeof pathsLabels]}
          </Text>
        ),
        link: `/${path}`,
      });
    }
  });

  if (activeElement) {
    elements.push({
      label: <Text className={classes.linkText}>{activeElement.label}</Text>,
      link: activeElement.path,
    });
  }

  return (
    <div className={classes.container}>
      {elements.map((el, idx, arr) => (
        <>
          <Link
            key={el.link}
            href={el.link}
            className={classNames(classes.link, {
              [classes.active]: idx === arr.length - 1,
            })}
          >
            {el.label}
          </Link>
          {idx !== arr.length - 1 ? <DoubleChevronLeft /> : null}
        </>
      ))}
    </div>
  );
};
