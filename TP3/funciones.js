function boton(){
    const resultadoDiv= document.getElementById("resultado");
    const resultadoDivB= document.getElementById("resultadoB");
    const url='https://randomuser.me/api/';
    const personajealeatorio= Math.floor(Math.random()*826)+1;
    const urlB=`https://rickandmortyapi.com/api/character/${personajealeatorio}`
    const resuladosMatch= document.getElementById("resultados")
    var aux=""

fetch(url)
    .then (response=>response.json())
    .then (data=>{
        console.log(data);
        let nombre= data.results[0].name.first;
        let apellido= data.results[0].name.last;
        let dni= data.results[0].id.value;
        let genero= data.results[0].gender;
        aux=genero;
        let foto= data.results[0].picture.large;
        let coordenadasLAT= data.results[0].location.coordinates.latitude
        let coordenadasLONG= data.results[0].location.coordinates.longitude
        let color="";
        if (genero=="male") {
            
                color="background-color: yellow;"

        } else {
            if (genero=="female") {
                
                    color="background-color: green;"
                
            }
        }

    const resultadoString= `<div style="${color}"> Nombre: ${nombre}<br>Apellido: ${apellido}<br>ID: ${dni}<br>Genero: ${genero}<br>Latitud: ${coordenadasLAT}<br>Longitud: ${coordenadasLONG}<br><img src= "${foto}" style="width: 300px; height: 300px;"></div>`;
    resultadoDiv.innerHTML=resultadoString;


fetch(urlB)
    .then (response => response.json())
    .then(data => {
        let nombre = data.name;
        let especies = data.species;
        let generoB = data.gender;
        let episodios = data.episode;
        let avatar = data.image;
        let color="";
        if (generoB=="Male") {
            
                color="background-color: yellow;"
            
        } else {
            if (generoB=="Female") {
                
                color="background-color: green;"
        
            }
         else{ if (generoB=="unknown"){
            alert (`El genero de= ${nombre} ES INDEFINIDO.`)
            color= "background-color: orange;"
        }

        }
    }

        const resultadoStringB = `<div style="${color}"> Nombre: ${nombre}<br>Especies: ${especies}<br>Genero: ${generoB}<br>Episodios: ${episodios.length}<br><img src= "${avatar}" alt="Avatar"></div>`;
        resultadoDivB.innerHTML = resultadoStringB;

        
        if (generoB=="Female"&&aux=="female"|| generoB=="Male" && aux=="male"){
                let imagen = "https://st.depositphotos.com/1144687/2598/i/600/depositphotos_25985361-stock-photo-hand-like.jpg"
                var resultados= `<img src=${imagen} alt="Match"style="height: 100px;width: 100px;" >`
            } else {
                        if (generoB=="Female"&&aux!="female"||generoB=="Male"&&aux!="male") {
                            let imagen= "https://images.vexels.com/media/users/3/226800/isolated/lists/9ccf98f4f514987060c6d6872f9e8892-ilustracion-de-mano-pulgares-abajo.png"
                            var resultados= `<img src=${imagen} alt="NoMatch" style="height: 100px ; width: 100px;">;`
                            }    
                    }
        resuladosMatch.innerHTML=resultados;
    })    
})
}
