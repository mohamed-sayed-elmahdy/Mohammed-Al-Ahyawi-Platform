import type { Article } from "@/types/website";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded-[24px] border border-white/10 bg-[#0f172a] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition hover:-translate-y-1">
      <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-[#f3c15c]">
        <span>{article.category}</span>
        <span className="text-slate-400">{article.date}</span>
      </div>
      <h3 className="text-2xl font-semibold leading-tight text-white">{article.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{article.excerpt}</p>
      <a href={article.href} className="mt-6 inline-block text-sm font-medium text-[#f3c15c] transition hover:text-white">
        اقرأ المقال
      </a>
    </article>
  );
}
