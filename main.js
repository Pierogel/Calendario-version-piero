
function fechaPorDia(año, dia) {
	var date = new Date(año, 0);
	return new Date(date.setDate(dia));
}

function numerar(){
	for(var i=1; i<366;i++){
		let fecha= fechaPorDia(2018,i);
		let mes = fecha.getMonth();
		let select_tabla = document.getElementsByClassName('tabla_mes')[mes];
		let dia = fecha.getDate();
		let dia_semana = fecha.getDay();
		if(dia==1) {
			var sem=0;
		}
		select_tabla.children[2].children[sem].children[dia_semana].innerText = dia;
		if(dia_semana==6) {
			sem=sem+1;
		}
	}
}


function estructurar() {
	var mes_text = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
	var dia_text = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
	for(var i=0;i<12;i++) {
		let mes = document.createElement("DIV");
		mes.className = "mes";
		document.body.appendChild(mes);

		let tabla_mes = document.createElement("TABLE");
		tabla_mes.className="tabla_mes";
		mes.appendChild(tabla_mes);

		let titulo = document.createElement("CAPTION");
		titulo.className = "titulo";
		titulo.innerText = mes_text[i];
		tabla_mes.appendChild(titulo);

		let cabecera = document.createElement("THEAD");
		tabla_mes.appendChild(cabecera);

		let fila = document.createElement("TR");
		cabecera.appendChild(fila);

		for(var j=0;j<7;j++) {
			let dia = document.createElement("TH");
			dia.innerText = dia_text[j];
			fila.appendChild(dia);
		}


		let cuerpo = document.createElement("TBODY");
		tabla_mes.appendChild(cuerpo);

		for(var f=0;f<6;f++) {
			let fila = document.createElement("TR");
			cuerpo.appendChild(fila);
			for(var c=0;c<7;c++) {
				let dia2 = document.createElement("TD");
				dia2.innerText = "";
				fila.appendChild(dia2);
			}
		}


	}
}

estructurar();
numerar();
