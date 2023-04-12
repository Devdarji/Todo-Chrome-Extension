$(document).ready(() => {
    const date = new Date();
    const hour = date.getHours();

    let greeting;
    if (hour < 12) {
        greeting = "morning";
    } else if (hour < 17) {
        greeting = "afternoon";
    } else {
        greeting = "evening";
    }

    // time wise greeting with user name if name else without name
    chrome.storage.local.get(null, (data) => {
        if (data.name){
            $(".greeting").append(`<h1>Hello ${data.name}, and welcome! I hope you're currently enjoying a pleasant ${greeting}.</h1>`);
        }else{
            $(".greeting").append(`<h1>Hello, and welcome! I hope you're currently enjoying a pleasant ${greeting}.</h1>`);
        }
        
    });
    
        
})

