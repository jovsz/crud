"use strict";

var cars = [{
  id: 1,
  brand: 'Toyota',
  model: 'Prius',
  color: 'Red',
  year: 2020,
  price: '$150,000',
  picture: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.carscoops.com%2Fwp-content%2Fuploads%2F2020%2F05%2F2021-toyota-prius-2020-edition-0.jpg&f=1&nofb=1"
}, {
  id: 2,
  brand: 'Acura',
  model: 'ILX',
  color: 'Black',
  year: 2020,
  price: '$989,900',
  picture: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_a1c7a09b5a044312a00302760fe7f12a.jpg"
}, {
  id: 3,
  brand: 'Acura',
  model: 'NSX',
  color: 'Red',
  year: 2020,
  price: '3,750,000',
  picture: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_78cb9a76e7c2490981bb65da09bfa7ae.jpg"
}, {
  id: 4,
  brand: 'Alfa Romeo',
  color: 'blue',
  model: 'Giulietta',
  year: 2020,
  price: '$689,900',
  picture: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_a224b513cae6429cab1fe3847e95c914.jpg"
}, {
  id: 5,
  brand: 'SEAT',
  model: 'Aurona',
  color: 'White',
  year: 2020,
  price: '$342,100',
  picture: "https://cdn.pixabay.com/photo/2018/12/14/10/39/traffic-3874725_960_720.jpg"
}, {
  id: 6,
  brand: 'Peugeot',
  model: '2008',
  color: 'Orange',
  year: 2020,
  price: '$391,900',
  picture: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_f3c22dcb6e2641db878f583a67b5e443.jpg"
}, {
  id: 7,
  brand: 'Audi',
  model: 'A1',
  color: 'Green',
  year: 2020,
  price: '$429,900',
  picture: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_89ebe3cc289148dcb0333391d6293a91.jpg"
}, {
  id: 8,
  brand: 'Audi',
  model: 'A3',
  color: 'Red',
  year: 2020,
  price: '$504,900',
  picture: "https://acs2.blob.core.windows.net/imgcatalogo/m/VA_a0d14d9ff1fe499794abcb4ff8d264f9.jpg"
}, {
  id: 9,
  brand: 'BMW',
  model: 'i3',
  color: 'Dark blue',
  year: 2020,
  price: '$1,165,000',
  picture: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_597c73e5f75d4a3aa5a1cde38c08e32e.jpg"
}, {
  id: 10,
  brand: 'BMW',
  model: 'Serie 8',
  color: 'Black',
  year: 2020,
  price: '$2,150,000',
  picture: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_cc7c5bd21c3a4711831c39cf7f626e56.jpg"
}];
arrayId = false;
var index = '';

function printCars() {
  var container = document.getElementById('container-cars');
  var html = '';
  cars.forEach(function (car) {
    html += "<tr>\n                <td class=\"width-200\">".concat(car.brand, "</td>\n                <td class=\"width-100\">").concat(car.model, "</td>\n                <td class=\"width-100\">").concat(car.color, "</td>\n                <td class=\"width-100\">").concat(car.year, "</td>\n                <td class=\"width-200\">").concat(car.price, "</td>\n                <td class=\"width-300\"><img src=").concat(car.picture, "></td>\n                <td class=\"width-option\"><button onclick=\"updateCar(").concat(car.id, ")\" class=\"btn btn-primary \">Update</button> \n                <button onclick=\"deleteCar(").concat(car.id, ")\" class=\"btn btn-danger\">Delete</button></td>\n                </tr>");
  });
  container.innerHTML = html;
}

function deleteCar(id) {
  var index = cars.findIndex(function (car) {
    return car.id == id;
  });
  cars.splice(index, 1);
  alert("id ".concat(id, " Product deleted"));
  printCars();
}

function updateCar(id) {
  arrayId = true;
  index = cars.findIndex(function (car) {
    return car.id == id;
  });
  document.getElementById("brand").value = cars[index].brand;
  document.getElementById("model").value = cars[index].model;
  document.getElementById("color").value = cars[index].color;
  document.getElementById("year").value = cars[index].year;
  document.getElementById("price").value = cars[index].price;
  document.getElementById("picture").value = cars[index].picture;
}

function addCar() {
  var id = index;
  var brand = document.getElementById('brand').value;
  var model = document.getElementById('model').value;
  var color = document.getElementById('color').value;
  var year = document.getElementById('year').value;
  var price = document.getElementById('price').value;
  var picture = document.getElementById('picture').value;
  var newCar = {
    brand: brand,
    model: model,
    color: color,
    year: year,
    price: price,
    picture: picture,
    id: id
  };

  if (checkEmptyInput() == false) {
    if (arrayId == false) {
      var _id = cars[cars.length - 1].id + 1;

      cars.push(newCar);
      alert("Product ".concat(_id + 1, " Added"));
      printCars();
      document.getElementById('form-car').reset();
    } else {
      console.log(id);
      cars.splice(id, 1, newCar);
      alert("Product ".concat(id + 1, " update"));
      printCars();
      document.getElementById('form-car').reset();
      arrayId = false;
    }
  }
}

function checkEmptyInput() {
  var isEmpty = false;
  var brand = document.getElementById('brand').value;
  var model = document.getElementById('model').value;
  var color = document.getElementById('color').value;
  var year = document.getElementById('year').value;
  var price = document.getElementById('price').value;
  var picture = document.getElementById('picture').value;

  if (brand === "") {
    alert("Brand field Connot Be Empty");
    document.getElementById('brand').focus();
    isEmpty = true;
  } else if (model === "") {
    alert("Model field Connot Be Empty");
    document.getElementById('model').focus();
    isEmpty = true;
  } else if (color === "") {
    alert("Color field Connot Be Empty");
    document.getElementById('color').focus();
    isEmpty = true;
  } else if (year === "") {
    alert("Year field Connot Be Empty");
    document.getElementById('year').focus();
    isEmpty = true;
  } else if (price === "") {
    alert("Price field Connot Be Empty");
    document.getElementById('price').focus();
    isEmpty = true;
  }

  return isEmpty;
}

printCars();