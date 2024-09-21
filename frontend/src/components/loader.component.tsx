export function Loader({ label }: { label?: string }) {
	return <article className={"loader"}>{label && label}</article>;
}
