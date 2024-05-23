var outResult= document.getElementById("output")



class r {
    constructor(,model  ) {
        this.brand=brand;
        this.model=model; 
    }
    drive() {
       console.log("hhhhhhhhhhhhh")
    }
}

//const myCar = new Car( "chofrolet", "joy") ;
//outResult.innerHTML = myCar.brand
//myCar.drive()


class Circle {
    // Constructor that takes the radius as a parameter
    constructor(radius) {
        // Instance variable to store the radius of the circle
        this.radius = radius;
    }

    // Getter method to retrieve the radius
    get radius() {
        return this._radius;
    }

    // Setter method to set a new value for the radius
    set radius(radius) {
        this._radius = radius;
    }

    // Example of a method to calculate the area of the circle
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

const myCircle = new Circle(5);
console.log("Radius:", myCircle.radius);
console.log("Area:", myCircle.calculateArea());

// Changing the radius using the setter method
myCircle.radius = 7;
console.log("New Radius:", myCircle.radius);
console.log("New Area:", myCircle.calculateArea());