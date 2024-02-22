/*45 Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. It should then accept an 
arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/
function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): object {
    const car: { [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add optional key-value pairs to the car object
    options.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Call the function with required and optional information
const myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);
console.log(myCar);

