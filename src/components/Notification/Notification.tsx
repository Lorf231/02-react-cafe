import css from "./Notification.module.css";
import type { NotificationProps } from "../../test/NotificationPropsTypes";

export default function Notification({ message }: NotificationProps) {
  return (
    <div className={css.container}>
      <p className={css.message}>{message}</p>
    </div>
  );
}
