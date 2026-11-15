ESTRUCTURA DEL PROYECTO
mi-companero/
├── index.html
├── css/
│   ├── variables.css      # 🎨 Colores, fuentes, sombras
│   ├── reset.css          # 🧹 Normalización base
│   ├── components.css     # 🧩 Botones, badges, inputs reutilizables
│   ├── header.css         # 🧭 Navbar y menú móvil
│   ├── hero.css           # 🦸 Sección principal (buscador, imagen)
│   ├── utilities.css      ← Clases auxiliares
|   |── services.css       # 🐾 Sección de tarjetas de servicios (NUEVO) 
│   └── main.css           # 📦 Archivo que importa todo en orden
├── js/
│   ├── modules/
│   │   ├── ThemeModule.js ← 🌙 Modo oscuro
│   │   ├── SearchModule.js← 🔍 Búsqueda
│   │   └── NavModule.js   ← 🍔 Menú móvil + scroll
│   ├── utils/
│   │   └── helpers.js     ← 🛠️ Funciones reutilizables
│   └── app.js             ← 🚀 Punto de entrada
└── assets/
    ├── images/
    └── icons/