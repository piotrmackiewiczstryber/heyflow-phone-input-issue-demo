'use client';
import Image, { StaticImageData } from 'next/image';
import useStyles from './BlogListElement.styles';
import Text from '@stryberventures/gaia-react.text';
import { Badges } from '@/components/Badges/Badges';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import Link from 'next/link';

interface BlogListElementProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  image: StaticImageData;
}

export const BlogListElement = ({
  id,
  title,
  description,
  tags,
  date,
  image,
}: BlogListElementProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <Image
          objectPosition='center'
          objectFit='cover'
          fill
          sizes='100vw'
          src={image}
          alt={title}
        />
      </div>
      <div className={classes.textContainer}>
        <Badges badges={tags} />
        <Text className={classes.title}>{title}</Text>
        <Text className={classes.description}>{description}</Text>
        <Text className={classes.date}>{date}</Text>
        <Link href={`/blog/${id}`}>
          <CustomButton variant='ghost'>ابدا القرائة </CustomButton>
        </Link>
      </div>
    </div>
  );
};
