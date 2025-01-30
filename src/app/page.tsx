'use client'

import styles from "./page.module.css";
import React from 'react';
import Image from 'next/image';
import notifications from './notifications.json';

// Primero, definimos una interfaz para las notificaciones
interface Notification {
  id: string;
  avatar: string;
  name: string;         
  text: string;         
  postName?: string;    // Opcional
  groupName?: string;   // Opcional
  message?: string;     // Opcional
  image?: string;       // Opcional
  time: string;
  read: boolean;
}

const NotificationCard: React.FC<{ notification: Notification }> = ({ notification }) => {
  return (
    <div className={`
      ${styles.notificationCard} 
      ${notification.read ? styles.read : styles.unread} 
      ${notification.image ? styles.gridWithImage : styles.gridWithoutimage}
    `}>
      <div className={styles.avatarContainer}> {/* div A */}
        <Image src={notification.avatar} alt="Avatar" className={styles.userAvatar} width={90} 
  height={90} />
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
          <Image src={notification.image} alt="Chess game" className={styles.postImage} width={90} 
  height={90}/>
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