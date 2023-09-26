import { Category } from "@/types";
import getStore from "./get-store";

const URL = process.env.NEXT_PUBLIC_API_URL2;

const getCategory = async (categoryId: string): Promise<Category> => {
  const resStore = await getStore();

  const res = await fetch(`${URL}/${resStore.id}/categories/${categoryId}`);

  return res.json();
};

export default getCategory;
