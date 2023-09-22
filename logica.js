let carrito = []

const tableBody = document.getElementById('t-body')

let artCards = document.getElementById("cards")
artCards.classList.add('container')
artCards.classList.add('mx-auto')
artCards.classList.add('gap-3')


function stockProd(listaStock) {
    artCards.innerHTML = ''
    for (const producto of listaStock) {
        artCards.innerHTML += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <img src=${producto.foto} class="card-img-top" alt="...">
            <h5 class="card-title">${producto.marca}</h5>
            <p class="card-text">Talle: ${producto.talle}</p>
            <p class="card-text">Precio: $${producto.precio}</p>
            <button id=${producto.id}  class="btn btn-primary comprar">Comprar</button>
        </div>
    </div>
    `;
    }
    //evento
    let botones = document.getElementsByClassName('comprar')
    for (const boton of botones) {
        boton.addEventListener('click', () => {
            const alCarrito = listaStock.find((produc)=>produc.id == boton.id)
            console.log(alCarrito)
            itemCarrito(alCarrito)
        })
    }
}
stockProd(productos)

function itemCarrito(produc){
    carrito.push(produc)
    console.table(carrito)

    tableBody.innerHTML += `
    <tr>
        <td>${produc.id}</td>
        <td>${produc.marca}</td>
        <td>${produc.precio}</td>
    </tr>
    `;
    const carritoTotal = carrito.reduce((acumulador, product)=>acumulador + product.precio, 0)
    console.log(carritoTotal)
    document.getElementById('total').innerText='Total: $ '+carritoTotal ;
}



let btnAdidas = document.getElementById('btn-adidas')
btnAdidas.addEventListener('click', clickAdi)

function clickAdi() {
    clickAdi = productos.filter((prods) => prods.marca == "Adidas")
    console.log(clickAdi)
    stockProd(clickAdi)
}

let btnNike = document.getElementById('btn-nike')
btnNike.addEventListener('click', clickNik)

function clickNik() {
    clickNik = productos.filter((prods) => prods.marca == "Nike")
    console.log(clickNik)
    stockProd(clickNik)
}

let btnPuma = document.getElementById('btn-puma')
btnPuma.addEventListener('click', clickPum)

function clickPum() {
    clickPum = productos.filter((prods) => prods.marca == "Puma")
    console.log(clickPum)
    stockProd(clickPum)
}

let btnRebook = document.getElementById('btn-rebook')
btnRebook.addEventListener('click', clickReb)

function clickReb() {
    clickReb = productos.filter((prods) => prods.marca == "Rebook")
    console.log(clickReb)
    stockProd(clickReb)
}



