const {eatingNormalStrategy} = require("./behaviour_strategy")
//-------------Cat constructor------------------
class Cat {
    constructor(type, typeOfFood) {
        this.type = type
        this.typeOfFood = typeOfFood
        this.eatStrategy = eatingNormalStrategy
    }

    setEatStrategy(strategy) {
        this.eatStrategy = strategy
    }

    eat() {
        return this.eatStrategy.eat(this.typeOfFood)
    }
}

module.exports = {
    Cat
}