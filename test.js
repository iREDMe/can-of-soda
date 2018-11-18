const soda = require('./index.js');
const Coke = new soda();

(async () => {
    try {
        console.log(await Coke.shake());
        console.log(await Coke.open());
        console.log(await Coke.refill());
        console.log(await Coke.drink());
        console.log(await Coke.refill());
        console.log(await Coke.shake());
        console.log(await Coke.shake());
    } catch (error) {
        console.log(error);
    }
})();