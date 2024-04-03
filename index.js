function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let farePrice = 0;
    
    if (distance <= 400) {
      farePrice = 0;
    } else if (distance > 400 && distance <= 2000) {
      farePrice = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      farePrice = 25;
    } else {
      return 'cannot travel that far';
    }
    
    return farePrice;
  }
  