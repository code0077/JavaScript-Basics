function User() {
    this.name = null;
}
Object.defineProperty(User.prototype, "nameProp", {
    get : () => {
        console.log("Getter....");
        return this.name;
    },
    set : (value) => {
        console.log("Setter....");
        this.name = value;
    }
});
User.name = "Vamshi";
console.log(User.name + "hyy");
var obj = new User();
console.log(obj.nameProp);
obj.nameProp = "Manoj";
console.log(obj.nameProp);