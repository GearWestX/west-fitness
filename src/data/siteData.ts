import coachImage from '@assets/coach-west-1.png';

export const siteData = {
  name: "West Fitness",
  tagline: "Transforma tu cuerpo sin complicarte la vida",
  description: "Resultados reales, planes reales, adaptados a tu estilo de vida.",
  address: "Carretera Nueva Leon, Ciudad El Doral",
  phone: "+505 8851-4897",
  email: "info@westfitness.com",
  website: "https://west-fitness.vercel.app/",
  social: {
    facebook: "https://www.facebook.com/people/West-Fitness/61551686458495/",
    instagram: "https://www.instagram.com/west.fitness.nicaragua/",
  },
};

export const socialLinks = [
  { name: "facebook", icon: "ri-facebook-fill", label: "Facebook" },
  { name: "instagram", icon: "ri-instagram-fill", label: "Instagram" },

];

export const contactInfo = [
  {
    icon: "ri-map-pin-line",
    title: "Dirección",
    content: siteData.address,
    link: null,
  },
  {
    icon: "ri-phone-line",
    title: "Teléfono",
    content: siteData.phone,
    link: `tel:${siteData.phone}`,
  },
  {
    icon: "ri-mail-line",
    title: "Correo Electrónico",
    content: siteData.email,
    link: `mailto:${siteData.email}`,
  },
  {
    icon: "ri-time-line",
    title: "Horarios",
    content: ["Abierto 24/7"],
    link: null,
  },
];

export const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Acerca", href: "/about" },
  { name: "Servicios", href: "/classes" },
  { name: "Precios", href: "/pricing" },
  { name: "Contacto", href: "/contact" },
];

export const features = [
  {
    title: "Entrena 2–3 veces por semana",
    description: "No necesitas entrenar 5 días a la semana, ni seguir dietas extremas o rutinas imposibles.",
    icon: "ri-time-line",
  },
  {
    title: "Dietas flexibles y sostenibles",
    description: "Planes nutricionales adaptados a tu tiempo, presupuesto y nivel.",
    icon: "ri-restaurant-line",
  },
  {
    title: "Planes ajustados a tu tiempo",
    description: "Nuestro servicio de online coaching personalizado está diseñado para personas reales.",
    icon: "ri-settings-3-line",
  },
  {
    title: "Seguimiento constante",
    description: "Encontrarás estrategia, ciencia y acompañamiento real para que logres tus objetivos.",
    icon: "ri-user-star-line",
  },
  {
    title: "Sin rutinas genéricas",
    description: "Aquí no encontrarás rutinas genéricas de influencer ni dietas copiadas y pegadas.",
    icon: "ri-group-line",
  },
  {
    title: "Hábitos sostenibles",
    description: "Construye un físico fuerte, saludable y sostenible sin sacrificar tu vida diaria.",
    icon: "ri-community-line",
  },
];

export const classes = [
  {
    name: "Programa de Entrenamiento Personalizado",
    description: "Planes basados en biomecánica, tensión mecánica y principios científicos de hipertrofia y fuerza",
    detailedDescription: "Nada de rutinas genéricas que te mantienen estancado. Cada programa se adapta a tu nivel, objetivos, tiempo disponible y equipamiento. Basado en ciencia, biomecánica y principios reales de entrenamiento, no en modas pasajeras.",
    duration: "Personalizado",
    difficulty: "Todos los niveles",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    benefits: ["Entrenamiento adaptado", "Mejora la fuerza y masa muscular", "Progreso sostenible", "Sin estancamiento"],
    trainer: "Entrenador Principal",
    whatToExpect: "Sesiones personalizadas, ajustes constantes, enfoque en resultados reales",
  },
  {
    name: "Programa Nutricional",
    description: "Planes nutricionales adaptados a pérdida de grasa, ganancia muscular o re-composición corporal",
    detailedDescription: "Dietas flexibles, realistas y ajustadas a tu presupuesto y disponibilidad. No dietas extremas, sino nutrición sostenible. Salud y longevidad con planes adaptados a tu realidad.",
    duration: "Personalizado",
    difficulty: "Todos los niveles",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop&q=80",
    benefits: ["Pérdida de grasa", "Ganancia muscular", "Salud óptima", "Hábitos sostenibles"],
    trainer: "Entrenador Principal",
    whatToExpect: "Planes flexibles, seguimiento nutricional, ajustes según evolución",
  },
  {
    name: "Asesoramiento en Suplementación",
    description: "Aprende qué suplementos sí funcionan, cuáles son una pérdida de dinero y dosis efectivas",
    detailedDescription: "Todo explicado de forma clara y honesta. Estrategias para maximizar resultados con suplementos. Qué funciona realmente para hipertrofia, fuerza y recuperación.",
    duration: "Consulta",
    difficulty: "Todos los niveles",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    benefits: ["Suplementos efectivos", "Ahorro en gastos innecesarios", "Mejora resultados", "Uso estratégico"],
    trainer: "Entrenador Principal",
    whatToExpect: "Evaluación personalizada, recomendaciones honestas, explicación detallada",
  },
  {
    name: "Revisiones y Seguimiento Constante",
    description: "Monitoreamos tu progreso, ajustamos entrenamientos y nutrición según tu evolución",
    detailedDescription: "No solo te decimos qué hacer. Cada cliente recibe atención individual. No se copian ni pegan rutinas, porque cada cuerpo y estilo de vida es diferente. Seguimiento constante y ajustes personalizados.",
    duration: "Semanal/Mensual",
    difficulty: "Todos los niveles",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
    benefits: ["Progreso monitoreado", "Ajustes constantes", "Atención individual", "Resultados garantizados"],
    trainer: "Entrenador Principal",
    whatToExpect: "Revisiones regulares, comunicación constante, planes adaptados",
  },
];

export const pricingPlans = [
  {
    name: "Básico",
    price: "$40",
    period: "/mes",
    features: [
      "Revisiones cada 2 semanas",
      "Programa nutricional personalizado",
      "Programa de entrenamiento personalizado",
      "Asesoría completa en suplementación",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$60",
    period: "/mes",
    features: [
      "Revisiones semanales",
      "Soporte 24/7 vía WhatsApp",
      "Programa nutricional personalizado",
      "Programa de entrenamiento personalizado",
      "Preparación para fisicoculturismo competitivo",
      "Asesoría completa en suplementación",
    ],
    popular: true,
  },
  // {
  //   name: "Elite",
  //   price: "$99",
  //   period: "/mes",
  //   features: [
  //     "Todo en Premium",
  //     "Entrenamiento personal ilimitado",
  //     "Planes de comidas personalizados",
  //     "Reserva prioritaria de clases",
  //     "Acceso a spa y recuperación",
  //   ],
  //   popular: false,
  // },
];

export const testimonials = [
  {
    name: "Johan Cantero",
    role: "Cliente por 2 años",
    content: "Es sorprendente la rapidez con la que puedes obtener resultados con unos simples ajustes en mi dieta y programa de ejercicios.",
    rating: 5,
  },
  {
    name: "Brayan Granja",
    role: "Cliente por 1 año, desde USA",
    content: "El mejor servicio de coaching en línea. Los planes son personalizados y el seguimiento constante me ha ayudado a lograr mis objetivos sin sacrificar mi vida diaria.",
    rating: 5,
  },
  {
    name: "Camilo Diaz",
    role: "Cliente por 6 meses",
    content: "Me encanta la facilidad en la que el coach hace ajustes segun mi estilo de vida y contra tiempos.",
    rating: 5,
  },
];

export const facilities = [
  {
    title: "Zona de Cardio",
    description: "Cintas de correr, elípticas y bicicletas de última generación",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Entrenamiento de Fuerza",
    description: "Pesas libres y máquinas completas",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Estudio de Clases Grupales",
    description: "Estudio espacioso para yoga, HIIT y más",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Vestuarios",
    description: "Instalaciones limpias y modernas con duchas",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Entrenamiento Funcional",
    description: "TRX, cuerdas de batalla y equipo funcional",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Zona de Recuperación",
    description: "Área de estiramiento y rodillos de espuma",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
  },
];

export const faqs = [
  {
    question: "¿Necesito experiencia previa para comenzar?",
    answer: "No. Nuestros programas se adaptan a principiantes, intermedios, avanzados, atletas y fisicoculturistas.",
  },
  {
    question: "¿Tengo poco tiempo para entrenar o hacer dieta?",
    answer: "Sí. Con 30 a 45 minutos, entrenando 2 a 3 veces por semana, y una dieta ajustada a tu tiempo y presupuesto, podemos lograr grandes resultados.",
  },
  {
    question: "¿Debo ser fitness, atleta o fisicoculturista?",
    answer: "No. Entrenamos desde atletas hasta personas que solo buscan mejorar su salud y hábitos. El plan se adapta a tus objetivos, no al revés.",
  },
  
];

export const classSchedule = [
  { time: "6:00 AM", class: "HIIT Personalizado", trainer: "Entrenador Principal" },
  { time: "7:00 AM", class: "Yoga y Flexibilidad", trainer: "Entrenador Principal" },
  { time: "8:00 AM", class: "Entrenamiento de Fuerza", trainer: "Entrenador Principal" },
  { time: "9:00 AM", class: "Cardio Blast", trainer: "Entrenador Principal" },
  { time: "12:00 PM", class: "Pilates", trainer: "Entrenador Principal" },
  { time: "5:00 PM", class: "HIIT Personalizado", trainer: "Entrenador Principal" },
  { time: "6:00 PM", class: "CrossFit", trainer: "Entrenador Principal" },
  { time: "7:00 PM", class: "Yoga y Flexibilidad", trainer: "Entrenador Principal" },
];

export const successStories = [
  {
    name: "Jessica Martínez",
    age: 32,
    duration: "8 meses",
    result: "Perdió 20 kg",
    story: "Estaba escéptica al principio, pero West Fitness cambió mi vida. Los entrenadores solidarios y la comunidad me mantuvieron motivada. ¡Nunca me he sentido mejor!",
    beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "David Thompson",
    age: 28,
    duration: "6 meses",
    result: "Ganó 9 kg de músculo",
    story: "El programa de entrenamiento de fuerza y la guía nutricional me ayudaron a construir el físico que siempre quise. Los entrenadores son verdaderos profesionales.",
    beforeImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "Lisa Anderson",
    age: 35,
    duration: "1 año",
    result: "Completó su primer maratón",
    story: "De nunca correr a completar un maratón - los programas de cardio y clases grupales de West Fitness me dieron la resistencia y confianza que necesitaba.",
    beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
  },
];

export const statistics = [
  { number: "500+", label: "Miembros Activos", icon: "ri-user-line" },
  { number: "50+", label: "Entrenadores Expertos", icon: "ri-user-star-line" },
  { number: "10k+", label: "Clases Completadas", icon: "ri-calendar-check-line" },
  { number: "5k+", label: "Kilos Perdidos", icon: "ri-line-chart-line" },
  { number: "98%", label: "Tasa de Satisfacción", icon: "ri-heart-line" },
  { number: "15+", label: "Años de Experiencia", icon: "ri-award-line" },
];

export const fullSchedule = {
  lunes: [
    { time: "6:00 AM", class: "HIIT Personalizado", trainer: "Entrenador Principal" },
    { time: "7:00 AM", class: "Yoga y Flexibilidad", trainer: "Entrenador Principal" },
    { time: "8:00 AM", class: "Entrenamiento de Fuerza", trainer: "Entrenador Principal" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Entrenador Principal" },
    { time: "12:00 PM", class: "Pilates", trainer: "Entrenador Principal" },
    { time: "5:00 PM", class: "HIIT Personalizado", trainer: "Entrenador Principal" },
    { time: "6:00 PM", class: "CrossFit", trainer: "Entrenador Principal" },
    { time: "7:00 PM", class: "Yoga y Flexibilidad", trainer: "Entrenador Principal" },
  ],
  martes: [
    { time: "6:00 AM", class: "Cardio Blast", trainer: "Entrenador Principal" },
    { time: "7:00 AM", class: "Entrenamiento de Fuerza", trainer: "Entrenador Principal" },
    { time: "8:00 AM", class: "Pilates", trainer: "Entrenador Principal" },
    { time: "9:00 AM", class: "HIIT Personalizado", trainer: "Entrenador Principal" },
    { time: "12:00 PM", class: "Yoga y Flexibilidad", trainer: "Entrenador Principal" },
    { time: "5:00 PM", class: "CrossFit", trainer: "Entrenador Principal" },
    { time: "6:00 PM", class: "Cardio Blast", trainer: "Entrenador Principal" },
    { time: "7:00 PM", class: "Entrenamiento de Fuerza", trainer: "Entrenador Principal" },
  ],
  miércoles: [
    { time: "6:00 AM", class: "HIIT Personalizado", trainer: "Entrenador Principal" },
    { time: "7:00 AM", class: "Yoga y Flexibilidad", trainer: "Entrenador Principal" },
    { time: "8:00 AM", class: "Entrenamiento de Fuerza", trainer: "Entrenador Principal" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Entrenador Principal" },
    { time: "12:00 PM", class: "Pilates", trainer: "Entrenador Principal" },
    { time: "5:00 PM", class: "HIIT Personalizado", trainer: "Entrenador Principal" },
    { time: "6:00 PM", class: "CrossFit", trainer: "Entrenador Principal" },
    { time: "7:00 PM", class: "Yoga y Flexibilidad", trainer: "Entrenador Principal" },
  ],
  jueves: [
    { time: "6:00 AM", class: "Cardio Blast", trainer: "Entrenador Principal" },
    { time: "7:00 AM", class: "Entrenamiento de Fuerza", trainer: "Entrenador Principal" },
    { time: "8:00 AM", class: "Pilates", trainer: "Entrenador Principal" },
    { time: "9:00 AM", class: "HIIT Personalizado", trainer: "Entrenador Principal" },
    { time: "12:00 PM", class: "Yoga y Flexibilidad", trainer: "Entrenador Principal" },
    { time: "5:00 PM", class: "CrossFit", trainer: "Entrenador Principal" },
    { time: "6:00 PM", class: "Cardio Blast", trainer: "Entrenador Principal" },
    { time: "7:00 PM", class: "Entrenamiento de Fuerza", trainer: "Entrenador Principal" },
  ],
  viernes: [
    { time: "6:00 AM", class: "HIIT Personalizado", trainer: "Entrenador Principal" },
    { time: "7:00 AM", class: "Yoga y Flexibilidad", trainer: "Entrenador Principal" },
    { time: "8:00 AM", class: "Entrenamiento de Fuerza", trainer: "Entrenador Principal" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Entrenador Principal" },
    { time: "12:00 PM", class: "Pilates", trainer: "Entrenador Principal" },
    { time: "5:00 PM", class: "HIIT Personalizado", trainer: "Entrenador Principal" },
    { time: "6:00 PM", class: "CrossFit", trainer: "Entrenador Principal" },
    { time: "7:00 PM", class: "Yoga y Flexibilidad", trainer: "Entrenador Principal" },
  ],
  sábado: [
    { time: "8:00 AM", class: "Yoga y Flexibilidad", trainer: "Entrenador Principal" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Entrenador Principal" },
    { time: "10:00 AM", class: "Entrenamiento de Fuerza", trainer: "Entrenador Principal" },
    { time: "11:00 AM", class: "Pilates", trainer: "Entrenador Principal" },
  ],
  domingo: [
    { time: "9:00 AM", class: "Yoga y Flexibilidad", trainer: "Entrenador Principal" },
    { time: "10:00 AM", class: "Pilates", trainer: "Entrenador Principal" },
    { time: "11:00 AM", class: "Cardio Blast", trainer: "Entrenador Principal" },
  ],
};

export const trainers = [
  {
    name: "Shawlorne West",
    role: "Entrenador Principal",
    specialization: "Entrenamiento Personalizado & Nutrición",
    experience: "10+ años",
    bio: "Soy un entrenador con más de 10 años de experiencia, con historial como campeón nacional y regional de fisicoculturismo. Mi enfoque se basa en ciencia, biomecánica y principios reales de entrenamiento, no en modas pasajeras. Entiendo que cada persona tiene una rutina diferente y adapto todo a tu realidad.",
    image: coachImage,
    certifications: ["Campeón Nacional", "Experto en Biomecánica", "Especialista en Nutrición"],
  },
];

export const history = [
  {
    year: "2009",
    title: "Fundado",
    description: "West Fitness fue fundado con la visión de crear una comunidad de fitness inclusiva donde todos se sientan bienvenidos.",
  },
  {
    year: "2012",
    title: "Primera Expansión",
    description: "Expandimos las instalaciones para incluir un estudio dedicado a clases grupales y agregamos 20+ nuevas piezas de equipo.",
  },
  {
    year: "2015",
    title: "Acceso 24/7",
    description: "Introdujimos acceso 24/7 para miembros Premium y Elite, haciendo el fitness accesible las 24 horas del día.",
  },
  {
    year: "2018",
    title: "Hito de 500 Miembros",
    description: "Alcanzamos 500 miembros activos y expandimos nuestro equipo de entrenadores a 20 profesionales certificados.",
  },
  {
    year: "2020",
    title: "Integración Digital",
    description: "Lanzamos reserva de clases en línea y opciones de entrenamiento virtual para adaptarnos a las necesidades cambiantes.",
  },
  {
    year: "2024",
    title: "Ganador de Premio",
    description: "Reconocido como 'Mejor Gimnasio 2024' por la comunidad local de fitness, celebrando 15 años de excelencia.",
  },
];

export const paymentOptions = {
  methods: ["Tarjetas de Crédito/Débito", "Transferencia Bancaria", "PayPal", "Apple Pay", "Google Pay"],
  plans: [
    { type: "Mensual", description: "Paga mes a mes sin compromiso a largo plazo" },
    { type: "Anual", description: "Ahorra 15% con pago anual - ¡la mejor oferta!" },
    { type: "Plan Familiar", description: "Tarifas especiales para familias - contáctanos para detalles" },
  ],
  guarantee: "Garantía de devolución de 7 días en todas las membresías",
  trial: "Prueba gratuita de 7 días disponible para nuevos miembros",
};

