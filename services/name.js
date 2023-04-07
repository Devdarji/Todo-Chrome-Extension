$(document).ready(() => {
    // Get data from local storage
    chrome.storage.local.get(["name"], (data) => {
        if (data.name) {
            console.log("data", data);
            changeName(data.name);
        }
    });

    //   when press key remove input box and show title value
    $("#name input").keypress((event) => {
        if (event.which == 13) {
            const name = event.currentTarget.value;
            console.log("name", name);

            if (name) {
                changeName(name);
                chrome.storage.local.set({ name: name });
            }
        }
    });

    // Change block to title value
    function changeName(name) {
        $("#name div.control").remove();
        $("#name").append(`<h1 class="title has-text-white">Hey, ${name}!</h1>`);
    }
});
