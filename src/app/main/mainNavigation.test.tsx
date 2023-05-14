import MainNavigation from "./mainNavigation";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";


describe("Main Page Navigation", () => {
    it("check all element are in DOM", () => {
      render(<MainNavigation/>);
      // check if all components are rendered
      expect(screen.getByTestId("link-main-user")).toBeInTheDocument();
      expect(screen.getByTestId("link-main-products")).toBeInTheDocument();
      expect(screen.getByTestId("link-main-shops")).toBeInTheDocument();
      expect(screen.getByTestId("link-main-tomain")).toBeInTheDocument();
    });
});