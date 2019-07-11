var createPet = function (name) {
    var sex;
    return {
        setName: function (newName) {
            name = newName;
        },

        getName: function () {
            return name;
        },

        getSex: function () {
            return sex;
        },

        setSex: function (newSex) {
            if (typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
                newSex.toLowerCase() === 'female')) {
                sex = newSex;
            }
        }
    }
}

var pet = createPet('Vivie');
pet.getName();                  // Vivie

pet.setName('Oliver');
pet.setSex('male');
pet.getSex();                   // male
pet.getName();                  // Oliver

function c() {
    v = 100;
    this.value = 1000;
}
var obj = new c();
console.log(obj.v); // undefined
console.log(obj.value); // 1000