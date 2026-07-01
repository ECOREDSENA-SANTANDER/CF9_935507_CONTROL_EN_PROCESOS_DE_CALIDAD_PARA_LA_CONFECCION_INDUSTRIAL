<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 En toda empresa de producción manufacturera es necesario definir los métodos y los recursos necesarios para realizar las inspecciones utilizando la técnica de muestreo, sea inspeccionando variables o atributos de las prendas, teniendo en cuenta el contexto de la empresa, sus propias normas y las normas técnicas aplicables a la industria de la confección de acuerdo con su línea de producto y el sistema de producción.

    .bg1.p-4.mb-4
      p Con respecto al sistema de producción de la empresa se debe conocer de acuerdo con la metodología que promueve la manufactura esbelta, otras técnicas aplicables y así generar la cultura de mejora basada en las personas, enfocándose en eliminar los desperdicios o mudas del proceso productivo, es decir, lo que no agrega valor al cliente.
      p.mb-0 Es por esto que surge la necesidad de establecer un procedimiento examinando las diferentes técnicas asociadas de la filosofía #[em Lean manufacturing] aplicadas, pues su combinación se relaciona directamente con la calidad de la empresa, en esta oportunidad se mencionan #[em Jidoka], #[em Heijunka], #[em Kanban], #[em Control visual] y #[em Just in Time (JIT)].
    
    img(src='@/assets/curso/temas/intro/1.png', alt='')


</template>

<script>
export default {
  name: 'Introduccion',
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
