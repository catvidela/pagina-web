const express = require('express');
const path = require('path');
const app = express();
const port = 3005; // Puedes cambiar el puerto si es necesario

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Define la carpeta donde se encuentran tus archivos .ejs

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para renderizar la página de inicio
app.get('/', (req, res) => {
    const swiperSlides = [ // Cambié el nombre a swiperSlides
        { serie: 'Game of thrones', imagen: 'imagenes/img1.jpg', capitulo: 'Capítulo 1', descripcion: 'Descripción del capítulo 1 de Serie got' },
        { serie: 'Game of thrones', imagen: 'imagenes/img2.jpg', capitulo: 'Capítulo 2', descripcion: 'Descripción del capítulo 2 de Serie got' },
        { serie: 'Game of thrones', imagen: 'imagenes/img.jpg', capitulo: 'Capítulo 3', descripcion: 'Descripción del capítulo 3 de Serie got' },
        { serie: 'Game of thrones', imagen: 'imagenes/daenerys.jpg', capitulo: 'Capítulo 4', descripcion: 'Descripción del capítulo 4 de Serie got' },
        { serie: 'Game of thrones', imagen: 'imagenes/img1.jpg', capitulo: 'Capítulo 1', descripcion: 'Descripción del capítulo 1 de Serie got' },
        { serie: 'Game of thrones', imagen: 'imagenes/img2.jpg', capitulo: 'Capítulo 2', descripcion: 'Descripción del capítulo 2 de Serie got' },
        { serie: 'Game of thrones', imagen: 'imagenes/img.jpg', capitulo: 'Capítulo 3', descripcion: 'Descripción del capítulo 3 de Serie got' },
        { serie: 'Game of thrones', imagen: 'imagenes/daenerys.jpg', capitulo: 'Capítulo 4', descripcion: 'Descripción del capítulo 4 de Serie got' }
    ];
    res.render('index', { swiperSlides }); // Cambié swiper-slide por swiperSlides
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});