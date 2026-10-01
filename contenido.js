/* =====================================================================
   CONTENIDO DE LA PÁGINA DE ANGÉLICA
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para cambiar textos,
   agregar garabatos, trabajos, historias, autores o fotos.

   Reglas sencillas:
   • Los textos van entre comillas "así".
   • Cada elemento de una lista va entre llaves { ... } y termina en coma.
   • Donde ves  es: "..."  y  en: "..."  va el texto en español y en inglés.
     Si no pones "en", la página muestra el español también en inglés.
   • Las fechas van como "AAAA-MM" (ej. "2025-03") o "AAAA-MM-DD".
   • Las imágenes se suben a su carpeta (sobre/, garabatos/, autores/...)
     y aquí solo escribes el nombre del archivo.
   Guía completa: GUIA.md
   ===================================================================== */

window.CONTENIDO = {

  /* ---------- PORTADA Y SOBRE MÍ ---------- */
  perfil: {
    subtitulo: { es: "Biotecnóloga que investiga, enseña, pinta y lee.",
                 en: "Biotechnologist who researches, teaches, paints and reads." },

    // Frases de la animación de entrada (la placa Petri)
    introFrase1: { es: "Contengo multitudes.", en: "I contain multitudes." },
    introFrase2: { es: "y hago con ellas lo que quiero.", en: "and I do with them as I please." },

    sobreMi: { es: "Ingeniera biotecnóloga con maestría en Biotecnología Aplicada del CIBA-IPN. Trabajo entre el laboratorio, la investigación y la innovación, y fuera de él pinto, leo y construyo TribuLat, una app para encontrar comunidad.",
               en: "Biotechnology engineer with a master's in Applied Biotechnology from CIBA-IPN. I work between the lab, research and innovation, and outside of it I paint, read and build TribuLat, an app to find community." },

    // Los tres datos debajo del texto
    datos: [
      { titulo: "Colombia", detalle: "Bucaramanga, Santander" },
      { titulo: { es: "MSc Biotecnología Aplicada", en: "MSc Applied Biotechnology" }, detalle: "CIBA · IPN, Tlaxcala" },
      { titulo: { es: "+10 años", en: "10+ years" }, detalle: { es: "investigación, laboratorio y educación", en: "research, lab and education" } },
    ],

    // Fotos que rotan (carpeta sobre/). "foco" = qué parte de la foto se ve (horizontal vertical)
    fotos: [
      { archivo: "foto1.jpg", foco: "35% 45%", alt: { es: "Angélica sentada en una banca frente a un mural", en: "Angélica sitting on a bench in front of a mural" } },
      { archivo: "foto2.jpg", foco: "32% 38%", alt: { es: "Angélica en una calle empedrada de Villa de Leyva", en: "Angélica on a cobblestone street in Villa de Leyva" } },
      { archivo: "foto3.jpg", foco: "60% 35%", alt: { es: "Selfie de Angélica sonriendo", en: "Smiling selfie of Angélica" } },
      { archivo: "foto4.jpg", foco: "55% 45%", alt: { es: "Angélica en el laboratorio", en: "Angélica in the lab" } },
      { archivo: "foto5.jpg", foco: "45% 55%", alt: { es: "Angélica en el laboratorio con bata blanca", en: "Angélica in the lab in a white coat" } },
    ],
  },

  /* ---------- MI LIBRERÍA ----------
     La lista completa de libros está en libros.js (sale de Goodreads).
     Aquí solo va lo que se destaca. */
  libreria: {
    intro: { es: "Novela sobre todo, historia de la ciencia, autores colombianos y algún romance científico para los días difíciles.",
             en: "Mostly novels, history of science, Colombian authors and the odd lab romance for tough days." },

    // Libro que estás leyendo (portada en la carpeta covers/)
    leyendoAhora: { titulo: "Just Kids", autor: "Patti Smith", portada: "206318521.jpg",
                    paginas: 262, publicado: 2010, editorial: "Ecco" },

    // Título exacto (como aparece en libros.js) del último libro favorito
    ultimoFavorito: "Demon Copperhead",

    // Cuántos libros tienes en "por leer" en Goodreads
    porLeer: 104,

    // Fila de autores (fotos en la carpeta autores/)
    autores: [
      { nombre: "Ali Hazelwood", foto: "hazelwood.jpg", libros: 7 },
      { nombre: "Alejandro Gaviria", foto: "gaviria.jpg", libros: 4 },
      { nombre: "Héctor Abad Faciolince", foto: "abad.jpg", libros: 3 },
      { nombre: "Andrea Wulf", foto: "wulf.jpg", libros: 3 },
      { nombre: "Ricardo Silva Romero", foto: "silva.jpg", libros: 3 },
      { nombre: "Haruki Murakami", foto: "murakami.jpg", libros: 3 },
    ],

    // Frases de tus reseñas que rotan en el recuadro rosado
    frases: [
      { es: "Escribir sobre sucesos científicos desde una perspectiva humana es muy difícil y él lo hace genial.",
        en: "Writing about scientific events from a human perspective is really hard, and he does it brilliantly.",
        libro: "The Maniac · Benjamín Labatut" },
      { es: "Detrás de los datos que ahora se dan en las clases de ciencias hay una historia increíble de científicos que sacrificaron hasta sus vidas para obtener datos lo más exactos posibles.",
        en: "Behind the data taught in science class today lies an incredible story of scientists who even gave their lives to get the most accurate data possible.",
        libro: "En busca de Venus · Andrea Wulf" },
      { es: "Me parece tremenda proeza que los escritores imaginen y escriban fragmentos de vida.",
        en: "I find it a tremendous feat that writers imagine and write fragments of life.",
        libro: "Find Me · André Aciman" },
      { es: "Nuestro legado a través del arte, de la escritura o del amor permite que los que somos trascienda más allá del olvido de la muerte.",
        en: "Our legacy through art, writing or love lets who we are transcend beyond the oblivion of death.",
        libro: "Manual de tolerancia · Héctor Abad Gómez" },
      { es: "¡No me gustó hasta que me gustó!", en: "I didn't like it until I did!",
        libro: "Eleanor Oliphant Is Completely Fine · Gail Honeyman" },
      { es: "Nos enseñan en el colegio nuestra historia; sin embargo, en ese momento posiblemente no tenemos la capacidad de darle la importancia que se merece.",
        en: "We're taught our history at school; but back then we probably can't give it the importance it deserves.",
        libro: "Historia mínima de Colombia" },
    ],
  },

  /* ---------- MI TRABAJO ----------
     area: "bio" (biorremediación, verde) · "lab" (laboratorio, azul) ·
           "inn" (innovación, violeta) · "edu" (educación, amarillo) · "bt" (biotecnología, coral)
     fin: "AAAA-MM" o "hoy"  ·  Ordénalos del más antiguo al más reciente. */
  trabajo: {
    intro: { es: "Investigación, laboratorio y transferencia tecnológica. Me gusta que la ciencia salga del laboratorio y le sirva a alguien.",
             en: "Research, lab and technology transfer. I like science to leave the lab and be useful to someone." },
    empleos: [
      { inicio: "2013-03", fin: "2013-12", area: "bt",
        cargo: { es: "Auxiliar de investigación", en: "Research assistant" },
        lugar: { es: "Instituto Politécnico Nacional · Tlaxcala, México", en: "Instituto Politécnico Nacional · Tlaxcala, Mexico" },
        descripcion: { es: "Desarrollo de alternativas de bioplásticos con biopelículas combinadas con material sintético, para Mondelez.",
                       en: "Developed bioplastic alternatives combining biofilms with synthetic material, for Mondelez." } },
      { inicio: "2016-07", fin: "2016-10", area: "lab",
        cargo: { es: "Asesora de investigación", en: "Research advisor" },
        lugar: { es: "Vaxbiotek · México", en: "Vaxbiotek · Mexico" },
        descripcion: { es: "Lideré el área de cultivo celular para el desarrollo de vacunas avícolas y participé en proyectos de financiación.",
                       en: "Led the cell-culture area for poultry vaccine development and contributed to funding proposals." } },
      { inicio: "2017-02", fin: "2018-12", area: "edu",
        cargo: { es: "Maestra líder de aula", en: "Lead classroom teacher" },
        lugar: "Fundación Ceiba · UTCH · Quibdó",
        descripcion: { es: "Programas de enseñanza en el Chocó: más de 30 instituciones y cerca de 9.000 estudiantes.",
                       en: "Teaching programs in Chocó: more than 30 schools and about 9,000 students." } },
      { inicio: "2019-04", fin: "2019-07", area: "bio",
        cargo: { es: "Consultora ambiental", en: "Environmental consultant" },
        lugar: "Corponor · Cúcuta",
        descripcion: { es: "Evaluación de infracciones ambientales y espacios de diálogo con la comunidad.",
                       en: "Assessment of environmental violations and community dialogue sessions." } },
      { inicio: "2019-07", fin: "2022-02", area: "lab",
        cargo: { es: "Investigadora adjunta · Profesional 2 → 4", en: "Associate researcher · Professional 2 → 4" },
        lugar: "DTH SAS / Ecopetrol · Bucaramanga",
        descripcion: { es: "Nuevas técnicas microbiológicas y sistema de calidad bajo ISO/IEC 17025:2017.",
                       en: "New microbiological techniques and a quality system under ISO/IEC 17025:2017." } },
      { inicio: "2022-04", fin: "2024-09", area: "lab",
        cargo: { es: "Profesional investigadora", en: "Research professional" },
        lugar: "PSL Proanalisis · Bucaramanga",
        descripcion: { es: "Biopelículas y corrosión microbiológica. Estandaricé la evaluación de estrategias de mitigación con biocidas.",
                       en: "Biofilms and microbiologically influenced corrosion. I standardized how biocide mitigation strategies are evaluated." } },
      { inicio: "2023-07", fin: "2026-07", area: "bio",
        cargo: { es: "Consultora técnica", en: "Technical consultant" },
        lugar: "Servifran Bioingetech SAS",
        descripcion: { es: "Proyecto sobre microorganismos nativos que degradan hidrocarburos, para diseñar consorcios de biorremediación en campo.",
                       en: "Project on native hydrocarbon-degrading microorganisms to design field bioremediation consortia." } },
      { inicio: "2025-03", fin: "hoy", area: "inn",
        cargo: { es: "Experta Tecnoparque", en: "Tecnoparque expert" },
        lugar: "Tecnoparque SENA · Nodo Bucaramanga",
        descripcion: { es: "Acompaño a talentos y emprendedores para convertir ideas en proyectos de I+D+i de base tecnológica.",
                       en: "I help innovators and entrepreneurs turn ideas into technology-based R&D projects." } },
      { inicio: "2025-03", fin: "hoy", area: "lab",
        cargo: { es: "Consultora técnica", en: "Technical consultant" },
        lugar: "Lasertec SAS · Barrancabermeja",
        descripcion: { es: "Consultoría técnica para laboratorio de análisis ambiental.",
                       en: "Technical consulting for an environmental testing lab." } },
    ],
  },

  /* ---------- MIS GARABATOS ----------
     tipo: "mano" · "cuadro" · "digital"
     archivo: nombre de la imagen en la carpeta garabatos/
     Opcionales: año, tamaño, nota (una frase), credito, video (mp4 en garabatos/) */
  garabatos: {
    intro: { es: "Dibujos a mano, cuadros y piezas digitales. Lo que hago cuando salgo del laboratorio.",
             en: "Hand drawings, paintings and digital pieces. What I do when I leave the lab." },
    nota: { es: "Muchos de mis garabatos nacen en Pinterest. Veo algo que me gusta, lo intento replicar y en el camino voy encontrando mi propio trazo.",
            en: "Many of my doodles start on Pinterest. I see something I like, try to replicate it, and along the way I find my own line." },
    obras: [
      { titulo: { es: "Coleta", en: "Ponytail" }, tipo: "cuadro", tecnica: { es: "Pintura sobre lienzo", en: "Painting on canvas" }, archivo: "cuadro-coleta.jpg" },
      { titulo: { es: "Escabiosa", en: "Scabiosa" }, tipo: "mano", tecnica: { es: "Tinta sobre papel", en: "Ink on paper" }, año: "2020", archivo: "escabiosa.jpg" },
      { titulo: { es: "Equinácea", en: "Echinacea" }, tipo: "digital", tecnica: { es: "Ilustración digital · Adobe", en: "Digital illustration · Adobe" }, archivo: "equinacea.jpg" },
      { titulo: "Victoria", tipo: "digital", tecnica: { es: "Ilustración digital · Adobe", en: "Digital illustration · Adobe" }, archivo: "retrato-bebe.jpg" },
      { titulo: { es: "Flor en Erlenmeyer", en: "Flower in an Erlenmeyer" }, tipo: "mano", tecnica: { es: "Tinta y color sobre papel", en: "Ink and color on paper" }, año: "2022", archivo: "flor-en-erlenmeyer.jpg" },
      { titulo: { es: "Mamá", en: "Mom" }, tipo: "digital", tecnica: { es: "Ilustración digital · Adobe", en: "Digital illustration · Adobe" }, archivo: "retrato.jpg" },
      { titulo: { es: "Margaritas", en: "Daisies" }, tipo: "mano", tecnica: { es: "Tinta sobre papel", en: "Ink on paper" }, año: "2020", archivo: "margaritas.jpg" },
      { titulo: { es: "Hojas", en: "Leaves" }, tipo: "cuadro", tecnica: { es: "Pintura sobre lienzo", en: "Painting on canvas" }, archivo: "cuadro-hojas.jpg" },
      { titulo: { es: "Tulipán y blossom", en: "Tulip and blossom" }, tipo: "mano", tecnica: { es: "Tinta sobre papel", en: "Ink on paper" }, año: "2020", archivo: "tulipan-y-blossom.jpg" },
      { titulo: { es: "¿No crees que estás exagerando?", en: "Don't you think you're overreacting?" }, tipo: "digital", tecnica: { es: "Ilustración digital · Adobe", en: "Digital illustration · Adobe" }, archivo: "exagerando.jpg" },
      { titulo: { es: "Girasol", en: "Sunflower" }, tipo: "mano", tecnica: { es: "Tinta y color sobre papel", en: "Ink and color on paper" }, año: "2020", archivo: "girasol.jpg" },
      { titulo: { es: "Balón con flores", en: "Flask with flowers" }, tipo: "mano", tecnica: { es: "Tinta sobre papel", en: "Ink on paper" }, año: "2022", archivo: "balon-con-flores.jpg" },
      { titulo: { es: "Flores al viento", en: "Flowers in the wind" }, tipo: "digital", tecnica: { es: "Ilustración digital · Adobe", en: "Digital illustration · Adobe" }, archivo: "flores-al-viento.jpg" },
      { titulo: { es: "Crisantemo", en: "Chrysanthemum" }, tipo: "mano", tecnica: { es: "Tinta sobre papel", en: "Ink on paper" }, año: "2020", archivo: "crisantemo.jpg" },
      { titulo: { es: "Girasol a lápiz", en: "Pencil sunflower" }, tipo: "mano", tecnica: { es: "Grafito sobre papel", en: "Graphite on paper" }, archivo: "girasol-a-lapiz.jpg" },
      { titulo: { es: "Cute girls poop too (estudio)", en: "Cute girls poop too (study)" }, tipo: "digital", tecnica: "Adobe Fresco",
        credito: { es: "Estudio a partir de una ilustración de Bronte Emmerich", en: "Study based on an illustration by Bronte Emmerich" },
        archivo: "sapo-estudio.jpg", video: "sapo-proceso.mp4",
        nota: { es: "El video muestra el proceso de coloreado, acelerado 4 veces.", en: "The video shows the coloring process, sped up 4x." } },
      { titulo: { es: "Ramo de flores", en: "Bouquet" }, tipo: "mano", tecnica: { es: "Tinta sobre papel", en: "Ink on paper" }, año: "2020", archivo: "ramo-de-flores.jpg" },
      { titulo: { es: "Flores sobre azul", en: "Flowers on blue" }, tipo: "digital", tecnica: { es: "Ilustración digital · Adobe", en: "Digital illustration · Adobe" }, archivo: "flores-sobre-azul.jpg" },
      { titulo: { es: "Flores a lápiz", en: "Pencil flowers" }, tipo: "mano", tecnica: { es: "Grafito sobre papel", en: "Graphite on paper" }, año: "2020", archivo: "flores-a-lapiz.jpg" },
    ],
  },

  /* ---------- TRIBULAT ---------- */
  tribulat: {
    titulo: { es: "TribuLat es una app de conexión social para adultos que buscan comunidad.",
              en: "TribuLat is a social connection app for adults looking for community." },
    texto: { es: "Gente con quien compartir planes, intereses y conversaciones de verdad.",
             en: "People to share plans, interests and real conversations with." },
  },

  /* ---------- MIS HISTORIAS (Medium) ----------
     fecha: "AAAA-MM-DD" · imagen (opcional): archivo en la carpeta medium/ */
  historias: {
    intro: { es: "Lo que escribo sobre el trabajo, las ideas y los libros que me quedan dando vueltas.",
             en: "What I write about work, ideas and the books that stay with me. (Written in Spanish.)" },
    perfil: "https://medium.com/@moreno.angelica4",
    lista: [
      { titulo: "Feedback", fecha: "2025-03-24", minutos: 2,
        resumen: { es: "¿Alguna vez han recibido un feedback que dolió más de lo esperado?", en: "Have you ever received feedback that hurt more than expected?" },
        enlace: "https://medium.com/@moreno.angelica4/feedback-d2699f752f18" },
      { titulo: "Una forma de entender", fecha: "2025-03-24", minutos: 2,
        resumen: { es: "Discrepamos todo el tiempo, y a pesar de que ahora tenemos la posibilidad de comprender a fondo lo que sucede a nuestro alrededor, seguimos enfrascados en discusiones sin sentido crítico.",
                   en: "We disagree all the time, and even though we can now deeply understand what happens around us, we keep getting stuck in arguments with no critical thinking." },
        enlace: "https://medium.com/@moreno.angelica4/una-forma-de-entender-56999a9de53" },
      { titulo: "Una suerte pequeña. Claudia Piñeiro", fecha: "2022-02-12", minutos: 3, imagen: "una-suerte-pequena.jpg",
        resumen: { es: "Querida Naye. Recientemente leí en un blog una historia a través de una carta a una amiga.", en: "Dear Naye. I recently read a story on a blog told through a letter to a friend." },
        enlace: "https://medium.com/@moreno.angelica4/una-suerte-peque%C3%B1a-claudia-pi%C3%B1eiro-6b65680bf53" },
    ],
  },

  /* ---------- CONTACTO ---------- */
  contacto: {
    correo: "moreno.angelica4@gmail.com",
  },
};
