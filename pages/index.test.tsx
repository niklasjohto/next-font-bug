import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "./index";

test("render without @next/font error", () => {
  render(<Home />);
});
