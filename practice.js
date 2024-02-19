function startGPS(currentLocation, newLocation) {
    if (currentLocation === newLocation){
      return `You are already at the ${currentLocation}! Would you like to go somewhere else?`
    };
    return `Taking you from ${currentLocation} to ${newLocation}! Getting directions now!`;
}

function createUser(firstName,lastName, birthDate) { 
  user = {
    firstName,
    lastName,
    birthDate,
    onlineStatus: false,
  }
  return user;
}

function makePizza(pizza, toppings) {
  pizza.cooked = true;
  if (pizza.toppings.length >= 5){
    return pizza
  } else
  pizza.toppings.push(toppings)
  return pizza 
}

function findRemainder(num1, num2) {
  remainder = num1 % num2
  return remainder
}

module.exports = {
  startGPS,
  createUser,
  makePizza,
  findRemainder
}