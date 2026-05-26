export default {
  global: {
    Name: 'Procedimiento de inspecciones de calidad utilizando muestreo',
    Description:
      'Utilización de herramientas estadísticas e informáticas para el adecuado análisis de los resultados obtenidos durante los procesos de inspección de calidad.',
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
        download: 'downloads/dist.pdf',
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
  /*complementario: [
    {
      tema: 'Tema 1',
      referencia: 'Texto',
      tipo: 'Sitio web',
      link: 'Link',
    },
  ],*/
  glosario: [
    {
      termino: 'Andon',
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
        'conjunto de planes o programas de muestreo que se interrelación entre sí.',
    },
    {
      termino: 'Tiempo de ciclo',
      significado: 'tiempo requerido para producir una pieza o producto. ',
    },
    {
      termino: 'WIP',
      significado:
        'cantidad de unidades en proceso, utilizando la herramienta kanban.',
    },
  ],
  referencias: [
    {
      referencia:
        'Definición de Jidoka: Control automático de defectos. (2020).',
      link: '',
    },
    {
      referencia:
        'Duque de Serna, F. (1990). Procedimientos para el control de la calidad. Servicio Nacional de Aprendizaje (SENA). ',
      link: '',
    },
    {
      referencia:
        'Evans, J. y Lindsay, W. (2015). Administración y Control de la calidad (9ª ed.). Cengage.',
      link: '',
    },
    {
      referencia:
        'Gómez, J. (2018). Guía para la aplicación de ISO 9001 2015 (1ª ed., Págs. 268 a 280). AENOR.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez Pulido, H. (2013). Control estadístico de la calidad y Seis Sigma (3ª ed.). McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Hay, E., & Cárdenas, M. (2003). Justo a tiempo la técnica japonesa que genera mayor ventaja competitiva. Editorial Norma.',
      link: '',
    },
    {
      referencia:
        'Heijunka: Cómo nivelar la producción con lean manufacturing. (2020).',
      link: '',
    },
    {
      referencia:
        'Pérez Marqués, M. (2016). Control de calidad técnicas y herramientas (1ª ed.,). México. Alfaomega grupo editor.',
      link: '',
    },
    {
      referencia:
        'Que es Kanban: definición, características y ventajas. (2020). ',
      link: '',
    },
    {
      referencia:
        'Rajadell Carreras, M., & Sánchez García, J. (2010). Lean manufacturing (1ª ed.,). Ediciones Diaz Santos.',
      link: '',
    },
    {
      referencia: 'Rodó, P. (s.f.) Distribución normal.',
      link: '',
    },
    {
      referencia:
        'Socconini, L. V. (2019). Lean Manufacturing: paso a paso. Marge Books.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
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
          nombre: '--',
          cargo: 'Experto temático',
          centro: '--',
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
        {
          nombre: ' ',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
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
