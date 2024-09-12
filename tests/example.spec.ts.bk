import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('mercado libre', async ({ page }) => {
//https://www.mercadolibre.com.co/
  await page.goto('https://www.mercadolibre.com.co');

  await page.locator('input[id=\'cb1-edit\']').fill('Iphone');

  await page.keyboard.press('Enter');

  await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible();
 // await page.pause();

  const titulos = await page.locator('//ol[contains(@class, \'ui-search-layout\')]//li//h2').allInnerTexts();

  console.log('Tamaño', titulos.length);
  for(let titulo of titulos){
      console.log('Titulo:', titulo);
    }
}); 

test('you tube', async ({ page }) => {
  //ir a youtube
    await page.goto('https://www.youtube.com');
    //await page.waitForTimeout(9000);
  //buscar somos de calle
    await page.locator('input[id=\'search\']').fill('Somos de calle');
    //await page.pause();
    //await page.waitForTimeout(5000);
    //await page.keyboard.press('Enter');
    //dar click al boton buscar, 1er click para salir del buscador y segundo click pa buscar
    await page.locator('button[id=\'search-icon-legacy\']').click();
    await page.locator('button[id=\'search-icon-legacy\']').click();
    //await page.pause();
    //await page.waitForTimeout(5000);
  //tomar el primer elemento de los resultados
    await page.waitForSelector('a[id=\'video-title\']', { timeout: 5000 });
    const primerElemento = page.locator('a[id=\'video-title\']').first();
    // Obtén el texto del primer elemento
    const textoPrimerElemento = await primerElemento.innerText();
    //await page.pause();
    // Verificar que el texto del primer elemento contenga sea el video de somos de calle
    await expect(textoPrimerElemento).toContain('Somos de Calle - Daddy Yankee ( Video Oficial)');
  });

  test('mercado libre locator 2', async ({ page }) => {
    //https://www.mercadolibre.com.co/
      await page.goto('https://www.mercadolibre.com.co');

      await page.getByRole('link', {name: 'Ingresa', exact: true}).click();

    await page.pause();
    });