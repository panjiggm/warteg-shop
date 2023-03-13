import { FC, useContext } from "react";
import { ProductType } from "@/utils/types";
import { AiOutlineHeart } from "react-icons/ai";
import { ShopContext } from "@/context/ShopContext";

interface ProductItemProps {
  product: ProductType;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { id, title, price, image } = product;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="centerized h-[160px]">
        <div className="max-w-[90px] p-2">
          <img src={image} alt={title} className="object-cover" />
        </div>
      </div>
      <div className="card-body flex flex-col justify-between p-4">
        <div>
          <h2 className="card-title text-sm line-clamp-2 hover:line-clamp-none">
            {title}
          </h2>
          <div className="">$ {price}</div>
        </div>
        <div className="items-centerized card-actions">
          <button className="">
            <AiOutlineHeart className="text-red-600" />
          </button>
          <button
            className="btn-primary btn-xs btn flex-1"
            onClick={() => addToCart(product, id)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
