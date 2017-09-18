import { sum }  from './../components/sum'

test('adds 1 + 2 to equal 3', () => {
  const getApi = require('./../components/GetApi')
  getApi.getApiSum = jest.fn().mockImplementation((a,b) => {
      const c = a+b  
      return  c
  });
  expect(sum(1, 2)).toBe(3)
})