# Guía para actualizar mi página

La página está separada en dos partes:

- **El contenido** (textos, garabatos, trabajos, historias, fotos) está en **`contenido.js`** y en las carpetas de imágenes. Esto es lo único que necesitas tocar.
- **El diseño** (colores, animaciones, traducción, galerías) está en `index.html`, `css/` y `js/`. No hace falta tocarlo.

## Qué hay en cada carpeta

| Carpeta o archivo | Qué contiene |
|---|---|
| `contenido.js` | Todos los textos y listas de la página |
| `libros.js` | Los libros leídos (sale de Goodreads, no se edita a mano) |
| `sobre/` | Fotos de "Sobre mí" |
| `garabatos/` | Dibujos, cuadros, piezas digitales y videos de proceso |
| `autores/` | Fotos de "Autores a los que vuelvo" |
| `covers/` | Portadas de libros (nombre = número de Goodreads del libro) |
| `medium/` | Imágenes de las historias de Medium |
| `og.jpg` | Imagen que aparece al compartir el enlace en WhatsApp o redes |
| `herramientas/` | Script para actualizar los libros desde Goodreads |

## Cómo editar en GitHub (sin instalar nada)

1. Entra a tu repositorio en github.com.
2. Haz clic en `contenido.js` y luego en el **lápiz ✏️** (arriba a la derecha).
3. Usa **Ctrl + F** para buscar lo que quieres cambiar.
4. Cambia el texto **sin borrar las comillas ni las comas**.
5. Baja y pulsa **Commit changes**. En 1 o 2 minutos se ve en la página.

> **Si algo deja de verse** después de un cambio, casi siempre falta una coma, una comilla o una llave `}`. En GitHub ve a la pestaña **History** del archivo y vuelve a la versión anterior.

## Recetas rápidas

### Agregar un garabato
1. Sube la imagen a la carpeta `garabatos/`: entra a la carpeta y usa **Add file → Upload files**. Usa un nombre sin espacios ni tildes, por ejemplo `rosa-azul.jpg`. Las imágenes de unos 1400 px en el lado más largo cargan rápido.
2. En `contenido.js`, dentro de `obras: [ ... ]`, copia una línea existente y cámbiala:
   ```js
   { titulo: { es: "Rosa azul", en: "Blue rose" }, tipo: "mano", tecnica: { es: "Acuarela", en: "Watercolor" }, año: "2026", archivo: "rosa-azul.jpg" },
   ```
   - `tipo` puede ser `"mano"`, `"cuadro"` o `"digital"`.
   - Si quieres, agrega `tamaño: "30 × 40 cm"` o `nota: { es: "...", en: "..." }`.
   - El orden de la lista es el orden en que aparecen en la galería.

### Quitar un garabato
Borra su línea completa en `obras`, desde `{` hasta `},`.

### Agregar una historia de Medium
En `historias → lista`, copia una historia y cambia:
```js
{ titulo: "Título de la historia", fecha: "2026-10-15", minutos: 3,
  resumen: { es: "Primera frase...", en: "First sentence..." },
  enlace: "https://medium.com/@moreno.angelica4/..." },
```
Pon la más reciente de primera.

### Agregar un trabajo
En `trabajo → empleos`, copia uno y cambia los datos. Usa `fin: "hoy"` si sigue vigente.
- Las áreas (`area`) son: `"bio"` biorremediación (verde), `"lab"` laboratorio (azul), `"inn"` innovación (violeta), `"edu"` educación (amarillo) y `"bt"` biotecnología (coral).
- Ordénalos del más antiguo al más reciente.

### Cambiar lo que estás leyendo o tu último favorito
En `libreria`:
- `leyendoAhora`: cambia título, autor y portada. Sube la portada a `covers/` con el mismo nombre que escribas.
- `ultimoFavorito`: escribe el título exacto como aparece en `libros.js`.
- `porLeer`: el número de libros en tu estante "Want to read" de Goodreads.

### Actualizar todos los libros desde Goodreads
1. En Goodreads ve a **My Books → Import and export → Export Library** y descarga el CSV.
2. En tu computador, dentro de la carpeta del sitio, ejecuta:
   ```
   python herramientas/actualizar_libros.py goodreads_library_export.csv
   ```
3. Sube el nuevo `libros.js` a GitHub.

Las cifras (leídos, páginas, 5 estrellas) y los estantes de 2025 y 2026 se calculan solos. Los libros nuevos sin portada en `covers/` aparecen con lomo de color. Para agregarles portada, guarda la imagen como `covers/<número del libro>.jpg`; el número está en el enlace de Goodreads del libro.

### Cambiar fotos de "Sobre mí"
Sube las fotos a `sobre/` y edita la lista `fotos`.
- `foco` decide qué parte de la foto se ve en el recuadro: el primer número es horizontal y el segundo vertical. Con `"50% 30%"` se ve el centro, un poco hacia arriba.

### Cambiar la frase de la intro
En `perfil`, edita `introFrase1` e `introFrase2`.

## Inglés
Cada texto tiene `es:` y `en:`. Si solo pones un texto entre comillas, sin `es`/`en`, se muestra igual en los dos idiomas. Los textos fijos de los botones y menús se traducen en `js/idioma.js`.

## Subir cambios con GitHub Desktop (opcional, más cómodo)
1. Edita los archivos en la carpeta del sitio en tu computador.
2. Abre **GitHub Desktop**, escribe un resumen (ej. "agregué 2 garabatos") y pulsa **Commit to main**.
3. Pulsa **Push origin**. En 1 o 2 minutos se ve en línea.

## Ver la página en tu computador antes de subirla
Abre `index.html` con doble clic. Si las imágenes o los libros no aparecen, es una restricción del navegador con archivos locales. En ese caso, en la carpeta del sitio ejecuta `python -m http.server` y abre http://localhost:8000.
