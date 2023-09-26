import { Category } from "@/types";
import getStore from "./get-store";

const URL = process.env.NEXT_PUBLIC_API_URL2

const getCategories = async ():Promise<Category[]> => {
    const resStore =await getStore()
    const res = await fetch(`${URL}/${resStore.id}/categories`)
    return res.json()
}

export default getCategories
