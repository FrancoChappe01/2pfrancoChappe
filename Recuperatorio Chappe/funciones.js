function obtenerDatos() {
    const provincia = document.getElementById("provincia").value;
    var municipio = document.getElementById("municipio").value;
    const resultadoDiv = document.getElementById("resultado");
    const archivoLocal = 'datosCensales.json';

    fetch(archivoLocal)
        .then(response => response.json())
        .then(data => {
            let nombreProvincia = "";
            let nombreMunicipio = "";
            let nombreDepartamento = "";
            let latitudProvincia= "";
            let longitudProvincia= "";
            let coincidencia = false;
            let coincidencia2 = false;

            for (let i = 0; i < data["localidades-censales"].length; i++) {
                const elemento = data["localidades-censales"][i];

                if (provincia == elemento.provincia.id && (municipio == elemento.municipio.id || municipio == elemento.departamento.id)) {
                    nombreProvincia = elemento.provincia.nombre;
                    nombreMunicipio = elemento.municipio.nombre;
                    nombreDepartamento = elemento.departamento.nombre;
                    latitudProvincia = elemento.centroide.lat;
                    longitudProvincia = elemento.centroide.lon;

                    coincidencia= true;
                    break;
                }else if (provincia != elemento.provincia.id && (municipio == elemento.municipio.id || municipio == elemento.departamento.id)){
                    nombreProvincia != elemento.provincia.nombre;
                    nombreMunicipio = elemento.municipio.nombre;
                    nombreDepartamento = elemento.departamento.nombre;
                    latitudProvincia = elemento.centroide.lat;
                    longitudProvincia = elemento.centroide.lon;

                    coincidencia2= true;
                    break;
                }
               
            }
            if (coincidencia == true || coincidencia2 == true) {
                let results = `Provincia ingresada: ${nombreProvincia}<br>
                                Municipio: ${nombreMunicipio}<br>
                                Departamento: ${nombreDepartamento}<br>
                                Latitud: ${latitudProvincia}<br>
                                Longitud: ${longitudProvincia}`;
                resultadoDiv.innerHTML = results;
            }
        });
}