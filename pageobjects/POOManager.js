const{EmployePage} = require('./EmployePage')
const{LoginPage} = require('./LoginPage')

class POOManager
{
constructor(page)
{
    this.page = page;
    this.employePage = new EmployePage(this.page);
    this.loginPage = new LoginPage(this.page);
      
}



getEmployePage()
{
    return this.employePage;
}


getLoginPage()
{
    return this.loginPage;
}



}
module.exports = {POOManager};