import SectionHeader from "../SectionHeader";
import { articles } from "./data";

export default function LatestArticles() {
  return (
    <section>
      <SectionHeader
        eyebrow="المقالات"
        title="أحدث المقالات"
        description="محتوى إخباري ومقالي يوسع التجربة"
      />
      <p>Placeholder</p>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </section>
  );
}
