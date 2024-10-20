class LoginPage{

    constructor(page)
    {
    
        this.page = page;
        this.loginInbutton = page.locator("[type='submit']");
        this.userName = page.locator('#email');
        this.password = page.locator('#password');
        
    
    }
    
     


    async goTo()
    {
        await this.page.goto("https://sandbox-login.brighthr.com/login/");
    }
    
    
    async validLogin(username,password)
    {
    
        await this.userName.fill(username);
        await this.password.fill(password);
        await this.loginInbutton.click();
        await this.page.waitForLoadState('networkidle');
    
    }
    
    
    
    }
    
    module.exports = {LoginPage};