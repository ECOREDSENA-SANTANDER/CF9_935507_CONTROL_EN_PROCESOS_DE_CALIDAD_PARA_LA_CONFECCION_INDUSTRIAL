<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Procedimiento de inspecciones de calidad utilizando muestreo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los aprendices sobre los procedimientos de inspección de calidad con muestreo, la selección del tamaño de muestra, la aplicación de técnicas de manufactura esbelta como <em>Heijunka, control visual, Kanban, Just in Time y Jidoka</em>, así como el uso de normas técnicas, muestreo por variables y atributos, niveles de inspección, nivel aceptable de calidad, curva de operación y documentación de los procedimientos para la toma de decisiones en la mejora de la calidad. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito de establecer procedimientos de inspección de calidad utilizando muestreo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar las actividades de inspección, optimizar recursos y apoyar la toma de decisiones sobre la calidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar la necesidad de documentar los procesos de calidad de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Inspeccionar únicamente las prendas terminadas sin considerar el proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reemplazar al inspector de calidad por completo mediante tecnología.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Por qué es importante elegir adecuadamente el tamaño de la muestra en una inspección de calidad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que la muestra represente adecuadamente el lote evaluado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Que siempre se inspeccione el 100 % de las prendas producidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que se reduzca el número de normas aplicables al proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que se eliminen los registros de inspección de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué técnica permite planificar y nivelar los pedidos según la cantidad y variedad de productos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '<em>Jidoka.</em>', esCorrecta: false },
            { id: 'b', texto: '<em>Heijunka.</em>', esCorrecta: true },
            { id: 'c', texto: '<em>Poka Yoke.</em>', esCorrecta: false },
            { id: 'd', texto: 'Diagrama de Pareto.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la finalidad principal del control visual en una planta de confección?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ocultar los problemas de producción hasta finalizar el lote.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Facilitar que el personal conozca el estado del sistema y los avances de mejora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir todas las herramientas estadísticas de calidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Aumentar los inventarios sin realizar seguimiento al proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué es <em>Kanban</em> en el contexto de la manufactura esbelta?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un sistema de programación y control que usa tarjetas para sincronizar la producción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Una técnica usada únicamente para medir la resistencia de las telas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un método para eliminar la inspección de materiales e insumos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una norma técnica exclusiva para el rotulado de prendas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la diferencia entre <em>Kanban</em> de producción y <em>Kanban</em> de transporte?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El de producción autoriza qué y cuánto confeccionar; el de transporte autoriza qué y cuánto material retirar del proceso anterior.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El de producción se usa solo para ventas; el de transporte se usa solo para auditorías externas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El de producción elimina los inventarios; el de transporte elimina las fichas técnicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El de producción aplica a textiles y el de transporte solo a maquinaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué expresa el <em>takt time</em> en una empresa de confección?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El ritmo con el que debe fabricarse una pieza según el tiempo disponible y la demanda del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El costo total de cada insumo utilizado en una prenda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La cantidad de normas técnicas colombianas aplicables a un lote.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El número de defectos críticos permitidos sin realizar inspección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál característica corresponde al sistema <em>Pull</em> dentro del <em>Just in Time</em>?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Produce según pronósticos previos, con lotes grandes e inventarios altos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Produce de acuerdo con la demanda, con consumos reales, lotes pequeños e inventarios bajos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Produce sin tener en cuenta la solicitud del cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Produce únicamente para aumentar el almacenamiento de materiales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál instrumento del trabajo estandarizado ilustra la secuencia en un puesto de trabajo?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Hoja de trabajo estándar.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Orden de compra de materiales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registro de devoluciones del cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Certificado de calibración externa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué significa <em>Jidoka</em> en los procesos de confección?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Automatización con toque humano para detener el proceso ante problemas y prevenir piezas defectuosas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Producción masiva sin controles durante el proceso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aumento de inventarios para evitar cambios de referencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminación de la responsabilidad del coequipero en la calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué indica una luz roja en el sistema de alerta <em>ANDON</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La actividad es óptima y no requiere intervención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se debe continuar la producción sin revisar el defecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se detiene completamente la línea de producción para encontrar una solución.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Se aumenta el ritmo de producción para recuperar tiempo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué norma se relaciona con los procedimientos de muestreo para inspección por atributos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'NTC-ISO 2859-1.', esCorrecta: true },
            {
              id: 'b',
              texto: 'NTC 340 de rotulado de textiles y confecciones.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'NTC 1902 de tallas.', esCorrecta: false },
            {
              id: 'd',
              texto: 'NTC 2089 de hilos de algodón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿En qué momento se recomienda ubicar un punto de inspección dentro del proceso?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Antes de una operación cuya corrección posterior sea difícil o costosa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solamente después de entregar el producto al cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente cuando no existan normas técnicas aplicables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Después de eliminar todos los registros de calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál es una obligación del coequipero frente al material recibido en el proceso?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Inspeccionar el material antes de usarlo e informar problemas al proceso anterior.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aceptar todo material aunque presente defectos visibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Omitir la comunicación de problemas para evitar demoras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Continuar el proceso aunque el defecto afecte la calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuándo se realiza una inspección de calidad con muestreo por variables?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuando la característica puede medirse mediante una escala.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cuando solo se requiere una revisión visual sin cifras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cuando no se han definido tolerancias ni límites de control.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando no se cuenta con lote ni muestra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Cuál es una ventaja del muestreo por variables?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite usar muestras pequeñas y aporta mejor sustento para la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Elimina la necesidad de personal calificado y dispositivos de medición.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aplica simultáneamente a todas las características sin verificación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requiere comprobar la distribución de la variable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué caracteriza la inspección de calidad por atributos?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Características que se inspeccionan visualmente y no se representan mediante una cifra de medición.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Medidas continuas que siempre se expresan en centímetros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Variables que únicamente se analizan mediante una curva de Gauss.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Datos que no requieren definición de defectos ni niveles de aceptación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué representa el Nivel Aceptable de Calidad (NAC) en un plan de muestreo?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El criterio de aceptación definido según la muestra y la característica a inspeccionar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El número total de operarios asignados al módulo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La cantidad de tarjetas <em>Kanban</em> disponibles en el tablero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El tiempo de ciclo definido por la empresa sin relación con la calidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Para qué se utiliza la curva característica de operación en el muestreo por atributos?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para analizar la confiabilidad del plan de muestreo y los riesgos del consumidor y del fabricante.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Para reemplazar el plan de muestreo y aceptar todos los lotes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para definir únicamente la cantidad de operarios por línea.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para eliminar la necesidad de tabular los datos recolectados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué debe hacerse una vez se establece el procedimiento de muestreo en la empresa?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Documentarlo en un formato definido, integrarlo al manual de calidad y garantizar su custodia y disponibilidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aplicarlo sin registros para reducir el tiempo de inspección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usarlo solo de manera verbal entre los operarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminarlo después de la primera inspección aceptada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
