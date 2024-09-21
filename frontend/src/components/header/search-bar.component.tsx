import { SearchIcon } from "../icons";
import "./search-bar.styles.css";
import { useProductStore } from "../../features/market/store/product.store.ts";

export function SearchBar() {
	const { searchCriteria, setSearchCriteria } = useProductStore();

	return (
		<article className={"search-bar"}>
			<SearchIcon />
			<input
				value={searchCriteria}
				onChange={(e) => setSearchCriteria(e.target.value)}
				type="text"
				placeholder={"You're looking for something"}
				className={"search-bar__input"}
			/>
		</article>
	);
}
