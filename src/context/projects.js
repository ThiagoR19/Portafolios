import votosInicio from '../assets/project-previews/votos-inicio.webp'
import votosProyectos from '../assets/project-previews/votos-proyectos.webp'
import votosDetalle from '../assets/project-previews/votos-detalle.webp'
import votosRanking from '../assets/project-previews/votos-ranking.webp'
import agiPanel from '../assets/project-previews/agi-panel.webp'
import agiAgentes from '../assets/project-previews/agi-agentes.webp'
import agiReportes from '../assets/project-previews/agi-reportes.webp'
import coffeeCatalogo from '../assets/project-previews/coffee-catalogo.webp'
import coffeeCafe from '../assets/project-previews/coffee-cafe.webp'
import coffeeLibro from '../assets/project-previews/coffee-libro.webp'
import coffeeCarrito from '../assets/project-previews/coffee-carrito.webp'
import flotaPanel from '../assets/Imgs/gestion2.png'
import flotaVehiculos from '../assets/Imgs/gestion3.png'

export const projects = [
  {
    slug: 'gestora-de-votos',
    title: 'Gestora de votos',
    field: 'Educación',
    description: 'Plataforma web para votar los proyectos de la Expo Técnica del CTP Olga B. de Arko.',
    tags: ['PHP', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    challenge: 'La Regencia de Cultura necesitaba organizar la votación de la Expo Técnica y facilitar que estudiantes, docentes y visitantes participaran desde el celular.',
    solution: 'Creamos un catálogo donde cada persona puede votar hasta tres proyectos con su cuenta. El ranking reúne los resultados y permite consultar los proyectos más votados.',
    features: [
      'Búsqueda de proyectos por categoría.',
      'Gestión de proyectos con permisos para coordinadores y administradores.',
      'Opción de retirar un voto si se hizo por error.',
    ],
    screens: [
      { src: votosInicio, label: 'Inicio', alt: 'Portada de la Expo Técnica con acceso al listado de proyectos' },
      { src: votosProyectos, label: 'Proyectos', alt: 'Listado de proyectos con imágenes y valoraciones' },
      { src: votosDetalle, label: 'Votación', alt: 'Ficha de un proyecto con su descripción y el botón para votar' },
      { src: votosRanking, label: 'Ranking', alt: 'Ranking de proyectos ordenados por posición' },
    ],
  },
  {
    slug: 'agi-propiedades',
    title: 'AGI Propiedades',
    field: 'Gestión inmobiliaria',
    description: 'Aplicación para gestionar propiedades, visitas, contratos y cobros desde un mismo lugar.',
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    challenge: 'Los registros dispersos dificultan el seguimiento de la actividad inmobiliaria, desde la primera visita hasta el cobro de un alquiler.',
    solution: 'Diseñamos un espacio de trabajo independiente para cada inmobiliaria, con accesos diferenciados para administradores, agentes, propietarios e inquilinos.',
    features: [
      'Catálogo público de propiedades y agenda interna de visitas.',
      'Seguimiento de contratos, pagos y comprobantes.',
      'Reportes de mantenimiento y asignación de tareas a agentes.',
    ],
    screens: [
      { src: agiPanel, label: 'Panel', alt: 'Panel de la inmobiliaria con agenda, estadísticas y reportes' },
      { src: agiAgentes, label: 'Agentes', alt: 'Listado de agentes inmobiliarios con filtros y estados' },
      { src: agiReportes, label: 'Reportes', alt: 'Detalle de un reporte de mantenimiento con fotografías' },
    ],
  },
  {
    slug: 'coffee-and-books',
    title: 'Coffee & Books',
    field: 'Comercio electrónico',
    description: 'Tienda online que reúne la venta de cafés y libros en un mismo catálogo.',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Excel en la nube'],
    challenge: 'Un cliente necesitaba unificar dos negocios, una tienda de café y una librería, para que sus clientes pudieran hacer un solo pedido.',
    solution: 'Creamos una tienda con un carrito compartido para ambos rubros y usamos una tabla de Excel en la nube como fuente de datos.',
    features: [
      'Catálogo con filtros para explorar cafés y libros.',
      'Fichas de café con información sobre el grano y la preparación.',
      'Fichas de libros con sinopsis y recomendaciones del mismo autor.',
    ],
    screens: [
      { src: coffeeCatalogo, label: 'Catálogo', alt: 'Catálogo de Coffee & Books con filtros para cafés y libros' },
      { src: coffeeCafe, label: 'Cafés', alt: 'Ficha de un café con fotografías, precio y detalles del producto' },
      { src: coffeeLibro, label: 'Libros', alt: 'Ficha de un libro con sinopsis y recomendaciones del mismo autor' },
      { src: coffeeCarrito, label: 'Carrito', alt: 'Carrito con productos seleccionados y resumen de compra' },
    ],
  },
  {
    slug: 'my-car-management',
    title: 'myCarManagement',
    field: 'Gestión de flotas',
    description: 'Panel de gestión de flota que reúne vehículos, empleados, documentación y mantenimiento.',
    tags: ['React', 'JavaScript', 'Node.js', 'MySQL', 'Drizzle ORM'],
    challenge: 'El equipo a cargo de la flota necesitaba identificar qué documentos faltaban y cuáles estaban por vencer.',
    solution: 'Configuramos los requisitos de documentación según el tipo de vehículo. El panel y el calendario muestran qué revisar a partir de las fechas y los plazos definidos.',
    features: [
      'Historial de renovaciones con adjuntos privados.',
      'Registro de reparaciones, kilometraje y movimientos de repuestos.',
      'Permisos por rol e informes de vencimientos por correo.',
    ],
    screens: [
      { src: flotaPanel, label: 'Panel de control', alt: 'Vista de gestión con próximos vencimientos y documentación pendiente' },
      { src: flotaVehiculos, label: 'Vehículos', alt: 'Vista de gestión con filtros y listado de vehículos' },
    ],
  },
]
