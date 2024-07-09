import Comic, { ComicData, ComicResponse } from './Comic';
import '../../../public/comic.css';

async function getComic(): Promise<ComicResponse> {
	try {
		const fetchComicID = async (): Promise<number> => {
			const response = await fetch(
				'https://fwd.innopolis.university/api/hw2?email=r.nazmiev@innopolis.university',
			);
			if (!response.ok) {
				throw new Error('Failed to fetch comic ID');
			}
			return await response.json();
		};

		const fetchComic = async (id: number): Promise<ComicData> => {
			const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
			if (!response.ok) {
				throw new Error('Failed to fetch comic data');
			}
			return await response.json();
		};

		const id = await fetchComicID();
		const comicData = await fetchComic(id);

		return {
			comic: comicData,
			error: null,
		};
	} catch (err) {
		const errorMessage = err instanceof Error ? err.message : 'Error occurred';
		return {
			comic: null,
			error: errorMessage,
		};
	}
}

export const metadata = {
	title: 'XKCD Comic Page',
	description: 'Welcome to the Comic page. Enjoy the web comic.',
};

const ComicPage = async () => {
	const data: ComicResponse = await getComic();
	return <Comic comic={data.comic} error={data.error} />;
};
export default ComicPage;
