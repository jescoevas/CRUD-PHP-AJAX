$(document).ready(() => {
    $("#form").hide()
    $("#autorRequerido").hide()
    $("#tituloRequerido").hide()
    $("#cuerpoRequerido").hide()
    cargarTodos()
})


let cargarTodos = () => {
    $.get('backend/articulos.php', (data) => {
        renderizar(data)
    });
}

$("#search").keyup(() => {
    let val = $("#search").val()
    $.post('backend/search.php', { val }, (data) => {
        renderizar(data)
    });
})

let renderizar = (data) => {
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
                            <i class="fa fa-pencil mx-1" style="cursor: pointer;" onclick="editar(${art.id},'${art.autor}','${art.titulo}','${art.cuerpo}')"></i>
                            <i class="fa fa-trash mx-1" style="cursor: pointer;" onclick="eliminar(${art.id})"></i>
                        </footer>
                    </blockquote>
                </div>
            </div>
            `
    });
    $("#articulos").html(template)
}


$("#nuevo").click(() => $("#form").toggle(500))

let editar = (id, autor, titulo, cuerpo) => {
    $("#id").val(id)
    $("#autor").val(autor)
    $("#titulo").val(titulo)
    $("#cuerpo").val(cuerpo)
    let visible = $("#form").is(":visible")
    if (!visible) {
        $("#form").toggle(500)
    }
}

let eliminar = (id) => {
    $(`#${id}`).addClass("animate__animated animate__backOutRight");
    $.post('backend/delete.php', { id }, (resp) => {
        cargarTodos()
    });
}

let vaciar = () => {
    $("#id").val(null)
    $("#autor").val("")
    $("#titulo").val("")
    $("#cuerpo").val("")
}

$("#form").submit((e) => {
    e.preventDefault()
    if (validado()) {
        let id = $("#id").val()
        if (id === "") {
            const data = {
                autor: $("#autor").val(),
                titulo: $("#titulo").val(),
                cuerpo: $("#cuerpo").val()
            }
            $.post('backend/create.php', data, (resp) => {
                cargarTodos()
                vaciar()
                $("#form").toggle(500)
            });
        } else {
            const data = {
                id: $("#id").val(),
                autor: $("#autor").val(),
                titulo: $("#titulo").val(),
                cuerpo: $("#cuerpo").val()
            }
            $.post('backend/update.php', data, (resp) => {
                cargarTodos()
                vaciar()
                $("#form").toggle(500)
            });
        }
    }
})

let validado = () => {
    let res = true
    let autor = $("#autor").val()
    let titulo = $("#titulo").val()
    let cuerpo = $("#cuerpo").val()
    if (autor === '') {
        $("#autorRequerido").show()
        res = false
    } else {
        $('#autorRequerido').hide()
    }
    if (titulo === '') {
        $("#tituloRequerido").show()
        res = false
    } else {
        $('#tituloRequerido').hide()
    }
    if (cuerpo === '') {
        $("#cuerpoRequerido").show()
        res = false
    } else {
        $('#cuerpoRequerido').hide()
    }
    return res
}