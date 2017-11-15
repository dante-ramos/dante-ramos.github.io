# Sitio web estático para Restaurante Vostro (Cliente ficticio)
## Descripción
  Proyecto didáctico que hice siguiendo un videotutorial de desarrollo frontend. No fue realizado para un cliente real.
  Las técnicas y herramientas que se usaron para construirlo fueron mayormente las que el instructor usó para el curso, así que es posible que el código no sea óptimo.
  [Versión live](dante-ramos.github.io)
  ### Características:
    - Diseño onepage donde los links envían a otros elementos de la misma página
    - Responsivo a varias dimensiones, las dimenciones mínimas con las que se probó fue con un iphone 5 orientado vertical y horizontal.
    - Debe ser usado en servidor por la funcionalidad del API de google maps (detalles de ésto más abajo).
    - No guarda ningún tipo de variables de sesión, cookies o cache fuera de lo común.
## Lo que se usó
  - Herramientas
    - Prepros para procesar lo que se construye en frameworks y comprimir javascript en caso de ser necesario
  - Scripts, APIs y frameworks
    - HTML
      - Haml
      - Base del boilerplate de github
    - Javascript
      - JQuery
      - Modernizr
      - Se usó un script existente para el smooth scroolling
      - ECMAScript 5 (no estoy seguro si se utilizó)
    - CSS
      - Bootstrap
      - Flexbox grid
      - Sass
      - Normalize
    - Recursos
      - Imágenes y videos compartidos por el instructor
## Replicar y poner en ejecución
  Algunas funcionalidades solo se pueden ejecutar en servidor (por ejemplo el API de google maps), así que para probar en local se recomienda usar servidores como LAMP, XAMPP o similares, o de los que vienen incluidos como módulos de algunos lenguajes, ésto es, en línea de comando, ubicándose sobre la carpeta del proyecto:
  - python -m SimpleHTTPServer puertoquesedeseequesirvalapágina
  - python3 -m http.server puertoquesedeseequesirvalapágina
  - php -S 127.0.0.1:puertoquesedeseequesirvalapagina
  (considere el puerto 8080 para que la API de google maps funcione)
  Si desea replicar la página para un proyecto suyo, debe considerar la creación de una API key de google maps, la que tiene actualmente el sistema tiene habilitado el acceso desde 127.0.0.1:8080 y dante-ramos.github.io, no use la llave actual en producción por favor.
  Para realizar modificaciones usando haml y sass, le recomiendo usar prepros, de lo contrario elimine los archivos correspondientes a haml, sass y prepros que ya contiene el proyecto.
