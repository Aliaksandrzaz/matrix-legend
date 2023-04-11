const form = document.body.querySelector('form');
const searchParams = new URLSearchParams(window.location.search);

const nameQuery = searchParams.get("name");
const dateQuery = searchParams.get("date");

if (nameQuery && dateQuery) {
    form.elements.name.value = nameQuery;
    form.elements.date.value = dateQuery;
}

form.addEventListener('submit', (event) => {
    const name = event.target.elements.name.value
    const date = event.target.elements.date.value

    searchParams.set("name", name);
    searchParams.set("date", date);
    window.location.search = searchParams.toString();
})
