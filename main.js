const cars = [{
        id: 1,
        brand: 'Chevrolett',
        model: 'asd',
        color: 'blue',
        year: 2020,
        price: '$150,000',

    },
    {
        id: 2,
        brand: 'Chevrolett',
        model: '',
        color: 'blue',
        year: 2020,
        price: '$150,000',
    },
    {
        id: 3,
        brand: 'Chevrolett',
        model: 'asd',
        color: 'blue',
        year: 2020,
        price: '$150,000',
    },
    {
        id: 4,
        brand: 'Chevrolett',
        color: 'blue',
        model: 'asd',
        year: 2020,
        price: '$150,000',
    },
    {
        id: 5,
        brand: 'Chevrolett',
        model: 'asd',
        color: 'blue',
        year: 2020,
        price: '$150,000',
    },
    {
        id: 6,
        brand: 'Chevrolett',
        mode: 'asd',
        color: 'blue',
        year: 2020,
        price: '$150,000',
    },
]

function printCars() {
    //1 donde quiero poner los usuarios
    //2 genero el html
    //3 pongo el html
    const container = document.getElementById('container-cars');
    let html = '';
    cars.forEach((car) => {
        html += `<tr>
                <td>${car.brand}</td>
                <td>${car.model}</td>
                <td>${car.color}</td>
                <td>${car.year}</td>
                <td>${car.price}</td>
                <td><button onclick="updateCar(${car.id})" class="btn btn-primary">Update</button> 
                <button onclick="deleteCar(${car.id})" class="btn btn-danger">Delete</button></td>
                
                </tr>`;
    });
    container.innerHTML = html;
}

function deleteCar(id) {
    //como elimino un valor de un arreglo con -> splice
    //necesito el indice -> como obtengo el indice del elemento a eliminar si yo recibo el id? -> findIndex
    const index = cars.findIndex((car) => car.id == id);
    cars.splice(index, 1);
    //hay que eliminar del html igual
    alert(`Are you sure deleting this produc id ${id}`);
    printCars();
}

function addCar() {
    //obtener el valor del input
    //agregar el usuario al arreglo
    //imprimir nuevamente los usuarios

    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    const id = cars[cars.length - 1].id + 1;


    const newCar = {
        brand,
        model,
        color,
        year,
        price,
        id
    }
    cars.push(newCar);
    alert('Car Added');
    printCars();

    //limpiar el formulario
    document.getElementById('form-car').reset();

}


printCars();