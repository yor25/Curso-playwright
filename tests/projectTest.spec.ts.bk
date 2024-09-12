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


test('tablas', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  const logTest = new Project(page);
  await logTest.loginWithCredentials('Admin', 'admin123');
  
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  
  const logo = await page.getByRole('button', { name: 'upgrade' });
  await expect(logo).toBeVisible();
  
  await page.getByRole('link', { name: 'Admin' }).click();
  
  // Espera explícita para que la tabla esté presente en el DOM
  await page.waitForSelector('.oxd-table .oxd-table-body .oxd-table-cell');

  // Selecciona todos los elementos que coincidan con el selector
  const elements = await page.$$('.oxd-table .oxd-table-body .oxd-table-cell');
  
  // Verifica si hay elementos en la lista
  if (elements.length === 0) {
    console.log('No se encontraron elementos');
  } else {
    for (const element of elements) {
      const text = await element.textContent();
      if (text !== null) {
        console.log(text.trim());
      } else {
        console.log('El elemento no contiene texto');
      }
    }
  }
});