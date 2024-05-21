import { isOpenOn, nextOpeningDate } from "./shop.js";

// Updates the DOM
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const textDiv = document.getElementById("text");
    const currentTime = new Date;

    if (isOpenOn(currentTime)) {
        body.classList.add("openned");

        textDiv.innerHTML = "The shop is currently openned !";
    } else {
        body.classList.add("closed");

        textDiv.innerHTML = "The shop is currently closed !";
    }

    const nextOpening = nextOpeningDate(currentTime);
    // Transform hours and minutes to 2-digits format
    const hours = String(nextOpening.getHours()).padStart(2, "0");
    const minutes = String(nextOpening.getMinutes()).padStart(2, "0");
    // Gets the long day name
    const day = new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(nextOpening);

    let text = "<br><span class=\"little\">Next openning : ";
    text += day + ", from " + hours + ":" + minutes;
    text += "</span>";

    textDiv.innerHTML += text;
});