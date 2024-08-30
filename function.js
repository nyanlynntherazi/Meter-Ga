const calculatePriceNew = (quantity) => {
  let totalCost = 0;
  let remainingQuantity = quantity;
  
  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 50);
    totalCost += units * 50;  // 50 Kyat for the first 50 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 50);
    totalCost += units * 100;  // 100 Kyat for the next 50 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 100);
    totalCost += units * 150;  // 150 Kyat for the next 100 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    totalCost += remainingQuantity * 300;  // 300 Kyat for anything beyond
  }
  
  return totalCost;
}



const calculatePriceOld = (quantity) => {
  let totalCost = 0;
  let remainingQuantity = quantity;
  
  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 30);
    totalCost += units * 35;  // 35 Kyat for the first 30 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 20);
    totalCost += units * 50;  // 50 Kyat for the next 20 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 25);
    totalCost += units * 70;  // 70 Kyat for the next 25 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 25);
    totalCost += units * 90;  // 90 Kyat for the next 25 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 50);
    totalCost += units * 110;  // 110 Kyat for the next 50 units
    remainingQuantity -= units;
  } 
  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 50);
    totalCost += units * 120;  // 120 Kyat for the next 50 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    totalCost += remainingQuantity * 125;  // 125 for anything beyond
  }
  
  return totalCost;
}

const test = () =>{
  let unit = 305
  Logger.log(calculatePriceOld(unit))
  Logger.log(calculatePriceNew(unit))
}
