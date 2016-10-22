"use strict";

const robotModels = ['QuadCopter', 'Spaceship', 'Walker', 'Terror', 'FOURBYFOUR', 'BullDozer'];

let Battle = function(){
  this.player = null;
  this.enemy = null;
};

$(document).ready(function() {

  const $playerName = $('#player-name');
  const $enemyName = $('#enemy-name');
  const $playerRobot = $('#player-robot');
  const $enemyRobot = $('#enemy-robot');
  const $beginBattleBtn = $('#begin-battle-btn');
  const $attackBtn = $('#attack-btn');
  const $battleLog = $('#battle-log');

  $attackBtn.hide();

  //populate selects
  robotModels.map((model)=>{
    $playerRobot.append($("<option />").val(model).text(model));
    $enemyRobot.append($("<option />").val(model).text(model));
  });

  $beginBattleBtn.click(()=>{
    let selectedPlayerRobot = $playerRobot.val();
    let selectedEnemyRobot = $enemyRobot.val();
    Battle.player = new Arena.Robots[selectedPlayerRobot]();
    Battle.enemy = new Arena.Robots[selectedEnemyRobot]();
    Battle.player.name = $playerName.val();
    Battle.enemy.name = $enemyName.val();
    $attackBtn.show();
    $beginBattleBtn.hide();
  });

  $attackBtn.click(() => {
    attack();
  });

  function attack() {
    Battle.enemy.health -= Battle.player.damage;
    console.log("enemy health", Battle.enemy.health);
    if(Battle.enemy.health < 1){
      $battleLog.html(`${Battle.player.name} attacks ${Battle.enemy.name} with ${Battle.player.weapon} for ${Battle.player.damage} and wins!`);
      return;
    }
    Battle.player.health -= Battle.enemy.damage;
    if(Battle.player.health < 1){
      $battleLog.html(`${Battle.enemy.name} attacks ${Battle.player.name} with ${Battle.enemy.weapon} for ${Battle.enemy.damage} and wins!`);
      return;
    }

    $battleLog.html(`
      <div>${Battle.player.name} attacks ${Battle.enemy.name} with ${Battle.player.weapon} for ${Battle.player.damage}!</div>
      <div>${Battle.enemy.name} attacks ${Battle.player.name} with ${Battle.enemy.weapon} for ${Battle.enemy.damage}!</div>
    `);
  }
});
