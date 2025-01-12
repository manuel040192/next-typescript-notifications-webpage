'use client'

import { plus_jakarta_sans } from "./layout";
import styles from "./page.module.css";
import React from 'react';
import notifications from './notifications.json';

// Primero, definimos una interfaz para las notificaciones
interface Notification {
  id: string;
  avatar: string;
  name: string;         // Añadido
  text?: string;         // Añadido
  postName?: string;    // Añadido (opcional)
  groupName?: string;   // Añadido (opcional)
  message?: string;
  image?: string;       // Añadido (opcional)
  time: string;
  read: boolean;
}

 {/* const notifications: Notification[] = [
  {
    id: '1',
    avatar: '/images/avatar-mark-webber.webp',  
    name: 'Mark Webber',
    text: 'reacted to your recent post',
    postName: 'My first tournament today!',
    groupName: '',
    message: '',
    image: '',
    time: '1m ago',
    read: false,
  },
  {
    id: '2',
    avatar: '/images/avatar-angela-gray.webp',  
    name: 'Angela Gray',
    text: 'followed you',
    postName: '',
    groupName: '',
    message: '',
    image: '',
    time: '5m ago',
    read: false,
  },
  {
    id: '3',
    avatar: '/images/avatar-jacob-thompson.webp',  
    name: 'Jacob Thompson',
    text: '',
    postName: '',
    groupName: '',
    message: '',
    image: '',
    time: '1 day ago',
    read: false,
  },
  {
    id: '4',
    avatar: '/images/avatar-rizky-hasanuddin.webp',  
    name: 'Rizky Hasanuddin',
    text: 'sent you a private message',
    postName: '',
    groupName: '',
    message: 'Hello, thanks for setting up the Chess Club. Ive been a member for a few weeks now and Im already having lots of fun and improving my game.',
    image: '',
    time: '5 days ago',
    read: true,
  },
  {
    id: '5',
    avatar: '/images/avatar-kimberly-smith.webp',  
    name: 'Kimberly Smith',
    text: 'commented on your picture',
    postName: '',
    groupName: '',
    message: '',
    image: '/images/image-chess.webp',
    time: '1 week ago',
    read: true,
  },
  {
    id: '6',
    avatar: '/images/avatar-nathan-peterson.webp',  
    name: 'Nathan Peterson',
    text: 'reacted to your recent post',
    postName: '5 end-game strategies to increase your win rate',
    groupName: '',
    message: '',
    image: '',
    time: '2 weeks ago',
    read: true,
  },
  {
    id: '7',
    avatar: '/images/avatar-anna-kim.webp',  
    name: 'Anna Kim',
    text: 'left the group',
    postName: '',
    groupName: 'Chess Club',
    message: '',
    image: '',
    time: '2 weeks ago',
    read: true,
  }
]; */}  

// Luego, creamos un componente de notificación
const NotificationCard: React.FC<{ notification: Notification }> = ({ notification }) => {
  return (
    <div className={`
      ${styles.notificationCard} 
      ${notification.read ? styles.read : styles.unread} 
      ${notification.image ? styles.gridWithImage : styles.gridWithoutimage}
    `}>
      <div className={styles.avatarContainer}> {/* div A */}
        <img src={notification.avatar} alt="Avatar" className={styles.userAvatar} />
      </div>
      <div className={styles.contentContainer}> {/* div B */}
        <div className={styles.textAndRedCircleContainer}>
          <div className={styles.textContent}> {/* div B1 */}
            <span className={`${styles.userName} ${styles.plusJakartaSans800}`}>{notification.name}</span>
            <span className={`${styles.notificationText} ${styles.plusJakartaSans500}`}>{notification.text}</span>
            {notification.postName && <span className={`${styles.postName} ${styles.plusJakartaSans800}`}>{notification.postName}</span>}
            {notification.groupName && <span className={`${styles.groupName} ${styles.plusJakartaSans800}`}>{notification.groupName}</span>}
          </div>
          <div>{!notification.read && <div className={styles.redCircle}></div>}</div>
        </div>
        <div className={styles.timeContent}> {/* div B2 */}
          <div className={`${styles.notificationTime} ${styles.plusJakartaSans500}`}>{notification.time}</div>
        </div>
        {notification.message && 
          <div className={styles.messageContent}> {/* div B3 */}
            <div className={`${styles.message} ${styles.plusJakartaSans500}`}>{notification.message}</div>
          </div>}
      </div>
      {notification.image && 
        <div className={styles.imageContainer}> {/* div C */}
          <img src={notification.image} alt="Chess game" className={styles.postImage} />
        </div>}
    </div>
  );
};

// Finalmente, creamos una página que muestre todas las notificaciones
const NotificationsPage: React.FC<{ 
  notifications: Notification[] }> = ({ notifications }) => {
    const [allRead, setAllRead] = React.useState(false);

    const handleMarkAllAsRead = () => {
      // Marca todas las notificaciones como leídas
      notifications.forEach(notification => notification.read = true);
      setAllRead(true);
    };
  
    const unreadCount = notifications ? notifications.filter(notification => !notification.read).length : 0;

    console.log("Mapping notifications: ", notifications);
  return (
    <div className={styles.notificationsPage}>
      <div className={styles.notificationsContainer}>
        <div className={styles.header}>
          <div className={styles.headerNotificationsNumber}>
            <div className={styles.notificationsHeaderText}>
              <h1 className={`${styles.notifications} ${styles.plusJakartaSans500}`}>Notifications</h1>
            </div>
            <div>
              {!allRead && (
              <span className={styles.unreadCount}>{unreadCount}</span>)}
            </div>
          </div>
          <div>
            {!allRead && (
            <button onClick={handleMarkAllAsRead} className={`${styles.markAllAsRead} ${styles.plusJakartaSans500}`}>
              Mark all as read
            </button>
            )}
          </div>
        </div>
        <div className={styles.notificationsSection}>
          <div>
            {notifications && notifications.map(notification => 
            <NotificationCard key={notification.id} notification={notification} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return <NotificationsPage notifications={notifications as Notification[]} />; // Pasar las notificaciones aquí
};

export default App;