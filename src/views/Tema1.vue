<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Procedimientos de inspecciones de calidad
    
    .row.justify-content-center
      .col-lg-5.col-md-8.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/1.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/2.svg', alt='')
          .col-lg-10
            p.mb-0 El método para desarrollar las actividades de inspección de productos de las empresas de confecciones puede realizarse mediante la observación o con la ayuda de la tecnología, haciendo el procedimiento de inspección, semi o automatizado completamente; pero la labor del inspector no es reemplazada al analizar y hallar las soluciones en los errores y problemas presentados.
        p Es necesario determinar procedimientos en una empresa, porque organiza las actividades obteniendo mejor eficiencia y optimizando los recursos. Teniendo en cuenta lo anterior, es necesario establecer los procedimientos de las inspecciones para asegurar el excelente desempeño de las actividades de calidad de la empresa.
        p Conforme a la optimización de los recursos, utilizar el muestreo en la inspección aumenta la eficiencia de la actividad de inspección, combinada con la utilización de las técnicas de manufactura esbelta.


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1. Procedimiento de inspección de calidad con muestreo según normatividad 

    .mb-4 
      img(src='@/assets/curso/temas/t1/3.png', alt='')
    
    p Con el fin de seguir los lineamientos establecidos en las normas técnicas de calidad como en la normatividad de la empresa, se presenta el procedimiento de la inspección utilizando el muestreo con el fin de estandarizar los procesos, además de tener en cuenta las normas técnicas asociadas para dar soporte a la toma de decisiones al momento de inspeccionar un producto.

    .row.justify-content-center.mb-5
      .col-lg-5.d-none.d-lg-block.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/4.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/5.svg', alt='')
          .col-lg-10
            p.mb-0 Es necesario recalcar la elección del tamaño de la muestra, el cual es de especial atención, porque debe garantizar la representación del lote, pues una muestra pequeña puede ser insuficiente para aceptar o rechazar un lote mientras que una muestra grande dificulta la eficacia de la medición. 
        p Para elegir el tamaño de la muestra es necesario tener en cuenta el plazo de entrega de la producción, la duración de la inspección, la disponibilidad de los productos y los costos unitarios del producto.
        p Antes de examinar el producto hay que considerar que el procedimiento tiene en cuenta técnicas de Manufactura Esbelta que apoyan la gestión de calidad de una planta, como son: #[em Heijunka], Control visual, #[em Kanban], #[em Just in Time (JIT)] o Justo a Tiempo, #[em Jidoka], entre otras y las cuales ayudan al control de la variabilidad de los procesos.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 #[em Heijunka]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Es la técnica para planificar y nivelar los pedidos teniendo en cuenta la cantidad y la variedad de productos de cada pedido. Es necesario conocer la demanda, aplicar la estandarización del producto y el proceso con el fin de establecer el manejo de lotes pequeños o utilizar un lote único para mantener una producción continua y nivelada.
        p Para aplicar esta técnica se utilizan células de trabajo las cuales se caracterizan por ser flexibles, éstas se unen para obtener una célula de trabajo conjunta en donde los procesos van coordinados para conseguir el producto planificado. 
        p Las células o módulos de producción son pequeñas empresas dentro de la planta, las cuales se crean teniendo en cuenta lo siguiente:
        .bg-compl1.p-4   
          ul.lista-ul.fa-lista.list-ico.mb-0
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Identificar familias de productos, por ejemplo, módulos de pantalón o de camiseta.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Contar con personal polivalente.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Disponer de personal de apoyo flexible, proactivo y que aporte ideas para el montaje de los módulos o celdas nuevas.
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Diseñar sistemas “anti-error” en cada estación o puesto de trabajo del módulo.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/6.svg', alt='')

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-5.d-none.d-lg-block.pe-lg-0
        img(src='@/assets/curso/temas/t1/7.png', alt='')
      .col-lg-7.ps-lg-0
        .bg5.h-100.p-4
          img.w-85x.mb-3(src='@/assets/curso/temas/t1/8.svg', alt='')
          p Un sistema de producción que adopta la implementación de células de producción permite mejorar la eficiencia porque:
          ul.lista-ul.fa-lista.list-ico.mb-0
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Mejora el cumplimiento de los requisitos de calidad y de tiempo establecidos por el cliente.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Reduce el inventario en proceso al manejar pequeños lotes para el flujo continuo entre puestos de trabajo.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Optimiza el espacio de la planta al reducir la distancia entre los puestos de trabajo.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Reduce el transporte al disminuir el espacio entre las máquinas y la organización del proceso.
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Mejora el uso de la maquinaria y equipos por la mejora en la planificación y el flujo de los procesos.

    p.mb-5 Una de las herramientas utilizadas son los balanceos de línea en hojas de cálculo o programas especiales. Para la distribución de cargas de trabajo, se tiene en cuenta además de la eficiencia del coequipero, la calidad aportada en la célula de trabajo con el fin de mejorar en conjunto desempeño y calidad.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Control visual

    p Es el conjunto de técnicas para el control y comunicación visual, su finalidad es facilitar el conocimiento a los empleados, sobre el estado del sistema y los avances de las acciones de mejora. El control visual hace que participe todo el personal, porque al conocer cómo afectan los esfuerzos de su trabajo en los resultados, hace que asuman la responsabilidad y genere compromiso para alcanzar las metas de la empresa.
    p Esta técnica presenta ventajas como la rápida captación de la información y su fácil difusión, aumenta la motivación del personal, por tener la oportunidad de contribuir y recibir reconocimientos.

    .row.justify-content-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/9.png', alt='')
      .col-lg-4.d-none.d-lg-block 
        img(src='@/assets/curso/temas/t1/10.svg', alt='')
      .col-lg-5
        .bg-color-secundario.py-4.h-100
          .subt3.mb-4
            h4.mb-0 Para su aplicación utiliza algunos métodos como:
          .px-4
            ul.lista-ul.fa-lista.list-ico.text-white.mb-0
              li.mb-1
                img(src='@/assets/curso/temas/t1/ico-list2.svg')
                span.mb-0 Tableros de gestión visual, los cuales brindan un contexto de la situación a analizar.
              li.mb-1
                img(src='@/assets/curso/temas/t1/ico-list2.svg')
                span.mb-0 Señales de monitorización de máquinas: por ejemplo, identificar la necesidad de mantenimiento.
              li.mb-1
                img(src='@/assets/curso/temas/t1/ico-list2.svg')
                span.mb-0 Control estadístico del proceso con la aplicación de las herramientas de calidad, las cuales se publican en lugares visibles de la empresa.
              li.mb-1
                img(src='@/assets/curso/temas/t1/ico-list2.svg')
                span.mb-0 Registro de problemas.
              li.mb-1
                img(src='@/assets/curso/temas/t1/ico-list2.svg')
                span.mb-0 Actividades de mejora.
              li.mb-1
                img(src='@/assets/curso/temas/t1/ico-list2.svg')
                span.mb-0 Identificación de defectos y reprocesos.
              li.mb-0
                img(src='@/assets/curso/temas/t1/ico-list2.svg')
                span.mb-0 Recomendaciones de calidad.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 #[em Kanban]

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-8.col-10.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/11.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/12.svg', alt='')
          .col-lg-10
            p.mb-0 Es un sistema de programación y control que sincroniza la producción basándose en el uso de tarjetas, consiste en colocar las tarjetas en cada contenedor de los materiales o piezas que describe su cantidad, cada proceso a medida de su sincronización va retirando los materiales que requiera, para llegar a su ensamble final; es una herramienta que asegura alta calidad y la producción en el tiempo adecuado.
        p Además, se pueden utilizar las tarjetas en los tableros, llamados “tableros #[em Kanban]”, en los cuales se visualiza de manera fácil el flujo de trabajo pues se organizan las actividades de producción, facilitando el seguimiento de los avances de cada proceso y la respuesta de las personas responsables.
        p Para comprender mejor esta dinámica, en el siguiente esquema se ilustra cómo interactúan estos elementos en el flujo de trabajo.

    .row.justify-content-center.mb-5(data-aos='fade-down')
      .col-lg-8
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 1. 
          span Tablero #[em Kanban]
        figure
          img(src='@/assets/curso/temas/t1/fig1.svg', alt='Diagrama de un tablero Kanban que organiza el flujo de trabajo mediante una matriz de prioridades y estados de producción. En el eje vertical se clasifican las tareas por niveles de urgencia: Urgente, Importante y Normal; mientras que en el eje horizontal se realiza el seguimiento a través de cinco etapas secuenciales: Pendiente, Trabajando, Lote Piloto, En Proceso y Terminado. Las actividades específicas se representan mediante tarjetas distribuidas dentro de las celdas de esta estructura para facilitar el control del proceso.')

    p Las tarjetas #[em Kanban] son un mecanismo de comunicación de las órdenes de producción entre los diferentes puestos de trabajo, en las tarjetas se puede incluir su nombre, código de pieza, el lugar donde se fabricará, cantidad de piezas a producir, el lugar donde se almacenarán las prendas terminadas.
    p.mb-4 Para conocer la distribución de estos datos, a continuación, se presenta un modelo de referencia que detalla la estructura de la tarjeta.

    .row.justify-content-center.mb-5(data-aos='fade-down')
      .col-lg-4.col-md-8
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 2. 
          span Tarjetas #[em Kanban]
        figure
          img(src='@/assets/curso/temas/t1/fig2.svg', alt='Modelo de una tarjeta Kanban de producción textil que detalla la estructura y distribución de sus campos informativos, tales como código, descripción del producto (Camisa ortega), cantidades a confeccionar, ubicación en estantería y especificaciones del material requerido.')

    p Existen dos tipos de #[em Kanban], el de producción que indica o autoriza qué y cuánto se debe confeccionar en el proceso posterior; y el de transporte que indica o autoriza qué y cuánto material se retira del proceso anterior.
    p.mb-5 La finalidad del uso de estas tarjetas es conseguir un reaprovisionamiento del material vendido sin generar #[em stocks] innecesarios y por tanto disminuir desperdicio de inventario.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Justo a tiempo (JIT)

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/13.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p.mb-0 Su filosofía consiste en producir según las necesidades del cliente en cuanto al tiempo y la cantidad eliminando los desperdicios relacionados en la línea de producción. El método justo a tiempo se caracteriza por producir al ritmo del #[em Takt time], trabajar de manera estandarizada y utilizar el flujo de una pieza para detectar de manera temprana los errores y no en la inspección por muestreo.

    .row.justify-content-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/14.png', alt='')
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/15.svg', alt='')
      .col-lg-5
        .bg-color-secundario.py-4.h-100
          .subt3.mb-4
            h4.mb-0.pe-5 #[em Takt time]
          .px-4
            p.text-white Conocido como los latidos del negocio, se calcula para sincronizar el ritmo de lo que se produce y lo que se vende, con el fin de cumplir al cliente, este es una de las quejas recurrentes del sector de confecciones, relacionado con el manejo del tiempo en las plantas de producción.
            .bg10.p-4
              .formula.mx-auto
                span.label #[em Takt time] (T / T) = 
                .fraction
                  .top.px-1.px-lg-3 (Tiempo disponible)
                  .bottom.px-1.px-lg-3 (Demanda del cliente)

    p.mb-5 El #[em Takt time], es la frecuencia con la que se fabrica una pieza o producto en función del ritmo de las ventas con el fin de satisfacer las necesidades del cliente. Es importante hacer la diferencia con el tiempo de ciclo porque el #[em takt time] es determinado por el cliente y el tiempo de ciclo es definido por la empresa. Es por lo anterior que las empresas deben tener un tiempo de ciclo menor al #[em takt time], de allí el problema de incumplimiento de los pedidos y las necesidades de horas y turnos extras en las empresas sobre todo en lo que se llama la temporada alta del año.

    h5.mb-4 En el siguiente ejemplo se puede observar el cálculo del #[em takt time]:

    .row.justify-content-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/16.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Una empresa de confección de pijamas tiene un pedido de 1000 unidades para entregar en 12 horas. En primer lugar, se convierten las horas disponibles a segundos (43200 segundos). Luego se aplica la fórmula:
        .bg9.p-4.px-lg-5.mb-4
          .bg10.p-4.mb-3
            .formula.mx-auto
              span.label #[em Takt time] (T / T) = 
              .fraction
                .top.px-1.px-lg-3 43200 seg.
                .bottom.px-1.px-lg-3 1000 und.
          .bg10.p-4
            .formula.mx-auto
              span.label #[em Takt time] (T / T) = 43.2 seg.
        p Es decir, se debe producir una pijama cada 43,2 segundos.

    h5.mb-4 La metodología del JIT incluye el sistema #[em push and pull]:

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-10
        .tarjeta--container.row
          .col-md.tarjeta.color-secundario.p-4.px-lg-5
            .row.justify-content-center.mb-4
              .col-4.col-lg-4.col-md-5
                img(src='@/assets/curso/temas/t1/tarj1-1.svg', alt='')            
            h4.text-white.text-center Sistema de empujar o #[em Push System]
            p.text-white El ritmo de los procesos es determinado según un programa maestro de producción en el que las entregas son programadas según pronósticos previos, por tanto, es controlado por información a contracorriente del flujo de producción, es decir, se produce por si acaso, consumos anticipados, lotes grandes, inventarios altos y alto desperdicio.            
          .col-md.tarjeta.bg7.p-4.px-lg-5
            .row.justify-content-center.mb-4
              .col-4.col-lg-4.col-md-5
                img(src='@/assets/curso/temas/t1/tarj1-2.svg', alt='')            
            h4.text-white.text-center Sistema de jalar o #[em Pull System]
            p.text-white Las entregas son autorizadas, es controlado por información en dirección de la corriente del flujo de producción, es decir, según la demanda, por tanto, hay más precisión en la producción con consumos reales, lotes pequeños, inventarios bajos y reducción de desperdicios de los procesos.

    p Algunos de los beneficios que tiene la aplicación del método JIT son:

    .bg9.p-4.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-1.d-none.d-lg-block
          img(src="@/assets/curso/temas/t1/17.svg", alt='')
        .col-lg-11
          ul.lista-ul.fa-lista.list-ico.mb-0
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Reducción de inventarios hasta un 50 %.
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Reducción del tiempo del proceso entre el 50 % y 70 %.
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Reducción en cambios de herramientas de 50 % al 80 % sin grandes inversiones en equipos y maquinaria.
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Incremento de la productividad del 20 % al 50 %.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Trabajo estandarizado

    p La estandarización es la descripción eficiente del flujo del trabajo en términos de calidad, costo, cantidad y seguridad; combinado de manera efectiva con los recursos de mano de obra, maquina y equipos, insumos, textiles y materiales.
    p Se utilizan tres instrumentos para los componentes del trabajo estandarizado:

    .row.justify-content-center.mb-4
      .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/18.png', alt='')
      .col-lg-6(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Hoja de trabajo estándar")
            .col-md-12 
              p El diagrama ilustra la secuencia en un puesto de trabajo.
              ul.lista-ul.fa-lista.list-ico.mb-0
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Utilizada para cada coequipero.
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Representa secuencia de las operaciones.
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Muestra el #[em WIP (Work In Progress)] y su localización.
                li.mb-0
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Tiempo de ciclo para cada trabajo.
          .row(numero="2" titulo="Hoja de combinación de trabajo estándar")
            .col-md-12 
              p Diagrama que ilustra las operaciones de un coequipero.
              ul.lista-ul.fa-lista.list-ico.mb-0
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Utilizada para cada coequipero.
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Listado de cada paso de cada operación: operaciones manuales, los movimientos y los procesos automáticos.
                li.mb-0
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Tiempo para cada operación.
          .row(numero="3" titulo="Diagrama de distribución de trabajo")
            .col-md-12 
              p Muestra la distribución de las cargas en los coequiperos para la confección de una prenda.
              ul.lista-ul.fa-lista.list-ico.mb-0
                li.mb-0
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Balanceo de línea.
        
    .bg9.p-4.mb-5(data-aos="fade")
      .row.justify-content-center.align-items-center
        .col-lg-1.d-none.d-lg-block
          img(src="@/assets/curso/temas/t1/19.svg", alt='')
        .col-lg-11 
          p.mb-0 El trabajo estandarizado disminuye los desperdicios, se identifica el trabajo en proceso, ayuda en el cálculo de requerimiento de mano de obra, para atender los pedidos, apoya la administración visual del trabajo en proceso y los defectos que se presenten en ellos. Las herramientas de control estadístico apoyan la estandarización de los procesos, por eso son fundamentales en el desarrollo y aplicación de las metodologías de la manufactura esbelta.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 Flujo de trabajo

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/20.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p El flujo de productos, materiales e información debe ser continuo, para mantener la calidad de la producción, mejorando la flexibilidad y confiabilidad de los procesos, de esta manera se eliminan los paros y demoras de los productos para entregar al cliente. Suele suceder que cuando se realiza una inspección se detectan de manera tardía los defectos y se hace dispendioso cuantificar las unidades defectuosas, la ubicación de dichas unidades y la causa del defecto.
        p Con respecto a mejorar el flujo de los procesos, se debe adaptar el flujo de una pieza con el fin de detectar los defectos de manera inmediata, porque se detecta rápidamente los defectos en el lugar que se ocasiona y seguramente en la primera unidad defectuosa.
        p El flujo continuo se realiza en tres niveles:

    .row.justify-content-center.mb-5(data-aos="fade")
      .col-lg-4.col-md-6.mb-3
        .tarjeta--boton.bg4.h-100.p-4
          .row.justify-content-center.mb-3
            .col-5.col-md-6.col-lg-4
              img(src='@/assets/curso/temas/t1/tarj2-1.svg', alt='')
          h4.text-center Flujo de información
          p Para la toma de decisiones aplicando las técnicas de balanceo de líneas, uso de tarjetas #[em KANBAN], seguimiento diario de los procesos para localizar desviaciones y resolver problemas.
      .col-lg-4.col-md-6.mb-3
        .tarjeta--boton.bg4.h-100.p-4
          .row.justify-content-center.mb-3
            .col-5.col-md-6.col-lg-4
              img(src='@/assets/curso/temas/t1/tarj2-2.svg', alt='')
          h4.text-center Flujo de materiales
          p Reducir desperdicio en cada proceso mediante la técnica de Pull, frecuencia de materiales permanente, organización de los procesos.
      .col-lg-4.col-md-6.mb-3
        .tarjeta--boton.bg4.h-100.p-4
          .row.justify-content-center.mb-3
            .col-5.col-md-6.col-lg-4
              img(src='@/assets/curso/temas/t1/tarj2-3.svg', alt='')
          h4.text-center Flujo de operaciones
          p Coequiperos bien entrenados y asignar las operaciones adecuadas para sincronizar el proceso según el #[em takt time], crear módulos flexibles, tener operarios polivalentes, balancear la línea de producción teniendo en cuenta los pedidos.

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0 #[em Jidoka]

    .bloque-texto-g.bloque-texto-g--inverso.bg5.br-tl.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(i
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/21.png')})`}")
      .bloque-texto-g__texto.p-4
        p Es un término japonés que significa automatización con un toque humano o también llamado autonomación, define un sistema de control autónomo para que los procesos tengan autocontrol de calidad, de allí que cuando se presente un problema de manera automática o manual el proceso se detiene para que no se sigan produciendo piezas defectuosas, y se reanuda una vez se dé solución al problema para producir sin defectos y así se evite pasar al proceso siguiente. #[br]
        p.mb-0 Con el uso de esta técnica se replantea el enfoque de la inspección, porque se centra en la prevención de los defectos y controlar los procesos, produciendo las piezas exactas sin unidades adicionales, disminuyendo los desperdicios de sobreproducción.

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-5.d-none.d-lg-block.pe-lg-0
        img(src='@/assets/curso/temas/t1/22.png', alt='')
      .col-lg-7.ps-lg-0
        .bg5.h-100.p-4
          img.w-85x.mb-3(src='@/assets/curso/temas/t1/23.svg', alt='')
          p.mb-4 La autoridad de parar una línea de producción debe ser otorgada a un coequipero o al inspector con la capacidad de esa toma de decisión, quien pulse el botón de alerta #[em ANDON], indica el problema e informa al equipo. Una máquina automatizada puede tener un dispositivo que detecta de manera automática piezas defectuosas, se detiene y requiere la intervención humana para analizar, corregir y establecer las demás acciones necesarias.
          p La aplicación de la técnica funciona de la siguiente manera:
          ul.lista-ul.fa-lista.list-ico.mb-0
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Se detecta el defecto.
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Se oprime el botón de alerta #[em ANDON] para detener el proceso. Teniendo en cuenta el color de la alerta se actúa en concordancia, cuando el botón es verde la actividad es óptima, cuando el color es amarillo es una alerta en donde se debe realizar alguna corrección en las piezas, el inspector debe coordinar la acción, debido a que el proceso entra en demora, así mismo el responsable de la operación debe comunicar cuando se presente algún problema de manera temprana; y si es luz roja se detiene completamente la línea de producción, en donde todos los integrantes del equipo deben encontrar la solución factible.

    p.mb-4 A continuación, se pueden observar las 10 fases para la aplicación de la técnica de #[em Jidoka]:

    .mb-5(data-aos='fade-down')
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 1.
        span 10 etapas de automatización #[em Jidoka]
      .tabla-a.tabla1.color-secundario
        table
          thead
            tr.bg-color-secundario.text-white
              th.w-10 No.
              th Nombre del paso
              th Descripción del paso
              th Ejemplo
          tbody
            tr
              td.fw-bold.text-center 1
              td Automatización del proceso.
              td Transferir esfuerzo de operario en esfuerzo de máquina.
              td Operación automatizada de pegar pecheras.
            tr
              td.fw-bold.text-center 2
              td Automatización de sujetar.
              td Sustituir de apretar manualmente una pieza a realizarlo mecánicamente.
              td Al tomar la pieza del posterior de un pantalón para desplazarlo y posicionarlo en una máquina plana y proceder a pegar un bolsillo.
            tr
              td.fw-bold.text-center 3
              td Automatización de alimentación.
              td Alimentación automática. El operario solo interviene para detener la alimentación en caso de errores.
              td En operación de pegar botones se sustituye de manera manual la alimentación del botón, al realizarlo con un sistema de tolva que va alimentando los botones.
            tr
              td.fw-bold.text-center 4
              td Automatización de paradas.
              td El proceso se detiene de manera automática sin la intervención del coequipero.
              td El sistema de empaque se detiene de manera automática al no tener artículos para empacar.
            tr
              td.fw-bold.text-center 5
              td Automatización de retornos.
              td El sistema vuelve al inicio del proceso sin intervención del coequipero.
              td La máquina vuelve a iniciar el proceso en operaciones de planchado.
            tr
              td.fw-bold.text-center 6
              td Automatización del retiro de piezas. 
              td La pieza defectuosa se retira automáticamente sin interrumpir la continuidad del proceso.
              td Una pieza que presenta un defecto en el encaje de uno de sus puños se retira automáticamente y el proceso continúa con la siguiente pieza. 
            tr
              td.fw-bold.text-center 7
              td Mecanismo anti-error: #[em POKA YOKE].
              td Dispositivos a prueba de error con el fin de prevenir los errores y alertar al operario.
              td Utilizar una guía que detecte la medida de un largo de pasador para luego pegar en pretina.
            tr
              td.fw-bold.text-center 8
              td Autonomación de carga.
              td La pieza es cargada sin intervención del operario. El proceso cuenta con la capacidad de detectar errores y parar.
              td En el proceso de lavandería se carga la máquina y detecta errores y se detiene.
            tr
              td.fw-bold.text-center 9
              td Autonomación de inicio.
              td La máquina puede iniciar a procesar la pieza de manera automática.
              td Inicio de procesos de bordado.
            tr
              td.fw-bold.text-center 10
              td Autonomación de transferencia.
              td La máquina realiza operaciones de enlace entre una y otra operación.
              td Transporte por medio de bandas entre uno y otro puesto de trabajo.

    p.mb-4 Antes de examinar los procedimientos, se tienen en cuenta las diferentes normas técnicas colombianas relacionadas, las cuales se deben aplicar dependiendo de la línea de producto, los insumos, los textiles y se incluyen las normas relacionadas con el control estadístico de calidad.

    .mb-4(data-aos='fade-down')
      .titulo-sexto.color-secundario.mb-3
        h5 Tabla 2.
        span Normas técnicas colombianas
      .tabla-a.tabla1.color-secundario
        table
          thead
            tr.bg-color-secundario.text-white
              th.w-25 Norma
              th Detalle
          tbody
            tr
              td.fw-bold NTC 2398	
              td Prendas interiores femeninas.
            tr
              td.fw-bold NTC 2260	
              td Pantalones tipo jean y otros pantalones.
            tr
              td.fw-bold NTC 340	
              td Rotulado de textiles y confecciones.
            tr
              td.fw-bold NTC 617:1972	
              td Planchado permanente. Telas y confecciones. Evaluación de la apariencia de lisura.
            tr
              td.fw-bold NTC 2089	
              td Hilos de algodón.
            tr
              td.fw-bold NTC 2274	
              td Hilos de poliéster.
            tr
              td.fw-bold NTC 2510	
              td Botones plásticos.
            tr
              td.fw-bold NTC 1990	
              td Fibra cortada de poliéster.
            tr
              td.fw-bold NTC 703	
              td Telas de tejido plano.
            tr
              td.fw-bold NTC 1902	
              td Tallas.
            tr
              td.fw-bold NTC 313	
              td Método de ensayo para determinar resistencia al desgarre.
            tr
              td.fw-bold NTC 1785	
              td Fibras textiles. Determinación de los defectos.
            tr
              td.fw-bold NTC 378	
              td Textiles. Atmósfera normal para acondicionamiento y ensayo.
            tr
              td.fw-bold NTC 840	
              td Fibras. Determinación de los rizos por centímetro.
            tr
              td.fw-bold NTC 959	
              td Fibras manufacturadas cortadas. Métodos de ensayo.
            tr
              td.fw-bold NTC 481:1997	
              td Telas. Determinación cuantitativa de fibras o hilazas.
            tr
              td.fw-bold NTC 754:1983	
              td Telas. Determinación de la resistencia a la rotura por tensión.
            tr
              td.fw-bold NTC 772:1996	
              td Materiales textiles. Determinación de la solidez del color al sudor.
            tr
              td.fw-bold NTC 786:1996	
              td Materiales textiles. Determinación de la solidez del color al frotamiento.
            tr
              td.fw-bold NTC 908:1997	
              td Textiles y confecciones. Cambios dimensionales en telas de tejido plano y de punto por lavado en máquina automática de uso doméstico.
            tr
              td.fw-bold NTC 1068:1999	
              td Materiales textiles. Solidez de los colores a los disolventes orgánicos.
            tr
              td.fw-bold NTC 1155:1997	
              td Materiales textiles. Determinación de la solidez del color al lavado.
            tr
              td.fw-bold NTC 1386:1997	
              td Telas. Determinación al deslizamiento de los hilos en la costura.
            tr
              td.fw-bold NTC-ISO 2859-1:1994	
              td Procedimientos de muestreo para inspección por atributos. Parte 1: Planes de muestreo determinados por el nivel aceptable de calidad (NAC). Para inspección de lotes continuos.
            tr
              td.fw-bold NTC-ISO 2859-2	
              td Procedimientos de muestreo para inspección por atributos. Parte 2: Planes de muestreo determinados por la calidad límite. Para inspección de lotes aislados.
            tr
              td.fw-bold NTC-ISO 3951-1	
              td Procedimiento de muestreo para inspección por variables en series continuas de lotes.
            tr
              td.fw-bold NTC 2062-1	
              td Términos estadísticos generales.

    p.mb-4 Las normas mencionadas en la tabla anterior son algunas con las cuales se tiene en cuenta para definir las características a inspeccionar, y junto con el listado de defectos establecido se concluye cuales son los niveles de aceptación de calidad. 

    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/24.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg.d-none.d-lg-block
            img.w-85x(src='@/assets/curso/temas/t1/25.svg', alt='')
          .col-lg-10
            p.mb-0 Para la industria de la manufactura de confección se recomienda tener en cuenta los siguientes factores para los puntos de la inspección:
        ul.lista-ul.fa-lista.list-ico.mb-0
          li.mb-0
            img(src='@/assets/curso/temas/t1/ico-list.svg')
            span.mb-0 En operaciones en donde se coloquen aditamentos, se ajusten guías.
          li.mb-0
            img(src='@/assets/curso/temas/t1/ico-list.svg')
            span.mb-0 Realizarla en una operación antes que sea difícil o costosa su corrección.
          li.mb-0
            img(src='@/assets/curso/temas/t1/ico-list.svg')
            span.mb-0 Mientras se está desarrollando una operación, llamada crítica por su alto costo y dificultad derivada de la precisión requerida.
          li.mb-0
            img(src='@/assets/curso/temas/t1/ico-list.svg')
            span.mb-0 En puntos acordados por consenso con el equipo de trabajo debido a su desarrollo común en todos los procesos.
          li.mb-0
            img(src='@/assets/curso/temas/t1/ico-list.svg')
            span.mb-0 En almacenamiento y embalaje.
          li.mb-0
            img(src='@/assets/curso/temas/t1/ico-list.svg')
            span.mb-0 En suministros o almacén de insumos y materiales.
            
    p.mb-4 Además, es importante tener en cuenta que en cada proceso el coequipero tiene:

    .row.justify-content-center.mb-5
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/26.png', alt='')
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/27.svg', alt='')
      .col-lg-5
        .bg-color-secundario.text-white.d-flex.flex-column.justify-content-center.p-4.h-100
          ul.lista-ul.fa-lista.list-ico.mb-0
            li
              img(src='@/assets/curso/temas/t1/ico-list2.svg')
              span.mb-0 Derecho de esperar material perfecto.
            li
              img(src='@/assets/curso/temas/t1/ico-list2.svg')
              span.mb-0 Obligación de inspeccionar el material antes de usarlo.
            li
              img(src='@/assets/curso/temas/t1/ico-list2.svg')
              span.mb-0 Obligación de informar los problemas a la operación o procesos anteriores.
            li
              img(src='@/assets/curso/temas/t1/ico-list2.svg')
              span.mb-0 Obligación de detener el proceso si es el caso para no seguir, hasta que sea resuelto el problema.

    p.mb-4 También es necesario planear acciones orientadas a prevenir defectos mediante herramientas de calidad aplicadas a los recursos de la empresa: mano de obra, materiales, métodos, máquinas e información. La manufactura esbelta busca reducir desperdicios, prevenir defectos y mejorar los procesos. Para estandarizar el trabajo, se presenta el siguiente esquema de acciones de mejora: 
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 3. 
          span Acciones de mejora en la manufactura esbelta
        figure
          img(src='@/assets/curso/temas/t1/fig3.svg', alt='Esquema metodológico que estructura la aplicación de la producción esbelta a partir de las 5S. Define acciones clave organizadas en cinco pilares operativos de la planta: mano de obra (capacitación), información (control visual), materiales (inspección), máquinas (mantenimiento y sistemas anti-error) y método (flujo y estandarización).')

    p.mb-4 Es importante tener clara la diferencia entre el proceso y procedimiento:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-secundario.mb-3
          h5 Tabla 3.
          span Diferencia entre el proceso y procedimiento
        .tabla-a.tabla1.color-secundario
          table
            thead
              tr.bg-color-secundario.text-white
                th Proceso
                th Procedimiento
            tbody
              tr
                td Tiene etapas.	
                td Tiene pasos o tareas.
              tr
                td Cumple un objetivo común.	
                td Cumple objetivos específicos.
              tr
                td Lo realizan varias personas en las diferentes áreas.	
                td Lo realiza una persona o una misma área.
              tr
                td Se ejecuta continuamente.	
                td Se ejecuta de manera intermitente.
              tr
                td Son dinámicos (cambian frecuentemente).	
                td Son estáticos (no varían fácilmente).
              tr
                td Operan y gestionan.	
                td Se implementan.

    .row.bgcolor-1.align-items-center.p-3.p-md-4
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-12
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/temas/t1/cta.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col-12.col-lg-10.col-md-8.mb-3.mb-sm-0.text-white
                      h4.mb-1 Plantilla de procedimiento
                      p.mb-0 Descargue un ejemplo del documento que registra los procedimientos y su estructura.
                    .col.col-lg-2.mb-3.mb-sm-0
                      a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexos/Plantilla_Procedimiento.docx')" target="_blank" type="application/pdf")
                        span Descargar 
                        i.fas.fa-file-download 


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2. Procedimiento de inspección de calidad con muestreo del lote por variables

    p.mb-4 En los procesos de inspección las variaciones dan como resultado diferentes medidas de una variable, las cuales tienen una distribución normal o gaussiana, que se puede observar en el diagrama en forma de campana o de Gauss.

    .row.justify-content-center.mb-5(data-aos='fade-down')
      .col-lg-6.col-md-10
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 4. 
          span Muestreo del lote por variables
        figure
          img(src='@/assets/curso/temas/t1/fig4.svg', alt='Gráfica de una distribución normal que muestra la relación entre la frecuencia y las observaciones. Una curva simétrica en forma de campana destaca el valor central o media mediante una línea vertical verde, y la dispersión u horizontalidad de los datos mediante una flecha bidireccional roja que representa la desviación típica.')

    p.mb-4 Existen dos tipos de variables, las discretas y las continuas. Las variables discretas son aquellas que solo pueden tomar un valor dentro de un mínimo de conjunto numerable, es decir que no acepta cualquier valor, y las variables continuas toman un valor fijo dentro de un intervalo específico. Las diferencias de esas medidas dan como resultado los defectos, los cuales deben ser definidos contemplando el manejo de las tolerancias de dichas características, las cuales se aplican en los gráficos de control como los límites superiores e inferiores.

    .row.justify-content-center.mb-4
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/28.png', alt='')
      .col-lg-7
        p Se realiza inspección de calidad con muestreo de aceptación por variables cuando:
        ul.lista-ul.fa-lista.list-ico.mb-4
          li
            img(src='@/assets/curso/temas/t1/ico-list.svg')
            span.mb-0 Se inspecciona una característica con la capacidad de convertirse con una escala medible.
          li
            img(src='@/assets/curso/temas/t1/ico-list.svg')
            span.mb-0 La inspección por atributos resulta más alta en su costo.
          li
            img(src='@/assets/curso/temas/t1/ico-list.svg')
            span.mb-0 Al realizar inspección por atributos no aporta suficiente información de calidad para ser analizada.
        p Algunos ejemplos de variables a inspeccionar en los productos de confección son:
        .bg9.p-4
          ul.lista-ul.fa-lista.list-ico.mb-0
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 La medida de un ojal.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 El largo de una blusa.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Cantidad de botones en una camisa.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Ancho de una pretina.
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Medidas de un bolsillo.

    p.mb-4 El análisis de la aplicación del muestreo por variables comprende distintos factores técnicos, los cuales se detallan en la siguiente recopilación de ventajas y desventajas:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-9
        .titulo-sexto.color-secundario.mb-3
          h5 Tabla 4.
          span Ventajas y desventajas aplicación por variables
        .tabla-a.tabla1.color-secundario
          table
            thead
              tr.bg-color-secundario.text-white
                th Ventajas
                th Desventajas
            tbody
              tr
                td Uso de muestras pequeñas.
                td Solo se aplica a una característica.
              tr
                td Se valora el cumplimiento o incumplimiento de una especificación establecida.
                td Se asume que la variable presenta una distribución normal; esta condición debe verificarse.
              tr
                td Facilita la detección de errores de medición.
                td Implica mayores costos por la contratación de personal calificado y el uso de dispositivos de medición.
              tr
                td Aporta mayor sustento para la toma de decisiones.
                td Requiere mayor tiempo para registrar, tabular y analizar los datos obtenidos.

    p Para realizar el procedimiento se debe tener definido:

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-5.d-none.d-lg-block.pe-lg-0
        img(src='@/assets/curso/temas/t1/29.png', alt='')
      .col-lg-7.ps-lg-0
        .bg5.h-100.p-4
          img.w-85x.mb-3(src='@/assets/curso/temas/t1/30.svg', alt='')
          ul.lista-ul.fa-lista.list-ico.mb-0
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Los lotes, los cuales están conformados por las unidades de los productos cuyas características deben ser las mismas, lo cual genera homogeneidad y garantiza la evaluación de calidad, así mismo se debe definir su tamaño.
            li
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 El plan de muestreo teniendo en cuenta la muestra, su tamaño y los criterios de aceptación, así como los programas y sistema de muestreo.
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Definir el tipo de inspección a usar según el lote, sea normal, estricta o reducida, además deben describirse las reglas en el caso necesario de los cambios generados por los resultados arrojados por la inspección. Posteriormente realizar la inspección de cada prenda que conforma la muestra.

    .row.justify-content-center.mb-5(data-aos="fade")      
      .col-lg-7.pe-lg-0
        .bg5.h-100.p-4
          img.w-85x.mb-3(src='@/assets/curso/temas/t1/31.svg', alt='')
          ul.lista-ul.fa-lista.list-ico.mb-0
            li.mb-1
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Definir el Nivel Aceptable de Calidad (NAC), el cual depende del tamaño de la muestra y dependiendo de las características a inspeccionar definidas, puede ser diferente, pero el NAC no puede ser superior a 10 %.
            li.mb-1
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Definir el nivel de inspección, si se utilizan los de tipo general: I, II o III, en el caso de muestras pequeñas para ensayos se utilizan: S1, S2, S3 o S4.
            li.mb-1
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Determinar el tipo de plan de muestreo, si es simple, doble o múltiple, los cuales pueden observarse en las tablas 2, 3 y 4 de la Norma ISO 2859-1.
            li.mb-1
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Desarrollar la curva de operación y recolectar los datos del proceso.
            li.mb-1
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Tabular la información recolectada en las tablas de frecuencias, así mismo graficar histograma, gráfico de control entre otras herramientas estadísticas.
            li.mb-1
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Análisis de los datos.
            li.mb-0
              img(src='@/assets/curso/temas/t1/ico-list.svg')
              span.mb-0 Presentación de resultados.
      .col-lg-5.d-none.d-lg-block.ps-lg-0
        img(src='@/assets/curso/temas/t1/32.png', alt='')

    .row.bgcolor-1.align-items-center.p-3.p-md-4.mb-3
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-12
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/temas/t1/cta.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col-12.col-lg-10.col-md-8.mb-3.mb-sm-0.text-white
                      h4.mb-1 Ejemplo 1. Muestreo por variables
                      p.mb-0 Descargue un ejemplo de aplicación de muestreo de lotes por variables.
                    .col.col-lg-2.mb-3.mb-sm-0
                      a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexos/Ejemplo1_muestreo_por_variables.docx')" target="_blank" type="application/pdf")
                        span Descargar 
                        i.fas.fa-file-download

    .row.bgcolor-1.align-items-center.p-3.p-md-4
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-12          
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/temas/t1/cta.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col-12.col-lg-10.col-md-8.mb-3.mb-sm-0.text-white
                      h4.mb-1 Ejemplo 1. Cálculo y gráfico
                      p.mb-0 Descargue un ejemplo 1 de cálculo y gráfico.
                    .col.col-lg-2.mb-3.mb-sm-0
                      a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexos/Ejemplo_1_calculo_y_grafico.xlsx')" target="_blank" type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
                        span Descargar 
                        i.fas.fa-file-download


    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3. Procedimiento de inspección de calidad con muestreo del lote por atributos

    .bloque-texto-g.bloque-texto-g--inverso.bg5.br-tl.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(i
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/33.png')})`}")
      .bloque-texto-g__texto.p-4
        p Los atributos no pueden ser representados por una cifra, solo pueden ser inspeccionados de manera visual. Es importante tener definidos los defectos, las cantidades y niveles, para así determinar, cuándo la prenda es rechazada y cuándo es aceptada. El procedimiento se desarrolla de manera igual a la inspección realizada por variables. #[br] #[br]
        p.mb-0 Es importante asegurar por métodos estadísticos, basados en modelos de probabilidad que el comportamiento de la muestra es igual al lote, en cuyo caso se utilizan las curvas de operación llamadas Curva OP, para tomar decisiones en el lote.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p La curva característica de operación OP es la muestra del desempeño potencial del plan de muestreo, es decir su confiabilidad, se puede analizar el riesgo del consumidor y el fabricante mediante el cálculo de la probabilidad de aceptar o rechazar el lote con una calidad establecida. Para calcular la CO se procede de la siguiente manera:
        .bg-compl1.p-4
          ol.lista-ol--cuadro.fa-lista.mb-0
            li
              .lista-ol--cuadro__vineta
                span.text-dark.fw-bold 1
              span.mb-0 Determinar criterio de aceptación (c).
            li
              .lista-ol--cuadro__vineta
                span.text-dark.fw-bold 2
              span.mb-0 Definir el tamaño de la muestra (n).
            li
              .lista-ol--cuadro__vineta
                span.text-dark.fw-bold 3
              span.mb-0 Establecer el porcentaje de defectuosos: proporción de productos defectuosos (p).
            li
              .lista-ol--cuadro__vineta
                span.text-dark.fw-bold 4
              span.mb-0 Aplicar la fórmula para la probabilidad de aceptación del lote, (pa).
            li
              .lista-ol--cuadro__vineta
                span.text-dark.fw-bold 5
              span.mb-0 Desarrollar gráfica, en el eje X ubique el porcentaje de defectos y en el eje Y la probabilidad de aceptación de un lote con x número de defectos.
            li
              .lista-ol--cuadro__vineta
                span.text-dark.fw-bold 6
              span.mb-0 Analizar curva de operación.
            li.mb-0
              .lista-ol--cuadro__vineta
                span.text-dark.fw-bold 7
              span.mb-0 Definir la necesidad de mejorar el proceso, y los riesgos del consumidor y del fabricante.
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/34.svg', alt='')

    p.mb-4 A continuación se puede revisar el flujograma del procedimiento de inspección por muestreo por atributos utilizando las tablas militares difundidas según la Norma ISO 2859-1, norma basada en la curva de operación:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-12
        .titulo-sexto.color-secundario.mb-3
          h5 Figura 5.
          span Flujograma del procedimiento según la Norma ISO 2859-1
      .col-lg-6.col-md-9
        figure
          img(src='@/assets/curso/temas/t1/fig5.svg', alt='Diagrama de flujo que describe el proceso de inspección de un lote de tamaño N. El procedimiento avanza secuencialmente desde la selección de la muestra de tamaño n y la inspección de sus unidades, hasta llegar a un nodo de decisión sobre las unidades defectuosas encontradas, del cual se derivan dos opciones: aceptar el lote o rechazarlo, conllevando esta última acción a una inspección de unidades al cien por ciento.')

    p.mb-4 La descripción del procedimiento es el siguiente:

    .row.bgcolor-2.align-items-center.p-3.p-md-4.mb-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-1.d-none.d-lg-block
              img(src="@/assets/curso/temas/t1/35.svg", alt='')
            .col-lg-11
              ul.lista-ul.fa-lista.list-ico.mb-0
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Los lotes, conformados por las unidades de los productos cuyas características deben ser las mismas lo cual genera homogeneidad y garantiza la evaluación de calidad. A su vez el tamaño de lotes, definiendo las unidades de los productos del lote.
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Definir el plan de muestreo teniendo en cuenta la muestra, su tamaño y los criterios de aceptación, así como los programas y sistema de muestreo. El tamaño de la muestra debe ser conforme al uso de las tablas de la Norma ISO 2859-1.
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Realizar la inspección de cada prenda que conforma la muestra.
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Definir el tipo de inspección a usar según el lote, sea normal estricta o reducida, además deben describirse las reglas en el caso necesario de los cambios generados por los resultados arrojados por la inspección.
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Definir el Nivel Aceptable de Calidad (NAC) el cual depende del tamaño de la muestra y dependiendo de las características a inspeccionar puede ser diferente de un lote a otro, pero el NAC no puede ser superior a 10 %.
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Definir el nivel de inspección, si se utilizan los de tipo general: I, II o III; en el caso de muestras pequeñas para ensayos los S1, S2, S3 o S4.
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Determinar el tipo de plan de muestreo: simple, doble o múltiple, los cuales pueden observarse en las tablas 2, 3 y 4 de la Norma ISO 2859-1, de su material complementario.
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Utilizando las tablas contenidas en la NTC-ISO 2859-1 se define el plan de muestreo.
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Se recolectan los datos y se tabula la información en las tablas de frecuencias.
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Se desarrollan gráficos de histograma, gráfico de control entre otras herramientas estadísticas.
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Se desarrolla curva de operación.
                li.mb-1
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Análisis de los datos.
                li.mb-0
                  img(src='@/assets/curso/temas/t1/ico-list.svg')
                  span.mb-0 Presentación de resultados.

    .row.bgcolor-1.align-items-center.p-3.p-md-4.mb-3
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-12
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/temas/t1/cta.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col-12.col-lg-10.col-md-8.mb-3.mb-sm-0.text-white
                      h4.mb-1 Ejemplo 2. Muestreo por atributos
                      p.mb-0 Descargue un ejemplo de aplicación de muestreo de lotes por atributos.
                    .col.col-lg-2.mb-3.mb-sm-0
                      a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexos/Ejemplo2_muestreo_por_atributos.docx')" target="_blank" type="application/pdf")
                        span Descargar 
                        i.fas.fa-file-download

    .row.bgcolor-1.align-items-center.p-3.p-md-4.mb-4
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center
            .col-lg-12          
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/temas/t1/cta.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col-12.col-lg-10.col-md-8.mb-3.mb-sm-0.text-white
                      h4.mb-1 Ejemplo 2. Cálculo y gráfico
                      p.mb-0 Descargue un ejemplo 2 de cálculo y gráfico.
                    .col.col-lg-2.mb-3.mb-sm-0
                      a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexos/Ejemplo_2_calculo_y_grafico.xlsx')" target="_blank" type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
                        span Descargar 
                        i.fas.fa-file-download

    p Una vez se establezca el procedimiento de los muestreos este debe estar documentado en un documento cuyo formato esté previamente definido, los cuales junto con los demás procedimientos forman parte del manual de calidad de la empresa, y se constituyen en la información para controlar los procesos y se debe garantizar su custodia y disponibilidad.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
