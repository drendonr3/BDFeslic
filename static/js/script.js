function initialize(){
    hideInputsColegio();
}

function hideInputsColegio(){
    inputs=document.getElementsByClassName('inputs-colegio');
    for (var input of inputs){
        input.disabled=true;
    }
}

function consultarColegios(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            resp= JSON.parse(this.responseText);
            if (resp[0].colegio!==undefined){
                resps= JSON.parse(this.responseText);
                bodyTable=document.getElementById("body-table-colegio");
                bodyTable.removeChild(bodyTable.lastChild);
                tbody = document.createElement('tbody');
                for (i=0;i<Object.keys(resps).length;i++){
                    tr = document.createElement('tr');
                    tr.setAttribute("id","colegio-" + resps[i].id)
                    tr.setAttribute("onclick", "verColegio(this.id)")
                    th= document.createElement('th');
                    th.setAttribute("scope", "row");
                    th.innerHTML= i+1;
                    tr.appendChild(th);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].colegio;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].rector;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].direccion;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].telefono;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].municipio;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].barrio;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].calendario;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].sector;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].correos;
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                }
                bodyTable.appendChild(tbody);
            } else{
                alert("Error en Base de Datos");
            }
        }
    };
    xhttp.open("POST", "/consultarColegios", true);
    xhttp.send();
}

function consultarContactos(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            resp= JSON.parse(this.responseText);
            if (resp[0].id!==undefined){
                resps= JSON.parse(this.responseText);
                bodyTable=document.getElementById("body-table-contactos");
                //bodyTable.removeChild(bodyTable.lastChild);
                tbody = document.createElement('tbody');
                for (i=0;i<Object.keys(resps).length;i++){
                    tr = document.createElement('tr');
                    tr.setAttribute("id","contacto-" + resps[i].id)
                    tr.setAttribute("onclick", "verContacto(this.id)")
                    th= document.createElement('th');
                    th.setAttribute("scope", "row");
                    th.innerHTML= i+1;
                    tr.appendChild(th);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].primerNombre;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].segundoNombre;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].primerApellido;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].segundoApellido;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].cargo;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].telefono;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].correoElectronico;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].nombre;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].tipo;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].municipio;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].tipoDocumento;
                    tr.appendChild(td);
                    td=document.createElement('td');
                    td.innerHTML= resps[i].documento;
                    tr.appendChild(td);
                    tbody.appendChild(tr);
                }
                bodyTable.appendChild(tbody);
            } else{
                alert("Error en Base de Datos");
            }
        }
    };
    xhttp.open("POST", "/consultarContactos", true);
    xhttp.send();
}

function verColegio(id){
    id=id.split('-')[1]
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            colegio= JSON.parse(this.responseText);
            if (colegio.colegio!==undefined){
                document.getElementById('colegio').value=id
                document.getElementById('nombre-colegio').value= colegio.colegio;
                document.getElementById('rector-colegio').value= colegio.rector;
                document.getElementById('direccion-colegio').value= colegio.direccion;
                document.getElementById('telefono-colegio').value= colegio.telefono;
                document.getElementById('ciudad-colegio').value= colegio.municipio;
                document.getElementById('barrio-colegio').value= colegio.barrio;
                document.getElementById('calendario-colegio').value= colegio.calendario;
                document.getElementById('sector-colegio').value= colegio.sector;
                if (colegio.correos.split(',').length>1){
                    correos = colegio.correos.split(',');
                    div= document.getElementById('correo-0-colegio');
                    children= div.children;
                    children[0].innerHTML= 'Correo Electronico 1:';
                    children = children[1].children;
                    children[1].value=correos[0];
                    par=div.parentElement;
                    for (var i = par.childElementCount-1;i>=1;i--){
                        par.removeChild(par.lastChild);
                    }
                    for (var i=1;i<correos.length;i++){
                        div1=div.cloneNode(true);
                        children= div1.children;
                        children[0].innerHTML= 'Correo Electrónico ' + (i+1) + ':';
                        children = children[1].children;
                        children[1].value= correos[i];
                        div1.id= 'correo-'+ i+'-colegio';
                        par.appendChild(div1);
                    }
                } else {
                    div= document.getElementById('correo-0-colegio');
                    children= div.children;
                    children[0].innerHTML= 'Correo Electrónico:';
                    children1 = children[1].children;
                    children1[1].value= colegio.correos;
                }

            document.getElementById('footer-colegios').setAttribute('style','dysplay:flex')
            } else{
                alert("Error en Base de Datos");
            }
        }
    };
    xhttp.open("POST", "/verColegio?id=" + id, true);
    xhttp.send();
}

function verContacto(id){
    id=id.split('-')[1]
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            contacto= JSON.parse(this.responseText);
            if (contacto.id!==undefined){
                document.getElementById('contacto').value=id
                document.getElementById('primerNombre-contacto').value= contacto.primerNombre;
                document.getElementById('segundoNombre-contacto').value= contacto.segundoNombre;
                document.getElementById('primerApellido-contacto').value= contacto.primerApellido;
                document.getElementById('segundoApellido-contacto').value= contacto.segundoApellido;
                document.getElementById('cargo-contacto').value= contacto.cargo;
                document.getElementById('telefono-contacto').value= contacto.telefono;
                document.getElementById('correoElectronico-contacto').value= contacto.correoElectronico;
                document.getElementById('nombre-contacto').value= contacto.nombre;
                document.getElementById('tipo-contacto').value= contacto.tipo;
                document.getElementById('ciudad-contacto').value= contacto.municipio;
                document.getElementById('tipoDocumento-contacto').value= contacto.tipoDocumento;
                document.getElementById('documento-contacto').value= contacto.documento;



                document.getElementById('footer-contactos').setAttribute('style','dysplay:flex')
            } else{
                alert("Error en Base de Datos");
            }
        }
    };
    xhttp.open("POST", "/verContacto?id=" + id, true);
    xhttp.send();
}

function calcularVista(id){
    
    id = id.split('-')[1];
    items= document.getElementsByClassName('table-list');

    for (item of items){
        if (item.id.split('-')[1]===id){
            item.setAttribute('style','display:block');
        } else {
            item.setAttribute('style','display:none');
        }
    } 

    items=document.getElementsByClassName('footer');
    for (item of items){
        if (item.id.split('-')[1]===id){
            if (item.children[0].children[0].value!==""){
                item.setAttribute('style','display:block');
            }
        } else {
            item.children[0].children[0].value="";
            item.setAttribute('style','display:none');
        }
    } 
}