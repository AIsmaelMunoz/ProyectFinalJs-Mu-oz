

let artCards = document.getElementById("cards")
artCards.classList.add('container')
artCards.classList.add('mx-auto')
artCards.classList.add('gap-3')

let btnAdidas = document.getElementById(adidas)



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
            <button id=${producto.id}  class="btn btn-primary">Comprar</button>
        </div>
    </div>
    `;
    }
}
stockProd(productos)

const adidasFilt = productos.filter((prods)=>prods.marca == 'Adidas')
console.log(adidasFilt)
stockProd(adidasFilt)

const nikeFilt = productos.filter((prods)=>prods.marca == 'Nike')
console.log(nikeFilt)

const pumaFilt = productos.filter((prods)=>prods.marca == 'Puma')
console.log(pumaFilt)

const rebookFilt = productos.filter((prods)=>prods.marca == 'Rebook')
console.log(rebookFilt)


    


