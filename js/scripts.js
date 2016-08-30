var arrayPaises = ['Uruguay', 'Brasil', 'Bolivia', 'Venezuela', 'Argentina', 'Inglaterra','Jamaica','Japon','Chile','Colombia','Cuba','Dinamarca','Ecuador','España','Grecia'];
//esta guardando doble los atletas en reg de marca
var postulantes = [];
var nomAtl, apAtl, paisAtl, edadAtl = 0, ultimoAtl;

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
	//click header
	$("#header").click(header);
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
		if(isNaN(edadAtl)==false && edadAtl !== "" && edadAtl >= 17 && 50 >= edadAtl){
			$("#errTxtEdad").html('<img id="errEdadAtl" src="img/ok.jpg" />');
		}
		else {
			$("#errTxtEdad").html('<img id="errEdadAtl" src="img/error.jpg" data-toggle="tooltip" title="La edad debe ser entre 17 y 50 años" />');
		}
		$("#errEdadAtl").css("width",20);
		
	});
	//fin de validacion de Atleta

	//Validacion de ingreso de marca

	//valiacion marca
	$(".marca").blur(function(){
		var marcaAux = $(".marca").val();
		$(".errMarca").remove();
		if(isNaN(marcaAux)==false && marcaAux !== "" && marcaAux>=1 && 50 >= marcaAux){
			
			$(".errTxtMarca").html('<img class="errMarca" src="img/ok.jpg" />');
		}
		else {
			$(".errTxtMarca").html('<img class="errMarca" src="img/error.jpg" data-toggle="tooltip" title="La marca debe estar entre 1 y 50" />');
		}
		$(".errMarca").css("width",20);
		
	});

	$("#marcaAtleta").blur(function(){
		var marcaAux = $("#marcaAtleta").val();
		$("#errMarcaAtl").remove();
		if(isNaN(marcaAux)==false && marcaAux !== ""&& marcaAux>=1 && 50 >= marcaAux){
			$("#errTxtMarcaAtl").html('<img id="errMarcaAtl" src="img/ok.jpg" />');
		}
		else {
			$("#errTxtMarcaAtl").html('<img id="errMarcaAtl" src="img/error.jpg" data-toggle="tooltip" title="La marca debe estar entre 1 y 50" />');
		}
		$("#errMarcaAtl").css("width",20);
		
	});

	//Fin de Validacion de ingreso de marca
}
function header(){

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
	$("#carousel-example-generic").hide();
	
	$("#carousel-example-generic").fadeIn(1000);
	
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
	$('#tablaAtletas').html('');


}
function atletasClasificados(){
	mostrarmenu("#ventanaAtlClasi",this,"#atlClasiForm","boton");
	//Código que permite cargar los paquetes de charts en nuestro proyecto
	//google.load('visualization', '1.0', {'packages':['corechart']});
	//Establecemos el gráfico debe dibujarse al cargar google charts API
	//google.setOnLoadCallback(drawChart);
	google.charts.load('current', {'packages':['corechart']});
	 
	google.charts.setOnLoadCallback(drawChart());
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
	var atletismo1 = [];
	var atletismo2 = [];
	var natacion =  [];
	var ok= "img/ok.jpg"; // Declaro variable para checkear que los campos esten bien
	
	if($("#errnomAtl").attr("src") == ok && $('#txtApellido').val() !== "" && $("#errapAtl").attr("src") == ok && $('#pais').val() !== "Seleccione un País..." && $('#edad').val() !== "" && $('#errEdadAtl').attr("src") == ok && $('input[type=checkbox]:checked').length > 0){
		
			$('input[name="Atletismo_1[]"]:checked').each(function() {
				atletismo1.push($(this).val());
				atletismo1.push(0);
			});
			$('input[name="Atletismo_2[]"]:checked').each(function() {
				atletismo2.push($(this).val());
				atletismo2.push(0);
			});
			$('input[name="Natacion[]"]:checked').each(function() {
				natacion.push($(this).val());
				natacion.push(0);
			});

			ultimoAtl = postulantes.length+1;

			var disciplinas =
			{
				"atletismo1": atletismo1,
				"marcaAtletismo1": [0,0,0,0,0],
				"atletismo2": atletismo2,
				"marcaAtletismo2": [0,0,0,0],
				"natacion": natacion,
				"marcaAtletismo1": [0,0,0,0]
			}

			var post= // Creo Atleta con los datos ya validados
			{ 
				"nombre": nomAtl,
				"apellido": apAtl,
				"pais": paisAtl,
				"edad": edadAtl,
				"numeroAtl": ultimoAtl,
				"disciplinas": disciplinas
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
		alert("Error en los campos de registro de Atleta.\n Todos los campos deben ser correctos y son obligatorios\n"+mensaje);
	}
}

function botonRegistrarMarcaAtleta(){
	var numAtl = $("#atl").val();
	var dis =$("#disc").val();
	var clacifico = false;
	var entro = false;
	var marcaNueva = $("#marcaAtleta").val();
	if (numAtl !== "Seleccione un Atleta") {
		//registro atletismo1
		for (var i = 0; lstMarcasAtletismoI.length >i; i=i+2) {
			if (lstMarcasAtletismoI[i] == dis) {
				var marcaOlimpica = lstMarcasAtletismoI[i+1];
				var disAtldeAtletismo1 = [];
				disAtldeAtletismo1 = postulantes[numAtl-1].disciplinas.atletismo1;
				for (var j = 0; disAtldeAtletismo1.length > j && !entro; j=j+2) {
					if(disAtldeAtletismo1[j] = dis){

						if(disAtldeAtletismo1[j+1] == 0){
							postulantes[numAtl-1].disciplinas.atletismo1[j+1] = marcaNueva;
							if(marcaNueva <= marcaOlimpica){
								entro = true;
								alert("haz clacificado a las olimpiadas en esta disciplina");
							}
							$("#regMarcaForm").trigger("reset");
							$("#atlDiv").hide();
						}else{
							if(disAtldeAtletismo1[j+1] >= marcaNueva){
								postulantes[numAtl-1].disciplinas.atletismo1[j+1] = marcaNueva;
								if(marcaNueva <= marcaOlimpica){
									entro = true;
									alert("haz clacificado a las olimpiadas en esta disciplina");
								}
							}
							$("#regMarcaForm").trigger("reset");
							$("#atlDiv").hide();
						}
					}
				}
			}
		}
		//registro atletismo2
		for (var i = 0; lstMarcasAtletismoII.length >i; i=i+2) {
			if (lstMarcasAtletismoII[i] == dis) {
				var marcaOlimpica = lstMarcasAtletismoI[i+1];
				var disAtldeAtletismo2 = [];
				disAtldeAtletismo2 = postulantes[numAtl-1].disciplinas.atletismo2;
				for (var j = 0; disAtldeAtletismo2.length > j && !entro; j=j+2) {
					if(disAtldeAtletismo2[j] = dis){

						if(disAtldeAtletismo2[j+1] == 0){
							postulantes[numAtl-1].disciplinas.atletismo2[j+1] = marcaNueva;
							if(marcaNueva <= marcaOlimpica){
								entro = true;
								alert("haz clacificado a las olimpiadas en esta disciplina");
							}
							$("#regMarcaForm").trigger("reset");
							$("#atlDiv").hide();
						}else{
							if(disAtldeAtletismo2[j+1] >= marcaNueva){
								postulantes[numAtl-1].disciplinas.atletismo2[j+1] = marcaNueva;
								if(marcaNueva <= marcaOlimpica){
									entro = true;
									alert("haz clacificado a las olimpiadas en esta disciplina");
								}
							}
							$("#regMarcaForm").trigger("reset");
							$("#atlDiv").hide();
						}
					}
				}
			}
		}
		//registro natacion
		for (var i = 0; lstMarcasNatacion.length >i; i=i+2) {
			if (lstMarcasNatacion[i] == dis) {
				var marcaOlimpica = lstMarcasNatacion[i+1];
				var disAtldeNatacion = [];
				disAtldeNatacion = postulantes[numAtl-1].disciplinas.natacion;
				for (var j = 0; disAtldeNatacion.length > j && !entro; j=j+2) {
					if(disAtldeNatacion[j] = dis){

						if(disAtldeNatacion[j+1] == 0){
							postulantes[numAtl-1].disciplinas.natacion[j+1] = marcaNueva;
							if(marcaNueva <= marcaOlimpica){
								entro = true;
								alert("haz clacificado a las olimpiadas en esta disciplina");
							}
							$("#regMarcaForm").trigger("reset");
							$("#atlDiv").hide();
						}else{
							if(disAtldeNatacion[j+1] >= marcaNueva){
								postulantes[numAtl-1].disciplinas.natacion[j+1] = marcaNueva;
								if(marcaNueva <= marcaOlimpica){
									entro = true;
									alert("haz clacificado a las olimpiadas en esta disciplina");
								}
							}
							$("#regMarcaForm").trigger("reset");
							$("#atlDiv").hide();
						}
					}
				}
			}
		}
	}
}

function botonMostrarAtl(){
	$("#errMarcaAtl").remove();
	$('#atl').empty().append("<option>Seleccione un Atleta</option>");
	var dis = $("#disc").val();
	var ok= false;
	var postulanteDis="";
	if(dis !== "Seleccione una Disciplina"){	
		for (var i = 0; postulantes.length >i; i++) {
			//recorro atletismo1
			if (postulantes[i].disciplinas.atletismo1.length >0 ) {
				postulanteDis = postulantes[i].disciplinas.atletismo1;
				for (var j = 0; postulanteDis.length>j; j=j+2) {
					if (postulanteDis[j] == dis) {
						ok= true;
						$("#atl").append("<option value="+postulantes[i].numeroAtl+">"+postulantes[i].nombre+" "+postulantes[i].apellido+"</option>");
					}
				}
			}
			//recorro atleismo2
			if (postulantes[i].disciplinas.atletismo2.length >0 ) {
				postulanteDis = postulantes[i].disciplinas.atletismo2;
				for (var j=0; postulanteDis.length>j; j=j+2) {
					if (postulanteDis[j] == dis) {
						ok= true;
						$("#atl").append("<option value="+postulantes[i].numeroAtl+">"+postulantes[i].nombre+" "+postulantes[i].apellido+"</option>");
					}
				}
			}
			//recorro natacion
			if (postulantes[i].disciplinas.natacion.length >0 ) {
				postulanteDis = postulantes[i].disciplinas.natacion;
				for (var j = 0; postulanteDis.length>j; j=j+2) {
					if (postulanteDis[j] == dis) {
						ok= true;
						$("#atl").append("<option value="+postulantes[i].numeroAtl+">"+postulantes[i].nombre+" "+postulantes[i].apellido+"</option>");
					}
				}	
			}
		}
		if (ok) {
			$("#atlDiv").fadeIn();
		}
	}
	else{
		alert("Debes seleccionar una Disciplina");
		$('#regMarcaForm').trigger('reset');
		$('#atlDiv').hide();
	}
}
function botonGenerarTarjeta(){
	var numeroAtleta = $("#atl2").val();
	var mostrar="";
	var disAtl1="| ";
	var disAtl2="| ";
	var disNat="| ";
	//recorro lista postulantes
	for (var i = 0; postulantes.length >i; i++) {
		if (numeroAtleta == postulantes[i].numeroAtl) { //si tiene el mismo num entro
			mostrar+= "Nombre: "+postulantes[i].nombre+"\n";
			mostrar+= "Apellido: "+postulantes[i].apellido+"\n";
			mostrar+= "Numero: "+ postulantes[i].numeroAtl+"\n";
			if (postulantes[i].disciplinas.atletismo1.length>0) {		
				for (var j = 0; postulantes[i].disciplinas.atletismo1.length >j; j=j+2) {//recorro lista disciplinas atletismo1
					disAtl1 += postulantes[i].disciplinas.atletismo1[j]+" | ";
				}				
				mostrar+= "Atletismo I: "+ disAtl1;
				mostrar+= "\n";
			}

			if (postulantes[i].disciplinas.atletismo2.length>0) {	
				for (var j = 0; postulantes[i].disciplinas.atletismo2.length >j; j=j+2) {//recorro lista disciplinas atletismo2
					disAtl2 += postulantes[i].disciplinas.atletismo2[j]+" | ";
				}					
				mostrar+= "Atletismo II: "+ disAtl2;
				mostrar+= "\n";
			}
			if (postulantes[i].disciplinas.natacion.length>0) {	
				for (var j = 0; postulantes[i].disciplinas.natacion.length >j; j=j+2) {//recorro lista disciplinas natacion
					disNat += postulantes[i].disciplinas.natacion[j]+" | ";
				}					
				mostrar+= "Natación: "+ disNat;
				mostrar+= "\n";
			}
			var options = {
				text: mostrar
			};
			//genero el codigo qr
			$("#tarjeta").empty().qrcode(options);
			$("#tarjeta").css("text-align","center");
		}
	}
}
function botonConsultasDis(){
	$('#tablaAtletas').empty();
	var cat = $('#cat').val();
	var dis = $('input[class="radioCosultaDisciplina"]:checked').val();

	$("#tablaAtletas").append("<table id='tablaAtl' class='table table-condensed'> <tr><th>Atlteta</th> <th>Marca</th> <th>Clasifacion</th></tr></table>");
	//recorro los postulantes y los muestro segun disicplina checkeada
	for (var i = 0; postulantes.length > i; i++) {
		var postDis = postulantes[i].disciplinas;
		//recorro atletismo1 
		for (var j=0; postDis.atletismo1.length > j; j=j+2) {
		  	if(dis == postDis.atletismo1[j]){
		  		var marcaOlimpica = "";
		  		for(var h=0; lstMarcasAtletismoI.length > h; h=h+2){
		  			if(dis == lstMarcasAtletismoI[h]){
		  				marcaOlimpica = lstMarcasAtletismoI[h+1];
		  			}
		  		}
		  		$("#tablaAtl").append("<tr data-toggle='modal' data-target='.bs-example-modal-sm' onclick='cargarDatosAtl("+i+")' class='active mostrarInfoAtl'><th>"+postulantes[i].nombre+" "+postulantes[i].apellido+"</th>"+
		  			"<th>"+postDis.atletismo1[j+1]+"</th>"+
		  			"<th>"+((postDis.atletismo1[j+1]<=marcaOlimpica) ? "Clasifico" : "No Clasifico")+"</th></tr>");
		  	}
		}
		//recorro atletismo2
		for (var j=0; postDis.atletismo2.length > j; j=j+2) {
		  	if(dis == postDis.atletismo2[j]){
		  		var marcaOlimpica = "";
		  		for(var h=0; lstMarcasAtletismoII.length > h; h=h+2){
		  			if(dis == lstMarcasAtletismoII[h]){
		  				marcaOlimpica = lstMarcasAtletismoII[h+1];
		  			}
		  		}
		  		$("#tablaAtl").append("<tr data-toggle='modal' data-target='.bs-example-modal-sm' onclick='cargarDatosAtl("+i+")' class='active mostrarInfoAtl'><th>"+postulantes[i].nombre+" "+postulantes[i].apellido+"</th>"+
		  			"<th>"+postDis.atletismo2[j+1]+"</th>"+
		  			"<th>"+((postDis.atletismo2[j+1]<=marcaOlimpica) ? "Clasifico" : "No Clasifico")+"</th></tr>");
		  	}
		}
		//recorro natacion
		for (var j=0; postDis.natacion.length > j; j=j+2) {
		  	if(dis == postDis.natacion[j]){
		  		var marcaOlimpica = "";
		  		for(var h=0; lstMarcasNatacion.length > h; h=h+2){
		  			if(dis == lstMarcasNatacion[h]){
		  				marcaOlimpica = lstMarcasNatacion[h+1];
		  			}
		  		}  //class="btn btn-primary" data-toggle="modal" data-target=".bs-example-modal-sm"
		  		$("#tablaAtl").append("<tr data-toggle='modal' data-target='.bs-example-modal-sm' onclick='cargarDatosAtl("+i+")' class='active mostrarInfoAtl'><th>"+postulantes[i].nombre+" "+postulantes[i].apellido+"</th>"+
		  			"<th>"+postDis.natacion[j+1]+"</th>"+
		  			"<th>"+((postDis.natacion[j+1]<=marcaOlimpica) ? "Clasifico" : "No Clasifico")+"</th></tr>");
		  	}
		}
	}
}

function cargarDatosAtl(i){
	$('.modalDatosAtl').html('');
	$('.modalDatosAtl').append("Atleta: "+postulantes[i].nombre+" "+postulantes[i].apellido+"\n"+
		"Edad: "+postulantes[i].edad+"\n"+"Pais: "+postulantes[i].pais+"\n"+
		"Disciplinas a participar: "+postulantes[i].disciplinas.atletismo1.join(' Marca ')+"\n"+
									postulantes[i].disciplinas.atletismo2.join(' Marca ')+"\n"+
									postulantes[i].disciplinas.natacion.join(' Marca ')+"\n");

	
}

function drawChart() {
	var entro = false;
	//filtro postulantes por pais y voy contando cuantas clasificaciones hay y sumo en lstClasificadosPaises
		var lstClasificadosPaises = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		for (var i = 0; postulantes.length >i; i++) {//recorro los postulantes
			var post = postulantes[i];
			
			for (var j = 0; post.disciplinas.atletismo1.length> j; j=j+2) {//recorro las disciplinas del atleta en atletismo1
				
				var dis = post.disciplinas.atletismo1;//capturo la disciplina
				
				for (var k = 0; lstMarcasAtletismoI.length > k; k=k+2) {//recorro las marcas oficiales
					
					if (lstMarcasAtletismoI[k] == dis[j]) {
						if (lstMarcasAtletismoI[k+1] >= dis[j+1]) { //si la marca del post es menor que la marca oficial
							
							for (var h = 0; arrayPaises.length > h; h++) {//recorro los paises para guardar la clasificacion
								
								if (post.pais == arrayPaises[h]) {
									lstClasificadosPaises[h]++;
									entro =true;
								}
							}
						}
					}
				}
			}
			for (var j = 0; post.disciplinas.atletismo2.length> j; j=j+2) {//recorro las disciplinas del atleta en atletismo2
				
				var dis = post.disciplinas.atletismo2;//capturo la disciplina
				
				for (var k = 0; lstMarcasAtletismoII.length > k; k=k+2) {//recorro las marcas oficiales
					if (lstMarcasAtletismoII[k] == dis[j]) {
						if (lstMarcasAtletismoII[k+1] >= dis[j+1]) { //si la marca del post es menor que la marca oficial
							
							for (var h = 0; arrayPaises.length > h; h++) {//recorro los paises para guardar la clasificacion
								if (post.pais == arrayPaises[h]) {
									lstClasificadosPaises[h]++;
									entro =true;
								}
							}
						}
					}
				}
			}
			for (var j = 0; post.disciplinas.natacion.length> j; j=j+2) {//recorro las disciplinas del atleta en natacion
				
				var dis = post.disciplinas.natacion;//capturo la disciplina
				
				for (var k = 0; lstMarcasNatacion.length > k; k=k+2) {//recorro las marcas oficiales
					if (lstMarcasNatacion[k] == dis[j]) {
						if (lstMarcasNatacion[k+1] >= dis[j+1]) { //si la marca del post es menor que la marca oficial
							
							for (var h = 0; arrayPaises.length > h; h++) {//recorro los paises para guardar la clasificacion
								if (post.pais == arrayPaises[h]) {
									lstClasificadosPaises[h]++;
									entro =true;
								}
							}
						}
					}
				}
			}
		}
		if (entro) {
        	var data = google.visualization.arrayToDataTable([
         	 ['Paises', 'Clasificados'],
         	 ['Uruguay',     lstClasificadosPaises[0]],
         	 ['Brasil',      lstClasificadosPaises[1]],
         	 ['Bolivia',  lstClasificadosPaises[2]],
        	  ['Venezuela',lstClasificadosPaises[3]],
         	 ['Argentina',   lstClasificadosPaises[4]],
         	 ['Inglaterra',   lstClasificadosPaises[5]],
         	 ['Jamaica',   lstClasificadosPaises[6]],
         	 ['Japon',   lstClasificadosPaises[7]],
         	 ['Chile',   lstClasificadosPaises[8]],
         	 ['Colombia',   lstClasificadosPaises[9]],
         	 ['Cuba',   lstClasificadosPaises[10]],
         	 ['Dinamarca',   lstClasificadosPaises[11]],
         	 ['Ecuador',   lstClasificadosPaises[12]],
          	['España',   lstClasificadosPaises[13]],
         	 ['Grecia',   lstClasificadosPaises[14]]
       	 ]);

        	var options = {
          	title:'Paises clasificados','width':400, 'height':450
        	};

        	var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        	chart.draw(data, options);
        }else{
        	alert("No hay paises clasificados");
        }

}
