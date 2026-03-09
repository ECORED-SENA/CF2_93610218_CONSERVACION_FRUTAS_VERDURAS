export default {
  global: {
    Name: 'Manipulación y conservación de alimentos',
    Description:
      'La manipulación de alimentos es esencial para garantizar su inocuidad y evitar enfermedades. Involucra prácticas higiénicas, control de contaminación cruzada, conservación en frío y calor, reducción de agua y control del oxígeno. Los manipuladores deben cumplir normativas y aplicar técnicas como refrigeración, congelación, desinfección y empaques adecuados para preservar la calidad y seguridad de frutas y verduras.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: '¿Qué es la manipulación de alimentos?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué es un manipulador de alimentos?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principios generales e higiene de los alimentos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Requisitos del personal manipulador de alimentos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Personal manipulador de alimentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Requisitos de salud del personal manipulador',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Prácticas higiénicas y medidas de protección',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Correcta manipulación de los alimentos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Prevención de la contaminación cruzada',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Medidas para la prevención de la contaminación cruzada',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Conservación de productos frescos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Productos frescos prelavados',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Conservación de frutas y verduras en frío',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Métodos de conservación en frío',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Escaldado (blanqueado)',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Empaque y consideraciones generales en la congelación de frutas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Consejos para la refrigeración y congelación',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Pulpas de frutas',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Conservación de frutas y verduras por calor y reducción de agua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Conservación de frutas y verduras por calor',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Conservación de frutas y verduras por reducción de agua y control de oxígeno',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Control de oxígeno y regulación del pH en la conservación de alimentos',
            hash: 't_5_3',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/93610218 _ CF2_DU.pdf',
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
  complementario: [
    {
      tema: '¿Qué es la manipulación de alimentos?',
      referencia:
        'Ministerio de Salud y Protección Social. (2013, 22 de julio). Resolución 2674 de 2013: Por la cual se reglamenta el artículo 126 del Decreto-ley 019 de 2012 y se dictan otras disposiciones. Diario Oficial de la República de Colombia.',
      tipo: 'Normativa',
      link:
        'https://www1.funcionpublica.gov.co/documents/418537/604808/1962.pdf/abe38fb4-e74d-4dcc-b812-52776a9787f6 ',
    },
    {
      tema: 'Métodos de conservación en frío',
      referencia:
        'Agencia Española de Seguridad Alimentaria y Nutrición. (2021). ¿Congelas y descongelas los alimentos de forma segura en casa?',
      tipo: 'Documento ',
      link:
        'https://www.aesan.gob.es/AECOSAN/docs/documentos/publicaciones/seguridad_alimentaria/congelar_descongelar.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Congelación',
      significado: 'conservación prolongada mediante temperaturas bajo cero.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'paso de microorganismos de un alimento a otro por contacto.',
    },
    {
      termino: 'Contaminación',
      significado:
        'presencia de agentes físicos, químicos o biológicos en el alimento.',
    },
    {
      termino: 'Desinfección',
      significado:
        'eliminación de microorganismos patógenos usando productos químicos o calor.',
    },
    {
      termino: 'Esterilización',
      significado:
        'proceso que destruye todos los microorganismos en un alimento.',
    },
    {
      termino: 'Higiene',
      significado:
        'conjunto de prácticas para mantener la limpieza y evitar enfermedades.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'condición del alimento libre de contaminantes que puedan causar daño.',
    },
    {
      termino: 'Manipulación',
      significado:
        'proceso de tratar alimentos desde su recepción hasta su consumo.',
    },
    {
      termino: 'Pasteurización',
      significado:
        'método de conservación por calor que elimina microorganismos.',
    },
    {
      termino: 'Refrigeración',
      significado: 'conservación por frío a temperaturas cercanas a 0 °C.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, J. (2012). Métodos de conservación de alimentos. Red Tercer Milenio.',
      link: '',
    },
    {
      referencia:
        'Ibáñez, Z. (2011). Conservación de frutas y hortalizas. Instituto Nacional de Tecnología Agropecuaria. ',
      link: '',
    },
    {
      referencia:
        'Colombia. Congreso de la República. (2013). Decreto 2674 de 2013, por el cual se reglamenta el artículo 126 del Decreto Ley 019 de 2012 y se dictan otras disposiciones (Diario Oficial No. 48.862, 25 de julio de 2013).',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Fredy Fabian Ortiz Segura',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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
