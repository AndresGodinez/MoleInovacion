var chileSecoCantidad = 125;
var ChileSecoCosto=17.5;
var pepitoriaCantidad= 62.5;
var pepitoriaCosto=7.5;
var ajonjoliCantidad= 62.5;
var ajonjoliCosto=5;
var cacahuateCantidad=62.5;
var cacahuateCosto=10;
var almendrasCantidad=62.5;
var almendrasCosto= 7.5;
var uvasPasasCantidad= 62.5;
var uvasPasasCosto= 6;

var chocolateCantidad=125;
var chocolateCosto= 20;
var azucarCantidad=250;
var azucarCosto=3.75;
var canelaCantidad= 4;
var canelaCosto= 2.50;
var galletasCantidad= 250;
var galletasCosto=8.75;

var total= ChileSecoCosto + pepitoriaCosto + ajonjoliCosto + cacahuateCosto + almendrasCosto + uvasPasasCosto + chocolateCosto + azucarCosto + canelaCosto + galletasCosto;
$(document).ready(function()
	{
	$("#boton").click(function () {	
	var cantidad = $('#cantidad').val();

	if(cantidad > 0)
	{
		$("#cantidadChileSeco").text(cantidad * chileSecoCantidad + " grs");
		$("#costoChileSeco").text(cantidad * ChileSecoCosto + " grs");
		$("#cantidadPepitoria").text(cantidad * pepitoriaCantidad + " grs");
		$("#costoPepitoria").text(cantidad * pepitoriaCosto + " grs");
		$("#cantidadAjonjoli").text(cantidad * ajonjoliCantidad + " grs");
		$("#costoAjonjoli").text(cantidad * ajonjoliCosto + " grs");
		$("#cantidadCacahuate").text(cantidad * cacahuateCantidad + " grs");
		$("#costoCacahuate").text(cantidad * cacahuateCosto + " grs");
		$("#cantidadAlmendras").text(cantidad * almendrasCantidad + " grs");
		$("#costoAlmendras").text(cantidad * almendrasCosto + " grs");
		$("#cantidadUvasPasas").text(cantidad * uvasPasasCantidad + " grs");
		$("#costoUvasPasas").text(cantidad * uvasPasasCosto + " grs");
		$("#cantidadChocolate").text(cantidad * chocolateCantidad + " grs");
		$("#costoChocolate").text(cantidad * chocolateCosto + " grs");
		$("#cantidadAzucar").text(cantidad * azucarCantidad + " grs");
		$("#costoAzucar").text(cantidad * azucarCosto + " grs");
		$("#cantidadCanela").text(cantidad * canelaCantidad + " grs");
		$("#costoCanela").text(cantidad * canelaCosto + " grs");
		$("#cantidadGalleta").text(cantidad * galletasCantidad + " grs");
		$("#costoGalletas").text(cantidad * galletasCosto + " grs");
		$("#total").text("$ "+ cantidad * total );
	}
	else{
		alert("Debe de ser cantidad nuemrica y mayor a 0");
	}

	});
});