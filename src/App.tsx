import { AppliedFilters, Pagination, ResultsCount, SearchBar, StandardFacets, StaticFilters, VerticalResults } from "@yext/search-ui-react";
import { ProductCard } from "./components/cards/ProductCard";

const App = (): JSX.Element => {
  return (
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-7xl">
        <SearchBar />
        <div className="flex gap-16 pb-8">
          <StandardFacets
            
            collapsible={true}
            defaultExpanded={true}
            showMoreLimit={5}
            customCssClasses={{ standardFacetsContainer: "min-w-[200px]" }}
          />
          <div className="flex-col">
            <ResultsCount customCssClasses={{ resultsCountContainer:"" }}/>
            <AppliedFilters customCssClasses={{ clearAllButton:"hidden", appliedFiltersContainer:"pb-4" }}/>
            <VerticalResults CardComponent={ProductCard} customCssClasses={{ verticalResultsContainer:"grid grid-cols-4 gap-4 pb-4" }}/>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;