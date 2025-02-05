# Node.js + Express + React PDF API

Este proyecto es una API en Node.js con Express que genera y entrega archivos PDF utilizando `@react-pdf/renderer`. La estructura permite el uso de JSX en componentes React ubicados en la carpeta `src/components`, los cuales son compilados con `esbuild` para ser utilizados en Node.js.

## 🚀 Instalación

1. Clona este repositorio:

   ```sh
   git clone https://github.com/martinfacc/node-react-pdf.git
   cd node-react-pdf
   ```

2. Instala las dependencias necesarias:
   ```sh
   npm install
   ```

## 🔧 Configuración y Uso

### 1️⃣ Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
APP_PORT=3000
APP_URL=http://localhost:3000
```

### 2️⃣ Compilar los componentes JSX

Antes de ejecutar el servidor, compila los archivos JSX:

```sh
npm run build
```

Esto generará los archivos en la carpeta `build/`.

### 3️⃣ Iniciar el servidor

Ejecuta el servidor con:

```sh
node src/index.js
```

El servidor estará disponible en: `http://localhost:3000`

### 4️⃣ Generar un PDF

Para obtener un PDF, haz una solicitud GET a:

```sh
http://localhost:3000/generate-pdf
```

El archivo PDF se descargará automáticamente.

## 📁 Estructura del Proyecto

```
/node-react-pdf
│── /src
│   ├── components/ (Componentes React)
│   │   ├── index.jsx (Donde se exportan los demás componentes)
│   │   ├── my-document.jsx (Componente React para generar el PDF)
│   ├── env.js (Variables de entorno)
│   ├── index.js (Servidor Express)
│── /build (Carpeta donde se guardan los archivos compilados)
│── build.js (Script para compilar JSX con esbuild)
│── package.json
│── README.md
```

## 📜 Scripts Disponibles

- `npm run build`: Compila los componentes JSX con `esbuild`.
- `npm start`: Inicia el servidor Express.

## 📌 Requisitos

- Node.js (v16 o superior recomendado)
- npm

## 🛠 Tecnologías Usadas

- **Express.js**: Framework para Node.js
- **React + @react-pdf/renderer**: Para generar PDFs
- **ESBuild**: Para compilar JSX a JavaScript estándar

## 📜 Licencia

Este proyecto está bajo la licencia MIT.

---

💡 _Si tienes sugerencias o mejoras, no dudes en contribuir._ 🚀
