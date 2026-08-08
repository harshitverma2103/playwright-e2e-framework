class RegisterPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.DOB = page.locator('#dob');
    this.country = page.locator('#country');
    this.postalCode = page.locator('#postal_code');
    this.houseNumber = page.locator('#house_number');
    this.streetName = page.locator('#street');
    this.state = page.locator('[data-test="state"]')
    this.city = page.locator('#city');
    this.state = page.getByLabel('State');
    this.phoneNumber = page.locator('#phone');
    this.email = page.locator('#email');
    this.password = page.locator('#password');
    this.registerButton = page.locator('[data-test="register-submit"]');
  }

  async navigateToRegisterPage() {
    await this.page.goto('/');
    await this.page.getByRole('link', { name: 'Sign in' }).click();
    await this.page.getByRole('link', { name: 'Register your account' }).click();
  }

  async registerUser(userData) {
    await this.firstName.fill(userData.firstName);
    await this.lastName.fill(userData.lastName);
    await this.DOB.fill(userData.DOb);
    await this.country.selectOption(userData.country);
    await this.postalCode.fill(userData.postalCode);
    await this.houseNumber.fill(userData.houseNumber);
    await this.streetName.fill(userData.streetName);
    await this.city.fill(userData.city);
    await this.state.fill(userData.state);
    await this.phoneNumber.fill(userData.phoneNumber);
    await this.email.fill(userData.email);
    await this.password.fill(userData.password);
    await this.registerButton.click();
  }
}

module.exports = RegisterPage;