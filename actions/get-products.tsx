import { Product } from "@/types";
import qs from "query-string";
import getStore from "./get-store";

const URL = process.env.NEXT_PUBLIC_API_URL2;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query:Query): Promise<Product[]> => {
  const resStore = await getStore();
  const url = qs.stringifyUrl({
    url:`${URL}/${resStore.id}/products`,
    query: {
        colorId:query.colorId,
        sizeId:query.sizeId,
        categoryId:query.categoryId,
        isFeatured:query.isFeatured,
    }
  });
  const res = await fetch(url);  
  return res.json();
};

export default getProducts;
