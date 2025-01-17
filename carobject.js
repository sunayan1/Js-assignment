const car = {
    brand: "Toyota",
    model: "Corolla",
    getDetails: function() {
        return `This car is a ${this.brand} ${this.model}`;
    }
};

console.log(car.getDetails()); 