# Charcutería Gourmet - Sitio Web

Un sitio web moderno y responsive para una charcutería gourmet, desarrollado con HTML, CSS y JavaScript vanilla.

## Características

- **Diseño Moderno**: Interfaz elegante con gradientes, animaciones y efectos visuales
- **Hero con Carrusel**: Sección principal con carrusel automático de imágenes de productos
- **Galería de Productos**: Tarjetas interactivas con modales detallados para cada producto
- **Sección de Comentarios**: Reseñas de clientes con sistema de calificación por estrellas
- **Footer Completo**: Información de contacto, horarios y mapa de Google Maps integrado
- **Responsive Design**: Optimizado para dispositivos móviles y desktop
- **Navegación Suave**: Scroll suave entre secciones y menú hamburguesa para móviles

## Tecnologías Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, Animaciones)
- JavaScript ES6+
- Google Maps API
- Font Awesome Icons
- Google Fonts (Playfair Display, Inter)

## Estructura del Proyecto

```
charcuteria-static/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── images/             # Imágenes de productos
│   ├── XMIiu0FBJJ3h.jpg
│   ├── GwXydkhykHtQ.jpg
│   ├── vq37zljfsuWg.png
│   └── ...
└── README.md           # Este archivo
```

## Funcionalidades

### Carrusel de Hero
- Cambio automático de slides cada 5 segundos
- Navegación manual con botones anterior/siguiente
- Indicadores clickeables
- Contenido dinámico para cada slide

### Galería de Productos
- 4 categorías de productos: Embutidos Premium, Tabla Mixta, Quesos Artesanales, Especialidades
- Modales con información detallada de cada producto
- Efectos hover y animaciones de entrada
- Botón de contacto integrado con WhatsApp

### Navegación
- Header fijo con efecto de transparencia
- Menú responsive con hamburguesa para móviles
- Scroll suave entre secciones
- Navegación activa según la sección visible

### Mapa y Direcciones
- Google Maps integrado
- Botón "Cómo llegar desde donde estés" con geolocalización
- Información de contacto completa

## Instalación y Uso

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/charcuteria-gourmet.git
```

2. Navega al directorio del proyecto:
```bash
cd charcuteria-gourmet
```

3. Abre `index.html` en tu navegador o usa un servidor local:
```bash
python -m http.server 8000
```

4. Visita `http://localhost:8000` en tu navegador

## Despliegue en Vercel

1. Conecta tu repositorio de GitHub con Vercel
2. Configura el proyecto como sitio estático
3. El sitio se desplegará automáticamente en cada push

## Personalización

### Cambiar Imágenes
Reemplaza las imágenes en la carpeta `images/` y actualiza las referencias en `index.html`

### Modificar Contenido
Edita el archivo `index.html` para cambiar textos, productos y información de contacto

### Ajustar Estilos
Modifica `styles.css` para personalizar colores, fuentes y diseño

### Añadir Funcionalidades
Extiende `script.js` para agregar nuevas características interactivas

## Compatibilidad

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Dispositivos móviles iOS y Android

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

Para consultas sobre el proyecto:
- Email: info@charcuteriagourmet.es
- Teléfono: +34 912 345 678
- Dirección: Calle Gourmet 123, Madrid, España

