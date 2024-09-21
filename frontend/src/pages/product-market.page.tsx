import { ProductGrid } from "../features/market/components/grid/product-grid.component.tsx";
import { MainLayout } from "../layouts/main.layout.tsx";

export function ProductMarketPage() {
	return (
		<MainLayout>
			<ProductGrid />
		</MainLayout>
	);
}
