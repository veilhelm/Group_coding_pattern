const {Wolf,predefinedStrategies,howlStrategies,runStrategies} = require("./Wolf_class");

const normalWolf= new Wolf("normal");

const mountainWolf= new Wolf("mountain");
mountainWolf.setHowlStrategy(howlStrategies.howlLoudStrategy);
mountainWolf.setRunStrategy(runStrategies.runFastStrategy);

console.log(mountainWolf.run(),mountainWolf.howl())

const husky= new Wolf("husky");
husky.setHowlStrategy(howlStrategies.howlLowStrategy);
husky.setRunStrategy(runStrategies.runSlowStrategy);

console.log(husky.run(),husky.howl());