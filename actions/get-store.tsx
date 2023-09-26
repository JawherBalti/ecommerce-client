import { Store } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL2}/stores`

const getStore = async ():Promise<Store> => {
    const res = await fetch(URL)
    return res.json()
}

export default getStore