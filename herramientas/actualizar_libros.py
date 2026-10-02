"""
Actualiza libros.js a partir de la exportación de Goodreads.

Uso (desde la carpeta del sitio):
    python herramientas/actualizar_libros.py goodreads_library_export.csv

Solo usa la librería estándar de Python. Los libros que tengan una imagen en
covers/<Book Id>.jpg aparecerán con portada; los demás, con lomo de color.
"""
import csv, json, re, sys, os, html

def limpiar_titulo(t):
    t = re.sub(r'\s*\((?:[^()]*#\d+[^()]*|Spanish Edition|Portuguese Edition|Alienta|Biblioteca[^)]*)\)', '', t)
    t = re.sub(r'\s*\((?:Serie|Colección|Coleção|Guías|Range)[^)]*\)', '', t)
    t = re.sub(r':\s*\(.*\)$', '', t)
    if len(t) > 45:
        t = re.split(r'[:.]', t)[0]
    return t.strip()

def limpiar_resena(r):
    if not r:
        return None
    r = re.sub(r'<br\s*/?>', '\n', r)
    r = html.unescape(re.sub(r'<[^>]+>', '', r)).strip()
    return r or None

def num(v):
    try:
        return int(float(v))
    except (TypeError, ValueError):
        return None

def main(ruta_csv, salida='libros.js'):
    with open(ruta_csv, encoding='utf-8') as f:
        filas = list(csv.DictReader(f))
    libros = []
    for r in filas:
        if r.get('Exclusive Shelf') != 'read':
            continue
        bid = num(r['Book Id'])
        fecha = (r.get('Date Read') or '').replace('/', '-') or None
        b = {
            't': limpiar_titulo(r['Title']),
            'a': re.sub(r'\s+', ' ', r['Author']).strip(),
            's': num(r.get('My Rating')) or 0,
            'y': int(fecha[:4]) if fecha else None,
            'p': num(r.get('Number of Pages')) or 0,
            'i': bid,
            'c': 1 if os.path.exists(os.path.join('covers', f'{bid}.jpg')) else 0,
        }
        if fecha: b['d'] = fecha
        o = num(r.get('Original Publication Year')) or num(r.get('Year Published'))
        if o: b['o'] = o
        if r.get('Publisher'): b['e'] = r['Publisher']
        rv = limpiar_resena(r.get('My Review'))
        if rv: b['r'] = rv
        libros.append(b)
    libros.sort(key=lambda b: b.get('d') or '0000', reverse=True)
    with open(salida, 'w', encoding='utf-8') as f:
        f.write('/* Generado automáticamente desde Goodreads con herramientas/actualizar_libros.py.\n'
                '   No hace falta editarlo a mano. */\n')
        f.write('window.LIBROS = ' + json.dumps(libros, ensure_ascii=False, indent=0) + ';\n')
    print(f'{len(libros)} libros guardados en {salida}')

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print(__doc__); sys.exit(1)
    main(sys.argv[1])
