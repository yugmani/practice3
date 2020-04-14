let items = 0;

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
            items = 10;
            break;
        case "donville":
            msg = "We can have items delivered to you in 1 week.";
            items = 5;
            break;
        case "danieltown":
        case "martyville":
            msg = "We can have items delivered to you in 2 weeks.";
            items = 2
            break;
        default:
            msg = "Sorry! We do not deliver to your city yet.";
            items = 0;
            break;
    }
}

document.write("<h1>" + msg+ "</h1>");
if ( items > 0 ) {
        document.write(
            "<p>We can deliver up to " + items + " items to your city. </p>"
            );
        document.write(
            "<p>Print this out, write your item numbers below, " +
            "and mail it to us to OverconstrainedError.</p> "
            );

        for (let count =1; count <= items; count ++) {
            document.write(count + ".---------------------- <br>");
        }
    }
