<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 4
      .h3 Tejidos
    p.mb-5 Son un material que se encuentra elaborado a base de fibras textiles, es utilizado para la confección de diferentes prendas y se clasifican en:
    figure.mb-3
      img(src='@/assets/curso/t4-i1.svg', alt='Clasificación de los tejidos')
    figcaption 
      span.text-bold Figura 1: 
      | Clasificación de los tejidos
    br
    p.mb-5 
      span.text-bold Nota: 
      | Los tejidos se clasifican en telas tejidas y no tejidas.
    br
    #t_4_1.titulo-segundo.pt-5 
      .h4 4.1 Tejido plano
    .row 
      .col-md-6
        figure
          img(src='@/assets/curso/t4-i2.svg', alt='Ejemplo de tejido plano')
        br
        figcaption 
          span.text-bold  Figura 2: 
          | Estructura del tejido
      .col-md-6 
        p.mb-5 Este tejido se caracteriza por el entrelazado de sus hilos en ángulos rectos, es decir, los hilos que van a lo largo de la tela (urdimbre) se entrelazan con los hilos que van a lo ancho de la tela (trama), formando entre sí formas perpendiculares. Se presentan por una alternancia de estos hilos, y los telares no tienen agujas.
        p.mb-5 
          span.text-bold Nota: 
          | El tejido plano se caracteriza por el entrelazado.
    br
    p.mb-5 A continuación, se ven los ligamentos básicos del tejido plano:
    .row
      .col-md-4
        .h6 Tafeta
        figure.mb-3
          img(src='@/assets/curso/t4-i3.svg', alt='Ejemplo de Tafeta')
        p.mb-5 No tiene ni derecho ni revés, además es el ligamento más estable, se deshilacha menos. Es uno de los tejidos más usados para la fabricación de ropa deportiva.
      .col-md-4
        .h6 Sarga
        figure.mb-3
          img(src='@/assets/curso/t4-i4.svg', alt='Ejemplo de Sarga')
        p.mb-5 Cada hilo de 
          span.text-bold urdimbre 
          | flota sobre 2 o más hilos de 
          span.text-bold trama; 
          | forman diagonales en el tejido como las telas para elaborar jeans o gabardinas, y dril.
      .col-md-4
        .h6 Raso o satín
        figure.mb-3
          img(src='@/assets/curso/t4-i5.svg', alt='Ejemplo de Satín')
        p.mb-5 Tejido de alto brillo que por lo general suele ser delicado.
    #t_4_2.titulo-segundo.pt-5 
      .h4 4.2 Tejido de punto
    p.mb-5 Es aquel en el que los hilos se entrelazan en forma de malla.  Es importante entender que en este tipo de tejido hay únicamente un hilo que pasa por todas las agujas. Por lo general, estas telas presentan mayor elongación, bien sea en sentido de las columnas o de las pasadas, fácilmente para adaptarse/ceñirse muy bien al cuerpo.
    .row.mb-5
      .col-md-6
        figure
          img(src='@/assets/curso/t4-i6.svg', alt='El tejido de punto por trama')
        br
        figcaption 
          span.text-bold  Figura 3: 
          | Tejido de punto por trama
      .col-md-6
        .h6 El tejido de punto por trama
        p.mb-5 Es aquel que presenta una única hilatura continua que forma pasadas en el tejido en sentido longitudinal, como se observa en la siguiente imagen.
        p.mb-5 
          span.text-bold Nota: 
          | Presenta una única hilatura continua.
    .row.mb-5
      .col-md-6
        figure
          img(src='@/assets/curso/t4-i7.svg', alt='El tejido de punto por urdimbre')
        br
        figcaption 
          span.text-bold Figura 4: 
          | Tejido de punto por urdimbre.

      .col-md-6
        .h6 Tejido de punto por urdimbre
        p.mb-5 Es aquel que presenta una serie de hilaturas que forman columnas en sentido longitudinal, como se muestra en la siguiente imagen.
        p.mb-5 
          span.text-bold Nota: 
            | Hilaturas en columnas con sentido longitudinal.
    p.mb-5 En el siguiente esquema se muestra la clasificación de los tejidos de punto.
      figure 
        img(src='@/assets/curso/t4-i8.svg', alt='Ejemplo de tejido de punto')
      br
      figcaption.mb-5 
        span.text-bold Figura 5: 
        | Tejido de punto
    p.mb-5
      span.text-bold Nota:
      | El tejido de punto se clasifica en trama y urdimbre.  
    .h6 No tejidos
    p.mb-3 Tipo de telas producidas al formar una red con fibras que se unen por procedimientos mecánicos, térmicos o químicos, pero sin ser tejidas, como la guata y el interl­ón. 
    p.mb-5 A manera de consulta adicional revise el siguiente contenido:
    a.anexo.mb-4.mb-lg-0(href="https://texdelta.com/blog/caracteristicas-de-las-fibras-sinteticas-para-la-fabricacion-de-tejidos/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              span.text-bold Enlace web.
              | Texdelta. (2020). Características de las fibras sintéticas para la fabricación de no tejidos. [Web log post]. El blog de Texdelta.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
figcaption{font-weight: normal}
.text-bold{font-weight: 700 !important}
.anexo{background-color: #F6F6F6 !important}
.anexo p, .anexo *{color: #000}
</style>
