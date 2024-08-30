const calculatePriceNew = (quantity) => {
  let totalCost = 0;
  let remainingQuantity = quantity;
  
  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 50);
    totalCost += units * 50;  // $50 for the first 50 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 50);
    totalCost += units * 100;  // $100 for the next 50 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 100);
    totalCost += units * 150;  // $150 for the next 100 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    totalCost += remainingQuantity * 300;  // $300 for anything beyond 200 units
  }
  
  return totalCost;
}



const calculatePriceOld = (quantity) => {
  let totalCost = 0;
  let remainingQuantity = quantity;
  
  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 30);
    totalCost += units * 35;  // $50 for the first 50 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 20);
    totalCost += units * 50;  // $100 for the next 50 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 25);
    totalCost += units * 70;  // $150 for the next 100 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 25);
    totalCost += units * 90;  // $150 for the next 100 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 50);
    totalCost += units * 110;  // $150 for the next 100 units
    remainingQuantity -= units;
  } 
  if (remainingQuantity > 0) {
    let units = Math.min(remainingQuantity, 50);
    totalCost += units * 120;  // $150 for the next 100 units
    remainingQuantity -= units;
  }

  if (remainingQuantity > 0) {
    totalCost += remainingQuantity * 125;  // $300 for anything beyond 200 units
  }
  
  return totalCost;
}

const test = () =>{
  let unit = 305
  Logger.log(calculatePriceOld(unit))
  Logger.log(calculatePriceNew(unit))
}
