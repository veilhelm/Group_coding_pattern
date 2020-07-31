const {Cat} = require("./cat_class")
const {eatingFastStrategy, eatingSlowStrategy} = require("./behaviour_strategy")

const state = {}

//----------variables given by the client--------------------------------------------------------------------------------------------
state.isThereFood = false
state.weather = "sunny"
state.cats = [{type :"wildCat", typeOfFood: "rats"},{type :"houseCat", typeOfFood: "cans"}, {type :"streetCat", typeOfFood: "grumbs"}]
state.catNumber = 0
//------------------------------------------------------------------------------------------------------------------------------------

const catParams = state.cats[state.catNumber]
const catToRender = new Cat(catParams.type, catParams.typeOfFood)

if(state.isThereFood && state.weather === "sunny") catToRender.setEatStrategy(eatingSlowStrategy)
if(!state.isThereFood && state.weather === "cloudy") catToRender.setEatStrategy(eatingFastStrategy)

console.log(catToRender.eat())
