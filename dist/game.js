"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Nonbinary"] = 2] = "Nonbinary";
    Gender[Gender["Other"] = 3] = "Other";
    Gender[Gender["Genderless"] = 4] = "Genderless";
})(Gender || (Gender = {}));
// Exploring mixins
class Entity {
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name; }
}
function Attacker(Base) {
    return class Attacker extends Base {
        attack() {
            console.log("attacked!");
        }
    };
}
function Mover(Base) {
    return class Mover extends Base {
        move() {
            console.log("moved!");
        }
    };
}
// Flier can only be added to a Mover (needs type Mover declaration above)
function Flier(Base) {
    return class Flier extends Base {
        fly() {
            console.log("flew!");
        }
    };
}
const AttackerEntity = Attacker(Entity);
const wolf = new AttackerEntity("Wolf");
/*
class Person {
    private _name: string;
    get name() {return this._name}
    private _species: Species;
    get species() {return this._species}
    private _gender: Gender;
    get gender() {return this._gender}
    private _job: Job | null;
    get job() {return this._job}


    constructor(name: string, species: Species, gender: Gender) {
        this._name = name;
        this._species = species;
        this._gender = gender;
        this._job = null;
    }

    addJob(job: Job) {
        this._job = job;
    }

    details() {
        return `${this._name}, ${this._species.name}`
    }

}

class Job {
    private _name: string;
    get name() {return this._name}

    private _xp: number; // FUTURE: level up
    get xp() {return this._xp}
    set xp(xp: number) {
        this._xp += xp;
    }

    constructor(name: string) {
        this._name = name;
        this._xp = 0;
    }
}

// FUTURE: having multiple jobs, in a JobList associative array?

class Species {
    private _name: string;
    get name() {return this._name}
    isOrganic: boolean;
    constructor(name: string, isOrganic: boolean) {
        this._name = name;
        this.isOrganic = isOrganic
    }
}
*/
/* Setup & init */
// const human = new Species("human",true);
// const millersDrake = new Species("Miller's drake",true)
// const litholid = new Species("litholid",false)
// const alice = new Person("Alice",millersDrake,Gender.Female)
// alice.addJob(new Job("farmer"))
window.onload = function () {
};
