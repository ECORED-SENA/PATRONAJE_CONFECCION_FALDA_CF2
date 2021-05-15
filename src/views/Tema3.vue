<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 3
      .h3 Hilos
    .row
      .col-md-6
        p.mb-5 Es un conjunto de fibras textiles continuas o discontinuas, que se tuercen juntas alcanzando una gran longitud, es directamente empleado en la fabricación de tejidos y en el cosido de estos.
        p.mb-5 Con el fin de que amplíe la información sobre este tema revise el Capítulo IV. Hilaturas del libro de Pesok, M., J., C. (2014). Cursos de tecnología textil realizados en la Facultad de Ingeniería. Universidad de la República. Montevideo,Uruguay.
        a.anexo.mb-5.mb-lg-0(href="#" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              span.text-bold Enlace web.
              | Sistema de Bibliotecas - SENA 
              | Colecciones de libros, revistas, artículos, índices bibliográficos, etc.
        br
        .cajon.color-primario.p-4.mb-5
          p.text-bold Recuerde que para acceder a las bases de datos del SENA debe ingresar en los campos de usuario y contraseña con su número cédula.
        
      .col-md-6
        figure.mb-5
          img(src='@/assets/curso/t3-i1.jpg', alt='En la foto Hilos organizados de multiples colores ')
        
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
