const {Cat} = require("./cat_class")

Cat.prototype.eat = function(typeOfFood) {
    return this.eatStrategy.eat(typeOfFood)
}

