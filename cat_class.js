
//-------------Cat constructor------------------
class Cat {
    constructor(type, typeOfFood) {
        this.type = type
        this.typeOfFood = typeOfFood
        this.eatStrategy = ""
    }
    setEatStrategy = function(strategy){
        this.eatStrategy = strategy
    }
}

module.exports = {
    Cat
}