// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-05-JS/sw.js", {
    scope: "/ICS2O-Assignment-05-JS/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  var number = parseFloat(document.getElementById("number-input").value)
  var sum = 1

  for (let loop = 1; loop <= number; loop++) {
    sum *= loop
    document.getElementById("hello-world").innerHTML =
      "You get " + sum + ".<br>"
  }
  if (number == 0) {
    document.getElementById("hello-world").innerHTML =
      "You get 1"
  }
}
