// import { notFound } from "next/navigation";
// import { categories } from "@/data/categories";

// type Props = {
//   params: Promise<{ slug: string }>;
// };

// export default async function CategoryPage({ params }: Props) {
//   const { slug } = await params;
//   const category = categories.find((item) => item.slug === slug);

//   if (!category) notFound();

//   return <main><h1>{category.title}</h1></main>;
// }




function page() {
  return (
    <div>page</div>
  )
}

export default page