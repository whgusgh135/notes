// SINGLE RESPONSIBILITY PRINCIPLE
// A class should have one, and only one, reason to change

// Bad approach
function createUserBadWay(name, email) {
    let isEmailValid = validateEmail(email);
    if (isEmailValid) {
        createUserInDatabase(name, email);
    }
}

// Good approach
function createUserGoodWay(name, email) {
    createUserInDatabase(name, email);
}

function validateRequest(req) {
    let isEmailValid = validateEmail(req.mail);
    if (isEmailValid) {
        createUserGoodWay(req.name, req.email);
    }
}


// OPEN/CLOSED PRINCIPLE
// Software entities (classes, modules, functions, etc) should be
// open for extension, but closed for modification

// Bad approach
function announceBad(collection) {
    collection.items.forEach(element => console.log(element));
}

let cities = ["Seoul", "Daegu", "Busan"];
announceBad(cities);
// what if we change cities to object rater than array?

// Good approach
function announceGood(collection) {
    collection.logItems();
}

let cities = {
    items: {
        "Korea": "Seoul",
        "NewZealand": "Wellington"
    },

    logItems: () => {
        Object.keys(this.items).forEach(key => {console.log(this.items[key])})
    }
}