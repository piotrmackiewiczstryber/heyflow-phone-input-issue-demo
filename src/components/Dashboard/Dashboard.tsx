'use client';
import { ApplicationStatus, useProfileQuery } from '@/services/api/profile';
import { InactiveCard } from '../InactiveCard/InactiveCard';
import {
  DashboardCard,
  DashboardCardVariant,
} from '../DashboardCard/DashboardCard';
import { ProcessingContent } from '../DashboardCard/ProcessingContent/ProcessingContent';
import { isStatusDone } from '@/utils/applicationStatus';
import Text from '@stryberventures/gaia-react.text';
import DownloadIcon from '@/assets/icons/blue-download.svg';
import EditIcon from '@/assets/icons/blue-edit.svg';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import useStyles from './Dashboard.styles';
import { DisabledCard } from '@/components/DisabledCard/DisabledCard';
import { OfferSelectionCard } from '@/components/OfferSelection/OfferSelectionCard/OfferSelectionCard';
import { useState } from 'react';
import { RequiredDocuments } from '@/components/RequiredDocuments/RequiredDocuments';
import { AppointmentCard } from '../AppointmentCard/AppointmentCard';

export const Dashboard = () => {
  const { data } = useProfileQuery();
  const [appointmentSetup, setAppointmentSetup] = useState(false);

  const profileData = data ? { ...data?.data } : null;

  const isCompleted =
    profileData &&
    ((profileData.applicationStatus === ApplicationStatus.ContractSent &&
      appointmentSetup) ||
      profileData.applicationStatus === ApplicationStatus.ContractSigned)
      ? true
      : false;

  const classes = useStyles({ isCompleted });

  if (!profileData) return null;

  return (
    <>
      <div
        style={{
          padding: '30px 30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div>
          <label>
            <input
              type='checkbox'
              checked={appointmentSetup}
              onChange={() => setAppointmentSetup((prev) => !prev)}
            />
            ?Appointment setup
          </label>
        </div>
      </div>
      {isCompleted ? (
        <div className={classes.appointmentCardContainer}>
          <AppointmentCard />
        </div>
      ) : null}

      <Text className={classes.title}>رحلتك للتمويل العقاري</Text>
      <div className={classes.container}>
        {/* CARD 1 */}
        <InactiveCard
          title='استلمنا  طلبك  بنجاح'
          isFirst
          isCompleted={isCompleted}
        />

        {/* CARD 2 */}
        {isStatusDone(
          ApplicationStatus.Received,
          profileData.applicationStatus
        ) ? (
          <InactiveCard
            title='التواصل مع مستشار التمويل'
            isCompleted={isCompleted}
          />
        ) : (
          <DashboardCard
            variant={DashboardCardVariant.Active}
            isCompleted={isCompleted}
            managerCardTitle='التواصل مع مستشار التمويل'
            managerCardDescriptionParagaphs={[
              'مستشارك  الخاص  راح  يتواصل  معك  وياخذ  منك  بعض  المعلومات  ويتأكد  من  كافة  البيانات  عشان  يحصّل  لك  على  الموافقة  المبدئية.',
              'خلّك  قريب! ',
            ]}
          >
            <ProcessingContent
              title='التواصل مع مستشار التمويل'
              subtitle='خلال  ساعتين  بيتواصل  معك  مستشار  التمويل  العقاري  للتأكيد  والانتقال  للمرحلة  الثانية.'
              deadlineLabel='سوف تتلقى الاتصال'
              deadline='الاربعاء، 19 جماد الاول 1445'
            />
          </DashboardCard>
        )}

        {/* CARD 3 */}
        {isStatusDone(
          ApplicationStatus.InitialApproval,
          profileData.applicationStatus
        ) ? (
          <InactiveCard
            title='الموافقة المبدئية'
            isCompleted={isCompleted}
            button={
              <CustomButton
                iconLeft={<DownloadIcon />}
                variant='outlined'
                className={classes.button}
              >
                تحميل
              </CustomButton>
            }
          />
        ) : profileData.applicationStatus ===
          ApplicationStatus.InitialApproval ? (
          <DashboardCard
            variant={DashboardCardVariant.Active}
            isCompleted={isCompleted}
            managerCardTitle='الموافقة المبدئية'
            managerCardDescriptionParagaphs={[
              'مستشارك  الخاص  يبحث  عن  فرصة  حصولك  على  الموافقة  المبدئية  وبيتواصل  معك  بأقرب  وقت  ممكن،  هالخطوة  ماراح  تاخذ  أكثر  من  ٢٤  ساعة. ',
              'كلنا  حماس!',
            ]}
          >
            <ProcessingContent
              title='الموافقة المبدئية'
              subtitle='مستشارك  الخاص  يشتغل  على  حصولك  على  الموافقة  المبدئية. نتمنى  لك  التوفيق!'
              deadlineLabel='الموافقة المبدئية:'
              deadline='الاربعاء، 19 جماد الاول 1445'
            />
          </DashboardCard>
        ) : (
          <DisabledCard
            title='الموافقة المبدئية'
            subtitle='مستشارك  الخاص  يشتغل  على  حصولك  على  الموافقة  المبدئية. نتمنى  لك  التوفيق!'
            isCompleted={isCompleted}
          />
        )}

        {/* CARD 4 */}
        {isStatusDone(
          ApplicationStatus.OffersSent,
          profileData.applicationStatus
        ) || profileData.applicationStatus === ApplicationStatus.OffersSent ? (
          <InactiveCard
            title='أفضل  3  عروض'
            isCompleted={isCompleted}
            button={
              <CustomButton
                iconLeft={<DownloadIcon />}
                variant='outlined'
                className={classes.button}
              >
                تحميل
              </CustomButton>
            }
          />
        ) : profileData.applicationStatus === ApplicationStatus.Eligible ? (
          <DashboardCard
            variant={DashboardCardVariant.Active}
            isCompleted={isCompleted}
            managerCardTitle='أفضل  ٣  عروض'
            managerCardDescriptionParagaphs={[
              'مستشارك  الخاص  يبحث  حالياً  عن  أفضل  العروض من  البنوك  السعودية  اللي  تناسبك  وتحقق  متطلباتك.  راح يتواصل  معك  بمجرد  الحصول  عليها،  غالباً  بيحصلها  خلال  يومين  عمل  بس!',
            ]}
          >
            <ProcessingContent
              title='أفضل  3  عروض'
              subtitle=' مستشارك  الخاص  راح  يتواصل  معك  قريب  ويشاورك  بأفضل  3  عروض  حصلها  لك  من  البنوك.'
              deadlineLabel='سوف تتلقى العروض:'
              deadline='الاربعاء، 19 جماد الاول 1445'
            />
          </DashboardCard>
        ) : (
          <DisabledCard
            isCompleted={isCompleted}
            title='أفضل  3  عروض'
            subtitle='مستشارك  الخاص  راح  يتواصل  معك  قريب  ويشاورك  بأفضل  3  عروض  حصلها  لك  من  البنوك.'
          />
        )}

        {/* CARD 5 */}
        <OfferSelectionCard
          isCompleted={isCompleted}
          variant={
            isStatusDone(
              ApplicationStatus.OfferSelected,
              profileData.applicationStatus
            ) ||
            profileData.applicationStatus === ApplicationStatus.OfferSelected
              ? DashboardCardVariant.Inactive
              : profileData.applicationStatus === ApplicationStatus.OffersSent
                ? DashboardCardVariant.Active
                : DashboardCardVariant.Disabled
          }
        />

        {/* CARD 6 */}
        {isStatusDone(
          ApplicationStatus.ChecklistSubmitted,
          profileData.applicationStatus
        ) ||
        profileData.applicationStatus ===
          ApplicationStatus.ChecklistSubmitted ? (
          <InactiveCard
            isCompleted={isCompleted}
            title='المستندات  المطلوبة'
            button={
              <CustomButton
                variant='outlined'
                className={classes.button}
                icon={<EditIcon />}
              >
                تحديث
              </CustomButton>
            }
            processing={
              profileData.applicationStatus ===
              ApplicationStatus.ChecklistSubmitted
            }
            managerCardTitle='المستندات  المطلوبة'
            managerCardDescriptionParagaphs={[
              'مستشارك  الخاص  راح  يقدّم  بياناتك  ومستنداتك  للبنك  ويتأكد  من  استيفائها  كل  الشروط، في  حال  واجه  أي  طلبات  إضافية  أو  تعديلات  مهمة  بيتواصل  معك.',
            ]}
          />
        ) : profileData.applicationStatus ===
          ApplicationStatus.OfferSelected ? (
          <DashboardCard
            isCompleted={isCompleted}
            variant={DashboardCardVariant.Active}
            managerCardTitle='المستندات  المطلوبة'
            managerCardDescriptionParagaphs={[
              'مستشارك  الخاص  راح  يقدّم  بياناتك  ومستنداتك  للبنك  ويتأكد  من  استيفائها  كل  الشروط، في  حال  واجه  أي  طلبات  إضافية  أو  تعديلات  مهمة  بيتواصل  معك.',
            ]}
          >
            <ProcessingContent
              title='المستندات  المطلوبة'
              subtitle='هانت! دخّل معلوماتك الخاصة وارفع  المستندات الضرورية وانتظر الخطوة النهائية.'
            >
              <RequiredDocuments />
            </ProcessingContent>
          </DashboardCard>
        ) : (
          <DisabledCard
            isCompleted={isCompleted}
            title='المستندات  المطلوبة'
            subtitle='هانت!  دخّل  معلوماتك  الخاصة  وحمّل  المستندات  الضرورية  وانتظر  الخطوة  النهائية.'
          />
        )}

        {/* CARD 7 */}
        {isStatusDone(
          ApplicationStatus.ContractSent,
          profileData.applicationStatus
        ) ||
        profileData.applicationStatus === ApplicationStatus.ContractSent ? (
          <InactiveCard
            isCompleted={isCompleted}
            title='العرض  النهائي'
            button={
              <CustomButton
                variant='outlined'
                className={classes.button}
                icon={<DownloadIcon />}
              >
                تحميل
              </CustomButton>
            }
          />
        ) : profileData.applicationStatus ===
          ApplicationStatus.ChecklistVerified ? (
          <DashboardCard
            isCompleted={isCompleted}
            variant={DashboardCardVariant.Active}
            managerCardTitle='العرض  النهائي'
            managerCardDescriptionParagaphs={[
              'مستشارك  الخاص  جالس  يجهّز  لك  العرض  النهائي  مع  بنك  الرياض،  بيتواصل  معك  بمجرد  الحصول  عليه  للإتفاق  على  موعد  توقيع  العقد.',
            ]}
          >
            <ProcessingContent
              title='العرض  النهائي'
              subtitle='في  انتظار  بنك  الرياض  لتجهيز  عرض  التمويل  العقاري  الخاص  فيك.'
              deadlineLabel='سوف تتلقى العرض:'
              deadline='الاربعاء، 19 جماد الاول 1445'
            />
          </DashboardCard>
        ) : (
          <DisabledCard
            isCompleted={isCompleted}
            title='العرض  النهائي'
            subtitle='في  انتظار  البنك  لتجهيز  عرض  التمويل  العقاري  الخاص  فيك.'
          />
        )}

        {/* CARD 8 */}
        {isCompleted ? (
          <InactiveCard title='موعد التوقيع' isLast isCompleted={isCompleted} />
        ) : profileData.applicationStatus === ApplicationStatus.ContractSent ? (
          <DashboardCard
            variant={DashboardCardVariant.Active}
            isLast
            isCompleted={isCompleted}
            managerCardTitle='موعد التوقيع'
            managerCardDescriptionParagaphs={[
              'ألف  مبروك  عبدالله!',
              'وصلت  لنهاية  الرحلة  وبداية  تحقيق  الحلم، ولأنك  عميل  تمويلي  المميز،  حجزنا  لك  سيارة  خاصة  تاخذك  للبنك  في  يوم  التوقيع.',
              'مستشارك الخاص راح يتواصل  معك لتأكيد الموعد، تهانينا ودعواتنا  لك!',
            ]}
          >
            <ProcessingContent
              title='موعد التوقيع'
              subtitle='العرض  جاهز  والتمويل  العقاري  صار  بين  ايديك!  كل  اللي  عليك  تختار  الموعد  المناسب  للتوقيع.'
            />
          </DashboardCard>
        ) : (
          <DisabledCard
            isCompleted={isCompleted}
            title='موعد التوقيع'
            subtitle='العرض  جاهز  والتمويل  العقاري  صار  بين  ايديك!  كل  اللي  عليك  تختار  الموعد  المناسب  للتوقيع.'
            isLast
          />
        )}
      </div>
    </>
  );
};
