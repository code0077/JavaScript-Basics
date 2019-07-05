function Brick() {
    this.width = 60,
        this.height = 70
}

function Builder() {
    Brick.call(this);
    this.name = "balu";
}

var builderObj = new Builder();

iterate(builderObj);

// Updating Brick values.
Brick.width = 90;
Brick.height = 100;

// No change in values for Builder
iterate(builderObj);



function University(studentName) {
    this.name = "Osmania";
    this.stuName = studentName;
}

function Student(name) {
    University.call(this, name);
}

var stuObj = new Student("vamshi");
iterate(stuObj);

function iterate(object) {
    Object.keys(object).forEach((element, index) => {
        console.log(element, "=", object[element], "index=", index);
    });
}