$(document).ready(function() {		
	$("#copy-volador").attr("data-clipboard-text", "R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200;\n"
                + "var DI = document.getElementsByTagName(\"img\");\n"
                + "DIL = DI.length;\n"
                + "function A(){\n"
                    + "for(i=0; i<DIL; i++){\n"
                       + "DIS=DI[ i ].style;\n"
                       + "DIS.position='absolute';\n"
                       + "DIS.left=Math.sin(R*x1+i*x2+x3)*x4+x5+\"px\";\n"
                       + "DIS.top=Math.cos(R*y1+i*y2+y3)*y4+y5+\"px\";\n"
                    + "}\n" 
                    + "R++;\n" 
                + "}\n" 
                + "tag=setInterval('A()',5 );\n"
                + "document.onmousedown = function(){\n"
                    + "clearInterval(tag);\n" 
                    + "for(i=0; i<DIL; i++){\n" 
                        + "DI[i].style.position=\"static\";\n" 
                    + "}\n"
                + "}; void(0)");
	$("#copy-noticias").attr("data-clipboard-text", "var SRC = \"http://localhost:3000/imgs/dcphoto.png\";\n"
				+ "var NOMBRE = \"Tu nombre\";\n"
				+ "var primerArticulo = document.getElementsByTagName(\"article\")[1];\n"
				+ "var foto = primerArticulo.getElementsByTagName(\"img\")[0];\n"
				+ "foto.src = SRC;\n"
				+ "var pie = primerArticulo.getElementsByClassName(\"bajada\")[0];\n"
				+ "pie.innerHTML = \"¡\" + NOMBRE + \" visita el Departamento de Computación!\";\n"
				+ "var texto = primerArticulo.getElementsByClassName(\"f-linkNota\")[0];\n"
				+ "texto.innerHTML = \"¡\" + NOMBRE + \" visitó la Semana de la Computación y le encantó! :D\";\n"
				+ "var subEncabezado = primerArticulo.getElementsByTagName(\"h3\")[0];\n"
				+ "subEncabezado.innerHTML = \"Visita a la SdC\";\n");
	$("#copy-facebook").attr("data-clipboard-text", "var MENSAJE = \"Voy a estudiar computacion!\";\n"
				+ "var conversaciones = document.getElementsByClassName(\"_5yl5\");\n"
				+ "var ultima_conversacion = conversaciones[conversaciones.length-1];\n"
				+ "ultima_conversacion.innerHTML = MENSAJE;\n");
	$("#copy-facebookfotos").attr("data-clipboard-text", "var SRC = \"https://www.dc.uba.ar/header/search_box/logo_uba.png\";\n" 
				+ "setInterval(function(){\n"
				+ "	for(i=0;i<document.getElementsByClassName('_55lt').length;i++) {\n"
				+ "		document.getElementsByClassName(\"_55lt\")[i].childNodes[0].src = SRC;\n"
				+ "	}\n"
				+ "}, 3000); ");
	$("#copy-gravity").attr("data-clipboard-text", "var script = document.createElement(\"script\");\n"
				+ "script.src=\"https://gravityscript.googlecode.com/svn/trunk/gravityscript.js\";\n"
				+ "document.body.appendChild(script);void(0);");
	$("#copy-twitter").attr("data-clipboard-text", "document.getElementsByClassName(\""
				+ "js-tweet-text tweet-text\")[0].innerHTML = \"Aguante la Semana de la Computación!\";");
	$("#copy-fart").attr("data-clipboard-text", "function loadScript(url, callback) {\n"
				+ "var head = document.getElementsByTagName('head')[0];\n"
				+ "var script = document.createElement('script');\n"
				+ "script.type = 'text/javascript';\n"
				+ "script.src = url;\n"
				+ "script.onreadystatechange = callback;\n"
				+ "script.onload = callback;\n"
				+ "head.appendChild(script);\n"
				+ "}\n"
				+ "function loadFarts() {\n"
				+ "fartscroll(800);\n"
				+ "}\n"
				+ "loadScript(\"https://rawgit.com/theonion/fartscroll.js/master/fartscroll.js\", loadFarts);");

	var copy_volador_client = new ZeroClipboard($("#copy-volador"));
	copy_volador_client.on( "ready", function( readyEvent ) {
	  copy_volador_client.on( "aftercopy", function( event ) {
	    $("#copied-volador").show("blind");
	  });
	});

	var copy_noticias_client = new ZeroClipboard($("#copy-noticias"));
	copy_noticias_client.on( "ready", function( readyEvent ) {
	  copy_noticias_client.on( "aftercopy", function( event ) {
	    $("#copied-noticias").show("blind");
	  });
	});

	var copy_facebook_client = new ZeroClipboard($("#copy-facebook"));
	copy_facebook_client.on( "ready", function( readyEvent ) {
	  copy_facebook_client.on( "aftercopy", function( event ) {
	    $("#copied-facebook").show("blind");
	  });
	});

	var copy_facebookfotos_client = new ZeroClipboard($("#copy-facebookfotos"));
	copy_facebookfotos_client.on( "ready", function( readyEvent ) {
	  copy_facebookfotos_client.on( "aftercopy", function( event ) {
	    $("#copied-facebookfotos").show("blind");
	  });
	});

	var copy_gravity_client = new ZeroClipboard($("#copy-gravity"));
	copy_gravity_client.on( "ready", function( readyEvent ) {
	  copy_gravity_client.on( "aftercopy", function( event ) {
	    $("#copied-gravity").show("blind");
	  });
	});

	var copy_twitter_client = new ZeroClipboard($("#copy-twitter"));
	copy_twitter_client.on( "ready", function( readyEvent ) {
	  copy_twitter_client.on( "aftercopy", function( event ) {
	    $("#copied-twitter").show("blind");
	  });
	});

	var copy_fart_client = new ZeroClipboard($("#copy-fart"));
	copy_fart_client.on( "ready", function( readyEvent ) {
	  copy_fart_client.on( "aftercopy", function( event ) {
	    $("#copied-fart").show("blind");
	  });
	});
});