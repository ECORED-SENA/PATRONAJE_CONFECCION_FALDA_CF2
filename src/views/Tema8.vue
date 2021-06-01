<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 8
      .h3 Trazo y extendida falda básica
    p.mb-5 Este apartado es muy importante, por ello debe descargar y apropiar el instructivo que se encuentra a continuación y visualizar de forma detallada el video sobre el trazo y la confección de la falda.
    .tarjeta.color-primario.text-white.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src='@/assets/curso/t8-i1.svg', alt='ilustración miniatura de falda basica')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .h5.mb-0 Título del recurso
              p Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias  
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/Instructivo_Trazo-Falda-Basica.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    .row
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/BHbdXNmFjnI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        //-- figcaption Video: Leyenda del video
      hr

</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.anexo{background-color: #F6F6F6 !important}
.anexo p, .anexo *{color: #000}
</style>
