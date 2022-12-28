import { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Product } from "../types/products";

export type ParamTypes = {
  id: string;
};

const ProductDetail = () => {
  const location = useLocation();
  const product: Product = location.state.product;

  // TODO: Request Live API for product profile if not passed as part of location state

  return (
    <>
      {product && (
        <>
          <div className="max-w-7xl mx-auto p-8">
            <Link
              to="/"
              className="border rounded-lg p-2 shadow-md hover:shadow-lg"
            >
              Back
            </Link>
            <div className="flex mt-8">
              <div className="mr-8">
                <img
                  className="h-80 w-80"
                  src={product.c_thumbnail?.url}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <p className="mt-4">{product.c_longDescription}</p>
                {product.c_categories && (
                  <div className="mt-4">
                    <span className="font-bold">Categories: </span>
                    <ul className="ml-4">
                      {product.c_categories.map((item: any, index: number) => (
                        <li className="list-disc ml-4" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {product.c_sizes && (
                  <div className="mt-4">
                    <span className="font-bold">Sizes: </span>
                    <ul className="ml-4">
                      {product.c_sizes.map((item: any, index: number) => (
                        <li className="list-disc ml-4" key={index}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {product.c_subcategories && (
                  <div className="mt-4">
                    <span className="font-bold">Subcategories: </span>
                    <ul className="ml-4">
                      {product.c_subcategories.map(
                        (item: any, index: number) => (
                          <li className="list-disc ml-4" key={index}>
                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
