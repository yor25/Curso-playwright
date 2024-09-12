    import { test, expect } from '@playwright/test';
    import { LoginPage } from './pageObjects/LoginPage';

    test('interceptor', async ({ page }) => {
    await page.on("request", req => {
        console.log(req.url());
    });
    //https://www.saucedemo.com/static/media/bike-light-1200x1500.37c843b0.jpg
    //https://www.saucedemo.com/static/media/bolt-shirt-1200x1500.c2599ac5.jpg
    // await page.route("https://www.saucedemo.com/static/media/bike-light-1200x1500.37c843b0.jpg", (route) => route.abort());
    // await page.route("https://www.saucedemo.com/static/media/bolt-shirt-1200x1500.c2599ac5.jpg", (route) => route.abort());
    await page.route("**/*.{png,jpg,jpeg,svg}", (route) => route.abort());
    await page.goto('https://www.saucedemo.com/');
    const loginPage = new LoginPage(page);

    // Completa los campos de nombre de usuario y contraseña y haz click en el botón de inicio de sesión
    await loginPage.fillUserName('standard_user');
    await loginPage.fillPassword('secret_sauce');
    await loginPage.clickLogin();

    //screen 
    await page.screenshot({path: 'login.png', fullPage: true})
});

test('interceptor 2', async ({ page }) => {
    await page.route("https://demoqa.com/BookStore/v1/Books", (route) => {
        route.fulfill(
            {
                status: 304,
                headers:{
                    'Content-type': 'application/json'
                },
                body: `
                {
    "books": [
        {
            "isbn": "9781449325862",
            "title": "KAMASUTRA",
            "subTitle": "A Working Introduction",
            "author": "Abella Danger",
            "publish_date": "2020-06-04T08:48:39.000Z",
            "publisher": "O'Reilly Media",
            "pages": 500,
            "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
            "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
        }
    ]
}
                `
            }
        )
    });
    await page.goto('https://demoqa.com/books'); //https://demoqa.com/BookStore/v1/Books
    await page.pause();
    //screen 
    await page.screenshot({path: 'books.png', fullPage: true});
});