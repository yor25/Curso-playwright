import { expect, Locator, Page } from "@playwright/test";
import { waitForDebugger } from "inspector";

export class Project{

    private readonly userNameTextBox : Locator
    private readonly passwordTextBox : Locator
    private readonly loginButton : Locator
    private readonly shoppingCarIcon : Locator
    //https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    constructor (page: Page){
        this.userNameTextBox = page.getByRole('textbox', {name: 'Username'})
        this.passwordTextBox = page.getByRole('textbox', {name: 'Password'})
        this.loginButton = page.locator("xpath=//button[contains(@class, 'oxd-button')]")
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


    async loginWithCredentials(userName: string, password: string){
        await this.fillUserName(userName);
        await this.fillPassword(password);
        await this.clickLogin();
    }
}