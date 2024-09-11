import { expect, Locator, Page } from "@playwright/test";
import { waitForDebugger } from "inspector";

export class LoginPage{

    private readonly userNameTextBox : Locator
    private readonly passwordTextBox : Locator
    private readonly loginButton : Locator
    private readonly shoppingCarIcon : Locator

    constructor (page: Page){
        this.userNameTextBox = page.getByRole('textbox', {name: 'Username'})
        this.passwordTextBox = page.getByRole('textbox', {name: 'Password'})
        this.loginButton = page.getByRole('button', {name: 'Login'})
        this.shoppingCarIcon = page.locator("xpath=//a[contains(@class, 'shopping_cart_link')]")
    }

    async fillUserName (userName: string){
        await this.userNameTextBox.fill(userName);
    }

    async fillPassword (password: string){
      await  this.passwordTextBox.fill(password);
    }

    async clickLogin (){
       await this.loginButton.click();
    }

    
    async checkLogin(){
        await expect(this.shoppingCarIcon).toBeVisible();
     }

    async loginWithCredentials(userName: string, password: string){
        await this.fillUserName(userName);
        await this.fillPassword(password);
        await this.clickLogin();
        await this.checkLogin();
    }
}