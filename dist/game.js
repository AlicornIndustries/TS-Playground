"use strict";
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Nonbinary"] = 2] = "Nonbinary";
    Gender[Gender["Other"] = 3] = "Other";
    Gender[Gender["Genderless"] = 4] = "Genderless";
})(Gender || (Gender = {}));
class Person {
    constructor(name, species, gender) {
        this._name = name;
        this._species = species;
        this._gender = gender;
        this._job = null;
    }
    get name() { return this._name; }
    get species() { return this._species; }
    get gender() { return this._gender; }
    get job() { return this._job; }
    addJob(job) {
        this._job = job;
    }
    details() {
        return `${this._name}, ${this._species.name}`;
    }
}
class Job {
    constructor(name) {
        this._name = name;
        this._xp = 0;
    }
    get name() { return this._name; }
    get xp() { return this._xp; }
    set xp(xp) {
        this._xp += xp;
    }
}
// FUTURE: having multiple jobs, in a JobList associative array?
class Species {
    constructor(name, isOrganic) {
        this._name = name;
        this.isOrganic = isOrganic;
    }
    get name() { return this._name; }
}
/* Setup & init */
const human = new Species("human", true);
const millersDrake = new Species("Miller's drake", true);
const litholid = new Species("litholid", false);
const alice = new Person("Alice", millersDrake, Gender.Female);
alice.addJob(new Job("farmer"));
window.onload = function () {
    console.log(alice.details());
    console.log(alice.name);
};
