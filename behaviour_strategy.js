const EatingFastStrategy = function () {
    this.eat = function(typeOfFood){
        return `this cat eats fast and nervious and is eating ${typeOfFood}`
    }
}
const EatingSlowStrategy = function () {
    this.eat = function(typeOfFood){
        return `this cat eats slow and is eating ${typeOfFood}`
    }
}

const eatingFastStrategy = new EatingFastStrategy()
const eatingSlowStrategy = new EatingSlowStrategy()

module.exports = {
    eatingFastStrategy,
    eatingSlowStrategy
}