class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('[data-test="login-submit"]');
    }

    async navigateToLoginPage() {
        await this.page.goto('/');
        await this.page.goto('/auth/login');
    }

    async loginUser(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

module.exports = LoginPage;