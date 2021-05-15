<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    .row
      .col-md-6
        p.mb-5 Para todo proceso de patronaje es fundamental el conocimiento de fibras textiles, propiedades, tejidos básicos, sus características y sus usos; requiere un conocimiento acertado que brinde una orientación del material textil más apropiado para la elaboración de la falda básica.
        p.mb-5 De igual forma, se realiza la orientación sobre las medidas de seguridad que se deben tener en cuenta para el proceso de trazo, corte y confección, así mismo, se desarrolla el trazo y corte de falda básica, no sin antes dar a conocer los fundamentos técnicos y de calidad que dan soporte al proceso de elaboración de la prenda y la utilización de la terminología, que hace parte de un lenguaje adaptado a la industria de la confección a nivel mundial.
        p.mb-5 Por ello, se busca el cumplimiento del objetivo principal de esta fase, trazar y cortar la falda básica cumpliendo con las especificaciones de calidad.
      .col-md-6
        figure.mb-5
          img(src='@/assets/curso/t0-i1.jpg', alt='Introducción Trazo y corte de falda')
          
           

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
