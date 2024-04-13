function agregar(){
    let listado = document.getElementById("lista")

    if(listado.children.length < 2){
        for(let l = 0; l < 2; l++){
            let punto = document.createElement('li');
            let texto = document.createTextNode('Punto ' + (listado.children.length+1))
            punto.appendChild(texto);
            listado.appendChild(punto);
        }
    }
}