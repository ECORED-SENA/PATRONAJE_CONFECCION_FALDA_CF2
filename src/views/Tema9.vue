<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 9
      .h3 Corte: proceso corte de falda básica
    .row
      .col-md-6
        p.mb-5  Consiste en cortar las piezas de la prenda, siguiendo el perfil trazado o el borde de los moldes. En cuanto a sastrería o prendas a la medida el corte se realiza con tijera, a nivel industrial se realiza con máquinas de corte vertical, circular, sinfín o automáticas.  De las dos formas se debe cumplir con las especificaciones técnicas para garantizar la mejor calidad del corte y minimizar los problemas de confección.
        p.mb-5  El desarrollo de esta tarea exige concentración al momento de realizar el corte, ya que este proceso implica una serie de riesgos, como el daño del textil y posibles deformaciones de las piezas al cortar, generando pérdidas económicas.
      .col-md-6
        figure
          img(src='@/assets/curso/t9-i1.jpg', alt='Fotografia proceso de corte manual')
    .row
      .col-md-12
        .h5 A. Pasos para realizar el corte de falda básica
        p.mb-5 Esta actividad requiere atención y cuidado, ya que está en juego el material utilizado y el bienestar de la persona que lo realiza, a continuación, se detallan los pasos básicos a tener en cuenta en este proceso:
    .cardsList
      .tarjeta-numerada.color-acento-contenido.p-5.mb-3
          .tarjeta-numerada__numero
            .h4 1
          | Ruta integral de atención en salud para la promoción y mantenimiento de la salud.
      .tarjeta-numerada.color-acento-contenido.p-5.mb-3
          .tarjeta-numerada__numero
            .h4 2
          | Tomar de forma correcta las tijeras por el mango, al cortar se debe tener la tijera apoyada sobre la mesa para tener un mejor soporte en el momento del corte.
      .tarjeta-numerada.color-acento-contenido.p-5.mb-3
          .tarjeta-numerada__numero
            .h4 3
          | Iniciar con las piezas que están hacia el orillo de la tela y de forma organizada continuar con las demás.
      .tarjeta-numerada.color-acento-contenido.p-5.mb-3
          .tarjeta-numerada__numero
            .h4 4
          | Al cortar la falda básica se debe respetar las formas de las piezas, curvas, rectas y ángulos, con el fin de no generar variaciones en las medidas de la prenda.
      .tarjeta-numerada.color-acento-contenido.p-5.mb-3
          .tarjeta-numerada__numero
            .h4 5
          ol.lista-ol
            li 
              span.text-bold a. 
              | Marcaciones de piquetes: deben ser cortados 0.5 cm máximo, para una mejor calidad en el corte realizarlo con la punta de la tijera.
            li 
              span.text-bold b. 
              | Marcaciones de puntos internos: como el vértice de pinza, los cuales deben ser trasladados o marcados en las piezas del delantero y del posterior utilizando una plantilla.
            
      .tarjeta-numerada.color-acento-contenido.p-5.mb-3
          .tarjeta-numerada__numero
            .h4 6
          | Disponer de los residuos generados en el corte, depositándolos en un contenedor para no generar contaminación, ni desorden.
      .tarjeta-numerada.color-acento-contenido.p-5.mb-5
          .tarjeta-numerada__numero
            .h4 7
          ol.lista-ol
            li 
              span.text-bold a. 
              | Número de piezas cortadas frente a las patronadas.
            li 
              span.text-bold b. 
              | Piquetes de pinza en cintura de las piezas del delantero y posterior.
            li 
              span.text-bold c. 
              | Piquetes de altura de cadera en el costado de las piezas del delantero y posterior.
            li 
              span.text-bold d. 
              | Piquetes de dobladillo en el delantero y posterior.
            li 
              span.text-bold e. 
              | Piquetes en centro atrás del posterior.
            li 
              span.text-bold f. 
              | Piquetes en el cruce de la pretina.
    
    .row.mb-5
      p.mb-5 Con el fin de reforzar el corte visualice el video “Corte de falda clásica”
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-5
      p.mb-5 Para visualizar las piezas cortadas puede verificar el video “Piezas cortadas”
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    
    .row.mb-5
      p.mb-5 Finalmente, puede realizar el corte de pretina en entretela a través del siguiente video “Corte de pretina”
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  

</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
