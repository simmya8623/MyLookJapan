import {browser, element} from "protractor";
import Config from './Flipkart.data';
describe('Login to the application', () => {
    console.log("simmy");
    beforeEach(function(){
        browser.ignoreSynchronization = true;
        browser.driver.get(Config.MAIN_URL1);
    });

    it('should click on email field', ()=>{
        //Click on Cross icon
        element(by.xpath(`//input[@id='email']`)).click();
        //Search for Shoes from the search bar
        element(by.xpath(`//input[@id='email']`)).sendKeys('Acuvue');
        browser.driver.sleep(10000);
        element(by.xpath(`//input[@id='password']`)).sendKeys('Jjlooks@987');
        element(by.xpath(`//span[contains(text(),'Submit')]`)).click();
        browser.driver.sleep(10000);
        browser.getTitle().then(title=>{
        expect(title).toEqual('ACUVUE® Define My Look');
        }).then(()=>{
            console.log("title verified");
            element(by.xpath(`//*[@id="root"]/div/main/div/div/div/div/div[1]/div/div/img`)).click().then(()=>{
                browser.driver.sleep(10000);
                element(by.xpath(`//*[@id="root"]/div/main/div/div[3]/div/span[2]`)).click().then(()=>{
                    browser.driver.sleep(20000);
                    //click on DBA icon
                    element(by.xpath(`//ul[@class='list-reset side-menu-items  ']//li[2]//a[1]`)).click().then(()=>{
                        //click on the answers of  the first quiz question
                         element(by.xpath(`//div[@class='quiz-item quiz-item--1']//div[2]/label[1]//div[1]/div[1]/img`)).click().then(()=>{
                            //click on the answers of  the second quiz question
                                 element(by.xpath(`//div[@class='quiz-item quiz-item--2']//div[2]/label[1]//div[1]/div[1]/img`)).click().then(()=>{
                                     //click on the answers of  the third quiz question                                    
                                      element(by.xpath(`//div[@class='quiz-item quiz-item--3']//div[2]/label[1]//div[1]/div[1]/img`)).click().then(()=>{
                                          //click on the answers of  the fourth quiz question                                       
                                            element(by.xpath(`//div[@class='quiz-item quiz-item--4']//div[2]/label[1]//div[1]/div[1]/img`)).click().then(()=>{
                                                //click on the answers of  the fourth quiz question                                               
                                                element(by.xpath(`//div[@class='quiz-item quiz-item--5']//div[2]/label[1]//div[1]/div[1]/img`)).click().then(()=>{
                                                    //click at the next button on the Quiz oage
                                                    element(by.xpath(`//html//body//div//div//main//div//div//div//div//div//div//div//button//span`)).click();
                                                    browser.driver.sleep(5000);
                                                })
                                                browser.driver.sleep(10000);                          
                                            })

                                      })
                                 })
                         })
                    })
                    
                })
                
                

               
                // browser.switchTo().frame(element(by.xpath(`//iframe[@id='YMK-module-iframe']`))).click();
                // browser.driver.sleep(20000);
                // .then(()=>{
                //     element(by.xpath(`//div[contains(@class,'frame-content')]//div//div//div//div//div//div//a//div//div[contains(text(),'Choose')]`)).click();
                      
                // })
                console.log("Clicked Model");
                // browser.getTitle().then(title2=>{
                //   console.log(title2); 
                
            })
            .then(() => done())
          .catch(console.error)    
            
        })

    })
}); 