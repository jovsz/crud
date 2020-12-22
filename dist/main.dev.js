"use strict";

var cars = [{
  id: 1,
  brand: 'Chevrolett',
  model: 'asd',
  color: 'blue',
  year: 2020,
  price: '$150,000'
}, {
  id: 2,
  brand: 'Chevrolett',
  model: '',
  color: 'blue',
  year: 2020,
  price: '$150,000'
}, {
  id: 3,
  brand: 'Chevrolett',
  model: 'asd',
  color: 'blue',
  year: 2020,
  price: '$150,000'
}, {
  id: 4,
  brand: 'Chevrolett',
  color: 'blue',
  model: 'asd',
  year: 2020,
  price: '$150,000'
}, {
  id: 5,
  brand: 'Chevrolett',
  model: 'asd',
  color: 'blue',
  year: 2020,
  price: '$150,000'
}, {
  id: 6,
  brand: 'Chevrolett',
  mode: 'asd',
  color: 'blue',
  year: 2020,
  price: '$150,000'
}];

function printCars() {
  //1 donde quiero poner los usuarios
  //2 genero el html
  //3 pongo el html
  var container = document.getElementById('container-cars');
  var html = '';
  cars.forEach(function (car) {
    html += "<tr>\n                <td>".concat(car.brand, "</td>\n                <td>").concat(car.model, "</td>\n                <td>").concat(car.color, "</td>\n                <td>").concat(car.year, "</td>\n                <td>").concat(car.price, "</td>\n                <td><button onclick=\"updateCar(").concat(car.id, ")\" class=\"btn btn-primary\">Update</button> \n                <button onclick=\"deleteCar(").concat(car.id, ")\" class=\"btn btn-danger\">Delete</button></td>\n                \n                </tr>");
  });
  container.innerHTML = html;
}

function deleteCar(id) {
  //como elimino un valor de un arreglo con -> splice
  //necesito el indice -> como obtengo el indice del elemento a eliminar si yo recibo el id? -> findIndex
  var index = cars.findIndex(function (car) {
    return car.id == id;
  });
  cars.splice(index, 1); //hay que eliminar del html igual

  alert("Are you sure deleting this produc id ".concat(id));
  printCars();
}

function addCar() {
  //obtener el valor del input
  //agregar el usuario al arreglo
  //imprimir nuevamente los usuarios
  var brand = document.getElementById('brand').value;
  var model = document.getElementById('model').value;
  var color = document.getElementById('color').value;
  var year = document.getElementById('year').value;
  var price = document.getElementById('price').value;
  var id = cars[cars.length - 1].id + 1;
  var newCar = {
    brand: brand,
    model: model,
    color: color,
    year: year,
    price: price,
    id: id
  };
  cars.push(newCar);
  alert('Car Added');
  printCars(); //limpiar el formulario

  document.getElementById('form-car').reset();
}

printCars();