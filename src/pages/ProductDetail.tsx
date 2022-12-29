import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Product } from "../types/products";
import { useEffect, useState } from "react";

export type ParamTypes = {
  id: string;
};

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { id } = useParams<ParamTypes>();
  const [product, setProduct] = useState<Product | null>(
    location.state?.product
  );
  const fetchProduct = async () => {
    if (location.state?.product) {
      setProduct(location.state?.product);
      return;
    }
    try {
      const response = await fetch(
        `https://liveapi.yext.com/v2/accounts/me/entities/${id}?api_key=cef2e01bba90e91f8dd9c6dbd621724c&v=20220101`
      );
      const data = await response.json();
      setProduct(data.response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <>
      {product && (
        <>
          <div className="max-w-7xl mx-auto p-8">
            <button
              className="border rounded-lg p-2 shadow-md hover:shadow-lg"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            <div className="flex flex-row mt-8 gap-8">
              <img
                className="float-left w-[200px] h-[200px] object-cover"
                src={product.c_thumbnail?.url}
                alt=""
              />
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
