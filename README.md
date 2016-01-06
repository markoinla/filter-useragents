# filter-useragents
A script that won't load certain analytics scripts depending on what user agent a visitor has.

Depending on your industry, your website may be subjected to constant bot traffic that might distort web analytics software. This script takes user agents you've identified as bots, and doesn't load your third-party analytics scripts if found.

**Instructions**

1. Add your user agents to the following string. You can get the user agents from your visitors by searching in your server logs or in Google Analytics.
`var bannedAgents = ['Chrome/21','Chrome/23','Chrome/27','Chrome/35','Firefox/21','Firefox/80','Firefox/10','MSIE 9','MSIE 8'];`

2. Add the location of the third-party analytics scripts here:
```javascript
else {   
$.getScript("http://www.YOURDOMAIN.com/js/GA.js");
$.getScript("http://www.YOURDOMAIN.com/js/Hubspot.js");
  console.log('Analytics scripts loaded.');
} 
```
