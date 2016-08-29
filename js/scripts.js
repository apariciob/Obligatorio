var arrayPaises = ['Uruguay', 'Brasil', 'Bolivia', 'Venezuela', 'Argentina', 'Inglaterra','Jamaica','Japon','Chile','Colombia','Cuba','Dinamarca','Ecuador','España','Grecia'];
var postulantes = [];
var nomAtl, apAtl, paisAtl, edadAtl, ultimoAtl;
var atletismo1 = [];
var atletismo2 = [];
var natacion = [];
//lista de marcas
var lstMarcasAtletismoI = ["100mLlanos", "0", "200mLlanos", "0", "400mLlanos", "0", "800mLlanos", "0", "110mConVallas", "0"];
var lstMarcasAtletismoII = ["saltoLargo", "0", "saltoAlto", "0","lanzamientoDeJabalina","0", "lanzamientoDeBala", "0"];
var lstMarcasNatacion = ["200mLibres", "0", "100mMariposa", "0", "100mEspalda", "0", "100mPecho", "0"];

$(document).ready(inicio);

function inicio(){

	$("#ventanaReg").hide();
	$("#ventanaIngresoMarca").hide();
	$("#ventanaMarcaAtl").hide();
	$("#ventanaTarjAtl").hide();
	$("#ventanaConsultaDis").hide();
	$("#ventanaAtlClasi").hide();

	//llenando el select
	var count = 0;
	$(arrayPaises).each(function(){
		$('#pais').append(new Option(arrayPaises[count]));
		count++;
	});
	
	//***********Cambiar Pestañas***********//

	//Click Pestaña registrar atleta
	$("#btnRegAtl").click(registroAtleta);
	//click pestaña ingresar marca
	$("#btnIngresoMarca").click(ingresoMarca);
	//click marca atleta
	$("#btnRegMarca").click(registroMarca);
	//click tarjeta atleta
	$("#btnTarAtl").click(tarjetaAtleta);
	//click consultas disciplinas
	$("#btnConsultasDis").click(consultasDisciplinas);
	//click atletas clasificados
	$("#btnAtlClasi").click(atletasClasificados);
	
	
	//Click boton registrar atleta
	$("#btnRegistrar").click(botonRegistrarAtleta);

	//click boton ingresar Marca
	$("#btnIngresarMarca").click(ingresarMarca);

	//Click al select categorias de la pestaña ingresar Marca
	$("#selecCat").click(mostrarMarca);

	//click en boton registrar marca atleta
	$("#bntRegistrarMarca").click(botonRegistrarMarcaAtleta);

	//click boton cargar atletas
	$("#btnMostrarAtl").click(botonMostrarAtl);

	//click boton generar tarjeta atleta
	$("#btnGenerarTarjeta").click(botonGenerarTarjeta);

	//click al select de consultas disciplinas
	$("#cat").click(mostrarDisciplinas);

	//click boton mostrar consultas
	$("#btnMostrarAtlPorDis").click(botonConsultasDis);
	

	//***********validaciones***********//
	
	//Validacion de atleta
	$("#txtNombre").blur(function(){
		nomAtl= $("#txtNombre").val();
		$("#errnomAtl").remove();
		if(isNaN(nomAtl)){
			$("#errTxtNombre").html('<img id="errnomAtl" src="img/ok.jpg" />');
		}
		else {
			//$('<img id="errnomAtl" src="img/error.jpg" data-toggle="tooltip" title="El nombre no puede ser un numero ni dejarse vacio" />').insertAfter("#lblNombre");
			$("#errTxtNombre").html('<img id="errnomAtl" src="img/error.jpg" data-toggle="tooltip" title="El nombre no puede ser un numero ni dejarse vacio" />');
		}
		$("#errnomAtl").css("width",20);
		
	});
	
	$("#txtApellido").blur(function(){
		apAtl= $("#txtApellido").val();
		$("#errapAtl").remove();
		if(isNaN(apAtl)){
			$("#errTxtApellido").html('<img id="errapAtl" src="img/ok.jpg" />');
		}
		else {
			$("#errTxtApellido").html('<img id="errapAtl" src="img/error.jpg" data-toggle="tooltip" title="El apellido no puede ser un numero ni dejarse vacio" />');
		}
		$("#errapAtl").css("width",20);

	});

	$("#pais").blur(function(){
		paisAtl = $("#pais").val();
		$("#errPaisAtl").remove();
		if(paisAtl !== "Seleccione un País..."){
			$("#errTxtPais").html('<img id="errPaisAtl" src="img/ok.jpg" />');
			$("#paisInput").val(paisAtl);
		}
		else {
			$("#errTxtPais").html('<img id="errPaisAtl" src="img/error.jpg" data-toggle="tooltip" title="Debes seleccionar un pais" />');
			$("#paisInput").val(paisAtl);
		}
		$("#errPaisAtl").css("width", 20);
		
	});

	$("#edad").blur(function(){
		edadAtl = $("#edad").val();
		$("#errEdadAtl").remove();
		if(isNaN(edadAtl)==false && edadAtl !== ""){
			$("#errTxtEdad").html('<img id="errEdadAtl" src="img/ok.jpg" />');
		}
		else {
			$("#errTxtEdad").html('<img id="errEdadAtl" src="img/error.jpg" data-toggle="tooltip" title="Debes seleccionar un pais" />');
		}
		$("#errEdadAtl").css("width",20);
		
	});
	//fin de validacion de Atleta

	//Validacion de ingreso de marca

	//valiacion marca
	$(".marca").blur(function(){
		var marcaAux = $(".marca").val();
		$(".errMarca").remove();
		if(isNaN(marcaAux)==false && marcaAux !== ""){
			
			$(".errTxtMarca").html('<img class="errMarca" src="img/ok.jpg" />');
		}
		else {
			$(".errTxtMarca").html('<img class="errMarca" src="img/error.jpg" data-toggle="tooltip" title="Debes seleccionar un pais" />');
		}
		$(".errMarca").css("width",20);
		
	});

	//Fin de Validacion de ingreso de marca
}
function registroAtleta(){
	mostrarmenu("#ventanaReg",this,"#regAtlForm","#txtNombre");
	// Reinicio todos los campos de imagen
	$("#errTxtNombre").html('');
	$("#errTxtApellido").html('');
	$("#errTxtEdad").html('');
}
function ingresoMarca(){
	mostrarmenu("#ventanaIngresoMarca",this,"#ingresoMarcaForm","#selecCat");
	$("#atletismo").hide();
	$("#atletismo2").hide();
	$("#natacion").hide();
	$("#marcaCat").hide();
}
function registroMarca(){
	mostrarmenu("#ventanaMarcaAtl",this,"#regMarcaForm","#atl");
	$("#atlDiv").hide();
}
function tarjetaAtleta(){
	mostrarmenu("#ventanaTarjAtl",this,"#tarjAtlForm","#atl2");
	$("#tarjeta").html('');
}
function consultasDisciplinas(){
	mostrarmenu("#ventanaConsultaDis",this,"#consulDisForm","#cat");
	$("#atletismoUno").hide();
	$("#atletismoDos").hide();
	$("#natacion1").hide();


}
function atletasClasificados(){
	mostrarmenu("#ventanaAtlClasi",this,"#atlClasiForm","boton");
	//Código que permite cargar los paquetes de charts en nuestro proyecto
	//google.load('visualization', '1.0', {'packages':['corechart']});
	//Establecemos el gráfico debe dibujarse al cargar google charts API
	//google.setOnLoadCallback(drawChart);
	 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
}
function mostrarmenu(mostrar,menu,formulario,campo){
	
	$("#carousel-example-generic").hide();

	$("#ventanaReg").hide();
	$("#btnRegAtl").css("color","white");
	
	$("#ventanaIngresoMarca").hide();
	$("#btnIngresoMarca").css("color","white");
	
	$("#ventanaMarcaAtl").hide();
	$("#btnRegMarca").css("color","white");
	
	$("#ventanaTarjAtl").hide();
	$("#btnTarAtl").css("color","white");
	
	$("#ventanaConsultaDis").hide();
	$("#btnConsultasDis").css("color","white");
	
	$("#ventanaAtlClasi").hide();
	$("#btnAtlClasi").css("color","white");
		
	$(mostrar).fadeIn(1000);
	$(menu).css("color","Black");
	$(formulario).trigger("reset");
	$(campo).focus();
}
function mostrarMarca(){
	var val = $("#selecCat").val();
    switch(val){
        case "Seleccione una Categoria": 
        $("#atletismo").hide();
		$("#atletismo2").hide();
		$("#natacion").hide();
		$("#marcaCat").hide();
            break;
        case "Atletismo I": 
        $("#atletismo").fadeIn(1000);
        $("#marcaCat").fadeIn(1000);
		$("#atletismo2").hide();
		$("#natacion").hide();
		$("#ingresoMarcaForm").trigger("reset");
        break;
         case "Atletismo II": 
        $("#atletismo2").fadeIn(1000);
        $("#marcaCat").fadeIn(1000);
		$("#atletismo").hide();
		$("#natacion").hide();
		$("#ingresoMarcaForm").trigger("reset");
        break;
        case "Natación": 
        $("#natacion").fadeIn(1000);
        $("#marcaCat").fadeIn(1000);
		$("#atletismo2").hide();
		$("#atletismo").hide();
		$("#ingresoMarcaForm").trigger("reset");
        break;
    }
}
function mostrarDisciplinas(){
	var val = $("#cat").val();
    switch(val){
        case "Seleccione una Categoria": 
        $("#atletismoUno").hide();
		$("#atletismoDos").hide();
		$("#natacion1").hide();
            break;
        case "Atletismo I": 
        $("#atletismoUno").fadeIn(1000);
		$("#atletismoDos").hide();
		$("#natacion1").hide();
		$("#consulDisForm").trigger("reset");
        break;
         case "Atletismo II": 
        $("#atletismoDos").fadeIn(1000);
		$("#atletismoUno").hide();
		$("#natacion1").hide();
		$("#consulDisForm").trigger("reset");
        break;
        case "Natación": 
        $("#natacion1").fadeIn(1000);
		$("#atletismoDos").hide();
		$("#atletismoUno").hide();
		$("#consulDisForm").trigger("reset");
        break;
    }
}
function ingresarMarca(){
	var ok= "img/ok.jpg";
	var categorias, disciplinas, marca;

	categorias = $("#selecCat").val();
	disciplinas = $('input[class="radioIngresoMarca"]:checked').val();
	marca = $('#marca').val();

	if( $('input[class="radioIngresoMarca"]:checked').length === 1 &&  $(".errMarca").attr("src") == ok){
		switch(categorias){
			case "Atletismo I":
				var agregarALSelect = true;
			    for (var i = 0; i < lstMarcasAtletismoI.length; i=i+2) {
			    	if(lstMarcasAtletismoI[i] === disciplinas){
			    		lstMarcasAtletismoI[i+1] = marca;
			    		var discOption = [];
			    		discOption = $("#disc option"); 
			        	for(var i = 0; i< discOption.length; i++){
			        		var valorSelect = $(discOption[i]).val();
			        		if(valorSelect === disciplinas){
			        			agregarALSelect = false;
			    			}	
			        	}
			    	}
			    }
			    if(agregarALSelect == true){
			    	$("#disc").append("<option value="+disciplinas+">"+disciplinas+"</option>");
			    }
			break;

			case "Atletismo II":
				//comentario parte1: creo una var boolean par append el select de dis de registro de marcar
				var agregarALSelect = true;

				for (var i = 0; i < lstMarcasAtletismoII.length; i=i+2) {
			    	if(lstMarcasAtletismoII[i] === disciplinas){
			    		lstMarcasAtletismoII[i+1] = marca;
			    		//comentario parte2: recoro el selec de las dis en registro de marcas para comrpobar que no se repita
			    		//con la disciplina cual estoy por agregar
			    		var discOption = [];
			    		discOption = $("#disc option"); 
			        	for(var i = 0; i< discOption.length; i++){
			        		var valorSelect = $(discOption[i]).val();
			        		if(valorSelect === disciplinas){
			        			agregarALSelect = false;
			    			}	
			        	}
			    	}
			    }
			    //comentario parte3: y a ca compruebo si no esta en el select lo agrego al select
			    //lo hago igual en las otras 2 categorias. 
			    if(agregarALSelect == true){
			    	$("#disc").append("<option value="+disciplinas+">"+disciplinas+"</option>");
			    }
			break;

			case "Natación":
				var agregarALSelect = true;
				for (var i = 0; i < lstMarcasNatacion.length; i=i+2) {
			    	if(lstMarcasNatacion[i] === disciplinas){
			    		lstMarcasNatacion[i+1] = marca;
			    		var discOption = [];
			    		discOption = $("#disc option"); 
			        	for(var i = 0; i< discOption.length; i++){
			        		var valorSelect = $(discOption[i]).val();
			        		if(valorSelect === disciplinas){
			        			agregarALSelect = false;
			    			}	
			        	}
			    	}
			    }
			    if(agregarALSelect == true){
			    	$("#disc").append("<option value="+disciplinas+">"+disciplinas+"</option>");
			    }
			break;
		}
		alert("Ingreso de marca correcto");
		//reseteo campos
		$("#ingresoMarcaForm").trigger("reset");
		$(".errMarca").remove();		
	}else{
		var msjRadioBtn = "Error!: ";
		if($('input[class="radioIngresoMarca"]:checked').length === 0){
			msjRadioBtn += "Seleccione una disciplina";
		}
		if($(".errMarca").attr("src") !== ok){
			msjRadioBtn += ", la marca es incorrecta y/o vacia";
		}
		alert(msjRadioBtn);
	}
}
function botonRegistrarAtleta(){
	var ok= "img/ok.jpg"; // Declaro variable para checkear que los campos esten bien
	
	if($("#errnomAtl").attr("src") == ok && $("#errapAtl").attr("src") == ok && $('input[type=checkbox]:checked').length > 0){
		
		$('input[name="Atletismo_1[]"]:checked').each(function() {
			atletismo1.push($(this).val());
		});
		$('input[name="Atletismo_2[]"]:checked').each(function() {
			atletismo2.push($(this).val());
		});
		$('input[name="Natacion[]"]:checked').each(function() {
			natacion.push($(this).val());
		});

		ultimoAtl = postulantes.length+1;

		var post= // Creo Atleta con los datos ya validados
		{ 
			"nombre": nomAtl,
			"apellido": apAtl,
			"pais": paisAtl,
			"edad": edadAtl,
			"numeroAtl": ultimoAtl,
			"atletismo1": atletismo1,
			"atletismo2": atletismo2,
			"natacion": natacion
		}

		postulantes.push(post); // Lo agrego array*/
		$("#atl2").append("<option value="+ultimoAtl+">"+"Nombre: "+nomAtl+" "+apAtl+"</option>");
		alert("Candidato agregado con exito. Su N° es "+ ultimoAtl);
		
		$("#regAtlForm").trigger("reset"); // Limpio todos los campos
		// Reinicio todas las imagenes de error
		$("#errTxtNombre").html('');
		$("#errTxtApellido").html('');
		$("#errTxtPais").html('');
		$("#errTxtEdad").html('');
		$("#txtNombre").focus(); // Focus al primer campo del formulario
	}
	else {
		var mensaje = "";
		if($('input[type=checkbox]:checked').length === 0){
			mensaje = "Debes elejir al menos una disciplinas";
		}
		alert("Error en los campos de registro de Atleta.\n"+mensaje);
	}
}
function botonMostrarAtl(){

	var dis = $("#disc").val();
	var ok= false;
	var postulanteDis="";
	if(dis !== "Seleccione una Disciplina"){	
		for (var i = 0; postulantes.length >i; i++) {
			//recorro atletismo1
			if (postulantes[i].atletismo1.length >0 ) {
				postulanteDis = postulantes[i].atletismo1;
				for (var j = 0; postulanteDis.length>j; j++) {
					if (postulanteDis == dis) {
						ok= true;
						$("#atl").append("<option>"+postulantes[i].nombre+" "+postulantes[i].apellido+"</option>");
					}
				}
			}
			if (postulantes[i].atletismo2.length >0 ) {
				postulanteDis = postulantes[i].atletismo2;
				for (var i = j; postulanteDis.length>j; j++) {
					if (postulanteDis.atletismo2 == dis) {
						ok= true;
						$("#atl").append("<option>"+postulantes[i].nombre+" "+postulantes[i].apellido+"</option>");
					}
				}
			}
			if (postulantes[i].natacion.length >0 ) {
				postulanteDis = postulantes[i].natacion;
				for (var i = 0; postulanteDis.length>i; i++) {
					if (postulanteDis.natacion == dis) {
						ok= true;
						$("#atl").append("<option>"+postulantes[i].nombre+" "+postulantes[i].apellido+"</option>");
					}
				}	
			}
		}
		if (ok) {
			$("#atlDiv").fadeIn();
			
		}
	}
}
function botonRegistrarMarcaAtleta(){
	var atl = $("#atl").val();
	var dis =$("#disc").val();
	var marcaNueva = $("#marca").val();
	if (atl !== "Seleccione un Atleta") {
		for (var i = 0; lstMarcasAtletismoI.length >i; i=i+2) {
			if (lstMarcasAtletismoI[i] == dis) {
				if (lstMarcasAtletismoI[i+1] > marcaNueva) {
					//terminar
				}
			}
		}
	}
}
function botonGenerarTarjeta(){
	var numeroAtleta = $("#atl2").val();
	var mostrar="";
	for (var i = 0; postulantes.length >i; i++) {
		if (numeroAtleta == postulantes[i].numeroAtl) {
			mostrar+= "Nombre: "+postulantes[i].nombre+"\n";
			mostrar+= "Apellido: "+postulantes[i].apellido+"\n";
			if (postulantes[i].atletismo1.length>0) {						
				mostrar+= "Atletismo I: "+ postulantes[i].atletismo1.join(' | ');
				mostrar+= "\n";
			}

			if (postulantes[i].atletismo2.length>0) {						
				mostrar+= "Atletismo II: "+ postulantes[i].atletismo2.join(' | ');
				mostrar+= "\n";
			}
			if (postulantes[i].natacion.length>0) {						
				mostrar+= "Natación: "+ postulantes[i].natacion.join(' | ');
				mostrar+= "\n";
			}
			var options = {
				text: mostrar
			};
			$("#tarjeta").empty().qrcode(options);
			$("#tarjeta").css("text-align","center");
		}
	}
}
function botonConsultasDis(){
	
	$("#tablaAtletas").html("<table id='tabla'> <tr><th>Nombre:</th> <th>Apellido:</th> <th>Edad:</th></tr> </table>");
}
// function drawChart() {
// 	var data = new google.visualization.DataTable();
// 	//Agregamos las columnas (sólo para gráficos de torta)
// 	data.addColumn('string', 'Carrera');
// 	data.addColumn('number', 'Estudiantes graduados');
// 	//Agregamos las filas (datos) que corresponden a cada columna
// 	data.addRows([
// 		['Electrónica', 300],
// 		['Sistemas', 185],
// 		['Biotecnología', 87],
// 		['Telecomunicaciones', 58],
// 		]);
 	//Establecemos parámetros de configuración como el título del gráfico y su tamaño
	//var options = {'title':'Distribución de graduados de la FI en 2015',
 	//'width':800, 'height':500};
	//Creamos el gráfico de torta y lo dibujamos en el div creado
	//var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
// 	chart.draw(data, options);
// }
function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Paises', 'Clasificados'],
          ['Uruguay',     11],
          ['Brasil',      2],
          ['Bolivia',  2],
          ['Venezuela', 2],
          ['Argentina',    7],
          ['Inglaterra',    7],
          ['Jamaica',    7],
          ['Japon',    7],
          ['Chile',    7],
          ['Colombia',    7],
          ['Cuba',    7],
          ['Dinamarca',    7],
          ['Ecuador',    7],
          ['España',    7],
          ['Grecia',    7]
        ]);

        var options = {
          title:'Paises clasificados','width':400, 'height':450
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
}
