var fight = document.querySelector(".fight");

function startFight() {
  fight.innerHTML = "";
  document.body.querySelector(".reset").innerHTML = "";
  var attacks = [
    {
      name: "Fire",
      damage: 3,
      type: "fire"
    },
    {
      name: "Ice",
      damage: 1,
      type: "ice"
    },
    {
      name: "Poison",
      damage: 4,
      type: "poison"
    }
  ];

  var dragonHealth = 10;
  var dragonElement = document.createElement("div");
  var attack = document.createElement("attack");
  var trialElement = document.createElement("trialElement");
  dragonElement.innerHTML = "The dragon's Health is: " + dragonHealth;

  function buttonAttack(warList) {
    var attack = document.createElement("button");
    attack.innerHTML = warList.name;
    attack.addEventListener("click", trial);
    function trial() {
      attackDragon(warList.damage, warList.type, warList, attack);
    }
    fight.appendChild(attack);
  }

  function attackDragon(damage, type) {
    if (type === "fire") {
      dragonHealth = dragonHealth - (damage - 1);
    } else if (type === "ice") {
      dragonHealth = dragonHealth - (damage + 1);
    } else {
      dragonHealth = dragonHealth - damage;
    }
    
    dragonElement.innerHTML = "The dragon's health is: " + dragonHealth;

    if (dragonHealth <= 0) {
      document.body.querySelector(".reset").innerHTML =
        "The dragon has been defeated! You should play again!";
      dragonElement.innerHTML =
        "";
      document.body
        .querySelector(".reset")
        .addEventListener("click", function() {
          startFight();
        });
    } 
  } 

  for (var i = 0; i < attacks.length; i++) {
    buttonAttack(attacks[i]);
  }

 fight.appendChild(dragonElement);
} 

startFight();