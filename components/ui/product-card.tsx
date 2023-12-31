"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

// import Currency  from "@/components/ui/currency";
// import IconButton  from "@/components/ui/icon-button";
// import usePreviewModal from "@/hooks/use-preview-modal";
// import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import IconButton from "./icon-button";
import Currency from "./currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation(); //override the onClick={handleClick} of the main div

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border border-slate-600 p-3 space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-slate-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-slate-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg text-emerald-950">{data.name}</p>
        <p className="text-sm text-slate-700">{data.category?.name}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
