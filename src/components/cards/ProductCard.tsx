import { Link } from "react-router-dom";
import { CardProps } from "@yext/search-ui-react";
import { useSearchState } from "@yext/search-headless-react";
import { provideSearchAnalytics } from "@yext/analytics";
import { Product } from "../../types/products";


const searchAnalytics = provideSearchAnalytics({
    businessId: 3878450,
    experienceKey: "7-eleven-search-poc",
    experienceVersion: "PRODUCTION"
});

function fireClick(queryId: string, entityId: string) {
    searchAnalytics.report({
        type: "TITLE_CLICK",
        entityId: entityId,
        verticalKey: "products",
        searcher: "VERTICAL",
        queryId: queryId
    });
};

export const ProductCard = ({ result }: CardProps<Product>): JSX.Element => {
    const product = result.rawData;
    const queryId = useSearchState(state => state.query.queryId);

    return (
        <Link
            to={`/product/${product.id}`}
            state={{ product: product }}
            className="flex flex-col justify-between bg-white rounded-lg shadow-md hover:shadow-lg 
            p-6 gap-4 h-90 cursor-pointer"
            onClick={() => fireClick(queryId!, product.id)}
        >
            <div className="flex align-center justify-between">
                <img className="h-48 w-48" src={product.c_thumbnail?.url} alt="" />
            </div>
            <div className="flex-col justify-between">
                <div className="font-semibold text-gray-900">
                    {product.name}
                </div>
                <p className="text-gray-500">
                    {product.c_sizes === undefined || product.c_sizes?.length == 0 ? "" : "Size: "}
                    {product.c_sizes?.[0]}
                </p>
            </div>
        </ Link>
    );
};
