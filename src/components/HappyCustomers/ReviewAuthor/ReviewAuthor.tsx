import Image, { StaticImageData } from 'next/image';
import useStyles from './ReviewAuthor.styles';
import Text from '@stryberventures/gaia-react.text';
import Link from 'next/link';
import Google from '@/assets/icons/google.svg';

interface ReviewAuthorProps {
  name: string;
  location: string;
  image: StaticImageData;
  googleProfile: string;
}

export const ReviewAuthor = ({
  googleProfile,
  image,
  location,
  name,
}: ReviewAuthorProps) => {
  const classes = useStyles();

  return (
    <div className={classes.reviewAuthor}>
      <Link href={googleProfile} className={classes.googleLink}>
        <Google />
      </Link>
      <div className={classes.authorInfo}>
        <div className={classes.authorNameAndLocation}>
          <Text className={classes.name}>{name}</Text>
          <Text className={classes.location}>{location}</Text>
        </div>
        <div className={classes.authorAvatar}>
          <Image src={image} alt={`Photo of reviewer ${name}`} />
        </div>
      </div>
    </div>
  );
};
