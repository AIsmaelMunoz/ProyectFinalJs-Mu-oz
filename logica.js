let carrito = JSON.parse(localStorage.getItem('agregadoCarrito')) || []

let artCards = document.getElementById("cards")
artCards.classList.add('container')
artCards.classList.add('mx-auto')
artCards.classList.add('gap-3')

const tableBody = document.getElementById('t-body')

const btnFinish = document.getElementById('finish')
const btnClear = document.getElementById('clear')


function rendTable() {
    for (const prod of carrito) {
        tableBody.innerHTML += `
         <tr>
             <td>${prod.id}</td>
             <td>${prod.marca}</td>
             <td>${prod.precio}</td>
         </tr>
        `;
    }
}
if (carrito.length != 0) {
    rendTable()
}

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

    let botones = document.getElementsByClassName('comprar')
    for (const boton of botones) {
        boton.addEventListener('click', () => {
            const alCarrito = listaStock.find((produc) => produc.id == boton.id)
            console.log(alCarrito)
            itemCarrito(alCarrito)
        })
    }
}
stockProd(productos)


function itemCarrito(produc) {
    carrito.push(produc)
    console.table(carrito)

    tableBody.innerHTML += `
    <tr>
        <td>${produc.id}</td>
        <td>${produc.marca}</td>
        <td>${produc.precio}</td>
    </tr>
    `;
    const carritoTotal = carrito.reduce((acumulador, product) => acumulador + product.precio, 0)
    console.log(carritoTotal)
    document.getElementById('total').innerText = 'Total: $ ' + carritoTotal;

    localStorage.setItem('agregadoCarrito', JSON.stringify(carrito))
}



let btnAdidas = document.getElementById('btn-adidas')
btnAdidas.addEventListener('click', clickAdi)

let btnNike = document.getElementById('btn-nike')
btnNike.addEventListener('click', clickNik)

let btnPuma = document.getElementById('btn-puma')
btnPuma.addEventListener('click', clickPum)

let btnRebook = document.getElementById('btn-rebook')
btnRebook.addEventListener('click', clickReb)



function clickAdi() {
    clickAdi = productos.filter((prods) => prods.marca == "Adidas")
    console.log(clickAdi)
    stockProd(clickAdi)
}
function clickNik() {
    clickNik = productos.filter((prods) => prods.marca == "Nike")
    console.log(clickNik)
    stockProd(clickNik)
}
function clickPum() {
    clickPum = productos.filter((prods) => prods.marca == "Puma")
    console.log(clickPum)
    stockProd(clickPum)
}
function clickReb() {
    clickReb = productos.filter((prods) => prods.marca == "Rebook")
    console.log(clickReb)
    stockProd(clickReb)
}


btnFinish.onclick=()=>{
    alert('Gracias por tu compra.\nPronto reciviras tu pedido.\n✅')
    carrito=[]
   tableBody.innerHTML='' 
   document.getElementById('total').innerText = 'Total: $ ';
   localStorage.removeItem('agregadoCarrito')
}
btnClear.onclick=()=>{
   carrito=[]
   tableBody.innerHTML='' 
   document.getElementById('total').innerText = 'Total: $ ';
   localStorage.removeItem('agregadoCarrito')
}