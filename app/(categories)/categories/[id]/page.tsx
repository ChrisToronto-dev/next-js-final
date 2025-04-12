import { Suspense } from "react";
import BookInfo from "../../../../components/category-info";
import { API_URL } from "../../../(home)/page";
import styles from "../../../styles/category.module.css";

export const metadata = {
  title: "Category | Next.js",
};

async function getCategory(id: string) {
  const response = await fetch(`${API_URL}/list?name=${id}`);
  const json = await response.json();
  return json;
}

export default async function CategoryDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const categoryTitle = await getCategory(id);
  return (
    <div className={styles.category_page}>
      <h1>{categoryTitle.results.list_name}</h1>
      <div className={styles.category_item}>
        <Suspense fallback={<h2>Loading movie info</h2>}>
          <BookInfo id={id} />
        </Suspense>
      </div>
    </div>
  );
}
