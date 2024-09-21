import { Logo } from "./logo.component.tsx";
import "./header.styles.css";
import { SearchBar } from "./search-bar.component.tsx";

export function Header() {
	return (
		<nav className={"header"}>
			<Logo />
			<SearchBar />
		</nav>
	);
}
