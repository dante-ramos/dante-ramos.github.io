;(function(){
    var sticky = false // para saber cuando el menú superior ya no esté visible
    $(window).scroll(function(){
        if (IsInBottom() && !sticky) {
            sticky = true
            hidetopnav()
        }
        if (!IsInBottom() && sticky){
            sticky = false
            unhidetopnav()
        }

        //
        function IsInBottom(){
            const $description = $("#barra-inferior")
            const $descriptionheight = $description.height();
            const $menutopdist = $("#navtop").height()
            // $('window').scrollTop() da la istancia entre el scroll actual y el tope de la ventana
            return $(window).scrollTop() > $(window).height() - ($descriptionheight*2.5) - ($menutopdist*2.5) // retorna cierto o falso *2 para darle espacio al menú antes de la barra
        }

        //oculta la navegación superior
        function hidetopnav(){
            $('#barra-inferior').addClass('fixed').removeClass('absolute')
            $('#navtop').addClass('hidden')
            $('#stickynav').removeClass('hidden')
        }

        //muestra la navegación superior
        function unhidetopnav(){
            $('#barra-inferior').removeClass('fixed').addClass('absolute')
            $('#navtop').removeClass('hidden')
            $('#stickynav').addClass('hidden')
        }
    })

    //método para el slider
    var currentpic = 1;
    setInterval(function(){
        $("#galeria .inner").css({ // se debe tener un div intermedio que cargue las imágenes, #galería tiene un overflow hidden y no cargaría todo el contenido, pero el div interno sí lo carga y ese es el que se va moviend
            left: "-"+currentpic*100+"vw"
        });
        currentpic++;
        if (currentpic == $('.inner > .image').length) {
            currentpic = 0;
        }
    },5000) //cada 1000 milisegundos

    $("#contact-form").on("submit", function(ev){
        ev.preventDefault() // evita que el formulario se envíe por default como está especificado y que se haga ésto

        var form = {} // es el objeto que se enviará a fromspree
        $.each($(this).serializeArray(), function (i, field) { // recorre los elementos del formulario y los agrega al objeto
            form[field.name] = field.value || "";
        });
        console.log(form)

        $.ajax({ // de formspree
            url: $(this).attr("action"),
            method: "POST",
            data: form,
            dataType: "json"
        });

        return false // necesario junto con el preventDefault para que se envíe el formulario por default
    })

    function sendForm($form){

    }
})()
