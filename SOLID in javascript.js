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
