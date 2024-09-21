import "./product-card.styles.css";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { LikeIcon, ReShareIcon } from "../../../../components/icons";
import { MEDIA_QUERIES } from "../../../../config";
import type { Product } from "../../interfaces/types";
import { addLikeService } from "../../services/product.service.ts";

interface ProductCardProps {
	product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
	const MAX_LIKES = 999;
	const isSmallDevice = useMediaQuery(MEDIA_QUERIES.SMALL);
	const isLargeDevice = useMediaQuery(MEDIA_QUERIES.LARGE);
	const [like, setLike] = useState(false);
	const price = product.price.toPrecision(4);
	const likesCount =
		Number(product.likes_count) > MAX_LIKES
			? MAX_LIKES
			: Number(product.likes_count).toString().padStart(3, "0");

	async function addLike(productId: number) {
		try {
			await addLikeService(productId);
			setLike((prev) => !prev);
		} catch (e) {
			console.error("Failed to like product", e);
		}
	}

	return (
		<article className={"product-card"}>
			<div className={"relative"}>
				<div className={"product-card__price"}>{price}&euro;</div>
				{isLargeDevice && <div className={"product-card__header-overlay"} />}
				{isLargeDevice && (
					<div className={"product-card__header"}>
						<button
							type={"button"}
							className={`product-card__footer-btn ${like ? "product-card__footer-btn--active" : ""} product-card__footer-btn--desktop`}
							title={"Like"}
							onClick={() => addLike(product.id)}
						>
							<LikeIcon className={"product-card__footer-btn-icon"} />
							{likesCount}
						</button>
						<button
							type={"button"}
							className={
								"product-card__footer-btn product-card__footer-btn--desktop"
							}
							title={"Reshare"}
						>
							<ReShareIcon className={"product-card__footer-btn-icon"} />
							{"0".padStart(3, "0")}
						</button>
					</div>
				)}
				<img
					src={product.main_attachment.big}
					className={"product-card__thumbnail"}
					alt={product.title}
					width={50}
					height={50}
				/>
			</div>
			<div className={"product-card__content"}>
				<h3 className={"product-card__title"}>{product.title}</h3>
				<p className={"product-card__content-author"}>
					by <span className={"product-card__author"}>{product.author}</span>
				</p>
			</div>
			{isSmallDevice && (
				<footer className={"product-card__footer"}>
					<button
						type={"button"}
						className={"product-card__footer-btn"}
						title={"Like"}
						onClick={() => addLike(product.id)}
					>
						{likesCount}
						<LikeIcon className={"product-card__footer-btn-icon"} />
					</button>
					<button
						type={"button"}
						className={"product-card__footer-btn"}
						title={"Reshare"}
					>
						{"0".padStart(3, "0")}
						<ReShareIcon
							className={
								"product-card__footer-btn-icon product-card__footer-btn-icon--grayscale"
							}
						/>
					</button>
				</footer>
			)}
		</article>
	);
}
