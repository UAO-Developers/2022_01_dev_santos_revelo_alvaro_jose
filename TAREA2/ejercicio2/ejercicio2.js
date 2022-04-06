// 

$(document).ready(function(){
    let geo= $('#añadir')
    $(geo).click(function(){
        let url ='https://raw.githubusercontent.com/finiterank/mapa-colombia-js/master/colombia-municipios.json'
        $.get(url,function (geojson,status){
            let mapa=JSON.parse(geojson)
            let res =document.querySelector('#res');
            res.innerHTML='';
            mapa.objects.mpios.geometries.forEach(element=>{
                let item =element.properties
                res +=` 
                <tr>
                    <td>${item.dpt}</td>
                    <td>${item.name}</td>
                </tr>
                `
            })
            $('#res').html(res)
        })
    })
})
