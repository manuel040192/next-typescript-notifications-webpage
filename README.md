**Next TypeScript Notifications Webpage**

**Información destacada:**

- Para hacer que el botón "Mark all as read" cambie de color al pasar el cursor encima del botón, en el archivo page.module.css agregué el siguiente código: .markAllAsRead {
  background: none; /* Para que el botón parezca más un enlace */
  border: none;
  color: blue; /* Color inicial */
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer; /* Cambia el cursor a mano */
  transition: color 1.5s ease; /* Transición suave para el color */
}

.markAllAsRead:hover {
  color: red; 
  text-decoration: underline; /* Para resaltar el botón como si fuera un enlace */
}

- Agregué el código const [allRead, setAllRead] = React.useState(false); para rastrear si todas las notificaciones han sido marcadas como leídas. El estado allRead se actualiza dinámicamente para permitir renderizado condicional.

- Agregué el código const handleMarkAllAsRead = () => { notifications.forEach(notification => notification.read = true); setAllRead(true); }; para crear una función que marca todas las notificaciones como leídas, actualizando su propiedad read a true y estableciendo el estado allRead en true.

- Implementé el código const unreadCount = notifications ? notifications.filter(notification => !notification.read).length : 0; para calcular eficientemente el número total de notificaciones no leídas. Esto utiliza el método filter para filtrar dinámicamente las notificaciones en función de su propiedad read y calcular la cantidad en tiempo real, asegurando un seguimiento preciso y actualizado de las notificaciones no leídas para una mejor experiencia de usuario.

- Agregué la expresión condicional {!notification.read && <div className={styles.red-circle}></div>} para indicar visualmente las notificaciones no leídas renderizando un círculo rojo de forma dinámica. Esto asegura que el usuario pueda identificar fácilmente las notificaciones que requieren atención.

- Implementé el código de renderizado condicional para el botón `{!allRead && (<button onClick={handleMarkAllAsRead} className={${styles.markAllAsRead} ${styles.plusJakartaSans500}}>Mark all as read)}. Este botón se muestra solo cuando hay notificaciones no leídas, mejorando la experiencia del usuario al proporcionar una forma intuitiva de marcar todas las notificaciones como leídas con un solo clic.

- Eliminé los siguientes códigos:

1) En src/app/layout.tsx:

1.1) "import { Inter, Plus_Jakarta_Sans } from 'next/font/google';"

1.2) "const inter = Inter({ subsets: ['latin'] });

export const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-plus_jakarta_sans', weight: ['500', '800'], })"

1.3) El código "className={plus_jakarta_sans.variable}" que estaba dentro de "<body className={plus_jakarta_sans.variable}>{children}</body>".

2) En src/app/page.tsx:

"import { plus_jakarta_sans } from './layout';"

Eliminé esos códigos porque me di cuenta de que era el código "@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;800&display=swap');

/* Luego especifica en tu CSS donde sea necesario / .plusJakartaSans500 { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 500; /* Para el peso 500 */ }

.plusJakartaSans800 { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; /* Para el peso 800 */ }", que está dentro de src/app/page.module.css, el que habilitaba que la fuente Plus Jakarta Sans apareciera en el proyecto.

- Reemplacé todas las etiquetas < img > con el componente < Image > de next/image, añadí las propiedades width y height a cada componente < Image > y configuré ambos valores a 90 con el código width={90} height={90} que añadí a todas las etiquetas < Image />.



**Highlighted information:**

- To make the "Mark all as read" button change its color when the pointer hovers over the button, I added the following code to the page.module.css file: .markAllAsRead {
  background: none; /* Makes the button look more like a link */
  border: none;
  color: blue; /* Initial color */
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer; /* Changes the pointer to a hand */
  transition: color 1.5s ease; /* Smooth color transition */
}

.markAllAsRead:hover {
  color: red;
  text-decoration: underline; /* Highlights the button as if it were a link */
}

- I added the code const [allRead, setAllRead] = React.useState(false); to track whether all notifications have been marked as read. The allRead state is dynamically updated to enable conditional rendering.

- I added the code const handleMarkAllAsRead = () => {
notifications.forEach(notification => notification.read = true);
    setAllRead(true);
  }; to create a function that marks all notifications as read by updating their read property to true and setting the allRead state to true.

- I implemented the code const unreadCount = notifications ? notifications.filter(notification => !notification.read).length : 0; to efficiently compute the total number of unread notifications. This leverages the filter method to dynamically filter notifications based on their read property and calculate the count in real time, ensuring accurate and up-to-date tracking of unread notifications for enhanced user experience.

- I added the conditional expression {!notification.read && <div className={styles.red-circle}></div>} to visually indicate unread notifications by rendering a red circle dynamically. This ensures that the user can easily identify notifications that require attention.

- I implemented the conditional button rendering code {!allRead && (<button onClick={handleMarkAllAsRead} className={${styles.markAllAsRead} ${styles.plusJakartaSans500}}>Mark all as read</button>)}. This button is displayed only when there are unread notifications, enhancing the user experience by providing an intuitive way to mark all notifications as read in one click.

- I erased the following codes: 

1) In src/app/layout.tsx:

1.1) "import { Inter, Plus_Jakarta_Sans } from "next/font/google";" 

1.2) "const inter = Inter({ subsets: ["latin"] });

export const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus_jakarta_sans',
  weight: ['500', '800'],
})"

1.3) The code "className={plus_jakarta_sans.variable}" that was inside "<body className={plus_jakarta_sans.variable}>{children}</body>".

I erased those codes because I realized it was the code "@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;800&display=swap');

/* Luego especifica en tu CSS donde sea necesario */
.plusJakartaSans500 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 500; /* Para el peso 500 */
}

.plusJakartaSans800 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800; /* Para el peso 800 */
}" that is inside src/app/page.module.css that was enabling the font Plus Jakarta Sans to appear in the project.

2) In src/app/page.tsx:

"import { plus_jakarta_sans } from "./layout";"

- I replaced all < img > tags with < Image > from next/image, I added the width and height properties to every < Image > component and set both of those properties to 90 with the code width={90} 
  height={90} that I added to all < Image /> tags. 