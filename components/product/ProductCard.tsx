import Image from "next/image";
import { Product } from "@/types/product";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const hasDiscount =
    product.sale_price > 0 && product.sale_price < product.price;

  const displayPrice = hasDiscount
    ? product.sale_price
    : product.price;

  const isLowStock = product.quantity <= 5;

  return (
    <div className="bg-white rounded-xl p-3 shadow-sm group hover:shadow-lg transition">
      
      {/* Image */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden">
        <Image
          src={product.image || product.gallery?.[0] || "/placeholder.png"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300 group-hover:opacity-90"
        />

        {/* Discount badge */}
        {hasDiscount && (
          <span className="absolute top-2 right-2 bg-green-200 text-green-800 text-xs px-2 py-1 rounded">
            -{Math.round(
              ((product.price - product.sale_price) / product.price) * 100
            )}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="mt-3">
        <div className="flex items-center justify-between"> 
            {/* Name */}
        <h3 className="text-brand-dark text-13px sm:text-sm lg:text-14px leading-5 sm:leading-6 font-semibold line-clamp-1">
          {product.name}
        </h3>

        <button className="px-3 py-1 hidden lg:block border rounded-lg hover:bg-gray-100">
            <ShoppingCart size={16} />
          </button>
        </div>        

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="font-semibold text-gray-900">
            ₦{displayPrice.toLocaleString()}
          </span>

          {hasDiscount && (
            <span className="text-sm text-gray-400 line-through">
              ₦{product.price.toLocaleString()}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mt-2">
          <span
            className={`font-semibold ml-[0px] text-[12px] md:text-[13px] ${
              isLowStock ? "text-[#CA8A04]" : "text-green-600"
            }`}
          >
            {isLowStock ? "Few Units Left" : "In Stock"}
          </span>

        </div>
      </div>
      <button className=" flex lg:hidden items-center justify-center gap-2 p-3 w-full px-3 py-1 border rounded-lg hover:bg-gray-100 mt-3">
            Add to Cart<ShoppingCart size={16} />
          </button>
    </div>
  );
};

export default ProductCard;