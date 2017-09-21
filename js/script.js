;(function(){
    var sticky = false // para saber cuando el menú superior ya no esté visible
    $(window).scroll(function(){
        console.log($(window).height())
        console.log($(window).scrollTop())
        console.log($("#barra-inferior").height())
        console.log($("#navtop").height())
        console.log(IsInBottom())
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
})()
