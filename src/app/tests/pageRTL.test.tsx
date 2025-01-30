import { render, screen } from "@testing-library/react";
import NotificationsPage from "../page";
import notifications from "../notifications.json";

describe("NotificationsPage Component - React Testing Library", () => {
  test("renders notifications correctly", () => {
    render(<NotificationsPage notifications={notifications} />);

    expect(screen.getByText("Notifications")).toBeInTheDocument();
    expect(screen.getByText(notifications.length.toString())).toBeInTheDocument();

    notifications.forEach((notification) => {
      expect(screen.getByText(notification.name)).toBeInTheDocument();
      expect(screen.getByText(notification.text)).toBeInTheDocument();
      expect(screen.getByText(notification.time)).toBeInTheDocument();

      if (notification.postName) {
        expect(screen.getByText(notification.postName)).toBeInTheDocument();
      }

      if (notification.groupName) {
        expect(screen.getByText(notification.groupName)).toBeInTheDocument();
      }

      if (notification.message) {
        expect(screen.getByText(notification.message)).toBeInTheDocument();
      }
    });
  });
});
