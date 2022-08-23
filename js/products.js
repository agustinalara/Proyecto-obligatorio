const direccion = "https://japceibal.github.io/emercado-api/cats_products/101.json"

let listaAutos = [];

function showProductList(autos){
    let lista = "";

    for( let auto of autos){ 

        lista += `
        <div class= "list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + auto.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ auto.name +`</h4> 
                        <p> `+ auto.description +`</p> 
                        </div>
                        <small class="text-muted">` + auto.soldCount + ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
    }
    document.getElementById("listaProductos").innerHTML = lista; 
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(direccion).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            listaAutos = resultObj.data;
            showProductList(listaAutos.products);
        }
    });
});