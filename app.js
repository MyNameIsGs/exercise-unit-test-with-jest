let oneEuroIs ={
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
    }
    
  const fromEuroToDollar = function (valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
  }
  const fromDollarToYen = function (valueInDollar){
    let valueInYen = valueInDollar * 106.157;
    return valueInYen;
  }
    
  const fromYenToPound = function (valueInYen){
    let valueInPound = valueInYen * 0.0078
    return valueInPound
  }

    module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}