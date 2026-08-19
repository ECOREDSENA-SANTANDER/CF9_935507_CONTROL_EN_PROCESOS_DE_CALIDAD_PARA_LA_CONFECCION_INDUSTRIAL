export default {
  global: {
    Name: 'Procedimiento de inspecciones de calidad utilizando muestreo',
    Description:
      'Bienvenido a este componente formativo, en el que aprenderá a aplicar procedimientos de inspección de calidad mediante muestreo, apoyados en herramientas estadísticas, informáticas y técnicas de manufactura esbelta para analizar resultados, tomar decisiones y fortalecer el control de calidad en procesos de confección industrial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Procedimientos de inspecciones de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Procedimiento de inspección de calidad con muestreo según normatividad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Procedimiento de inspección de calidad con muestreo del lote por variables',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Procedimiento de inspección de calidad con muestreo del lote por atributos',
            hash: 't_1_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF9_935507_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: '<em>Andon</em>',
      significado:
        'señal de alerta que se activa al parar una línea de producción.',
    },
    {
      termino: 'Estandarización',
      significado:
        'descripción escrita o gráfica de las características de un producto o proceso con el fin de hacer un producto de calidad más fiable, seguro, de menos precio y producirlo de manera más rápida.',
    },
    {
      termino: 'Flujo de valor',
      significado:
        'movimiento de los productos, servicios e información hacia el cliente.',
    },
    {
      termino: 'Procedimiento',
      significado: 'es la manera como se realiza el proceso.',
    },
    {
      termino: 'Proceso',
      significado:
        'listado de operaciones o actividades que utiliza unos recursos y se realiza algún cambio.',
    },
    {
      termino: 'Programa de muestreo',
      significado:
        'combinación de los muestreos planeados y las normas para el cambio de un tipo de plan a otro.',
    },
    {
      termino: 'Riesgo del productor',
      significado:
        'probabilidad de la no aceptación del lote según el nivel de calidad aceptable.',
    },
    {
      termino: 'Sistema de muestreo',
      significado:
        'conjunto de planes o programas de muestreo que se interrelacionan entre sí.',
    },
    {
      termino: 'Tiempo de ciclo',
      significado: 'tiempo requerido para producir una pieza o producto. ',
    },
    {
      termino: '<em>WIP</em>',
      significado:
        'cantidad de unidades en proceso, utilizando la herramienta <em>kanban</em>.',
    },
  ],
  referencias: [
    {
      referencia:
        'Duque de Serna, F. (1990). Procedimientos para el control de la calidad. Servicio Nacional de Aprendizaje (SENA).',
    },
    {
      referencia:
        'Evans, J. R., & Lindsay, W. M. (2015). Administración y control de la calidad (9.ª ed.). Cengage Learning.',
    },
    {
      referencia:
        'Gómez, J. (2018). Guía para la aplicación de ISO 9001:2015 (1.ª ed.). AENOR.',
    },
    {
      referencia:
        'Gutiérrez Pulido, H. (2013). Control estadístico de la calidad y Seis Sigma (3.ª ed.). McGraw-Hill Interamericana.',
    },
    {
      referencia:
        'Hay, E., & Cárdenas, M. (2003). Justo a tiempo: La técnica japonesa que genera mayor ventaja competitiva. Editorial Norma.',
    },
    {
      referencia:
        'Lean Manufacturing 10. (s. f.). Heijunka: cómo nivelar la producción con lean manufacturing. ',
    },
    {
      referencia:
        'Naydenov, P. (s. f.). ¿Qué es Kanban? Explicación para principiantes. Businessmap. ',
    },
    {
      referencia:
        'Pérez Herrera, J. F. (2020, 11 de agosto). Definición de Jidoka: control automático de defectos. Lean Construction México. ',
    },
    {
      referencia:
        'Pérez Marqués, M. (2016). Control de calidad: Técnicas y herramientas (1.ª ed.). Alfaomega Grupo Editor.',
    },
    {
      referencia:
        'Rajadell Carreras, M., & Sánchez García, J. (2010). Lean manufacturing (1.ª ed.). Ediciones Díaz de Santos.',
    },
    {
      referencia:
        'Rodó, P. (2019, 10 de noviembre). Distribución normal: qué es, cómo se calcula y ejemplos. Economipedia. ',
    },
    {
      referencia:
        'Socconini, L. V. (2019). Lean manufacturing: Paso a paso. Marge Books.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Nelftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Sandra Cecilia Gutiérrez',
          cargo: 'Experta temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: ' Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Oscar Andrés Fernández Urrego',
          cargo: ' Evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Julieth Paola Vital López',
          cargo: 'Corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        /*{
          nombre: ' ',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },*/
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
