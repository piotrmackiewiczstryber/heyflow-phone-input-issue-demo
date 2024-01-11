import { DedicatedHomeFinancingManager } from '@/components/DedicatedHomeFinancingManager';
import { HassleFreeProcess } from '@/components/HassleFreeProcess';
import { Hero } from '@/components/Hero/Hero';
import { ValuePropositionHighlights } from '@/components/ValuePropositionHighlights';
import { Cards } from '@/components/Cards/Cards';
import { FirstPaymentHelp } from '@/components/FirstPaymentHelp/FirstPaymentHelp';
import styles from './page.module.css';
import { Faq } from '@/components/Faq/Faq';
import { HappyCustomers } from '@/components/HappyCustomers';
import { BlogsArticlesCarousel } from '@/components/BlogsArticlesCarousel';
import { FinanceCalculator } from '@/components/FinanceCalculator/FinanceCalculator';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <main className={styles.main}>
        <ValuePropositionHighlights />
        <HassleFreeProcess />
        <Cards />
        <FinanceCalculator />
        <DedicatedHomeFinancingManager />
        <FirstPaymentHelp />
        <Faq />
        <HappyCustomers />
        <BlogsArticlesCarousel mobileTitleAlign='right' />
        <Contact />
      </main>
    </>
  );
}
