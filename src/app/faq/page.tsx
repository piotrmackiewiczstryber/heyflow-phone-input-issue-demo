import { FaqContact } from '@/components/FaqContact/FaqContact';
import { FaqList } from '@/components/FaqList/FaqList';
import styles from './page.module.css';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs />
      <div className={styles.content}>
        <FaqList />
        <FaqContact />
      </div>
    </>
  );
}
