// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

function doMathClicked() {
  document.getElementById("add-math").innerHTML =
    "<p>6 + 5 = " + (6 + 5) + "</p>"
  document.getElementById("subtract-math").innerHTML =
    "<p>7 - 3 =  " + (7 - 3) + "</p>"
  document.getElementById("multiply-math").innerHTML =
    "<p>3 + 4 × 2 = " + (3 + 4 * 2) + "</p>"
  document.getElementById("divide-math").innerHTML =
    "<p>(4 ÷ 2) + 3 = " + (4 / 2 + 3) + "</p>"
  document.getElementById("exponent-math").innerHTML =
    "<p>5 + 2³ = " + (5 + 2 ** 3) + "</p>"
}

function calculateClicked() {
  document.getElementById("area-math").innerHTML =
    "<p>The area is: " + 3 * 5 + " cm².</p>"
  document.getElementById("perimeter-math").innerHTML =
    "<p>The perimeter is: " + 2 * (3 + 5) + " cm.</p>"
}
