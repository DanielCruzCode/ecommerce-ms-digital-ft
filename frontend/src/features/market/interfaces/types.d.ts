export interface ProductStore {
	productList: Product[];
	searchCriteria: string;
	setSearchCriteria: (criteria: string) => void;
	setProductList: (items: Product[]) => void;
}

export interface Product {
	type: string;
	id: number;
	title: string;
	price: number;
	author: string;
	created_at: string;
	main_attachment: MainAttachment;
	likes_count: number;
	liked: boolean;
	links: ProductLink[];
}

export interface ProductLink {
	rel: string;
	uri: string;
	methods: string;
}

export interface MainAttachment {
	big: string;
	small: string;
}
