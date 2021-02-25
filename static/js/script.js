function initialize(){

}

function consultarColegios(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            resp= JSON.parse(this.responseText);
            //if (resp['status']==="OK"){
            if (1==1){
                console.log(resp)
                resps= JSON.parse(this.responseText);
                console.log(resps)
                bodyTable=document.getElementById("body-table");
                for (i=0;i<Object.keys(resps).length;i++){
                    tr = document.createElement('tr');
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
                    bodyTable.appendChild(tr);
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
                }
            } else{
                    alert("No Se Agregó la Categoría");
            }
        }
    };
    xhttp.open("POST", "/consultarColegios", true);
    xhttp.send();
}