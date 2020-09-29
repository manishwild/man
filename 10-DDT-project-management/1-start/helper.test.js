const puppetter = require('puppeteer')

const  helper =  require ("./helper");

test('should return false because input is empty', () => {
    const result = helper.validator('fgfgfg',true,true)
    expect(result).toBe(false)
});
test('should return true', () => {
    const result = helper.validator('manish',false,true)
    expect(result).toBe(true)
});
test('should return false because input is not a number', () => {
    const result = helper.validator('Manish',true,true)
    expect(result).toBe(false)
});

test('should return [user name is manish ,and the age is 34]',() => {
    const result = helper.joiner('manish','34')
    expect(result).toBe('user name is manish ,and the age is 34')
})
test('should show element after adding right data ana click the buttotn',async() => {
    const browser = await(puppetter.launch({
        headless:false,
    slowMo:200,
    args:['--window-size=1920,1080']

    }))
    const page = await browser.newPage()
    await page.goto('http://127.0.0.1:5500/index.html')
    await page.click('input#userNameInp')
    await page.type('input#userNameInp','manish')
    await page.click('input#ageInp')
    await page.type('input#ageInp','34')
    await page.click('button#addBtn')
    const textResult = await page.$eval('#userList',el =>el.textContent)
    expect(textResult).toBe('user name is manish ,and the age is 34')
    
},20000)