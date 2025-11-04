/**
 * Checks if a given year is valid.
 *
 * A valid year must be a positive integer and cannot exceed the current year.
 * If the year is invalid, an error is thrown with a descriptive message.
 *
 * @param year - The year to validate.
 * @returns `true` if the year is valid.
 * @throws {Error} If the year is less than or equal to 0, or greater than the current year.
 */
export function isValidYear(year: number): boolean {
  const currentYear = new Date().getFullYear();
  if (year <= 0 || year > currentYear) {
    throw new Error(`Year must be between 1 and ${currentYear}`);
  }
  return Number.isInteger(year);
}

/**
 * Validates if a given amount is a valid monetary value.
 *
 * This function checks if the provided amount is a finite number
 * and ensures it does not have more than two decimal places.
 *
 * @param amount - The monetary value to validate.
 * @returns `true` if the amount is valid.
 * @throws {Error} If the amount is not a finite number.
 * @throws {Error} If the amount has more than two decimal places.
 */
export function isValidMoney(amount: number): boolean {
  if (!Number.isFinite(amount)) {
    throw new Error("Amount must be a finite number");
  }
  const decimalPlaces = (amount.toString().split(".")[1] || "").length;
  if (decimalPlaces > 2) {
    throw new Error("Amount must not have more than two decimal places");
  }
  return true;
}
