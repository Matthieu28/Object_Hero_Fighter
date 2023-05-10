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
// console.log(`${hero1.name} attack ${hero2.name}`);
// hero1.attack(hero2);
// console.log(`${hero2.name} : ${hero2.isAlive()}`);
// console.log(`${hero2.name} have ${hero2.life}`);
// console.log(`${hero1.name} attack ${hero2.name}`);
// hero1.attack(hero2);
// console.log(`${hero2.name} : ${hero2.isAlive()}`);
// console.log(`${hero2.name} have ${hero2.life}`);
// console.log(`${hero1.name} attack ${hero2.name}`);
// hero1.attack(hero2);
// console.log(`${hero2.name} : ${hero2.isAlive()}`);
// console.log(`${hero2.name} have ${hero2.life}`);
// console.log(`${hero1.name} attack ${hero2.name}`);
// hero1.attack(hero2);
// console.log(`${hero2.name} : ${hero2.isAlive()}`);
// console.log(`${hero2.name} have ${hero2.life}`);
// console.log(`${hero1.name} attack ${hero2.name}`);
// hero1.attack(hero2);
// console.log(`${hero2.name} : ${hero2.isAlive()}`);
// console.log(`${hero2.name} have ${hero2.life}`);
class Weapon {
    constructor(name) {
        this.name = name;
    }
}
class HeroAxe extends Hero {
    constructor(name, power, life) {
        super(name, power, life);
        this.weapon = new Weapon("Axe");
    }
    attack(opponent) {
        if (opponent instanceof HeroSword) {
            opponent.life -= this.power * 2;
        }
        else {
            opponent.life -= this.power;
        }
    }
}
class HeroSword extends Hero {
    constructor(name, power, life) {
        super(name, power, life);
        this.weapon = new Weapon("Sword");
    }
    attack(opponent) {
        if (opponent instanceof HeroSpear) {
            opponent.life -= this.power * 2;
        }
        else {
            opponent.life -= this.power;
        }
    }
}
class HeroSpear extends Hero {
    constructor(name, power, life) {
        super(name, power, life);
        this.weapon = new Weapon("Spear");
    }
    attack(opponent) {
        if (opponent instanceof HeroAxe) {
            opponent.life -= this.power * 2;
        }
        else {
            opponent.life -= this.power;
        }
    }
}
const heroWeapon1 = new HeroAxe("Axe", 10, 100);
const heroWeapon2 = new HeroSword("Sword", 15, 150);
const heroWeapon3 = new HeroSpear("Spear", 20, 75);
console.log(`${heroWeapon1.name} attack ${heroWeapon2.name}`);
heroWeapon1.attack(heroWeapon2);
console.log(`Life : ${heroWeapon2.life}`);
console.log(`${heroWeapon1.name} attack ${heroWeapon2.name}`);
heroWeapon1.attack(heroWeapon2);
console.log(`Life : ${heroWeapon2.life}`);
console.log(`${heroWeapon1.name} attack ${heroWeapon2.name}`);
heroWeapon1.attack(heroWeapon2);
console.log(`Life : ${heroWeapon2.life}`);
console.log(`${heroWeapon1.name} attack ${heroWeapon3.name}`);
heroWeapon1.attack(heroWeapon3);
console.log(`Life : ${heroWeapon3.life}`);
console.log(`${heroWeapon1.name} attack ${heroWeapon3.name}`);
heroWeapon1.attack(heroWeapon3);
console.log(`Life : ${heroWeapon3.life}`);
console.log(`${heroWeapon1.name} attack ${heroWeapon3.name}`);
heroWeapon1.attack(heroWeapon3);
console.log(`Life : ${heroWeapon3.life}`);
