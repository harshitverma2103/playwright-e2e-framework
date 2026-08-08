import { test, expect } from "@playwright/test";
import { userData } from "../../utils/UserDetails.js";
import RegisterPage from "../../pages/RegisterPage.js";


test("Register with valid data", async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.navigateToRegisterPage();
  await registerPage.fillRegistrationForm(userData);

  await expect(page).toHaveURL(/\/auth\/login/);
});