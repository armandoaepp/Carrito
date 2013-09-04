


	var selected_index = -1; //Index of the selected list item

	var tbClients = localStorage.getItem("tbClients");//Retrieve the stored data

	tbClients = JSON.parse(tbClients); //Converts string to object

	if(tbClients == null) //If there is no data, initialize an empty array
		tbClients = [];


	function List(){
		  document.getElementById('tblList').innerHTML ="";
		var datos =" ";
		//datos += "<table>" ;
		datos += "<thead>";
		datos +=	"<tr>";
		datos +=	"	<th></th>";
		datos +=	"	<th>ID</th>";
		datos +=	"	<th>Name</th>";
		datos +=	"	<th>Phone</th>";
		datos +=	"	<th>Email</th>";
		datos +=	"</tr>";
		datos +="</thead>";
		datos +="<tbody>";

		for(var i in tbClients){
			var cli = JSON.parse(tbClients[i]);
		  	datos +="<tr>";
			datos += '	<td><img src="edit.png" alt="Edit" "class="btnEdit"  onClick="mEditar(\''+i+'\');"/>';
			datos += ' <img src="delete.png" alt="Delete" "class="btnDelete"  onClick="Delete(\''+i+'\');"/> </td>' ;
			datos += "	<td>"+cli.ID+"</td>" ;
			datos += "	<td>"+cli.Name+"</td>" ;
			datos += "	<td>"+cli.Phone+"</td>" ;
			datos += "	<td>"+cli.Email+"</td>" ;
			datos += "</tr>";
		}
		datos +="</tbody>";
		//datos += "</table>";
	document.getElementById('tblList').innerHTML =datos;
	document.getElementById("txtOperacion").value = "A";
	 document.getElementById("txtID").value="" ;
	document.getElementById("txtName").value = "";
	document.getElementById("txtPhone").value ="" ;
	document.getElementById("txtEmail").value = "";
	console.log('entro en el Listar')
	}

	function Add(){
		var client = JSON.stringify({
			ID    : document.getElementById("txtID").value ,
			Name  : document.getElementById("txtName").value ,
			Phone : document.getElementById("txtPhone").value ,
			Email : document.getElementById("txtEmail").value
		});
		tbClients.push(client);
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("The data was saved.");
		List();
		return true;
	}


	function Edit(selected_index){
		tbClients[selected_index] = JSON.stringify({
				ID    : document.getElementById("txtID").value ,
				Name  : document.getElementById("txtName").value ,
				Phone : document.getElementById("txtPhone").value ,
				Email : document.getElementById("txtEmail").value
			});//Alter the selected item on the table
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		//alert("Dato Editado Correctamente")
		List();
		return true;
	}

	function Delete(selected_index){
		tbClients.splice(selected_index, 1);
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		List();
		alert("Client deleted."+selected_index);
	}

	function mEditar(selected_index){
		var cli = JSON.parse(tbClients[selected_index]);
			 document.getElementById("txtID").value=cli.ID ;
			document.getElementById("txtName").value = cli.Name ;
			document.getElementById("txtPhone").value =cli.Phone ;
			document.getElementById("txtEmail").value = cli.Email;
			document.getElementById("txtOperacion").value = "E";


}
function guardar(){
	operation=document.getElementById("txtOperacion").value ;
		if(operation == "A")
			return Add();
		if(operation == "E")
			return Edit(selected_index);
		else '' ;
	}

function RemoveAllData(){
	for(var i in tbClients){
		tbClients.splice(i-1, 1);
	}
}



/*persona = {nombre: 'Pablo Rigazzi', edad: 33};
localStorage.autor = persona;
// alert(localStorage.autor);



// Primero convertimos el objeto en una cadena de texto

localStorage.autor = JSON.stringify(persona);

 //Y ahora, al recuperarlo, convertimos el string nuevamente en un objeto

var autor = JSON.parse(localStorage.autor);
 alert(typeof autor);


for(var i=0, t=localStorage.length; i < t; i++) {
    key = localStorage.autor.key(i);
    alert('Para la clave ' + key + ' el valor es: ' + localStorage.autor["nombre"]);
}*/