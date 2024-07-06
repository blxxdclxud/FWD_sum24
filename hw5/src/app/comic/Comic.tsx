"use client";

import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import Contacts from "../components/Contacts";
import Image from "next/image";


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
      const response: Response = await fetch(
        "https://fwd.innopolis.university/api/hw2?email=r.nazmiev@innopolis.university",
      );
      if (!response.ok) {
        throw new Error("Failed to fetch comic ID");
      }
      return await response.json();
    };

    const fetchComic = async (id: number): Promise<ComicData> => {
      const response: Response = await fetch(
        `https://fwd.innopolis.university/api/comic?id=${id}`,
      );
      if (!response.ok) {
        throw new Error("Failed to fetch comic data");
      }
      return await response.json();
    };

    const fetchAndSetComic = async (): Promise<void> => {
      try {
        const id: number = await fetchComicID();
        const comicData: ComicData = await fetchComic(id);
        setComic(comicData);
        console.log(comicData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
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
            <Image id="img" src={comic.img} alt={comic.alt} fill={true}/>
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
