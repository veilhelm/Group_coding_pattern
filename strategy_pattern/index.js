const {Cat} = require("./cat_class")
const {eatingfastStrategy, eatingSlowStrategy} = require("./behaviour_strategy")

const extractedInfo = []
const thereIsFood = true
const cats = []

extractedInfo.push({type :"wildCat", typeOfFood: "rats"})
extractedInfo.push({type :"houseCat", typeOfFood: "cans"})
extractedInfo.push({type :"streetCat", typeOfFood: "grumbs"})

const wildCat = new Cat(extractedInfo[0].type, extractedInfo[0].typeOfFood)
wildCat.setEatStrategy(thereIsFood ? eatingfastStrategy : eatingSlowStrategy)


cats.forEach(cat => cat.eat())
