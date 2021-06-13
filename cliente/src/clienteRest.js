function ClienteRest(){
    this.crearPartida=function(nick,num,callback){
		$.getJSON("/crearPartida/"+nick+"/"+num,function(data){    
    		console.log(data);
    		callback(data);
		});
	}
    this.unirAPartida=function(codigo,nick){
        $.getJSON("/unirAPartida/"+codigo+"/"+nick,function(data){
            console.log(data);
        });
    }
    this.listaPartidas=function(){
        $.getJSON("/listaPartidas",function(data){
            console.log(data);
        });
    }
    this.iniciarPartida=function(codigo,nick){
        $.getJSON("/iniciarPartida/"+codigo+"/"+nick,function(data){
            console.log(data);
        });
	}
	this.partidasCreadas=function(admin){
        $.getJSON("/partidasCreadas/"+admin,function(data){
			console.log(data);
			cw.mostrarPartidasAnteriores(data, false);
		});
	}
	this.partidasTerminadas=function(admin){
        $.getJSON("/partidasTerminadas/"+admin,function(data){
			console.log(data);
			cw.mostrarPartidasAnteriores(data, true);
		});
    }
}
