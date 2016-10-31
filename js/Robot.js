"use strict";
/* jshint -W079 */

var Arena = (function(arena) {
  arena.Robots = {};

  arena.Robots.Robot = function() {
    this.name = "";
    this.damage = 0;
    this.health = 0;
  };

  arena.Robots.Drone = function() {
    this.type = 'aerial';
  };

  arena.Robots.Drone.prototype = new arena.Robots.Robot();

  arena.Robots.QuadCopter = function() {
    this.damage = Math.floor(Math.random() * (23 - 15 + 1) + 15);
    this.health = Math.floor(Math.random() * (100 - 60 + 1) + 60);
    this.weapon = "Spinning Blade";
  };

  arena.Robots.QuadCopter.prototype = new arena.Robots.Drone();

  arena.Robots.Spaceship = function() {
    this.damage = Math.floor(Math.random() * (33 - 22 + 1) + 22);
    this.health = Math.floor(Math.random() * (80 - 50 + 1) + 50);
    this.weapon = "Laser Beam";
  };

  arena.Robots.Spaceship.prototype = new arena.Robots.Drone();

  arena.Robots.Bipedal = function() {
    this.type = 'ground';
  };

  arena.Robots.Bipedal.prototype = new arena.Robots.Robot();

  arena.Robots.Walker = function() {
    this.damage = Math.floor(Math.random() * (23 - 22 + 1) + 22);
    this.health = Math.floor(Math.random() * (125 - 80 + 1) + 80);
    this.weapon = "Cane";
  };

  arena.Robots.Walker.prototype = new arena.Robots.Bipedal();

  arena.Robots.Terror = function() {
    this.damage = Math.floor(Math.random() * (35 - 2 + 1) + 2);
    this.health = Math.floor(Math.random() * (115 - 85 + 1) + 85);
    this.weapon = "Tail Swipe";
  };

  arena.Robots.Terror.prototype = new arena.Robots.Bipedal();

  arena.Robots.ATV = function() {
    this.type = 'ground';
  };

  arena.Robots.ATV.prototype = new arena.Robots.Robot();

  arena.Robots.FOURBYFOUR = function() {
    this.damage = Math.floor(Math.random() * (85 - 45 + 1) + 45);
    this.health = Math.floor(Math.random() * (160 - 30 + 1) + 30);
    this.weapon = "Throat Punch";
  };

  arena.Robots.FOURBYFOUR.prototype = new arena.Robots.ATV();

  arena.Robots.BullDozer = function() {
    this.damage = Math.floor(Math.random() * (35 - 12 + 1) + 12);
    this.health = Math.floor(Math.random() * (200 - 150 + 1) + 150);
    this.weapon = "Blade";
  };

  arena.Robots.BullDozer.prototype = new arena.Robots.ATV();

  return arena;
})(Arena || {});
