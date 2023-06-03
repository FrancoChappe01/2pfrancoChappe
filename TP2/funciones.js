function getCharacterInfo() {
    const characterIdInput = document.getElementById("id-personaje");
    const characterIdInputB = document.getElementById("id-personajeB");
    const resultadoDiv = document.getElementById("resultado");
    const resultadoBDiv = document.getElementById("resultadoB");
    const idpersonaje = characterIdInput.value;
    const idpersonajeB = characterIdInputB.value;
    const url = `https://rickandmortyapi.com/api/character/${idpersonaje}`;
    const urlB = `https://rickandmortyapi.com/api/character/${idpersonajeB}`;

fetch(url)
        .then(response => response.json())
        .then(data => {
            let nombre = data.name;
            let episodios = data.episode;
            let especies = data.species;
            let avatar = data.image;
            let contador=0;

            episodios.forEach(function (aux,i){
                contador=i;
            });

            const resultadoString = `Nombre: ${nombre}<br>Total Episodios: ${contador}<br>Especies: ${especies}<br> <img src= ${avatar} alt="Avatar">`;
            resultadoDiv.innerHTML = resultadoString;
        })

        fetch(urlB)
        .then(response => response.json())
        .then(data => {
            let nombreB = data.name;
            let episodiosB = data.episode;
            let especiesB = data.species;
            let avatarB = data.image;
            let contadorB=0;

            episodiosB.forEach(function (aux,i){
                contadorB=i;
            });

            const resultadoBString = `Nombre: ${nombreB}<br>Total Episodios: ${contadorB}<br>Especies: ${especiesB}<br> <img src= ${avatarB} alt="Avatar">`;
            resultadoBDiv.innerHTML = resultadoBString;
        })
}