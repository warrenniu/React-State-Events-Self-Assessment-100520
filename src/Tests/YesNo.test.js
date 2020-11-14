import { render, fireEvent, screen } from '@testing-library/react'
import React from "react";
import App from '../App';

test("Mounts image and statement to DOM", async () => {
    let { container } = render(<App />);
    expect(screen.getByText("learn problem solving, syntax, reading documentation")).toBeTruthy();
    fireEvent.click(container.querySelector('img'));
    await screen.findByText("google the answer");
    expect(screen.getByText("google the answer")).toBeTruthy();
});
