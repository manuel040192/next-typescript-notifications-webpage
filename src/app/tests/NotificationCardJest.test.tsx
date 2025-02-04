import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import NotificationCard from "../page.tsx";
import notifications from "../notifications.json";

describe("NotificationCard Component - Jest", () => {
  test.each(notifications)("renders NotificationCard for %s", (notification) => {
    const { getByText, getByAltText } = render(
      <NotificationCard notification={notification} />
    );

    expect(getByAltText("Avatar")).toBeInTheDocument();
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

    if (notification.image) {
      expect(getByAltText("Chess game")).toBeInTheDocument();
    }
  });
});
