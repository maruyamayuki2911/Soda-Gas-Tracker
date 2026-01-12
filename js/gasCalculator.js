import { ERROR_MESSAGES } from "./constants/errorMessages.js";

export function validateInput(value, label) {
  if (!Number.isFinite(value) || value < 0) {
    throw new Error(ERROR_MESSAGES.INVALID_NUMBER(label));
  }
}