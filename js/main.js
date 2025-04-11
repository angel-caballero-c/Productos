const main = document.getElementsByTagName("main").item(0);
let mainProds = document.getElementById("mainProds");
const URLMain = "https://fakestoreapi.com/products/";

function getData() {
    fetch(URLMain)
        .then((response) => {
            console.log(response);
            response.json().then((res) => {
                console.log("Cantidad de productos:", res.length);
                console.log("Primer título:", res[0].title);

                createCards(res);
            });
        })
        .catch((err) => {
            main.insertAdjacentHTML("beforeend",
                `<div class="alert alert-danger" role="alert">
          ${err.message}
        </div>`);
        });
}

function createCards(prods) {
    const contenedor = document.getElementById("card-container");
    contenedor.innerHTML = "";

    for (const producto of prods) {
        const col = document.createElement("div");
        col.className = "col";

        col.innerHTML = `
      <div class="card h-100">
        <img src="${producto.image}" class="card-img-top p-3" alt="${producto.title}" style="height: 400px; object-fit: contain;">
        <div class="card-body">
          <h5 class="card-title">${producto.title}</h5>
          <p class="card-text">${producto.description.substring(0, 300)}...</p>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
          <span class="fw-bold">$${producto.price}</span>
          <button class="btn btn-primary btn-sm">Ver más</button>
        </div>
      </div>
    `;

        contenedor.appendChild(col);
    }
}
getData();