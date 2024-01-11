import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { AboutUsHero } from '@/components/AboutUsHero/AboutUsHero';
import { AboutUsContacts } from '@/components/AboutUsContacts/AboutUsContacts';
import { ValuePropositionHighlights } from '@/components/ValuePropositionHighlights';
import { AboutUsCard } from '@/components/AboutUsCard/AboutUsCard';
import { BlogApplyCard } from '@/components/BlogApplyCard/BlogApplyCard';
import styles from './page.module.css';

export default function AboutUsPage() {
  return (
    <main className={styles.main}>
      <Breadcrumbs />
      <AboutUsHero />
      <AboutUsContacts />
      <ValuePropositionHighlights withDivider={false} />
      <AboutUsCard />
      <BlogApplyCard />
    </main>
  );
}
