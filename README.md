# PGL-MyList-Books

## Objetivo del proyecto

El objetivo de este proyecto es desarrollar una aplicación móvil que permita a los usuarios gestionar una lista personalizada de libros. Los usuarios pueden agregar nuevos libros, clasificarlos por categorías, marcar su estado de lectura, y eliminar libros de la lista. La aplicación está diseñada para ofrecer una experiencia intuitiva y visualmente atractiva, utilizando tecnologías modernas como React Native y Expo.

## Índice

1. [Instalación](#instalación)
2. [Estructura del proyecto](#estructura-del-proyecto)
3. [Documentación](#documentación)
4. [Licencia](#licencia)

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/kiara-modo-estudiante/PGL-MyList-Books.git
   cd PGL-MyList-Books
   ```

2. **Instalar dependencias**:
   Asegúrate de tener `Node.js` y `npm` instalados. Luego, ejecuta:

   ```bash
   npm install
   ```

3. **Ejecutar el proyecto**:
   Inicia el servidor de desarrollo de Expo:

   ```bash
   npm run start
   ```

4. **Abrir la aplicación**:
   - Escanea el código QR en la terminal con la aplicación Expo Go en tu dispositivo móvil.
   - O utiliza un emulador de Android/iOS configurado en tu máquina.

## Estructura del proyecto

La estructura del proyecto sigue una organización modular para facilitar el desarrollo y mantenimiento:

```
├── app - Pantallas principales y la estructura de navegación
│   └── Home - Pantalla principal de la aplicación
│   └── _layout.tsx - Configuración del diseño general de las pantallas
│   └── index.tsx - Punto de entrada para la pantalla principal
│   └── modal.tsx - Componente para manejar modales en la aplicación
│
├── assets - Recursos estáticos
│   └── images -  Carpeta de imágenes utilizadas en la app
│       ├── categories - Imágenes para las categorías de libros
│       └── covers - Portadas de libros
│
├── components - Componentes reutilizables
│   └── modals - Componentes específicos para modales
│
├── context - Manejo del estado global
│
├── data - Datos estáticos para la aplicación
│
├── docs -  Documentación del proyecto
│   └── images - Imágenes utilizadas en la documentación
│       └── screenshots - Capturas de pantalla
│           ├── app - Capturas de la aplicación
│           ├── code - Capturas de fragmentos de código
│           ├── colors - Paleta de colores
│           └── figma - Capturas del diseño en Figma
│
├── theme - Configuración de estilos globales
│
└── types - Definiciones de tipos TypeScript

```

## Documentación

### 1. Diseño de pantallas

[01-figma-design.md](./docs/01-figma-design.md)

### 2. Implementación de libros

[02-book-implementation.md](./docs/02-book-implementation.md)

### 3. Manejo de eliminación y actualización de estado de libros en la lista

[03-book-interaction.md](./docs/03-book-interaction.md)

### 4. Modal con formulario para la creación de libros

[04-form-modal.md](./docs/04-form-modal.md)
