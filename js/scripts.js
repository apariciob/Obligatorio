var arrayPaises = ['Uruguay', 'Brasil', 'Bolivia', 'Venezuela', 'Argentina', 'Inglaterra'];
var postulantes = [];
var nomAtl, apAtl, paisAtl, edadAtl, ultimoAtl;
var  atletismo1 = [];
var atletismo2 = [];
var natacion = [];
//var nomAtl, apAtl, telPost, edPost, sexoPost, expPost, manejaProgramasPost, programasPost; // Variables postulante

$(document).ready(inicio);

function inicio(){
	$("#ventanaReg").hide();
	$("#ventanaIngresoMarca").hide();
	$("#ventanaMarcaAtl").hide();
	$("#ventanaTarjAtl").hide();
	$("#ventanaConsultaDis").hide();
	$("#ventanaAtlClasi").hide();
	$("#atletismo").hide();
	$("#atletismo2").hide();
	$("#natacion").hide();
	$("#marcaCat").hide();

	//llenando el select
	var count = 0;
	$(arrayPaises).each(function(){
		$('#pais').append(new Option(arrayPaises[count]));
		count++;
	})
	//***********Cambiar Pestañas***********//
	//Click Pestaña registrar atleta
	$("#btnRegAtl").click(registroAtleta);

	//Click btn registrar atleta
	$("#btnRegistrar").click(botonRegistrarAtleta);
	
	//click ingresar marca
	$("#btnIngresoMarca").click(ingresoMarca);

	//Click ingresar Marca

	$("#selecCat").click(mostrarMarca);
	
	//click marca atleta
	$("#btnRegMarca").click(registroMarca);
	
	//click tarjeta atleta
	$("#btnTarAtl").click(tarjetaAtleta);
	
	//click consultas disciplinas
	$("#btnConsultasDis").click(consultasDisciplinas);
	
	//click atletas clasificados
	$("#btnAtlClasi").click(atletasClasificados);
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
			console.log("entre al if"+ paisAtl);
			$("#errTxtPais").html('<img id="errPaisAtl" src="img/ok.jpg" />');
			$("#paisInput").val(paisAtl);
		}
		else {
			console.log("entre al else"+ paisAtl);
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
			console.log("entre al else"+ edadAtl);
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
	
}
function registroMarca(){
	mostrarmenu("#ventanaMarcaAtl",this,"#regMarcaForm","#atl");
	
}
function tarjetaAtleta(){
	mostrarmenu("#ventanaTarjAtl",this,"#tarjAtlForm","#atl2");
	
}
function consultasDisciplinas(){
	mostrarmenu("#ventanaConsultaDis",this,"#consulDisForm","#cat");
	
}
function atletasClasificados(){
	mostrarmenu("#ventanaAtlClasi",this,"#atlClasiForm","boton");
	
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
        $("#marcaCat1").fadeIn(1000);
        $("#marcaCat2").hide();
		$("#atletismo2").hide();
		$("#atletismo").hide();
		$("#ingresoMarcaForm").trigger("reset");
        break;
    }
}

function botonRegistrarAtleta(){
	var ok= "img/ok.jpg"; // Declaro variable para checkear que los campos esten bien
	
	if($("#errnomAtl").attr("src") == ok && $("#errapAtl").attr("src") == ok && $('input[type=checkbox]:checked').length > 0)
	{
		
		$('input[name="Atletismo_1[]"]:checked').each(function() {
			atletismo1.push($(this).val());
			//console.log(atletismo1);
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
		
		alert("Candidato agregado con exito. Su N° es "+ ultimoAtl);
		console.log(postulantes);
		
		$("#regAtlForm").trigger("reset"); // Limpio todos los campos
		// Reinicio todas las imagenes de error
		$("#errTxtNombre").html('');
		$("#errTxtApellido").html('');
		$("#errTxtEdad").html('');
		$("#txtNombre").focus(); // Focus al primer campo del formulario
	}
	else {
		var mensaje = "";
		if($('input[type=checkbox]:checked').length === 0){
			mensaje = "Debes elejir al menos una disciplinas";
		}
		alert("Error en los campo de registro de Candidato.\n"+mensaje);
		}
}



