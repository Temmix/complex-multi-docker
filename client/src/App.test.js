import { render, screen } from "@testing-library/react";
import App from "./App";

function add(a, b) {
  return a + b;
}

test("renders learn react link", () => {});

describe("add function", () => {
  it("adds two positive numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("adds a positive and a negative number correctly", () => {
    expect(add(5, -3)).toBe(2);
  });

  it("adds two negative numbers correctly", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it("adds zero correctly", () => {
    expect(add(5, 0)).toBe(5);
  });
});
