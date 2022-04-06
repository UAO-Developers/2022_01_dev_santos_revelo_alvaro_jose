function registrar() {
    let txt_nombre = $("#nombre").val();
    let txt_apellido = $("#apellido").val();
    let txt_email = $("#email").val();
    let txt_password = $("#password").val();
    console.log(txt_nombre);
    console.log(txt_apellido);
    console.log(txt_password);
    console.log(txt_email);
    $.ajax({
        url:'http://localhost:3001/cliente',   // url
        dataType: 'text/json',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded',
        data: {
            nombre: txt_nombre,
            apellido: txt_apellido,
            email: txt_email,
            password: txt_password,

        }, // data to be submit
        success: function( data, textStatus, jQxhr ){
            alert("Guardado!!!");
            cargar();
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
}

function cargar() {
    $.ajax({
        url:'http://localhost:3001/cliente',   // url
        type: 'get',
        success: function( data, textStatus, jQxhr ){
            let html = "";
            let i=1;
            data.products.forEach(element => {
                console.log(element);
                
                html += `<li class="list-group-item d-flex justify-content-between lh-sm" id="cliente-${i}" onclick="consulta(${i})">
                            <div> 
                                <h6 class="my-0"> ${element.nombre}  ${element.apellido}</h6> 
                                <h6 class="my-0"> ${element.email}</h6> 
                                <small class="text-muted"> ${element.password} </small>
                            </div> 
                        </li>`;
            $("#lista_clientes").html(html);
            i+=1
            });
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
}
function consulta(id){
    console.log(document.getElementById('cliente-'+id).innerText)
    
}
// function eliminar(){
//     $.ajax({
//         url:'http://localhost:3001/cliente',   // url
//         type: 'delete',
//         success: function( data, textStatus, jQxhr ){
//             let html = "";
//             data.products.forEach(element => {
//                 console.log(element);
//                 html += '<li class="list-group-item d-flex justify-content-between lh-sm">' +
//                             '<div>' +
//                                 '<h6 class="my-0">' + element.nombre +"  " + element.apellido+'</h6>' +
//                                 '<h6 class="my-0">' +element.email+'</h6>' +
//                                 '<small class="text-muted">' + element.password + '</small>'+
//                             '</div>' +
//                         '</li>';
//             $("#lista_clientes").html(html);
//             });
//         },
//         error: function( jqXhr, textStatus, errorThrown ){
//             console.log( errorThrown );
//         }
//     });
// }

$(document).ready(function(){
    cargar();
});