const puppeteer = require('puppeteer')

const dataModule = require('./mongooseDataModule')

test('Should connect to database', () => {
  return dataModule.connect().then(()=> {
      expect(1).toBe(1)
  }).catch(error => {
    expect(1).toBe(2)
  })
},20000);

test('Should not register user with empty email and passwordo database', () => {
  return dataModule.registerUser('','').then(()=> {
      expect(1).toBe(2)
  }).catch(error => {
    expect(1).toBe(1)
  })
});

test('Should not register user with empty email ', () => {
  return dataModule.registerUser('','123').then(()=> {
      expect(1).toBe(2)
  }).catch(error => {
    expect(1).toBe(1)
  })
});

test('Should not register user with empty password ', () => {
  return dataModule.registerUser('manis@gmail.com','').then(()=> {
      expect(1).toBe(2)
  }).catch(error => {
    expect(1).toBe(1)
  })
});

test('Should  register user with right password and email ', () => {
  return dataModule.registerUser('ms@gmail.com','12345').then(()=> {
      expect(1).toBe(1)
  }).catch(error => {
    expect(1).toBe(2)
  })
});

test('Should open the Website and login', async () => {
  const browser = await puppeteer.launch({
    headless:false,
    slowMo:200,
    args:['--window-size=1366,768']
  })
  const page = await browser.newPage()
  await page.goto('http://localhost:5000/login')
  //await page.click('a[href^="/login"]')
  await page.click('input[placeholder^="Enter email Name"]')
  await page.type('input[placeholder^="Enter email Name"]','manis@gmail.com')
  await page.click('input[placeholder^="Password"]')
  await page.type('input[placeholder^="Password"]','123')
  await page.click('button.black')
  await page.waitForTimeout(2000)
  const textResult = await page.url()
  expect(textResult).toBe('http://localhost:5000/admin')
},50000);
