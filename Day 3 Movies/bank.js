//noprotect

// Bank constructor
function Bank() {
    this.balance = 100;
}

// Bank prototype
Bank.prototype = {
    credit: function credit(amount) {
        this.balance += amount;
    },
    debit: function debit(amount){
        this.balance -= amount;
    }
};

// Create new bank object
var newBank = new Bank();

// Prompt for credit amounts
for(var i = 0; i<3; i++) {

    var num = parseInt(prompt("Please enter a number to be credited."), 10);

    while(isNaN(num)) {
        var num = parseInt(prompt("That is not a number, please enter a number credited."), 10);
    }

    newBank.credit(num);
}

// Prompt for debit amounts
for(var i = 0; i<2; i++) {

    var num = parseInt(prompt("Please enter a number debited."), 10);

    while (isNaN(num)) {
        var num = parseInt(prompt("That is not a number, please enter a number debited."), 10);
    }

    newBank.debit(num);
}

console.log("Balance: " + newBank.balance);