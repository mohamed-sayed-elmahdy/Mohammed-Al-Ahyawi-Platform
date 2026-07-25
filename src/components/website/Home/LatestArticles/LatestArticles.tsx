import SectionHeader from "../SectionHeader";
import { articles } from "./data";
import ArticleCard from "./ArticleCard";

export default function LatestArticles() {
  return (
    <section className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="رؤية صحفية"
          title="أحدث المقالات المكتوبة بعناية"
          description="مقالات قصيرة ومترابطة تفتح نافذة على عالم التجربة والثقافة والضيافة بعين محمد الإحيوي."
          actionLabel="عرض كل المقالات"
          actionHref="/articles"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
