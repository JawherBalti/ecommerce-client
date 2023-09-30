"use client";

import { ShoppingCart } from "lucide-react";

import Currency  from "@/components/ui/currency";
import Button from "@/components/ui/Button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product
};

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  }

  return ( 
    <div>
      <h1 className="text-3xl font-bold text-emerald-950">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4 border-slate-400" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-emerald-950">Size:</h3>
          <div className="text-emerald-950">
            {data?.size?.value}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-emerald-950">Color:</h3>
          <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2 bg-emerald-950">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
}
 
export default Info;