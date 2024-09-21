import { type StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { LS_KEYS } from "../../../config";
import type { Product, ProductStore } from "../interfaces/types";

function storeMiddlewares<T>(fn: StateCreator<T, [], []>) {
	return persist(fn, {
		name: LS_KEYS.PRODUCTS,
	});
}

export const useProductStore = create<ProductStore>()(
	storeMiddlewares((set) => ({
		productList: [],
		searchCriteria: "",
		setSearchCriteria: (criteria: string) => set({ searchCriteria: criteria }),
		setProductList: (items: Product[]) => set({ productList: items }),
	})),
);
