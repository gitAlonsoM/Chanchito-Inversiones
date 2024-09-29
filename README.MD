Chanchito Inversiones - Prototipo Frontend
Descripción General
Chanchito Inversiones es un prototipo de frontend para una plataforma de gestión de inversiones. El objetivo principal es proporcionar una interfaz de usuario atractiva y funcional que permita navegar entre diferentes secciones de la aplicación. Aunque no incluye funcionalidad de backend ni integración con APIs en tiempo real, el prototipo está diseñado para ser completamente responsivo y escalable, facilitando futuras implementaciones dinámicas.

El flujo básico del prototipo es:

Página de Presentación: Introduce al usuario a la plataforma y destaca sus ventajas.
Autenticación: Permite al usuario iniciar sesión o registrarse.
Dashboard: Acceso a las funcionalidades principales después de iniciar sesión.
Cierre de Sesión: Opción para cerrar sesión y regresar a la página de presentación.
Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

bash
Copy code
/project-root/
│
├── /assets/                 # Archivos estáticos como CSS, JS, imágenes
│   ├── /css/
│   │   └── styles.css       # Estilos CSS personalizados
│   ├── /js/
│   │   └── app.js           # Scripts JavaScript personalizados
│   ├── /img/
│   │   ├── logo.png         # Logo de la aplicación
│   │   └── presentation-bg.jpg  # Imagen de fondo para la página de presentación
│
├── /components/             # Componentes HTML reutilizables
│   ├── navbar.html          # Barra de navegación
│   └── footer.html          # Pie de página
│
├── /pages/                  # Páginas individuales de la aplicación
│   ├── presentation.html    # Página de presentación
│   ├── login.html           # Página de inicio de sesión
│   ├── register.html        # Página de registro
│   ├── dashboard.html       # Página principal después de iniciar sesión
│   ├── transactions.html    # Página de transacciones
│   ├── history.html         # Historial de operaciones
│   ├── wallet.html          # Billetera virtual
│   ├── ...                  # Otras páginas (support.html, news.html, etc.)
│   ├── automation.html      # (Sin funcionalidad por ahora)
│   ├── charts.html          # (Sin funcionalidad por ahora)
│   └── password-reset.html  # (Sin funcionalidad por ahora)
Funcionalidades de los Archivos
/assets/css/styles.css
Descripción: Contiene los estilos personalizados de la aplicación, incluyendo la definición de colores, tipografías y estilos para diferentes componentes.
Características Clave:
Variables CSS para colores principales y de acento.
Estilos para la página de presentación, navbar, footer y otros componentes.
Estilos responsivos para mejorar la experiencia en dispositivos móviles.
/assets/js/app.js
Descripción: Archivo JavaScript principal que maneja la carga dinámica de componentes y simula el estado de autenticación del usuario.
Funciones Principales:
loadComponents(): Carga dinámicamente el navbar y el footer en cada página.
updateNavbar(): Actualiza el navbar según el estado de sesión (mostrando "Bienvenido, Juan" y "Cerrar sesión" cuando el usuario está logueado).
login(): Simula el inicio de sesión almacenando un indicador en localStorage y redirige al dashboard.
logout(): Simula el cierre de sesión eliminando el indicador de localStorage y redirige a la página de presentación.
/components/navbar.html
Descripción: Contiene el código HTML para la barra de navegación que se incluye en las páginas después de iniciar sesión.
Características Clave:
Incluye el logo de la aplicación junto al nombre "Chanchito Inversiones".
Enlaces de navegación a las principales secciones de la aplicación.
El menú de usuario (mostrando "Bienvenido, Juan") se agrega dinámicamente desde app.js cuando el usuario está logueado.
/components/footer.html
Descripción: Contiene el código HTML para el pie de página común en todas las páginas.
Características Clave:
Información de derechos de autor.
Puede incluir enlaces a políticas de privacidad, términos de servicio, etc.
/pages/presentation.html
Descripción: Página de presentación que introduce al usuario a la plataforma.
Características Clave:
Header de Presentación: Incluye un mensaje de bienvenida, descripción y botones para "Iniciar Sesión" y "Registrarse".
Secciones de Ventajas: Destaca las principales ventajas de la plataforma con íconos y descripciones.
Nota: No carga el navbar para mantener una presentación limpia.
/pages/login.html
Descripción: Página que permite al usuario iniciar sesión.
Características Clave:
Formulario de inicio de sesión con campos para correo electrónico y contraseña.
Al enviar el formulario, se llama a la función login() para simular el inicio de sesión.
Enlaces a la página de registro y recuperación de contraseña.
/pages/register.html
Descripción: Página que permite al usuario registrarse en la plataforma.
Características Clave:
Formulario de registro con campos para nombre completo, correo electrónico y contraseña.
Al enviar el formulario, se redirige al dashboard (simulando un registro exitoso).
/pages/dashboard.html
Descripción: Página principal a la que accede el usuario después de iniciar sesión.
Características Clave:
Resúmenes de inversiones, saldo en billetera y notificaciones.
Accesos rápidos a funciones clave como transacciones, historial y soporte.
Carga el navbar con el menú de usuario y la opción de "Cerrar sesión".
/pages/transactions.html
Descripción: Página que permite al usuario ver y simular transacciones de acciones.
Características Clave:
Buscador de acciones (funcionalidad simulada).
Listado de acciones con gráficos de precios generados con Chart.js.
Botones para "Comprar" y "Vender" acciones (sin funcionalidad real).
/pages/history.html
Descripción: Página que muestra el historial de operaciones del usuario.
Características Clave:
Filtro de fechas para refinar el historial (funcionalidad simulada).
Tabla detallada de transacciones con fecha, tipo, descripción, monto y estado.
Uso de badges para indicar el estado de las transacciones.
/pages/wallet.html
Descripción: Página que muestra el saldo disponible en la billetera y permite gestionar transacciones básicas.
Características Clave:
Visualización del saldo disponible.
Botones para "Depositar Fondos" y "Retirar Fondos" (sin funcionalidad real).
Historial de transacciones relacionadas con la billetera.
Otros Archivos
automation.html, charts.html, password-reset.html:
Estado: Actualmente sin funcionalidad.
Futuro: Se espera implementar funcionalidades específicas en futuras versiones.
Funcionalidades Implementadas
Navegación entre páginas: Utilizando enlaces estáticos y componentes reutilizables.
Simulación de autenticación: Uso de localStorage para simular el estado de sesión.
Carga dinámica de componentes: Navbar y footer se cargan dinámicamente en las páginas.
Interfaz responsiva: Diseño adaptado para dispositivos móviles y de escritorio.
Contenido estático: Datos ficticios para simular funcionalidades en transacciones y historial.
Funcionalidades Pendientes
Implementación de funcionalidades en:
automation.html: Automatización de inversiones.
charts.html: Visualización de gráficos en tiempo real.
password-reset.html: Restablecimiento de contraseña.
Integración con backend: Autenticación real, manejo de datos dinámicos y almacenamiento.
Validaciones y seguridad: Implementar validaciones de formularios y medidas de seguridad.
Mejoras en la UI/UX: Añadir más interactividad y mejorar la experiencia del usuario.
Cómo Ejecutar el Proyecto
Clonar o descargar el repositorio en tu máquina local.
Abrir el archivo presentation.html ubicado en la carpeta /pages/ en tu navegador web.
Navegar por las diferentes secciones utilizando los enlaces y botones disponibles.
Iniciar sesión: Desde la página de presentación, haz clic en "Iniciar Sesión" y utiliza cualquier correo y contraseña (la autenticación es simulada).
Cerrar sesión: En el navbar, haz clic en "Bienvenido, Juan" y selecciona "Cerrar sesión" para regresar a la página de presentación.
Tecnologías Utilizadas
HTML5: Estructura de las páginas.
CSS3: Estilos y diseño responsivo.
JavaScript (ES6): Funcionalidad y manipulación del DOM.
Bootstrap 5: Framework CSS para estilos y componentes de UI.
FontAwesome: Íconos y elementos visuales.
Chart.js: Generación de gráficos en la página de transacciones.