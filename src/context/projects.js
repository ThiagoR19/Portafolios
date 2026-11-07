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
import flotaInicio from '../assets/Imgs/gestion1.png'
import inmobiliaria2 from '../assets/Imgs/inmobiliaria2.svg'
import coffee5 from '../assets/Imgs/coffee5.svg'
import coffee6 from '../assets/Imgs/coffee6.svg'
import coffee7 from '../assets/Imgs/coffee7.svg'
import coffee8 from '../assets/Imgs/coffee8.svg'
import votos3 from '../assets/Imgs/votos3.svg'
import votos4 from '../assets/Imgs/votos4.svg'
import votos7 from '../assets/Imgs/votos7.svg'
import votos8 from '../assets/Imgs/votos8.svg'
import votos9 from '../assets/Imgs/votos9.svg'
import votos10 from '../assets/Imgs/votos10.svg'
import celuStock from '../assets/Imgs/CeluStock.png'
import celuStockInventario from '../assets/Imgs/CeluStock2.png'
import celuStockEntradas from '../assets/Imgs/CeluStock3.png'
import celuStockSalidas from '../assets/Imgs/CeluStock4.png'
import celuStockFacturacion from '../assets/Imgs/CeluStock5.png'
import celuStockProveedores from '../assets/Imgs/CeluStock6.png'
import celuStockPanelClaro from '../assets/Imgs/CeluStock7.png'

const additionalScreens = (screens) => screens.map(({ src, label, alt }) => ({ src, label, alt }))

export const projects = [
  {
    slug: 'celustock',
    title: 'CeluStock',
    url: 'https://celustock.com.ar/',
    realWorldUse: 'En uso actualmente para resolver necesidades reales de control de inventario y seguimiento de reparaciones.',
    field: 'Inventario y servicio técnico',
    description: 'Aplicación web multi-organización para administrar repuestos, compras, ventas, clientes y reparaciones desde un mismo sistema.',
    tags: ['React 19', 'TypeScript', 'Vite', 'TanStack Router', 'TanStack Query', 'Hono', 'Bun', 'Turborepo', 'PostgreSQL', 'Drizzle ORM', 'Better Auth', 'Zod'],
    challenge: 'Los comercios de repuestos y talleres necesitan mantener el stock actualizado mientras registran compras, ventas y reparaciones. También requieren información separada por organización, acceso según las responsabilidades de cada persona e historial confiable de los movimientos.',
    solution: 'CeluStock reúne el catálogo de repuestos, proveedores, clientes y movimientos comerciales con la recepción y el seguimiento de equipos en reparación. Su monorepo comparte modelos y validaciones entre el frontend React y la API Hono. Las entradas, ventas y consumos actualizan existencias con controles de consistencia; las facturas conservan los datos del movimiento y cada organización opera con sus propios registros y permisos.',
    features: [
      'Inventario con códigos, disponibilidad y mínimos de reposición; registro de compras, ventas, anulaciones y reportes de movimientos.',
      'Importación desde Excel de inventario, proveedores, entradas y salidas, respetando la organización y la consistencia de los movimientos.',
      'Gestión de clientes y órdenes de servicio: recepción de equipos, diagnóstico, presupuestos, autorización, reparación, pagos parciales o totales y entrega.',
      'Consumo y devolución de repuestos vinculados a las reparaciones, con actualización del stock independiente del cambio de estado de la orden.',
      'Organizaciones con autenticación y permisos para administración, recepción, técnicos y caja; la API verifica el acceso en cada operación protegida.',
      'Asistente de voz que prepara borradores de entradas o salidas para que la persona los revise y confirme antes de guardarlos.',
    ],
    team: false,
    screens: [
      { src: celuStock, label: 'Panel de control', alt: 'Panel principal de CeluStock con resumen de inventario, alertas de stock crítico, movimientos recientes y accesos a compras y ventas' },
      { src: celuStockPanelClaro, label: 'Panel de control · modo claro', alt: 'Panel principal de CeluStock en modo claro, con resumen de inventario, alertas de stock crítico y movimientos recientes' },
      { src: celuStockInventario, label: 'Inventario', alt: 'Listado de repuestos de CeluStock con código, nombre, marca, tipo y niveles de stock' },
      { src: celuStockEntradas, label: 'Entradas', alt: 'Registro de compras y entradas de repuestos con proveedor, cantidades y costos' },
      { src: celuStockSalidas, label: 'Salidas', alt: 'Registro de ventas y salidas de repuestos con cliente, tipo y total cobrado' },
      { src: celuStockFacturacion, label: 'Facturación', alt: 'Historial de facturación de CeluStock con períodos, movimientos, ítems y montos' },
      { src: celuStockProveedores, label: 'Proveedores', alt: 'Listado de proveedores de CeluStock con datos de contacto' },
    ],
  },
  {
    slug: 'agi-propiedades',
    title: 'AGI Propiedades',
    field: 'Gestión inmobiliaria',
    description: 'Plataforma web multi-inmobiliaria que centraliza propiedades, personas, visitas, contratos, pagos, documentos y mantenimiento, con información separada y accesos según el rol.',
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    challenge: 'La información repartida entre distintos registros dificulta el seguimiento de las operaciones. La plataforma debía reunir la gestión comercial y administrativa de varias inmobiliarias, manteniendo separados sus datos y respetando los permisos de cada persona.',
    solution: 'Creamos entornos independientes para cada inmobiliaria, con accesos para administradores, agentes, propietarios e inquilinos, además de herramientas para que un superadministrador gestione las organizaciones. El catálogo público permite consultar propiedades y contactar a la agencia por WhatsApp; las visitas y operaciones se administran dentro de la plataforma.',
    features: [
      'Gestión centralizada de propiedades, personas, visitas, contratos, pagos, documentos y solicitudes de mantenimiento.',
      'Panel de estadísticas, notificaciones, asignación y seguimiento de tareas, y registro de acciones para auditoría.',
      'Chat privado para personas autenticadas, accesos privados para propietarios e inquilinos y gestión de inmobiliarias por el superadministrador.',
    ],
    screens: [
      { src: agiPanel, label: 'Panel', alt: 'Panel de la inmobiliaria con agenda, estadísticas y reportes' },
      { src: agiAgentes, label: 'Agentes', alt: 'Listado de agentes inmobiliarios con filtros y estados' },
      { src: agiReportes, label: 'Reportes', alt: 'Detalle de un reporte de mantenimiento con fotografías' },
      ...additionalScreens([
        { src: inmobiliaria2, label: 'Mi Inmobiliaria', alt: 'Panel Mi Inmobiliaria de AGI Propiedades' },
      ]),
    ],
  },
  {
    slug: 'my-car-management',
    title: 'myCarManagement',
    realWorldUse: 'En uso actualmente para gestionar vehículos, documentación y mantenimiento de una flota real.',
    field: 'Gestión de flotas',
    description: 'Aplicación web para gestionar vehículos, empleados, documentación y mantenimiento de flota, con alertas de vencimientos y control de repuestos.',
    tags: ['React', 'JavaScript', 'Node.js', 'MySQL', 'Drizzle ORM'],
    challenge: 'La gestión de vehículos, documentación y mantenimiento requiere reunir información dispersa y detectar a tiempo faltantes, vencimientos y necesidades de reparación.',
    solution: 'Desarrollamos un sistema que organiza vehículos y empleados, permite configurar documentos requeridos según el tipo de vehículo y muestra los estados en un panel y un calendario. También registra reparaciones y movimientos de repuestos, envía informes por correo y ofrece permisos diferenciados para administradores y empleados.',
    features: [
      'Documentación por vehículo con adjuntos privados, historial de renovaciones y alertas de vencimiento.',
      'Registro de reparaciones, kilometraje y repuestos, con validación de existencias e historial de movimientos.',
      'Usuarios y auditoría con permisos diferenciados, importación de vehículos por CSV y exportación de listados e informes por correo.',
    ],
    screens: [
      { src: flotaPanel, label: 'Panel de control', alt: 'Vista de gestión con próximos vencimientos y documentación pendiente' },
      { src: flotaVehiculos, label: 'Vehículos', alt: 'Vista de gestión con filtros y listado de vehículos' },
      ...additionalScreens([
        { src: flotaInicio, label: 'Login', alt: 'Inicio de sesión de myCarManagement' },
      ]),
    ],
  },
  {
    slug: 'gestora-de-votos',
    title: 'Gestora de votos',
    realWorldUse: 'En uso actualmente en una institución educativa para organizar la votación de proyectos de la Expo Técnica.',
    field: 'Educación',
    description: 'Aplicación web de votación para que estudiantes, docentes y visitantes evalúen los proyectos de la Semana de la Educación Técnica del CTP Olga B. de Arko. Cada usuario puede votar hasta tres proyectos y anular sus votos.',
    tags: ['PHP', 'SQL', 'JavaScript', 'HTML', 'CSS'],
    challenge: 'La Regencia de Cultura encargó este proyecto para Prácticas Profesionalizantes: organizar la votación de la Expo Técnica y facilitar la participación de estudiantes, docentes y visitantes de forma accesible, confiable y transparente.',
    solution: 'Desarrollamos una plataforma con la identidad del CTP Olga B. de Arko, donde las personas ingresan con una cuenta y eligen hasta tres proyectos. Pueden anular sus votos, mientras que coordinadores y administradores gestionan los proyectos y consultan el ranking.',
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
      ...additionalScreens([
        { src: votos3, label: 'Coordinadores', alt: 'Panel de coordinadores de la Gestora de votos' },
        { src: votos4, label: 'Mi perfil', alt: 'Perfil de usuario de la Gestora de votos' },
        { src: votos7, label: 'Resultados', alt: 'Resultados de la votación' },
        { src: votos8, label: 'Login', alt: 'Inicio de sesión de la Gestora de votos' },
        { src: votos9, label: 'Sign in', alt: 'Registro de usuario de la Gestora de votos' },
        { src: votos10, label: 'Estadísticas', alt: 'Estadísticas de la Gestora de votos' },
      ]),
    ],
  },
  {
    slug: 'coffee-and-books',
    title: 'Coffee & Books',
    url: 'https://coffee-and-books.onrender.com/',
    field: 'Comercio electrónico',
    description: 'Tienda web de una sola página para explorar libros y cafés importados en una experiencia visual de marca, con catálogo dinámico, fichas de producto, carrito y armado del pedido para WhatsApp.',
    tags: ['React 19', 'JavaScript', 'Vite', 'Wouter', 'Google Sheets API', 'localStorage'],
    challenge: 'Reunir libros y cafés en un solo catálogo y ofrecer un recorrido de compra sencillo, con datos mantenidos en Google Sheets. El alcance del proyecto llega hasta preparar el pedido y abrir WhatsApp: la web no procesa pagos ni registra o confirma órdenes en un servidor.',
    solution: 'Desarrollamos una SPA con búsqueda, filtros y fichas de producto para ambos rubros. El catálogo se carga desde nueve pestañas de Google Sheets; el carrito compartido y las estadísticas resumidas se guardan localmente en el navegador. Al finalizar, la tienda prepara un mensaje con los artículos, cantidades y total para continuar la atención por WhatsApp.',
    features: [
      'Catálogo de libros y cafés con búsqueda, filtros, orden y paginación adaptable.',
      'Fichas con datos del café o detalles del libro, y productos relacionados cuando están disponibles.',
      'Carrito compartido que conserva la selección en el navegador y limita cantidades según el stock informado por el catálogo.',
      'Resumen del pedido que abre WhatsApp con un mensaje preparado; el envío, el pago y la confirmación se coordinan fuera de la web.',
    ],
    screens: [
      { src: coffeeCatalogo, label: 'Catálogo', alt: 'Catálogo de Coffee & Books con filtros para cafés y libros' },
      { src: coffeeCafe, label: 'Cafés', alt: 'Ficha de un café con fotografías, precio y detalles del producto' },
      { src: coffeeLibro, label: 'Libros', alt: 'Ficha de un libro con precio, autor, género, formato e imágenes' },
      { src: coffeeCarrito, label: 'Carrito', alt: 'Carrito con productos seleccionados y resumen de compra' },
      ...additionalScreens([
        { src: coffee5, label: 'Sobre nosotros', alt: 'Página Sobre nosotros de Coffee & Books' },
        { src: coffee6, label: 'Preguntas frecuentes', alt: 'Preguntas frecuentes de Coffee & Books' },
        { src: coffee7, label: 'Términos y condiciones', alt: 'Términos y condiciones de Coffee & Books' },
        { src: coffee8, label: 'Home', alt: 'Página de inicio de Coffee & Books' },
      ]),
    ],
  }
]
