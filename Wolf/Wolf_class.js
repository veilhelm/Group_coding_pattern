//--------------------------Wolf Class------------------------------------------------

class Wolf{
    constructor(kind){
        this.kind= kind
        this.howlStrategy=predefinedHowlStrategy
        this.runStrategy=predefinedRunStrategy
    }
}

//--------------------predefined strategies-------------------------------------------

const PredefinedHowlStrategy= function (){
    this.howl= function (){
        return `this wolf is howling normally`;
    }
}

const PredefinedrunStrategy= function (){
    this.run= function (){
        return `this wolf is running normally`;
    }
}

const predefinedHowlStrategy = new PredefinedHowlStrategy();
const predefinedRunStrategy = new PredefinedrunStrategy();

//------------------------setting Howl Strategys---------------------------------------

Wolf.prototype.setHowlStrategy = function (strategy){
    return this.howlStrategy= strategy;
}
Wolf.prototype.setRunStrategy = function(strategy){
    return this.runStrategy= strategy;
}

//-------------------------Wolf methods-------------------------------------------------

Wolf.prototype.howl= function(){
    return this.howlStrategy.howl();
}
Wolf.prototype.run= function(){
    return this.runStrategy.run();
}

//-----------------------Howling strategys-------------------------------------------------

const HowlLoudStrategy= function (){
    this.howl= function (){
        return `This wolf is howling loudly`
    }
}
const HowlLowStrategy= function(){
    this.howl= function(){
        return `this wolf is howling lowly`
    }
}

//---------------------Running Strategys------------------------------------------------------

const RunFastStrategy= function (){
    this.run= function (){
        return `This wolf is running fast`
    }
}

const RunSlowStrategy= function (){
    this.run= function (){
        return `This wolf is running slowly`
    }
}

//-----------------------instances of the Strategys--------------------------------------------------

const howlLoudStrategy = new HowlLoudStrategy();
const howlLowStrategy = new HowlLowStrategy();

const runFastStrategy = new RunFastStrategy();
const runSlowStrategy = new RunSlowStrategy();

module.exports = {
    Wolf,
    predefinedStrategies:{
        predefinedHowlStrategy,
        predefinedRunStrategy
    },
    howlStrategies:{
        howlLoudStrategy,
        howlLowStrategy
    },
    runStrategies:{
        runFastStrategy,
        runSlowStrategy
    }

}