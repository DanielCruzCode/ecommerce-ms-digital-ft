import { useProducts } from "../../hooks/use-products.hook.ts";
import { ProductCard } from "../card/product-card.component.tsx";
import "./product-grid.styles.css";
import { useEffect } from "react";
import { Loader } from "../../../../components/loader.component.tsx";
import { useProductStore } from "../../store/product.store.ts";

export function ProductGrid() {
	const { productList, isLoading } = useProducts();
	const {
		searchCriteria,
		setProductList,
		productList: items,
	} = useProductStore();

	useEffect(() => {
		let filteredProducts = productList;

		if (searchCriteria) {
			filteredProducts = productList.filter(
				(it) =>
					it.title.toLowerCase().includes(searchCriteria.toLowerCase()) ||
					it.author.toLowerCase().includes(searchCriteria.toLowerCase()),
			);
		}

		setProductList(filteredProducts);
	}, [productList, setProductList, searchCriteria]);

	console.log({ searchCriteria, items });

	if (isLoading) {
		return <Loader label={"Loading products..."} />;
	}

	if (!isLoading && items.length === 0) {
		return <Loader label={"There is no products for that search criteria"} />;
	}

	return (
		<section className={"product-grid"}>
			{items.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</section>
	);
}
