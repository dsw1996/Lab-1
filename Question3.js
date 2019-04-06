var vehicleName = "K10";

function printVehicleName() {

    console.log(vehicleName);

};

var vehicle ={

    "vehicleName":"Hustler",
    "getVehicleName" : function(){
        printVehicleName();
    }

};
vehicle.getVehicleName();

// Correction

var vehicle ={

    "vehicleName":"Hustler",
    "getVehicleName" : function(){
        console.log(this.vehicleName);
    }

};
vehicle.getVehicleName();
