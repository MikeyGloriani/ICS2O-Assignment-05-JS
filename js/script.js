// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Template-PWA/sw.js", {
    scope: "/ICS2O-Template-PWA/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  var number = parseFloat(document.getElementById("number-input").value)
  var sum = 0
  var counter = 0
  var loop = 0

  for (let loop = 0; loop < number; ) {
    loop++
    sum = sum * (sum - 1)
    document.getElementById("hello-world").innerHTML =
      "You get " + sum + ".<br>"
  }
}
