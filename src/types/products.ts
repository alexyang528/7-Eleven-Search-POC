export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface Product {
	name: string,
	c_catalogType?: string,
	c_category?: string,
	c_handling?: string,
	c_longDescription?: string,
	c_size?: string,
	c_subcategory?: string,
	c_thumbnail?: Image,
	c_type?: string,
	id: string,
}
