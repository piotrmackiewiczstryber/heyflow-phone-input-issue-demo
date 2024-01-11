import { ApplyCard } from '@/components/ApplyCard/ApplyCard';
import { BlogArticle } from '@/components/BlogArticle/BlogArticle';
import { BlogsArticlesCarousel } from '@/components/BlogsArticlesCarousel';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import BlogImage from '@/assets/images/blog-article-big.jpg';
import styles from './page.module.css';

const blog = {
  title: 'مستشار التمويل العقاري، فرصة، اغتنمها',
  date: ' تاريخ النشر: 19 جماد الاول 1445',
  tags: ['عقارات', 'التمويل العقاري'],
  image: BlogImage,
};

interface SingleBlogProps {
  params: {
    id: string;
  };
}

export default function SingleBlog({ params }: SingleBlogProps) {
  return (
    <main className={styles.content}>
      <Breadcrumbs
        activeElement={{ label: blog.title, path: `/blog/${params.id}` }}
      />
      <BlogArticle {...blog} />
      <BlogsArticlesCarousel maxSlides={2} />
      <ApplyCard
        title='ابدأ رحلتك للتمويل العقاري واحصل على بيت العمر'
        buttonText='قدّم الآن       '
      />
    </main>
  );
}
