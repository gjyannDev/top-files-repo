import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FeedbackForm from "../FeedbackForm";

describe("feedback form", () => {
  it("render form elements", () => {
    render(<FeedbackForm />);

    expect(
      screen.getByRole("heading", { name: /Send Feedback/i })
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your feedback/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("check button is disabled", () => {
    render(<FeedbackForm />);

    const submit_button = screen.getByRole("button", { name: /submit/i });

    expect(submit_button).toBeDisabled();
  });

  it("check input value and enabled button", () => {
    render(<FeedbackForm />);

    const text_area = screen.getByPlaceholderText(/Enter your feedback/i);
    const submit_button = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(text_area, { target: { value: "test message" } });
    expect(submit_button).toBeEnabled();
  });

  it("submitting the form", () => {
    render(<FeedbackForm />);

    const text_area = screen.getByPlaceholderText(/Enter your feedback/i);
    const submit_button = screen.getByRole("button", { name: /submit/i });
    fireEvent.change(text_area, { target: { value: "test message" } });
    fireEvent.click(submit_button);

    expect(screen.getByRole("button", { name: /sending/i })).toBeDisabled();
  });
});
