import test from "node:test";
import assert from "node:assert/strict";

import { calculateOnboardingCompletion } from "../src/onboarding.js";

test("calculates completion as a rounded percentage", () => {
  assert.equal(
    calculateOnboardingCompletion([
      { id: "profile", completed: true },
      { id: "invite-team", completed: true },
      { id: "billing", completed: false },
    ]),
    67,
  );
});

test("returns zero for empty or missing progress", () => {
  assert.equal(calculateOnboardingCompletion([]), 0);
  assert.equal(calculateOnboardingCompletion(), 0);
});
