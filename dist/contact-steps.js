"use strict";

;(function () {
    // $(".step:nth-child(1)").addClass("active")
    $("#contact-form").find(".input").on("change", function (ev) {
        var $actual = $(ev.target);
        var $siguiente = $actual.parent().next(); // parent porque vamos a apuntar a los steps que son padres de los inputs

        //validando si el contenido de los inputs es correcto
        // si hay un input inválido compara (por nombre) el primero en la lista con el que dispara el evento
        // si no es el mismo entonces permite seguir, ésto es porque
        if ($("#contact-form").find(".input:invalid").first().prop("name") != $actual.prop("name")) {
            $actual.parent().removeClass("active");
            $siguiente.addClass("active");
            $siguiente.find(".input").focus();
            $(".error").removeClass("show");
        } else {
            $(".error").addClass("show");
        }
    });
    $(".path-step").on("click", function (ev) {
        $("path-step.active").removeClass("active");
        var $actual = $(ev.target);
        $actual.addClass("active");
        $(".step:nth-child(" + $actual.index() + ")").addClass("active");
        // console.log($actual.index("#contact-form:nth-child("+$actual.index(".step").prop("name")))
    });

    // helper classes
})();