
let msg = "";
let city = prompt("What is the name of your city?");

city = city.toLowerCase();

if (city === null || city === "") {
    alert("No city entered. Cannot determine delivery availability.");

}



else {
    switch(city) {
        case "johnstown": 
            msg = "We can have items delivered to you in 3 days.";
            break;
        case "donville":
            msg = "We can have items delivered to you in 1 week.";
            break;
        case "danieltown":
        case "martyville":
            msg = "We can have items delivered to you in 2 weeks.";
            break;
        default:
            msg = "Sorry! We do not deliver to your city yet.";
            break;
    }
}

document.write("<h1>"+ msg + "</h1>");