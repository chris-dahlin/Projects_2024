function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    // this.clean = function () {
    //     alert("Cleaning in progress");
    // }
}


// var houseKeeper1 = {
//     yearOfExperience: 12,
//     name: "Jane",
//     cleaningRepertoire: ["bathroom", "lobby", "bedroom"],
// }


function HouseKeeper(yearOfExperience, name, cleaningRepertoire) {
    this.yearOfExperience = yearOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function () {
        alert("Cleaning in progress");
    }
}
