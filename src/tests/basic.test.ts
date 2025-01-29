// import test from "node:test";
import { describe, expect, test } from "@jest/globals";
import { sum } from "../math";

test("adds 1 + 2 to equal 3", () => {
  expect(sum([1, 2, 5])).toBe(8);
});
