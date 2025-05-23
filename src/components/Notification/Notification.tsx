import css from "./Notification.module.css";
import type { NotificationProps } from "../../types/notificationProps";

export default function Notification({ message }: NotificationProps) {
  return (
    <div className={css.container}>
      <p className={css.message}>{message}</p>
    </div>
  );
}
