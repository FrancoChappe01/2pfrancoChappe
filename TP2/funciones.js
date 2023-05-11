function getCharacterInfo() {
    const characterIdInput = document.getElementById("id-personaje");
    const resultadoDiv = document.getElementById("resultado");
    const idpersonaje = characterIdInput.value;
    const url = `https://rickandmortyapi.com/api/character/${idpersonaje}`;
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
    }