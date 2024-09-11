import { test, expect } from '@playwright/test';
import { Project } from './pageObjects/Project';

test('page object model, screen e interceptor', async ({ page }) => {
  // Navega a la página de inicio de sesión
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // Crea una instancia de LoginPage
   const logTest = new Project(page);
  await logTest.loginWithCredentials('Admin', 'admin123');
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.route("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary", (route) => route.abort()); 
  //await page.pause();
  const logo = await page.getByRole('button', {name: 'upgrade'});
  await expect(logo).toBeVisible();
  await page.screenshot({path: 'login.png', fullPage: true}); 
});

