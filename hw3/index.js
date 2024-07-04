async function fetchComicID() {
    const params = new URLSearchParams();
    params.append("email", "r.nazmiev@innopolis.university");
    const url = "https://fwd.innopolis.university/api/hw2";

    const resp = await fetch(url + "?" + params.toString());

    return await resp.json();
}

async function fetchImage() {
    const id = await fetchComicID();

    const url = "https://fwd.innopolis.university/api/comic";
    const params = new URLSearchParams();
    params.append("id", id);

    const resp = await fetch(url + "?" + params.toString());

    return await resp.json();
}

function display(data) {
    console.log(data)

    const title = document.getElementById('comic-title');
    const img = document.getElementById('img');
    const date = document.getElementById('date');

    title.hidden = false;
    img.hidden = false;

    title.textContent = data.safe_title;
    img.src = data.img;
    img.alt = data.alt;

    date.textContent = new Date(data.year, data.month - 1, data.day).toLocaleDateString();
}

async function showComic() {
    const data = await fetchImage();
    display(data);
}

showComic();
