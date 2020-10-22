const dataModule = require('./mongooseDataModule')

test('Should connect and Resolve', () => {
  dataModule.connect().then(()=> {
      expect(1).toBe(1)
  }).catch(error => {
    expect(1).toBe(2)
  })
},20000);
