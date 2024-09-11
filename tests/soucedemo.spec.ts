import { test, expect } from '@playwright/test';
import { LoginPage } from './pageObjects/LoginPage';

test('has title and completes the checkout process', async ({ page }, testInfo) => {
  // Navega a la página de inicio de sesión
  await page.goto('https://www.saucedemo.com/');

  // Crea una instancia de LoginPage
  const loginPage = new LoginPage(page);

  // Completa los campos de nombre de usuario y contraseña y haz click en el botón de inicio de sesión
   await loginPage.fillUserName('standard_user');
   await loginPage.fillPassword('secret_sauce');
  await loginPage.clickLogin();
  // Espera a que los elementos estén presentes en la página de inventario
  await page.waitForSelector('#inventory_container .inventory_item');

  // Selecciona un elemento aleatorio
  const itemContainer = await page.locator('#inventory_container .inventory_item').all();
  const randomIndex = Math.floor(Math.random() * itemContainer.length);
  const randomItem = itemContainer[randomIndex];

  // Obtén la descripción, nombre y precio del artículo aleatorio
  const expectedDesc = await randomItem.locator('.inventory_item_desc').innerText();
  const expectedName = await randomItem.locator('.inventory_item_name').innerText();
  const expectedPrice = await randomItem.locator('.inventory_item_price').innerText();

  console.log(`price: ${expectedPrice}`);
  console.log(`name: ${expectedName}`);
  console.log(`description: ${expectedDesc}`);

  // Agrega el artículo al carrito y navega al carrito
  await randomItem.locator('role=button[name="Add to cart"]').click();
  await page.locator('a.shopping_cart_link').click();

  // Verifica que el botón de checkout sea visible
  await expect(page.locator('role=button[name="Checkout"]')).toBeVisible();

  // Verifica la información del artículo en la página de carrito
  const actualName = await page.locator('.inventory_item_name').innerText();
  const actualDesc = await page.locator('.inventory_item_desc').innerText(); 
  const actualPrice = await page.locator('.inventory_item_price').innerText();

  expect(actualName).toEqual(expectedName);
  expect(actualDesc).toEqual(expectedDesc);
  expect(actualPrice).toEqual(expectedPrice);

  // Procede al checkout
  await page.locator('role=button[name="Checkout"]').click();
  await page.locator('role=textbox[name="First Name"]').fill('Yorlan');
  await page.locator('role=textbox[name="Last Name"]').fill('Fallas');
  await page.locator('role=textbox[name="Zip/Postal Code"]').fill('Navarro');
  await page.locator('role=button[name="Continue"]').click();
  await page.locator('role=button[name="Finish"]').click();

  // Verifica el mensaje final
  const thankU = await page.locator('.complete-header').innerText();
  //sacar screenshot
  //await page.screenshot({path: 'screenshots/hasTitleAndCompletesTheCheckoutProcess.png', fullPage:true})
  //segunda manera
  // await testInfo.attach('hasTitleAndCompletesTheCheckoutProcess', {
  //   body: await page.screenshot(),
  //   contentType: 'image/png'
  // })
  expect(thankU).toEqual('Thank you for your order!');
});

test('funciones', async ({ page }) => {
  // Navega a la página de inicio de sesión
  await page.goto('https://www.saucedemo.com/');

  // Crea una instancia de LoginPage
  const logTest = new LoginPage(page);
  await logTest.loginWithCredentials('standard_user', 'secret_sauce');
});

