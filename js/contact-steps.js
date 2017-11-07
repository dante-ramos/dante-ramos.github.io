;(function(){
    // $(".step:nth-child(1)").addClass("active")
    $("#contact-form").find(".input").on("change", function (ev) {
        var $actual = $(ev.target).parent()
        var $siguiente = $actual.next(".step") // parent porque vamos a apuntar a los steps que son padres de los inputs

        //validando si el contenido de los inputs es correcto
        // si hay un input inválido compara (por nombre) el primero en la lista con el que dispara el evento
        // si no es el mismo entonces permite seguir, ésto es porque
        if ($("#contact-form").find(".input:invalid").length !=0){
            if (($("#contact-form").find(".input:invalid").first().prop("name"))!=$actual.find(".input").prop("name")){
                $siguiente= $siguiente.length==0?$("#contact-form").find(".input:invalid").first().parent():$siguiente
                cambiarInput($actual, $siguiente)
                $(".error").removeClass("show")
            }else {
                $(".error").addClass("show")
            }
        } else {
            var form = {} // es el objeto que se enviará a fromspree
            $.each($("#contact-form").serializeArray(), function (i, field) { // recorre los elementos del formulario y los agrega al objeto
                form[field.name] = field.value || "";
                // field.val("")
            })
            $.ajax({ // de formspree
                url: $("#contact-form").attr("action"),
                method: "POST",
                data: form,
                dataType: "json"
            })
            alert("Mensaje enviado correctamente")
            $("#contact-form")[0].reset()
        }
    })
    $(".path-step").on("click", function (ev) {
        if ($(".error.show").length != 0){
            return false
        } else {
            var $actual = $(ev.target)
            var $stepactual = $(".step.active")
            var $stepsiguiente = $actual.index(".path-step") + 1 // los indexes del form están movidos en 1
            cambiarInput($stepactual, $(".step:nth-child("+$stepsiguiente+")"))
        }
        // el active de los steps es controlado desde cambiarInput() para que se coordinen por cualquier flujo de trabajo
    })

    // para que la tecla enter envíe el formulario aún en el textarea
    $("textarea").on("keydown", function (ev) {
        if(ev.keyCode==13){ // 13 es el código de la tecla enter
            ev.preventDefault() //evita que se tome el enter por default
            $(ev.target).blur() //hace que pierda el foco
        }
    })

    // helper classes
    function cambiarInput($actual, $siguiente){
        // administrando los active en los steps
        $actual.removeClass("active")
        $siguiente.addClass("active")
        $siguiente.find(".input")[0].focus()
        // coordinar los path-step: recordar que están movidos por 1
        $(".path-step.active").removeClass("active")
        var $stepsiguiente = $siguiente.index(".step")+1
        $(".path-step:nth-child("+ $stepsiguiente +")").addClass("active")
    }
})()
