import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import SearchResults from "./pages/SearchResults";
import ProductDetail from "./pages/ProductDetail";
import "./index.css";

const searcher = provideHeadless({
  apiKey: "184b8f65a7921212f4a09118718f3db9",
  experienceKey: "7-eleven-search-poc",
  verticalKey: "products",
  locale: "en",
});

const root = document.getElementById("root");
render(
  <React.StrictMode>
    <SearchHeadlessProvider searcher={searcher}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchResults />} />,
          <Route path="product/:id" element={<ProductDetail />} />,
        </Routes>
      </BrowserRouter>
    </SearchHeadlessProvider>
  </React.StrictMode>,
  root
);
