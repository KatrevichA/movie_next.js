export interface IMovieIdVideos {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: RootObjectBelongs_to_collection;
	budget: number;
	genres: RootObjectGenres[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: RootObjectProduction_companies[];
	production_countries: RootObjectProduction_countries[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: RootObjectSpoken_languages[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	videos: RootObjectVideos;
}
export interface RootObjectBelongs_to_collection {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
}
export interface RootObjectGenres {
	id: number;
	name: string;
}
export interface RootObjectProduction_companies {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}
export interface RootObjectProduction_countries {
	iso_3166_1: string;
	name: string;
}
export interface RootObjectSpoken_languages {
	english_name: string;
	iso_639_1: string;
	name: string;
}
export interface RootObjectVideosResults {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	published_at: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	id: string;
}
export interface RootObjectVideos {
	results: RootObjectVideosResults[];
}