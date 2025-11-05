[< Volver al README](../README.md)

# Manejo de eliminación y actualización de estado de libros en la lista

## Índice

1. [Eliminación de libros](#1-eliminación-de-libros)
2. [Cambio de estado de lectura](#2-cambio-de-estado-de-lectura)
3. [Actualización de contadores](#3-actualización-de-contadores)
4. [Propagación de funciones](#4-propagación-de-funciones)
5. [Sincronización dinámica](#5-sincronización-dinámica)

En la implementación de la aplicación, se ha diseñado un sistema para gestionar la eliminación de libros de la lista y la actualización de su estado de lectura. Esto también asegura que los valores de los contadores relacionados se actualicen dinámicamente. A continuación, se detalla cómo se ha llevado a cabo este manejo:

## 1. **Eliminación de libros**

- **Función `deleteBook`**:
  - Se define en el componente `Home` y recibe como parámetro el `id` del libro a eliminar.
  - Utiliza el método `setBooks` para actualizar el estado de la lista de libros (`books`), filtrando aquellos libros cuyo `id` no coincida con el proporcionado.
  - Esto asegura que el libro eliminado desaparezca de la lista y, al mismo tiempo, los contadores se actualicen automáticamente, ya que dependen del estado de la lista.

## 2. **Cambio de estado de lectura**

- **Función `toggleReadStatus`**:
  - También definida en el componente `Home`, recibe el `id` del libro cuyo estado de lectura se desea alternar.
  - Utiliza `setBooks` para recorrer la lista de libros y, si el `id` coincide, invierte el valor de la propiedad `isRead` del libro correspondiente.
  - Esto permite alternar entre los estados "leído" y "no leído" de un libro.

## 3. **Actualización de contadores**

- Los contadores se gestionan en el componente `CounterRow`, que recibe la lista de libros actualizada como propiedad (`bookList`).
- **Cálculo de contadores**:
  - **Total de libros (`Logged`)**: Se calcula como la longitud de la lista de libros.
  - **Libros leídos (`Read`)**: Se filtran los libros cuyo estado `isRead` sea `true` y se cuenta su cantidad.
  - **Gasto total en libros leídos (`Spent`)**: Se filtran los libros leídos y se suman sus precios, formateando el resultado como una cadena con dos decimales.

## 4. **Propagación de funciones**

- Las funciones `deleteBook` y `toggleReadStatus` se pasan como propiedades desde el componente `Home` al componente `BookList`, y de ahí al componente `Book`.
- En el componente `Book`, estas funciones se invocan en respuesta a eventos del usuario, como presionar el icono de eliminar o el de alternar el estado de lectura.

## 5. **Sincronización dinámica**

- Gracias al uso de `useState` y la propagación de las funciones, cualquier cambio en la lista de libros (ya sea eliminación o actualización de estado) se refleja automáticamente en los contadores y en la interfaz de usuario.
- Esto asegura que la aplicación mantenga un estado consistente y actualizado en todo momento.

Con este enfoque, se logra una gestión eficiente y reactiva de la lista de libros, proporcionando una experiencia de usuario fluida y coherente.

[< Volver al README](../README.md)
