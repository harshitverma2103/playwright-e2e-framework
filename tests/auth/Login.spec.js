import LoginPage from '../../pages/LoginPage';
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('Login with valid credentials', async ({ page }) => {
  const login = new LoginPage(page);

  await login.navigateToLoginPage();
  await login.loginUser(process.env.EMAIL, process.env.PASSWORD);

  await expect(page).toHaveURL(/\/account/);
}); 