import { Billboard } from "@/types";
import getStore from "./get-store";


const URL = process.env.NEXT_PUBLIC_API_URL2

const getBillboard = async ():Promise<Billboard[]> => {
    const resStore =await getStore()
    const res = await fetch(`${URL}/${resStore.id}/billboards`)
    return res.json()
}

export default getBillboard