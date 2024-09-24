'use strict';

let ladder = {
    step: 3,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () {
        alert(this.step);
        return this;
    },
};
ladder.up().up().down().showStep();
