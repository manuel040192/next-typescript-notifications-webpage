import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import NotificationCard from "../page.tsx";
import notifications from "../notifications.json";

describe("NotificationCard Component - React Testing Library", () => {
  test.each(notifications)("renders NotificationCard for %s", (notification) => {
    render(<NotificationCard notification={notification} />);

    expect(screen.getByAltText("Avatar")).toBeInTheDocument();
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

    if (notification.image) {
      expect(screen.getByAltText("Chess game")).toBeInTheDocument();
    }
  });
});
