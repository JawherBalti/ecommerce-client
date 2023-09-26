import { Color } from "@/types";
import getStore from "./get-store";

const URL=process.env.NEXT_PUBLIC_API_URL2

const getColors = async (): Promise<Color[]> => {
  const resStore = await getStore();
  const res = await fetch(`${URL}/${resStore.id}/colors`);

  return res.json();
};

export default getColors;