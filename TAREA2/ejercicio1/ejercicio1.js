document.querySelector('#añadir').addEventListener('click',cargarPersonajes);
let crearTabla = function(lista){

}
function cargarPersonajes(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','ejercicio1.json',true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState== 4 && this.status ==200){
            // console.log(this.responseText);
            let personaje = JSON.parse(this.responseText);
            // console.log(personaje);
            let res =document.querySelector('#res');
            res.innerHTML = '';
            for(let item of personaje){
                console.log(item.nombre);
                res.innerHTML += `
                <tr class="${item.nivel}" onclick="cambiacolor()">
                    <td>${item.nombre}</td>
                    <td>${item.apellido}</td>
                    <td>${item.nivel}</td>
                </tr>
                `
            }
    }
}
}

function cambiacolor(){
    let lvl=EventTarget.getElementbyClassName;
    if(lvl<3){
        lvl.className=red.className;
    }
    if(lvl>=3 && lvl<=4){
        lvl.className=am.className;
    }
    if(lvl>4){
        lvl.className=verde.className;
    }
}

  