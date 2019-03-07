class OldSyntax {
    constructor() {
        this.name = "Mike";
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi my name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;  // Require this binding
console.log(getGreeting());

// ___________________ //

class NewSyntax {
    name = "Jenny";
    getGreeting = () => {
        return `Hi my name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;   // this binding not require
console.log(newGetGreeting());

/*



.babelrc file = "plugins": [
                    "transform-class-properties"
                ]

*/