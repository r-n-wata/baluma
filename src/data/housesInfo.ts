interface HouseInfo {
  name: string;
  desc: string;
  includes: Record<string, string | string[]>[];
  overview: Record<string, string | number>;
}

export const houseInfo: Record<string, HouseInfo> = {
  LuciasHouse: {
    name: "Lucias House",
    desc: "Observa como el sol y la luna se elevan desde la sala de estar, debajo de la palapa privada, frente a la laguna o desde una reposera en el muelle, disfrutando de la naturaleza que nos rodea. La casa Lucia's se encuentra en la misma propiedad que otras tres casas. Ésta es ideal para parejas. Si eres un grupo en busca de más alojamientos, echa un vistazo a Nieve's, Bego's y Maria's. Contamos con Una excelente ubicación en la costera sur, frente a la isla de los pájaros.",
    includes: [
      {
        title: "El alojamiento",
        items: [
          "Dormitorio grande y tranquilo",
          "aire acondicionado",
          "ventilador de techo",
          "cama king",
          "baño completo",
          "Vistas a la laguna y al jardín. La casa es elegante y los visitantes tienen mucho espacio para descansar y disfrutar de la belleza natural de Bacalar.",
        ],
      },
      {
        title: "Otros aspectos destacables",
        items: [
          "Los muelles, bicicletas, kayaks y paddle boards se comparten con otras 3 casas.",
          "La palapa frente a la casa Lucia's es privada.",
          "Contamos con cámaras de seguridad",
          "Cada casa cuenta con su caja de seguridad",
          "Respetamos a nuestros vecinos y el horario máximo de ruido es a las 10 pm",
          "Wifi en todas las habitaciones",
          "Estamos al lado de un restaurante familiar, enfrente de la isla de los pájaros",
          "Parrilla",
          "Chalecos salvavidas",
          "NO ACEPTAMOS MASCOTAS",
          "Renta mínima 2 noches",
        ],
      },
    ],
    overview: {
      bedrooms: 1,
      bathrooms: 1,
      people: 2,
    },
  },
  NievesHouse: {
    name: "Nieves House",
    desc: "Éste lugar se encuentra rodeado de naturaleza, desde árboles frutales a plantas aromáticas.La casa Nieve's se encuentra en la misma propiedad que otras tres casas. Ésta es ideal para parejas. Si eres un grupo en busca de más alojamientos, echa un vistazo a Lucia's, Bego's y Maria's. Contamos con una excelente ubicación en la costera sur, frente a la isla de los pájaros.",
    includes: [
      {
        title: "El alojamiento",
        items: [
          "Terraza con mesa y mini alberca privada",
          "vista a la laguna y al jardín",
          "Casa con cocina comedor",
          "cuarto con cama king y aire acondicionado",
          "baño completo privado",
          "Nuestras cocinas están equipadas con electrodomésticos de última generación y todo lo que ocupes para cocinar. Nuestra estufa es de inducción y también contamos con refrigerador. ",
        ],
      },
      {
        title: "Otros aspectos destacables",
        items: [
          "Los muelles, bicicletas, kayaks y paddle boards se comparten con otras 3 casas.",
          "La palapa frente a la casa Lucia's es privada.",
          "Contamos con cámaras de seguridad",
          "Cada casa cuenta con su caja de seguridad",
          "Respetamos a nuestros vecinos y el horario máximo de ruido es a las 10 pm",
          "Wifi en todas las habitaciones",
          "Estamos al lado de un restaurante familiar, enfrente de la isla de los pájaros",
          "Parrilla",
          "Chalecos salvavidas",
          "NO ACEPTAMOS MASCOTAS",
          "Renta mínima 2 noches",
        ],
      },
    ],
    overview: {
      bedrooms: 1,
      bathrooms: 1,
      people: 2,
    },
  },
  MariasHouse: {
    name: "Marias House",
    desc: "Éste departamento cuenta con un balcón con vista  a la laguna y al jardín. Relájate con el jacuzzi que se encuentra en la terraza. Los muelles, el jardín, las bicicletas y los kayaks, se comparten con 3 departamentos más: Lucia's, Bego’s y Nieve's. Si vienes con tu grupo de amigos o familiares, no dudes en consultar por todos los espacios. Nuestro jardín te impresionará con plantas locales y aves de todo tipo. Contamos con columpios y hamacas en el agua.Te encantará. ",
    includes: [
      {
        title: "El alojamiento",
        items: [
          "En planta alta: estudio con cocina equipada con electrodomésticos de última generación (microondas, tetera eléctrica, cafetera, café, licuadora). Dos camas queen, aire acondicionado y ventiladores",
          "En planta baja: baño privado con agua caliente",
        ],
      },
      {
        title: "Otros aspectos destacables",
        items: [
          "Los muelles, bicicletas, kayaks y paddle boards se comparten con otras 3 casas.",
          "La palapa frente a la casa Lucia's es privada.",
          "Contamos con cámaras de seguridad",
          "Cada casa cuenta con su caja de seguridad",
          "Respetamos a nuestros vecinos y el horario máximo de ruido es a las 10 pm",
          "Wifi en todas las habitaciones",
          "Estamos al lado de un restaurante familiar, enfrente de la isla de los pájaros",
          "Parrilla",
          "Chalecos salvavidas",
          "NO ACEPTAMOS MASCOTAS",
          "Renta mínima 2 noches",
        ],
      },
    ],
    overview: {
      bedrooms: 1,
      bathrooms: 1,
      people: 2,
    },
  },

  CasaAzul: {
    name: "Casa Azul",
    desc: "Casa azul es una casa de dos pisos de estilo maya-balinés. Se encuentra en una excelente ubicación: a media cuadra del parque central y a una cuadra de la laguna. Cuenta con vistas panorámicas desde la habitación en planta alta. Tiene jacuzzi en la terraza. Casi siempre llega una brisa fresca de la laguna, ya que está muy cerca. Incluso en el calor se siente fresca ya que se encuentra rodeada de naturaleza y está construida con materiales naturales.",
    includes: [
      {
        title: "Habitaciones Jungle",
        items: [
          "cama matrimonial",
          "baño privado exterior (al aire libre)",
          "ventiladores",
          "agua caliente.",
        ],
      },

      { titles: "Habitación Coral", items: ["Una cama Queen", "ventiladores"] },
      {
        title: "Otros aspectos destacables",
        items: [
          "Excelente Wifi",
          "Podrán contar con las mejores recomendaciones de restaurantes locales, gourmet, tours en Bacalar y Mahahual",
          "NO SE ACEPTAN MASCOTAS",
          "NO CONTAMOS CON ESTACIONAMIENTO (se estaciona en la calle de lado derecho)",
          "Si te hospedas con nosotros tendrás",
          "acceso exclusivo al hotel CASA BAKAL (ubicado en costera sur). El acceso es según disponibilidad. El horario es de 11 am a 6pm. Los consumos en restaurantes, terapias, cursos, son CON costo adicional. INCLUYE el uso de kayaks, paddle boards y la alberca. El hotel les proporcionará toallas. No sé admiten mascotas.",
        ],
      },
    ],
    overview: {
      bedrooms: 1,
      bathrooms: 1,
      people: 2,
    },
  },
  CasaAzulCorazon: {
    name: "Casa Azul Corazon",
    desc: "",
    includes: [
      {
        title: "Cuarto 1",
        items: [
          "1 cama queen",
          "1 cama individual",
          "⁠baño completo",
          "⁠vista parcial a la laguna",
        ],
      },
      {
        title: "Cuarto 2",
        items: [
          "2 camas matrimoniales ",
          "baño completo ",
          "clóset",
          "entrada independiente a la terraza",
          "vista parcial a la laguna",
        ],
      },
      {
        title: "Sala",
        items: ["sofá-cama matrimonial"],
      },
      {
        title: "Cocina",
        items: [
          "estufa de gas",
          "refrigerador de 9 pies",
          "cafetera",
          "microondas",
          "ollas y vajilla",
        ],
      },
      {
        title: "Terrazas",
        items: ["Sala exterior", "Comedor ", "hamaca", "columpio"],
      },
      {
        title: "Jardin Principal",
        items: [
          "Bahía con acceso privado a la Laguna",
          "Asador",
          "camastros",
          "área de fogata",
          "2 salas exteriores",
          "césped para jugar con balón",
          "slack-Line",
          "hamaca",
          "kayak doble",
          "tabla de stand up paddle ",
        ],
      },
      {
        title: "Jardin trasero",
        items: [
          "estacionamiento con sombra para 4 carros",
          "biodigestor",
          "composta",
          "huerto",
        ],
      },
    ],
    overview: {
      bedrooms: 2,
      bathrooms: 1,
      people: 7,
    },
  },
  BegosHouse: {
    name: "Begos House",
    desc: "Éste departamento cuenta con un balcón frente a la laguna con vista al jardín y jacuzzi en su terraza. Es perfecto para hospedar una pareja o familia de 4 o 5 personas. Los muelles, el jardín, las bicicletas y los kayaks, se comparten con 3 departamentos más: Lucia's, Maria's y Nieve's. Si vienes con tu grupo de amigos o familiares, no dudes en consultar por todos los espacios. Nuestro jardín te impresionará con plantas locales y aves de todo tipo. Contamos con columpios y hamacas en el agua.Te encantará. ",
    includes: [
      {
        title: "El alojamiento",
        items: [
          "En planta baja: cocina, comedor, cama matrimonial, sofá cama y baño con agua caliente, aire acondicionado y ventiladores",
          "En planta alta: cama king, terraza con vista a la laguna y jacuzzi. Aire acondicionado",
          "Las habitaciones no están separadas por puertas, las divide solo una escalera",
          "Cocina: equipada con electrodomésticos de última generación (estufa a gas, microondas, tetera eléctrica, cafetera, café, licuadora)",
        ],
      },
      {
        title: "Otros aspectos destacables",
        items: [
          "Los muelles, bicicletas, kayaks y paddle boards se comparten con otras 3 casas.",
          "La palapa frente a la casa Lucia's es privada.",
          "Contamos con cámaras de seguridad",
          "Cada casa cuenta con su caja de seguridad",
          "Respetamos a nuestros vecinos y el horario máximo de ruido es a las 10 pm",
          "Wifi en todas las habitaciones",
          "Estamos al lado de un restaurante familiar, enfrente de la isla de los pájaros",
          "Parrilla",
          "Chalecos salvavidas",
          "NO ACEPTAMOS MASCOTAS",
          "Renta mínima 2 noches",
        ],
      },
    ],
    overview: {
      bedrooms: 2,
      bathrooms: 1,
      people: 2,
    },
  },
  ChangosHouse: {
    name: "Changos House",
    desc: "Desconecta de la rutina en nuestra hermosa y acogedora casa y disfruta de la naturaleza en nuestro amplio jardín. La casa, incluído el jardín delantero y trasero, es 100% privada, ideal para parejas o familias pequeñas. Tenemos el agrado de estar a pocos pasos de los mejores lugares y restaurantes de la ciudad y a solo 3 cuadras del acceso público a la laguna. Y si lo que necesitas es trabajar durante tus vacaciones, hay aire acondicionado en toda la casa y tenemos WIFi de alta velocidad.",
    includes: [
      {
        title: "El alojamiento",
        items: [
          "Es una casa amplia con un dormitorio, salón",
          "comedor y cocina completamente equipada",
          "el dormitorio hay una cama tamaño Queen y un baño completo, además de muebles para acomodar tu ropa",
          "la sala de estar hay una zona de descanso conformada por dos camas individuales. Por lo tanto podemos recibir de 2 a 4 personas. El jardín es amplio. Tiene una palapa con una zona de comedor al aire libre y una zona de barbacoa donde se puede asar. Hay un segundo baño en la terraza. ",
        ],
      },
      {
        title: "Otros aspectos destacables",
        items: [
          "Estacionamiento dentro de la propiedad ",
          "Agua caliente",
          "Ventiladores",
          "Wifi de fibra óptica",
          "Caja de seguridad",
          "Cámaras de vigilancia",
        ],
      },
    ],
    overview: {
      bedrooms: 1,
      bathrooms: 1,
      people: 2,
    },
  },
  EstudioTiliche: {
    name: "Estudio Tiliche",
    desc: "Desconecta de tu rutina cuando te quedes bajo las estrellas rodeado de árboles y pájaros cantando. Disfruta tu estadía con vista a la laguna en nuestra terraza exclusiva.",
    includes: [
      {
        title: "Room 1",
        items: [
          "Cama king",
          "Cocina equipada con electrodomésticos de última generación",
          "Baño con agua caliente",
          "Wifi de fibra óptica",
          "2 deck y terraza privadas",
        ],
      },
      {
        title: "Other Spaces",
        items: [
          "Cajón de estacionamiento (sobre la vereda, no techado)",
          "Si te hospedas con nosotros tendrás acceso exclusivo al hotel CASA BAKAL (ubicado en costera sur). El acceso es según disponibilidad. El horario es de 11 am a 6pm. Los consumos en restaurantes, terapias, cursos, son CON costo adicional. INCLUYE el uso de kayaks, paddle boards y la alberca. El hotel les proporcionará toallas. No sé admiten mascotas.",
        ],
      },
    ],
    overview: {
      bedrooms: 1,
      bathrooms: 1,
      people: 2,
    },
  },
};
