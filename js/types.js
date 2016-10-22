"use strict";

var Robot = (function (robot){

robot.Types = {};

/*
  Base function for a player, or enemy, class (profession)
 */
robot.Types.Drone = function() {
  this.type = "aerial";
};

robot.Types.Bipedal = function() {
this.type = "ground";
};


robot.Types.Drone.prototype = new robot.Types.();





return robot;
})(Robot || {});
