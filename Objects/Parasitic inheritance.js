function vehicle() {
    this.wheels = 0;
}
vehicle.prototype.drive = function() {
    this.ignition();
    console.log("Moving forward with " + this.wheels);
}

vehicle.prototype.ignition = function() {
    console.log("Starting engine");
}

function car() {
    var carVehicle = new vehicle();
    carVehicle.wheels = 4;
    var driveVehicle = carVehicle.drive;

    carVehicle.drive = function () {
        driveVehicle.call(this);
    }
    return carVehicle;
}

var myCar = new car();
myCar.drive();

/*
As you can see, we initially make a copy of the definition from the
Vehicle parent class (object), then mix in our child class (object) def‐
inition (preserving privileged parent-class references as needed), and
pass off this composed object car as our child instance.
*/