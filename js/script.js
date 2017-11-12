;(function(){
    // mostrar si está abierto o cerrado
    var hora = new Date().getHours()
    var abierto =(19 < hora && hora < 22)?" Abierto ahora":" Ahora está cerrado"
    abierto += "\n horario es de martes a domingo de 7pm a 11pm"
    $("#isopen").html(abierto)

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

        //verifica que el fin de la primera parte haya llegado a la parte superior por scroll
        function IsInBottom(){
            const $description = $("#barra-inferior")
            const $descriptionheight = $description.outerHeight();
            const $menutopdist = $("#navtop").outerHeight()
            // $('window').scrollTop() da la istancia entre el scroll actual y el tope de la ventana
            return $(window).scrollTop() > $(window).height() - ($descriptionheight*2) - ($menutopdist) // retorna cierto o falso *2 para darle espacio al menú antes de la barra
        }

        //oculta la navegación superior
        function hidetopnav(){
            $('#barra-inferior').addClass('fixed').removeClass('absolute')
            $('#navtop').addClass('hidden')
            $('#stickynav').removeClass('hidden')
            $("#contenidoiniciocentro").css("display", "none") // en situaciones se veía algo del texto debajo
        }

        //muestra la navegación superior
        function unhidetopnav(){
            // el if es para cuando se está en responsivo, si se vuelve a donde el navtop se muestra, se quitan las clases del menú responsivo para que cuando se vuelva a bajar no se vea el menú
            if((!$("#iconomenu").hasClass("glyphicon-menu-hamburger"))&&($("#stickynav ul").hasClass("activo"))){
                $("#iconomenu").addClass("glyphicon-menu-hamburger")
                $("#stickynav ul").removeClass("activo")
            }
            // se hacen las actividades en las barras del navegación tal cual
            $('#barra-inferior').removeClass('fixed').addClass('absolute')
            $('#navtop').removeClass('hidden')
            $('#stickynav').addClass('hidden')
            $("#contenidoiniciocentro").css("display", "block") // en situaciones se veía algo del texto debajo
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

    // script copiado de internet improved smoth scrolling efect
    $("a[href^='#']").click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var $target = $(this.hash)
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']')
            if ($target.length) {
                var targetOffset = $target.offset().top
                $('html,body').animate({scrollTop: targetOffset}, 1000)
                return false
            }
        }
      });

    $("#iconomenu").click(function(){
        $("#stickynav ul").toggleClass("activo")
        $(this).toggleClass("glyphicon-menu-hamburger")
        $("#stickynav ul.activo li a").on("click", function(){
            $("#stickynav ul.activo").removeClass("activo")
            $("#iconomenu").addClass("glyphicon-menu-hamburger")
        })
    });

      $(window).on('scroll', function() {
          $('.seccion').each(function() {
                if($(window).scrollTop() >= $(this).offset().top - 140) { // 140 para que termine un poco antes de que desaparezca de la pantalla
                    var id = $(this).attr('id');
                    $('#navsticky a.activo').removeClass('activo');
                    $('a[href="#'+ id +'"]').addClass('activo');
                }
          });
      });

})()
