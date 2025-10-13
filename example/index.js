// Dependencies
const GitStats = require("../lib");

// Create the GitStats instance
const g1 = new GitStats();

// Display the ansi calendar
g1.ansiCalendar({
    theme: "DARK"
}, function (err, data) {
    console.log(err || data);
});
