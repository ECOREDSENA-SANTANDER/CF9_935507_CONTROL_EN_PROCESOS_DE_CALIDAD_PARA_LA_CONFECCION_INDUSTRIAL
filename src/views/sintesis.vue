<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p La articulación de los métodos de control y las estrategias de manufactura esbelta analizadas a lo largo del texto se consolida en la siguiente estructura de síntesis. En este apartado se detalla la secuencia que conecta la gestión de la calidad con la normatividad industrial, las herramientas de control visual y los procedimientos técnicos de muestreo requeridos para asegurar el valor en los procesos productivos.

    .row.justify-content-center
      .col-lg-10.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis conceptual en forma de mapa que estructura la gestión de calidad en la producción. El eje central conecta jerárquicamente los procedimientos de inspección general, el cumplimiento normativo y los muestreos específicos por variables y atributos. Asimismo, se despliega una sección lateral que vincula de manera directa siete herramientas clave de la manufactura esbelta, incluyendo Heijunka, Kanban, Justo a Tiempo, trabajo estandarizado y Jidōka.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
