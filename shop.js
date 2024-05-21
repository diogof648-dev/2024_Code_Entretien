/**
 * @Author      : Diogo da Silva Fernandes
 * @Project     : 2024_Code_Entretien
 * @Date        : 20.05.2024
 * @Version     : 1.0
 * @Description : 
 */

import openDaysAndHours from "./openDaysAndHours.json" with { type: "json" };

const days = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat"
};

/**
 * This function is desgined to return if the shop is openned or closed depending on gived date/time
 * @param {string | Date} date 
 * @returns boolean
 */
function isOpenOn(date) {
    const currentDate = new Date(date);
    const currentDay = days[currentDate.getDay()];

    const openHours = openDaysAndHours[currentDay];

    let isOpen = false;
    openHours.forEach(element => {
        let openHour = element[0];
        let closeHour = element[1];
        openHour = openHour.split(":");
        closeHour = closeHour.split(":");

        const openTime = new Date(currentDate);
        openTime.setHours(openHour[0], openHour[1]);

        const closeTime = new Date(currentDate);
        closeTime.setHours(closeHour[0], closeHour[1]);

        // Checks if the current time is between open and close time
        if (currentDate >= openTime && currentDate <= closeTime) {
            isOpen = true;
            return;
        }
    })

    return isOpen;
}

/**
 * This function is designed to return the next opening date and hour depending on gived date/time
 * @param {string | Date} date 
 * @returns Date
 */
function nextOpeningDate(date) {
    let currentDate = new Date(date);
    let currentDay = days[currentDate.getDay()];
    let openHours = openDaysAndHours[currentDay];

    let firstOpenHour = openHours[0];
    firstOpenHour = firstOpenHour[0].split(':');
    let firstOpenTime = new Date(date);
    firstOpenTime.setHours(firstOpenHour[0], firstOpenHour[1]);

    // Check if current time is before first open hour
    if (currentDate < firstOpenTime) {
        return firstOpenTime;
    }

    // Check if in the current day, there is a second open time
    if (openHours.length === 2) {
        // Gets the second open time of the day
        openHours = openHours[1];
        const openHour = openHours[0].split(":");

        const nextOpening = new Date(currentDate);
        nextOpening.setHours(openHour[0], openHour[1]);

        // Compares the current time to the open hour
        if(currentDate < nextOpening) {
            return nextOpening;
        }
    }

    // Will add 1 day to current date until it finds a day with opening hours
    while (true) {
        // Sets the current date to precedent date + 1 day
        currentDate.setDate(currentDate.getDate() + 1);
        currentDay = days[currentDate.getDay()];
        openHours = openDaysAndHours[currentDay];

        if (openHours.length != 0) {
            openHours = openHours[0];
            const openHour = openHours[0].split(":");

            const nextOpening = new Date(currentDate);
            nextOpening.setHours(openHour[0], openHour[1]);

            return nextOpening;
        }
    }
}

export { isOpenOn, nextOpeningDate };