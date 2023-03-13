import { FC } from "react";

import { products } from "@/utils/fake_products";
import { ProductItem } from "./ProductItem";

export const Product: FC = () => {
  return (
    <div className="mx-auto px-3 py-16 md:container md:px-0">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5 xl:grid-cols-6">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
