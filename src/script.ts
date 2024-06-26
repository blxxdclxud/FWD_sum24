import dayjs, { Dayjs, ConfigType } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

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

async function fetchComicID(): Promise<number> {
    const params: URLSearchParams = new URLSearchParams();
    params.append("email", "r.nazmiev@innopolis.university");
    const url: string = "https://fwd.innopolis.university/api/hw2";

    const resp: Response = await fetch(url + "?" + params.toString());

    const data: number = await resp.json();

    return data;
}

async function fetchImage(): Promise<ComicData> {
    const id: number = await fetchComicID();

    const url: string = "https://fwd.innopolis.university/api/comic";
    const params: URLSearchParams = new URLSearchParams();
    params.append("id", id.toString());

    const resp: Response = await fetch(url + "?" + params.toString());

    return await resp.json();
}

function display(data: ComicData): void {
    console.log(data);

    const title: HTMLHeadingElement = document.getElementById('comic-title') as HTMLHeadingElement;
    const img: HTMLImageElement = document.getElementById('img') as HTMLImageElement;
    const date: HTMLSpanElement = document.getElementById('date') as HTMLSpanElement;
    const ago: HTMLSpanElement = document.getElementById('ago') as HTMLSpanElement;

    title.hidden = false;
    img.hidden = false;

    title.textContent = data.safe_title;
    img.src = data.img;
    img.alt = data.alt;

    const released: Date = new Date(parseInt(data.year), parseInt(data.month) - 1, parseInt(data.day));
    date.textContent = released.toLocaleDateString();

    const daysAgo: Dayjs = dayjs(date.textContent);
    ago.textContent = "Released " + dayjs(daysAgo).fromNow();
}

async function showComic(): Promise<void> {
    const data: ComicData = await fetchImage();
    display(data);
}

showComic();
