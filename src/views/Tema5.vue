<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 5
      .h3 Tintorería y acabados
    figure.mb-4
      img(src='@/assets/curso/t5-i1.jpg', alt='muestra de telas multiculores tinturadas')
    p.mb-5 La tintorería es un proceso por medio del cual se emplea sustancias naturales o químicas (colorantes) para dar cualidades de color en las diferentes gamas, tonalidades y diversa saturación, para así lograr mayor gusto y aceptación.
    p.mb-5 Un acabado es la presentación final del textil, generado de forma física o mecánica y de forma química (funcional), que le permite ganar vistosidad o refuerzo para satisfacer al cliente final o diseñador.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.anexo{background-color: #F6F6F6 !important}
.anexo p, .anexo *{color: #000}
</style>
