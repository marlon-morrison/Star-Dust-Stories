"use strict";

var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerHTML = timeStr;
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth() + 1;
var mapNum = ((2 * thisMonth + thisHour) % 24);
var imgStr = "<img src='media/sd_sky"+mapNum+".png' alt=''>";
document.getElementById("planisphere").insertAdjacentHTML("afterbegin",imgStr);