'use client';
import Text from '@stryberventures/gaia-react.text';
import { CircleNumber } from './CircleNumber/CircleNumber';
import useStyles from './styles';
import { useIsMobile } from '@/hooks/useIsMobile';

export const HassleFreeProcess = () => {
  const classes = useStyles();
  const { screenWidth } = useIsMobile();
  const isMobileView = screenWidth < 1024;

  return (
    <div className={classes.root}>
      <Text className={classes.sectionTitle}>تمويلي، سهل وسريع</Text>
      <div className={classes.stepsContainer}>
        {isMobileView ? (
          <>
            <div className={classes.elementContainer}>
              <div className={classes.numberContainer}>
                <CircleNumber digit={1} />
              </div>
              <Text className={classes.stepTitle}>قدم الطلب</Text>
              <Text className={classes.stepDescription}>
                املأ الاستمارة وارفع الطلب بأقل من دقيقتين
              </Text>
            </div>
            <div className={classes.elementContainer}>
              <div className={classes.numberContainer}>
                <CircleNumber digit={2} />
              </div>
              <Text className={classes.stepTitle}>
                احصل على الموافقة المبدئية
              </Text>
              <Text className={classes.stepDescription}>
                راح توصلك الموافقة خلال ساعات مع تفاصيل الحد الاقصى للتمويل
                العقاري الخاص بك
              </Text>
            </div>
            <div className={classes.elementContainer}>
              <div className={classes.numberContainer}>
                <CircleNumber digit={3} />
              </div>
              <Text className={classes.stepTitle}>اختار العرض المناسب</Text>
              <Text className={classes.stepDescription}>
                مستشارك الخاص العقاري راح يتواصل مع كل البنوك في المملكة للحصول
                على أفضل عروض ممكنة تتماشى مع امكانياتك ويقدمها لك
              </Text>
            </div>
            <div className={classes.elementContainer}>
              <div className={classes.numberContainer}>
                <CircleNumber digit={4} />
              </div>
              <Text className={classes.stepTitle}>وقع العقد واستلم منزلك</Text>
              <Text className={classes.stepDescription}>
                {' '}
                بعد ما تختار العرض المناسب، مستشارك بيقدم لك على التمويل العقاري
                عن طريق ملئ البيانات ورفع الطلب، كل اللي يبقى عليك هو التوقيع بس
              </Text>
            </div>
          </>
        ) : (
          <>
            <div className={classes.elementContainer}>
              <div className={classes.numberContainer}>
                <CircleNumber digit={1} />
              </div>
              <Text className={classes.stepTitle}>قدم الطلب</Text>
            </div>
            <div className={classes.elementContainer}>
              <div className={classes.numberContainer}>
                <CircleNumber digit={2} />
              </div>
              <Text className={classes.stepTitle}>
                احصل على الموافقة المبدئية
              </Text>
            </div>
            <div className={classes.elementContainer}>
              <div className={classes.numberContainer}>
                <CircleNumber digit={3} />
              </div>
              <Text className={classes.stepTitle}>اختار العرض المناسب</Text>
            </div>
            <div className={classes.elementContainer}>
              <div className={classes.numberContainer}>
                <CircleNumber digit={4} />
              </div>
              <Text className={classes.stepTitle}>وقع العقد واستلم منزلك</Text>
            </div>
            <Text className={classes.stepDescription} id='step-1-description'>
              املأ الاستمارة وارفع الطلب بأقل من دقيقتين
            </Text>
            <Text className={classes.stepDescription} id='step-2-description'>
              راح توصلك الموافقة خلال ساعات مع تفاصيل الحد الاقصى للتمويل
              العقاري الخاص بك
            </Text>
            <Text className={classes.stepDescription} id='step-4-description'>
              {' '}
              بعد ما تختار العرض المناسب، مستشارك بيقدم لك على التمويل العقاري
              عن طريق ملئ البيانات ورفع الطلب، كل اللي يبقى عليك هو التوقيع بس
            </Text>
            <Text className={classes.stepDescription} id='step-3-description'>
              مستشارك الخاص العقاري راح يتواصل مع كل البنوك في المملكة للحصول
              على أفضل عروض ممكنة تتماشى مع امكانياتك ويقدمها لك
            </Text>
          </>
        )}
      </div>
    </div>
  );
};
