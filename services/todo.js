$(document).ready(() => {

    getAllTodos();

    // when press key remove input box and show title value
    $("#todo input").keypress((event) => {
        if (event.which == 13) {
            const todo = event.currentTarget.value;
            console.log("todo", todo);

            if (todo) {
                addTodo(todo);
                event.currentTarget.value = "";
            }
        }
    });

    // click on checkbox to remove item
    $("body").on("click", "input[type='checkbox']", (ele) => {
        const itemToRemove = ele.currentTarget.attributes.id.value;
        removeTodo(itemToRemove)
    })
});

// Remove todo item function
function removeTodo(itemKey) {
    chrome.storage.local.remove(itemKey, () => {
        $(`li#${itemKey}`).remove();
    })
}

// Get all todos function
function getAllTodos() {
    chrome.storage.local.get(null, (item) => {

        console.log("item", item);
        for (let [key, value] of Object.entries(item)) {
            if (key != "name") {
                let ui = `<li class="has-text-white" id="${key}">
                            <label class="label-text">
                                <input type="checkbox"  id="${key}"/>
                                ${value}
                            </label>
                        </li>`
                $("#todoSection").append(ui)
            }
        }
    })
}

// create uuid for todo item
function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

// add todo item function
function addTodo(todoItem) {
    const key = uuidv4();
    chrome.storage.local.set({
        [key]: todoItem
    })

    let ui = `<li id="${key}" class="has-text-white">
                    <label class="label-text">
                        <input type="checkbox" id="${key}" />
                        ${todoItem}
                    </label>
                </li>`

    $("#todoSection").append(ui)
}


