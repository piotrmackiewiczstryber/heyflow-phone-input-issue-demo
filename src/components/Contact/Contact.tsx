'use client';
import useStyles from './Contact.styles';
import Marker from '@/assets/icons/marker.svg';
import mapImage from '@/assets/images/map.png';
import Text from '@stryberventures/gaia-react.text';
import Image from 'next/image';
import Phone from '@/assets/icons/phone.svg';
import Envelope from '@/assets/icons/envelope.svg';
import Pin from '@/assets/icons/marker-outlined.svg';
import Tooltip from '@stryberventures/gaia-react.tooltip';
import classNames from 'classnames';

const phoneNumber = '+996 555-0120';
const email = 'hello@tamwely.com';
const locationLink =
  'https://www.google.com/maps/place/3738+Cesar+Chavez+St,+San+Francisco,+CA+94131,+USA/@37.7487265,-122.4217468,16.45z/data=!4m6!3m5!1s0x808f7e41e898e72f:0xfa023ac4382941dd!8m2!3d37.7480769!4d-122.4233416!16s%2Fg%2F11c5kc8p_1?entry=ttu';

export const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <Text className={classes.title}>تواصل معنا </Text>
        <Text className={classes.text}>
          مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة. مما أم أمدها
          قبضتهم وانتهاءً, نهاية بتحدّي تم مكن, في مدن واُسدل للإتحا
        </Text>
        <a href={`tel:${phoneNumber}`}>
          <Text className={classNames(classes.text, classes.phone)}>
            {phoneNumber}
            <Phone />
          </Text>
        </a>
        <a href={`mailto:${email}`}>
          <Text className={classes.text}>
            <Envelope />
            hello@tamwely.com
          </Text>
        </a>
        <a target='_blank' href={locationLink}>
          <Text className={classes.text}>
            <Pin />
            الصحافة، الرياض، المملكة العربية السعودية
          </Text>
        </a>
      </div>
      <div className={classes.mapContainer}>
        <Image src={mapImage} alt='Map' className={classes.mapImage} />

        <div className={classes.marker}>
          <a target='_blank' href={locationLink}>
            <Tooltip
              title={
                <a target='_blank' href={locationLink}>
                  افتح خرائط جوجل
                </a>
              }
            >
              <Marker />
            </Tooltip>
          </a>
        </div>
      </div>
    </div>
  );
};
