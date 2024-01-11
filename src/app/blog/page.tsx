import { BlogList } from '@/components/BlogList/BlogList';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { BlogApplyCard } from '@/components/BlogApplyCard/BlogApplyCard';

export default function Blog() {
  return (
    <main>
      <Breadcrumbs />
      <BlogList />
      <BlogApplyCard />
    </main>
  );
}
