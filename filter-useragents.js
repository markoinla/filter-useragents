var userAgent = navigator.userAgent; // Checks the user agent

// These are the user agents being filtered
var bannedAgents = ['Chrome/21','Chrome/23','Chrome/27'];

if (new RegExp(bannedAgents.join("|")).test(userAgent)) {
console.log('Banned agent detected.');
}
else {    // Your analytics script locations
$.getScript("http://www.YOURDOMAIN.com/js/GA.js");
$.getScript("http://www.YOURDOMAIN.com/js/Hubspot.js");
  console.log('Analytics scripts loaded.');
}
