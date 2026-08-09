class ProductsPage {
  constructor(page) {
    this.page = page;

    // Search locators
    this.searchInput = page.locator("#search-query");
    this.searchButton = page.getByRole("button", { name: "Search" });

    // Category checkboxes
    this.categoryCheckboxes = page.locator('input[name="category_id"]');

    // Product list
    this.productTitles = page.locator('[data-test="product-name"]');
  }

  async navigateToProductsPage() {
    await this.page.goto("/");
  }

  // Search for a product
  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  // Select any category dynamically
  async selectCategory(categoryName) {
    await this.page.getByLabel(categoryName, { exact: true }).check();
  }

  // Get all product titles
  async getProductTitles() {
    return await this.productTitles.allTextContents();
  }
}

module.exports = ProductsPage;
