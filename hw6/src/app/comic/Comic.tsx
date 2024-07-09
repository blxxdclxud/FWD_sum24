import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import Contacts from '../components/Contacts';
import Image from 'next/image';

export interface ComicData {
	month: string;
	num: number;
	link: string;
	year: string;
	news: string;
	safe_title: string;
	transcript: string;
	alt: string;
	img: string;
	title: string;
	day: string;
}

export interface ComicResponse {
	comic: ComicData | null;
	error: string | null;
}

const Comic: React.FC<ComicResponse> = ({ comic, error }) => {
	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!comic) {
		return <div style={{ textAlign: 'center', fontSize: '3em', color: '#c69749' }}>...</div>;
	}

	const releasedDate: Date = new Date(
		parseInt(comic.year),
		parseInt(comic.month) - 1,
		parseInt(comic.day),
	);

	return (
		<div>
			<div className="container">
				<div>
					<div className="image-wrapper">
						<Image id="img" src={comic.img} alt={comic.alt} fill={true} />
					</div>

					<h1 id="comic-title">{comic.safe_title}</h1>
					<p id="date">Released on: {releasedDate.toLocaleDateString()}</p>
					<p id="ago">
						Released {formatDistanceToNow(releasedDate, { addSuffix: true })}
					</p>
				</div>
			</div>

			<Contacts />
		</div>
	);
};

export default Comic;
