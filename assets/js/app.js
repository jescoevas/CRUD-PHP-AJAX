$(document).ready(() => {
    cargarTodos()
    $(".articulo_id").hide()
    $("#form").hide()
    $("#id").hide()
})


let cargarTodos = () => {
    $.get('backend/articulos.php', (data, status) => {
        let articulos = JSON.parse(data)
        let template = ''
        articulos.forEach(art => {
            template += `
                <div id="${art.id}" class="card mb-2">
                    <div class="card-header">
                        ${art.titulo}
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>${art.cuerpo}</p>
                            <footer class="blockquote-footer">
                                ${art.autor}
                                <i class="fa fa-pencil mx-1"></i>
                                <i class="fa fa-trash mx-1" onclick="eliminar(${art.id})"></i>
                            </footer>
                        </blockquote>
                    </div>
                </div>
                `
        });
        $("#articulos").html(template)
    });
}

let eliminar = (id) => {
    $(`#${id}`).addClass("animate__animated animate__backOutRight");
    $.post('backend/delete.php', { id }, (resp) => {
        cargarTodos()
    });
}

$("#nuevo").click(() => {
    $("#form").toggle(500)
})

$("#form").submit((e) => {
    e.preventDefault()
    const data = {
        autor: $("#autor").val(),
        titulo: $("#titulo").val(),
        cuerpo: $("#cuerpo").val()
    }
    $.post('backend/form.php', data, (resp) => {
        cargarTodos()
        $("#form").toggle(500)
    });
})