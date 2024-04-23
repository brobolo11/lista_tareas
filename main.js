$(function(){
    $(".boton").click(function(){
        var guardarTexto = $(".escribirTarea").val()
        $(".contenido").append('<div class = "tarea">' + '<div class = textotarea>' + guardarTexto + '</div>' + '<div class = "botones">' + '<input class = "botontarea1" type = "button" value = "completar">' + '<input class = "botontarea2" type = "button" value = "borrar">' + '</div>' + '</div>')
    });
    $(document).on("click", ".botontarea1", function(){
        $(this).closest('.tarea').addClass("colorboton");
    });
    $(document).on("click", ".botontarea2", function(){
        $(this).closest('.tarea').hide();
    });
});