$(document).ready(() => {
    fetch(`https://api.quotable.io/random`).then(quote =>
        quote.json()
    ).then(result => {
        const ele = document.querySelector("#quote p");
        ele.textContent = result.content;
    })
});