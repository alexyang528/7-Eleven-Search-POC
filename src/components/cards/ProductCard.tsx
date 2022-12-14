import { Product } from "../../types/products";
import { CardProps } from "@yext/search-ui-react";


export const ProductCard = ({ result }: CardProps<Product>): JSX.Element => {
    const product = result.rawData;
    return (
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden p-6">
            <img className="" src={product.c_thumbnail?.url} alt="" />
            <div className="flex-col justify-between">
                <p className="font-semibold text-gray-900">
                    {product.name}
                </p>
                <p className="text-gray-500">
                    {product.c_size ? "Size: " : ""} {product.c_size}
                </p>
                <button className="border-1 border-green-800 rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    );
  };