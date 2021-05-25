export default {
  global: {
    componenteFormativo: 'Trazo y corte de falda',
    descripcionCurso:
      'Este componente formativo comprende los elementos y saberes de orden técnico para el desarrollo del trazo y corte de falda básica, organizados cronológicamente para cumplir con el objetivo de la elaboración de una falda, es así como se hace desde la planeación hasta el corte, pasando por todas las recomendaciones de  seguridad industrial necesarias para las empresas y los talleres.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normas de seguridad industrial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Área de corte',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Textiles: clasificación y propiedades',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fibras textiles',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Fibras químicas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Cuadro resumen de la clasificación de las fibras',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Hilos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Tejidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tejido plano',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tejido de punto',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Tintorería y acabados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Trazo y extendido de tela: tipos, características y variables',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Trazo y extendido de la tela',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Extendido de la tela',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Herramientas para trazo y corte: tipos y usos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Trazo y extendida falda básica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Corte: proceso corte de falda básica',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Astrid Lili Puerta',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario de Buga',
        regional: 'Regional valle',
      },
      {
        nombre: 'Javier Enrique Santana',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Michael Andrés Cortés Caro',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Mauricio Jiménez Fajardo',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Manuel Alejandro Garzón Cárdenas',
        cargo: 'Experto temático',
        centro: 'Deutsche Gesellschaft für',
        regional: 'Internationale Zusammenarbeit (GIZ)',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Rodríguez',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: ['Jorge Armando Villamizar Moreno'],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación y vinculación en plataforma LMS'],
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Digipalma Audiovisual Sonido Iluminación y Video. (2009). Documental sobre: el Lino 1 de 3. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=u0tsXiEvH-Q&feature=youtu.be',
    },
    {
      referencia:
        'Educacciontv. (2012). Elaboración de la seda. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=GGKym9V55eU&feature=youtu.be',
    },
    {
      referencia:
        'Gentlemans Gazette. (2020). Historia detallada del algodón – Cómo identificar telas, camisas y suéteres de algodón de calidad. [Video]. YouTube.',
      link: 'https://youtu.be/LKcVxOVs8Oo',
    },
    {
      referencia:
        '10K Tops. (2019). Así es el proceso de la lana - producción de lana. [Video]. YouTube.',
      link: 'https://youtu.be/Iy0pqnR00iw',
    },
    {
      referencia:
        'Molina, V., R. (2020). Hilados y textiles. Quantia Solutions.',
      link:
        'https://quantiasolutions.com/wp-content/uploads/Quantia-Solutions-Formaci%C3%B3n-Hilados-y-Textiles.pdf',
    },
    {
      referencia:
        'Pesok, M, J., C. (2014). Fibras textiles. Introducción a la tecnología textil. Cursos de tecnología textil realizados en la Facultad de Ingeniería. (p. 9). Universidad de la República. Montevideo, Uruguay.',
      link:
        'https://login.bdigital.sena.edu.co/login?url=https://elibro.net/es/ereader/senavirtual/79774?page=92',
    },
    {
      referencia:
        'Testex. (2018). ¿Qué es la fibra de algodón? Propiedades de la fibra de algodón. [Web log post].  Blog.',
      link:
        'https://www.testextextile.com/es/%C2%BFCu%C3%A1les-son-las-propiedades-de-la-fibra-de-algod%C3%B3n-de-la-fibra-de-algod%C3%B3n%3F/ ',
    },
  ],
  glosario: [
    {
      termino: 'Aplomar',
      significado:
        'Ubicar línea de aplome en el molde y en el trazo de acuerdo con la forma del diseño o producto, teniendo como punto de referencia el orillo de la tela.',
    },
    {
      termino: 'Calidad',
      significado:
        'Es el grado en que un producto cumple con el propósito para el cual ha sido diseñado, satisfaciendo las necesidades del cliente.',
    },
    {
      termino: 'Extender',
      significado:
        'Operación de superponer las capas de tela en una mesa de corte.',
    },
    {
      termino: 'Pin',
      significado:
        'Elemento cortopunzante utilizado al lado y lado de la mesa de corte para fijar y cazar la posición de las telas con diseños especiales.',
    },
    {
      termino: 'Trazo',
      significado:
        'Dibujo de cada una de las piezas que conforman una referencia según una orden de corte. ',
    },
  ],
  complementario: [
    {
      texto:
        '10K Tops. (2019). Así es el proceso de la lana - producción de lana. [Video]. YouTube.”',
      tipo: 'Video',
      link: 'https://youtu.be/Iy0pqnR00iw',
    },
    {
      texto:
        'Cluster textil / Confección, diseño y moda de Medellín. (2017). Corte de prendas de vestir. Manual de uso. Cámara de Comercio de Medellín para Antioquia. Alcaldía de Medellín. Cuenta con vos.',
      tipo: 'PDF',
      descarga: '#',
    },
    {
      texto:
        'Digipalma Audiovisual Sonido Iluminación y Video. (2009). Documental sobre: el Lino 1 de 3. [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=u0tsXiEvH-Q&feature=youtu.be',
    },
    {
      texto: 'Educacciontv. (2012). Elaboración de la seda. [Video]. YouTube.',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=GGKym9V55eU&feature=youtu.be',
    },
    {
      texto:
        'Gentlemans Gazette. (2020). Historia detallada del algodón – Cómo identificar telas, camisas y suéteres de algodón de calidad.',
      tipo: 'Video',
      link: 'https://youtu.be/LKcVxOVs8Oo',
    },
    {
      texto:
        'Servicio Nacional de Aprendizaje. (1990). Confecciones industriales. Procesos básicos en la sala de corte. Subdirección Técnico-pedagógica. División de Industria.',
      tipo: 'PDF',
      link: '#',
    },
    {
      texto:
        'Texdelta. (2020). Características de las fibras sintéticas para la fabricación de no tejidos. [Web log post]. El blog de Texdelta.',
      tipo: 'PDF',
      link:
        'https://texdelta.com/blog/caracteristicas-de-las-fibras-sinteticas-para-la-fabricacion-de-tejidos/',
    },
  ],
}
