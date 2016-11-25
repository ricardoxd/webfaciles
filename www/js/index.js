
function cargarUrl(url) {
	url=url.replace("#/","");
	if(url=='salir'){
		localStorage.ingreso=false;
		cargarUrl('');
		return;
	}
$.ajax({
        beforeSend: function(xhrObj){
                xhrObj.setRequestHeader("movil","true");
                if(localStorage.ingreso=='true'){
                	xhrObj.setRequestHeader("authorization","token "+localStorage.token);
                }        },
        type: "GET",
        url: server+url,
        dataType:"html",
        success: function(json){
        	$("body").html(json);

        }
});
}
cargarUrl(window.location.hash);

$(window).on('hashchange', function(e){
var page=window.location.hash;
cargarUrl(page);
});
