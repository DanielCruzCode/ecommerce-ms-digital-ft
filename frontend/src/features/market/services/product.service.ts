import type { AxiosResponse } from "axios";
import { Request } from "../../../api/api.ts";
import type { Product } from "../interfaces/types";

export async function getProductsService(): Promise<AxiosResponse<Product[]>> {
	return await Request.get("/images");
}

export async function addLikeService(
	productId: number,
): Promise<AxiosResponse<void>> {
	return await Request.post(`/images/${productId}/likes`);
}
