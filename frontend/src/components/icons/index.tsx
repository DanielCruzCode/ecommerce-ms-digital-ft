import type { ImgHTMLAttributes, SVGProps } from "react";

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 20 20"
			{...props}
		>
			<path
				fill="currentColor"
				d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12"
			/>
		</svg>
	);
}

export function LikeIcon(props: ImgHTMLAttributes<HTMLElement>) {
	return (
		<img width={35} height={35} {...props} src="/img/like.png" alt="Like" />
	);
}

export function ReShareIcon(props: ImgHTMLAttributes<HTMLElement>) {
	return (
		<img
			width={35}
			height={35}
			{...props}
			src="/img/reshare.png"
			alt="ReShare"
		/>
	);
}
