import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import NotificationsPage from "../page.tsx";
import notifications from "../notifications.json";

describe("NotificationsPage Component - Jest", () => {
  test("renders notifications correctly", () => {
    const { getByText } = render(<NotificationsPage notifications={notifications} />);

    expect(getByText("Notifications")).toBeInTheDocument();
    expect(getByText(notifications.length.toString())).toBeInTheDocument();

    notifications.forEach((notification) => {
      expect(getByText(notification.name)).toBeInTheDocument();
      expect(getByText(notification.text)).toBeInTheDocument();
      expect(getByText(notification.time)).toBeInTheDocument();

      if (notification.postName) {
        expect(getByText(notification.postName)).toBeInTheDocument();
      }

      if (notification.groupName) {
        expect(getByText(notification.groupName)).toBeInTheDocument();
      }

      if (notification.message) {
        expect(getByText(notification.message)).toBeInTheDocument();
      }
    });
  });
});
