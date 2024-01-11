'use client';
import Text from '@stryberventures/gaia-react.text';
import useStyles from './styles';
import Image from 'next/image';
import managerImage from '@/assets/images/mortgage-manager.png';
import Star from '@/assets/icons/kid_star.svg';
import ContactSupport from '@/assets/icons/contact_support.svg';
import ChatBubble from '@/assets/icons/chat_bubble.svg';
import ApprovalDelegation from '@/assets/icons/approval_delegation.svg';

export const DedicatedHomeFinancingManager = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Text className={classes.title}>مستشار تمويل خاص لك</Text>
      <div className={classes.innerContainer}>
        <div>
          <Text className={classes.description}>
            مستشارينا عندهم الخبرة الكاملة بكافة الامور المتعلقة بتفاصيل التمويل
            العقاري ومعاملات البنوك وراح يقدمون لك دعم استثنائي خلال مهمتك
            للحصول على القرض.
          </Text>
          <div className={classes.featuresContainer}>
            <div className={classes.featureContainer}>
              <div className={classes.iconContainer}>
                <ContactSupport />
              </div>
              <Text className={classes.featureTitle}>خدمات استشارية</Text>
              <Text className={classes.featureDescription}>
                مستشارك بيكون جاهز في اي وقت للرد على أسئلتك وإستفساراتك وبيقدم
                لك النصائح اللازمة بكل يسر وسهولة
              </Text>
            </div>
            <div className={classes.featureContainer}>
              <div className={classes.iconContainer}>
                <Star />
              </div>
              <Text className={classes.featureTitle}>افضل ثلاث عروض</Text>
              <Text className={classes.featureDescription}>
                مستشارك بيبحث لك عن أفضل الخيارات ويقدمها لك عشان تختار منها
                اللي يناسبك
              </Text>
            </div>
            <div className={classes.featureContainer}>
              <div className={classes.iconContainer}>
                <ApprovalDelegation />
              </div>
              <Text className={classes.featureTitle}>تقديم الطلب</Text>
              <Text className={classes.featureDescription}>
                مستشارك راح يجمع البيانات ويرفع الطلب بالنيابة عنك
              </Text>
            </div>
            <div className={classes.featureContainer}>
              <div className={classes.iconContainer}>
                <ChatBubble />
              </div>
              <Text className={classes.featureTitle}>دعم وتحديث مستمر</Text>
              <Text className={classes.featureDescription}>
                مستشارك راح يخليك على إطلاع وبشكل يومي على اخر التحديثات الخاصة
                بطلبك
              </Text>
            </div>
          </div>
        </div>
        <div className={classes.image}>
          <Image
            src={managerImage}
            alt='Mortgage manager'
            objectFit='contain'
          />
        </div>
      </div>
    </div>
  );
};
