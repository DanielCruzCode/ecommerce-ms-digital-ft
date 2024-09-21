import { useEffect, useState } from "react";
import type { Product } from "../interfaces/types";
import { getProductsService } from "../services/product.service.ts";

export function useProducts() {
	const [productList, setProductList] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function fetchProducts() {
			try {
				setIsLoading(true);
				const response = await getProductsService();
				setProductList(response.data);
			} catch (e) {
				console.error("Failed to fetch product list", e);
			} finally {
				setIsLoading(false);
			}
		}
		fetchProducts();
	}, []);

	return {
		productList,
		isLoading,
	};
}
