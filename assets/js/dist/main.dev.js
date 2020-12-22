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
}];
arrayId = false;

function printCars() {
  var container = document.getElementById('container-cars');
  var html = '';
  cars.forEach(function (car) {
    html += "<tr>\n                <td>".concat(car.brand, "</td>\n                <td>").concat(car.model, "</td>\n                <td>").concat(car.color, "</td>\n                <td>").concat(car.year, "</td>\n                <td>").concat(car.price, "</td>\n                <td><img src=").concat(car.picture, "></td>\n                <td><button onclick=\"onEdit(").concat(car.id - 1, ")\" class=\"btn btn-primary \">Update</button> \n                <button onclick=\"deleteCar(").concat(car.id, ")\" class=\"btn btn-danger\">Delete</button></td>\n                </tr>");
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

function onEdit(id) {
  arrayId = true;
  var index = cars.findIndex(function (car) {
    return car.id == id;
  });
  document.getElementById("brand").value = cars[id].brand;
  document.getElementById("model").value = cars[id].model;
  document.getElementById("color").value = cars[id].color;
  document.getElementById("year").value = cars[id].year;
  document.getElementById("price").value = cars[id].price;
  document.getElementById("picture").value = cars[id].picture;
  var brand = document.getElementById('brand').value;
  var model = document.getElementById('model').value;
  var color = document.getElementById('color').value;
  var year = document.getElementById('year').value;
  var price = document.getElementById('price').value;
  var picture = document.getElementById('picture').value;
  return index;
  addCar();
}

function addCar() {
  var brand = document.getElementById('brand').value;
  var model = document.getElementById('model').value;
  var color = document.getElementById('color').value;
  var year = document.getElementById('year').value;
  var price = document.getElementById('price').value;
  var picture = document.getElementById('picture').value;
  var id = cars[cars.length - 1].id + 1;
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
      cars.push(newCar);
      alert("Product ".concat(id, " Added"));
      printCars();
      document.getElementById('form-car').reset();
    } else {
      cars.splice(cars[id], 1, newCar);
      alert("Product updated");
      printCars();
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