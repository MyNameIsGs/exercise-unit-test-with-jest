const {fromEuroToDollar,fromDollarToYen,fromYenToPound,} =require('./app.js');

test('Un Euro debería ser 1.206 dólares',()=>{
   
    expect(fromEuroToDollar(3.5)).toBe(4.2)
})
test('Un Dolar debería ser 106.157 Yenes',()=>{
    expect (fromDollarToYen(8)).toBe(849.256)
})
test('Un Yen Debería ser 0.0078 Pounds',()=>{
    expect (fromYenToPound(500)).toBe(3.9)
})