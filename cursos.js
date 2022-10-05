const tabla = document.querySelector('#lista-cursos tbody');

function cargarCursos(){
    fetch("cursos.json")
        .then(respuesta => respuesta.json())
        .then(cursosDisponibles => {
            cursosDisponibles.forEach(cursos => {
                console.log(cursos);
            });
        })
}

const mostrarCursos = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i<data.length; i++){
    }
    body += '<tr><td>${data[i].cursos}<t/d><td>${data[i].cupos}</td><td>${data[i].precio}</td></tr>'

    document.getElementById('data').innerHTML = body
}


cargarCursos();

