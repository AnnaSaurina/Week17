const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];


//   создаю класс Transport
class Transport {
    constructor(type,price,brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo() {
        return this.type, this.brand
    } 

    getPrice() {
        return this.price
    }
}

//   создаю класс Car, наследственный от класса Transport 
class Car extends Transport {
    constructor(type,price,brand,doors) {
        super (type,price,brand)
        this.doors = doors;
    }
    getDoorsCount() {
        return this.doors;
    }
}

//   создаю класс Bike, наследственный от класса Transport 
class Bike extends Transport {
    constructor(type,price,brand,doors,maxSpeed) {
        super (type,price,brand,doors)
        this.maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
        return this.maxSpeed;
    }
}

// получаю элемент 
let automobile = document.querySelector('.transport');

// получаю данные из массива

for (let element of data) {
    if (element.type === 'car') {
        let car = new Car(element.type, element.price, element.brand, element.doors);

        let elementCar = document.createElement('div');
        elementCar.innerText = `Марка: ${car.getInfo()}`;

        let elementDoors = document.createElement('div');
        elementDoors.innerText = `Количество дверей: ${car.getDoorsCount()}`;

        let elementPrice = document.createElement('div');
        elementPrice.innerText = `Стоимость: ${car.getPrice()}`;

        let elementImage = document.createElement('image');
        elementImage.classList.add('car_image');
        elementImage.src = element.image;

        automobile.appendChild(elementCar);
        automobile.appendChild(elementDoors);
        automobile.appendChild(elementPrice);
        automobile.appendChild(elementImage);
    }

    else if (element.type === 'bike') {
        let bike = new Bike(element.type, element.price, element.brand, element.maxSpeed);

        let elementBike = document.createElement('div');
        elementBike.innerText = `Марка: ${bike.getInfo()}`;

        let elementBikePrice = document.createElement('div');
        elementBikePrice.innerText = `Стоимость: ${bike.getPrice()}`;

        let elementSpeed = document.createElement('div');
        elementSpeed.innerText = `Максимальная скорость: ${bike.getMaxSpeed()}`;

        let elementBikeImage = document.createElement('image');
        elementBikeImage.classList.add('bike_image');
        elementBikeImage.src = element.image;

        automobile.appendChild(elementBike);
        automobile.appendChild(elementBikePrice);
        automobile.appendChild(elementSpeed);
        automobile.appendChild(elementBikeImage);

    }
        
}

    
