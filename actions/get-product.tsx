import { Product } from "@/types";
import getStore from "./get-store";

const URL=process.env.NEXT_PUBLIC_API_URL2

const getProduct = async (productId: string): Promise<Product> => {
  const resStore = await getStore();
  const res = await fetch(`${URL}/${resStore.id}/products/${productId}`);

  return res.json();
};

export default getProduct;