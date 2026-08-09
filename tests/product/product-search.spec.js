import { test, expect } from "@playwright/test";
import LoginPage from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductsPage";
import dotenv from "dotenv";

dotenv.config();

let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.loginUser(process.env.EMAIL, process.env.PASSWORD);
});

// Test case for searching a product
test.skip("Search for a product", async ({ page }) => {
  const productsPage = new ProductsPage(page);

  await productsPage.navigateToProductsPage();
  await productsPage.searchProduct("Hammer");

  await expect(
    page.getByText("Hammer", { exact: false }).first(),
  ).toBeVisible();
});

// Test case for sorting products by category
test("Sort products by category", async ({ page }) => {
  const productsPage = new ProductsPage(page);

  await productsPage.navigateToProductsPage();
  await productsPage.selectCategory("Power Tools");
  await page.waitForTimeout(2000);
  const productTitles = await productsPage.getProductTitles();
  const firstProductTitle = productTitles[0].trim();
  expect(firstProductTitle).toContain("Sheet Sander");
});
