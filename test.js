import { isOpenOn, nextOpeningDate } from "./shop.js";

const testDiv = document.getElementById("test");

const wednesday = "2024-02-21T07:45:00.000";
const thursday = "2024-02-22T12:22:11.824";
const saturday = "2024-02-24T09:15:00.000";
const sunday = "2024-02-25T09:15:00.000";
const friday_morning = "2024-02-23T08:00:00.000";
const monday_morning = "2024-02-26T08:00:00.000";
const thursday_afternoon = "2024-02-22T14:00:00.000";

testDiv.innerHTML = "======= isOpenOn tests =======<br><br>";
testDiv.innerHTML += "isOpenOn(wednesday) :<br>Awaited -> false<br>Got -> " + isOpenOn(wednesday);
testDiv.innerHTML += "<br><br>isOpenOn(thursday) :<br>Awaited -> false<br>Got -> " + isOpenOn(thursday);
testDiv.innerHTML += "<br><br>isOpenOn(sunday) :<br>Awaited -> false<br>Got -> " + isOpenOn(sunday);

testDiv.innerHTML += "<br><br>======= nextOpeningDate tests =======<br><br>";
testDiv.innerHTML += "nextOpeningDate(thursday_afternoon) :<br>Awaited -> friday_morning<br>Got -> " + nextOpeningDate(thursday_afternoon);
testDiv.innerHTML += "<br><br>nextOpeningDate(saturday) :<br>Awaited -> monday_morning<br>Got -> " + nextOpeningDate(saturday);
testDiv.innerHTML += "<br><br>nextOpeningDate(thursday) :<br>Awaited -> thursday_afternoon<br>Got -> " + nextOpeningDate(thursday);