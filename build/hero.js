"use strict";
class Hero {
    constructor(name, power, life) {
        this.name = name;
        this.power = power;
        this.life = life;
    }
    attack(opponent) {
        opponent.life -= this.power;
    }
    isAlive() {
        if (this.life > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
const hero1 = new Hero("Hero1", 20, 100);
const hero2 = new Hero("Hero2", 15, 100);
console.log(`${hero1.name} attack ${hero2.name}`);
hero1.attack(hero2);
console.log(`${hero2.name} : ${hero2.isAlive()}`);
console.log(`${hero2.name} have ${hero2.life}`);
console.log(`${hero1.name} attack ${hero2.name}`);
hero1.attack(hero2);
console.log(`${hero2.name} : ${hero2.isAlive()}`);
console.log(`${hero2.name} have ${hero2.life}`);
console.log(`${hero1.name} attack ${hero2.name}`);
hero1.attack(hero2);
console.log(`${hero2.name} : ${hero2.isAlive()}`);
console.log(`${hero2.name} have ${hero2.life}`);
console.log(`${hero1.name} attack ${hero2.name}`);
hero1.attack(hero2);
console.log(`${hero2.name} : ${hero2.isAlive()}`);
console.log(`${hero2.name} have ${hero2.life}`);
console.log(`${hero1.name} attack ${hero2.name}`);
hero1.attack(hero2);
console.log(`${hero2.name} : ${hero2.isAlive()}`);
console.log(`${hero2.name} have ${hero2.life}`);
console.log(`${hero1.name} attack ${hero2.name}`);
hero1.attack(hero2);
console.log(`${hero2.name} : ${hero2.isAlive()}`);
console.log(`${hero2.name} have ${hero2.life}`);
