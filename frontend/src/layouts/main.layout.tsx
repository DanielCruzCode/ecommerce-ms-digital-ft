import type { ReactNode } from "react";
import { Header } from "../components/header/header.component.tsx";

export function MainLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<main className={"main-layout__content"}>{children}</main>
		</>
	);
}
