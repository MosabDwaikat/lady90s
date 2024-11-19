import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { CustomCardProps } from "../../components/CustomComponents/CustomCard";

export enum SortByOptions {
  top = "top",
  priceAsc = "price-asc",
  priceDesc = "price-desc",
  alphabeticalAsc = "alphabetical-asc",
  alphabeticalDesc = "alphabetical-desc"
}

interface CollectionState {
  collectionContnet: CustomCardProps["content"][];
  priceFilter: number[];
  sortBy: SortByOptions;
}

const initialState: CollectionState = {
  collectionContnet: [],
  priceFilter: [0, 0],
  sortBy: SortByOptions.top
};

const CollectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    setCollectionContnet: (state, action: PayloadAction<CustomCardProps["content"][]>) => {
      state.collectionContnet = action.payload;
      if (action.payload.length > 0) {
        const prices = action.payload.map((item) => item.price);
        state.priceFilter = [Math.min(...prices), Math.max(...prices)];
      } else {
        state.priceFilter = [0, 0];
      }
    },
    setPriceFilter: (state, action: PayloadAction<number[]>) => {
      state.priceFilter = action.payload;
    },
    setSortBy: (state, action: PayloadAction<SortByOptions>) => {
      state.sortBy = action.payload;
      state.collectionContnet = sortContent(state.collectionContnet, action.payload);
    }
  }
});

export const selectPriceRange = createSelector(
  (state: RootState) => state.collection.collectionContnet,
  (content) => {
    if (content.length === 0) return [0, 0];
    const prices = content.map((item) => item.price);
    return [Math.min(...prices), Math.max(...prices)];
  }
);
const sortContent = (content: CustomCardProps["content"][], sortBy: SortByOptions): CustomCardProps["content"][] => {
  const sortedContent = [...content];

  switch (sortBy) {
    case SortByOptions.priceAsc:
      return sortedContent.sort((a, b) => a.price - b.price);

    case SortByOptions.priceDesc:
      return sortedContent.sort((a, b) => b.price - a.price);

    case SortByOptions.alphabeticalAsc:
      return sortedContent.sort((a, b) => a.title.localeCompare(b.title));

    case SortByOptions.alphabeticalDesc:
      return sortedContent.sort((a, b) => b.title.localeCompare(a.title));

    case SortByOptions.top:
      return sortedContent.sort((a, b) => b.sales - a.sales);
  }
};

export const CollectionContnet = (state: RootState) => state.collection.collectionContnet;
export const PriceFilter = (state: RootState) => state.collection.priceFilter;
export const SortBy = (state: RootState) => state.collection.sortBy;
export const { setCollectionContnet, setPriceFilter, setSortBy } = CollectionSlice.actions;
export default CollectionSlice.reducer;
