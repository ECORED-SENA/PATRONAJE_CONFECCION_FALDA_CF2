<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 7
      .h3 Herramientas para trazo y corte: tipos y usos
    p.mb-5 En el momento de realizar el trazo y corte de la falda básica es necesario contar con las herramientas necesarias para asegurar la calidad del producto que se usa en los talleres de confección e industria de la moda. A continuación, se describen las principales herramientas.
    p.mb-5 Tabla 2: Principales herramientas para dar calidad al producto
    SlyderB.mb-5(:datos="datosSliderT7")

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // SLIDER
    datosSliderT7: [
      {
        titulo: 'Regla y escuadra',
        texto:
          'Son herramientas que permiten alinear los moldes con respecto al tipo de tela.',
        imagen: require('@/assets/curso/t7-i1.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tiza',
        texto:
          'Es utilizada en trazos manuales para marcar la tela antes de cortarla.',
        imagen: require('@/assets/curso/t7-i2.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tijeras',
        texto:
          'Utilizada para el corte manual de las telas, una vez se ha hecho la marcación. ',
        imagen: require('@/assets/curso/t7-i3.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Cortadora circular industrial',
        texto:
          'Es utilizada para hacer cortes de tela de un máximo de 20 capas, dependiendo el tipo de material.',
        imagen: require('@/assets/curso/t7-i4.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Cortadora banana',
        texto:
          'Es una cortadora muy similar a la cortadora circular pero más pequeña, se caracteriza por ser de fácil manejo, gracias a su mango ergonómico y liviano, es utilizada para cortar muestras de prendas. ',
        imagen: require('@/assets/curso/t7-i5.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Alfileres',
        texto:
          'Clavo metálico muy fino que sirve para fijar el trazo a las capas de tela o para sujetar las telas preparándolas para cortar.',
        imagen: require('@/assets/curso/t7-i6.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Pesas para corte',
        texto:
          'Son utilizadas para fijar y sostener las capas de tela en el momento de realizar el extendido y el trazo sobre la tela.',
        imagen: require('@/assets/curso/t7-i7.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Pinzas para sujetar tela',
        texto:
          'Se utilizan para sujetar las telas en los orillos cuando se tiene un tendido de varias capas.',
        imagen: require('@/assets/curso/t7-i8.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Guante de acero',
        texto:
          'Es utilizado en el corte a nivel industrial para proteger la mano al momento de cortar la tela. ',
        imagen: require('@/assets/curso/t7-i9.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.slyder__action{margin-top: 100px}
.anexo{background-color: #F6F6F6 !important}
.anexo p, .anexo *{color: #000}
</style>
