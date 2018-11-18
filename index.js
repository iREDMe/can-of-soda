/**
 * A new can of soda.
 */
class CanOfSoda {
    constructor() {
        this.opened = false;
        this.shook = false;
        this.filled = true;
        this.intact = true;
    }

    /**
     * Open the soda in 2 seconds.
     * @returns {Promise<string>}
     */
    open() {
        return new Promise((resolve, reject) => {
            if (!this.intact) {
                reject(SodaError('NOT_INTACT'))
            } else if (this.opened) {
                reject(SodaError('OPEN'));
            } else {
                setTimeout(() => {
                    if (this.shook) {
                        this.opened = true;
                        this.filled = false;
                        resolve(`The contents spewed out due to it being shaken.`);
                    }
                    this.opened = true;
                    resolve('Successfully opened the soda.')
                }, 2000);
            }
        });
    }

    /**
     * Shake the can for 4 seconds.
     * @returns {Promise<string>}
     */
    shake() {
        return new Promise((resolve, reject) => {
            if (!this.intact) {
                reject(SodaError('NOT_INTACT'));
            } else if (!this.filled) {
                reject(SodaError('NOT_FILLED'));
            } else {
                setTimeout(() => {
                    if (this.opened) {
                        this.filled = false;
                        resolve('Shaken while open; Contents have been lost.');
                    } else if (this.shook) {
                        this.filled = this.intact = false;
                        this.opened = true;
                        resolve('Shaking it twice caused the Soda Can to no longer be intact.');
                    } else {
                        this.shook = true;
                        resolve('Soda Can has been shaken.');
                    }
                }, 4000);
            }
        });
    }

    /**
     * Drink the Soda in 3.5 seconds.
     * @returns {Promise<string>}
     */
    drink() {
        return new Promise((resolve, reject) => {
            if (!this.intact) {
                reject(SodaError('NOT_INTACT'));
            } else if (!this.opened) {
                reject(SodaError('NOT_OPEN'));
            } else if (!this.filled) {
                reject(SodaError('NOT_FILLED'));
            } else {
                setTimeout(() => {
                    this.filled = false;
                    resolve(`The contents have been drunk.`);
                }, 3500);
            }
        });
    }

    /**
     * Refill the soda in 3 seconds.
     * @returns {Promise<string>}
     */
    refill() {
        return new Promise((resolve, reject) => {
            if (!this.intact)
                reject(SodaError('NOT_INTACT'));
            else if (this.filled)
                reject(SodaError('FILLED'));
            else if (!this.opened) 
                reject(SodaError('NOT_OPEN'));
            else
                setTimeout(() => {
                    this.filled = true;
                    resolve('The Soda Can is now refilled.');
                }, 3000);
        });
    }
}

function SodaError(e) {
    const obj = {
        NOT_INTACT: 'Soda Can not intact.',
        FILLED: 'Soda Can already filled.',
        NOT_FILLED: 'Soda Can not filled.',
        NOT_OPEN: 'Soda Can is not open.',
        OPEN: 'Soda can already open.',
    }

    return obj[e] || '???';
}

module.exports = CanOfSoda;