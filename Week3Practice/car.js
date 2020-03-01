class car{
    constructor(){
        console.log("inside Car Constructor")
    }
    wheels=4
    fuelcapacity=10
    move(){
        console.log("Car moving")
    }
    start(){
        console.log("car starting")
    }

    name(type){
        console.log(type+ "car")
    }

}

class bwm extends car{
    

}

exports.bwm=bwm
