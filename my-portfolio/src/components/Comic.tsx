// src/components/Comic.tsx

import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import './hw2.css'; // Import your CSS file

interface ComicData {
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

const Comic: React.FC = () => {
    const [comic, setComic] = useState<ComicData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchComicID = async (): Promise<number> => {
            const response: Response = await fetch('https://fwd.innopolis.university/api/hw2?email=r.nazmiev@innopolis.university');
            if (!response.ok) {
                throw new Error('Failed to fetch comic ID');
            }
            const id: number = await response.json();
            return id;
        };

        const fetchComic = async (id: number): Promise<ComicData> => {
            const response: Response = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch comic data');
            }
            const comicData: ComicData = await response.json();
            return comicData;
        };

        const fetchAndSetComic = async (): Promise<void> => {
            try {
                const id: number = await fetchComicID();
                const comicData: ComicData = await fetchComic(id);
                setComic(comicData);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            }
        };

        fetchAndSetComic();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!comic) {
        return <div>Loading...</div>;
    }

    const releasedDate: Date = new Date(parseInt(comic.year), parseInt(comic.month) - 1, parseInt(comic.day));

    return (
        <div className="comic">
            <img id="img" src={comic.img} alt={comic.alt} />
            <h1 id="comic-title">{comic.safe_title}</h1>
            <p id="date">Released on: {releasedDate.toLocaleDateString()}</p>
            <p id="ago">Released {formatDistanceToNow(releasedDate, { addSuffix: true })}</p>
        </div>
    );
};

export default Comic;
