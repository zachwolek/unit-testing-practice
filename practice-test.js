var assert = require('chai').assert;
var findRemainder = require('./practice').findRemainder;
var startGPS = require('./practice').startGPS;
var createUser = require('./practice').createUser;
var makePizza = require('./practice').makePizza;

describe('practice', function () {
  describe('findRemainder', function () {
    it.skip('should calculate the remainder when dividing the first number by the second', function () {
      var remainder = findRemainder(12, 5);

      assert.equal(remainder, 2);
    });

    it.skip('should calculate the remainder for a different set of numbers', function () {
      var remainder = findRemainder(12, 7);

      assert.equal(remainder, 5);
    })

    it.skip('should return 0 if the number can be divided easily', function () {
      var remainder = findRemainder(20, 4);

      assert.equal(remainder, 0)
    });
  });

  describe('startGPS', function () {

    it.skip('should be able to take you to a new location', function () {
      var currentLocation = 'home';
      var newLocation = 'Starbucks';

      assert.equal(startGPS(currentLocation, newLocation), 'Taking you from home to Starbucks!  Getting directions now!')
    });

    it.skip('should be able to take you to a different location', function () {
      var currentLocation = 'Turing';
      var newLocation = 'Taco Bell';

      assert.equal(startGPS(currentLocation, newLocation), 'Taking you from Turing to Taco Bell!  Getting directions now!')
    });

    it.skip('should tell you if you are already at that location', function () {
      var currentLocation = 'Denver International Airport';
      var newLocation = 'Denver International Airport';

      assert.equal(startGPS(currentLocation, newLocation), 'You are already at the Denver International Airport!  Would you like to go somewhere else?')
    });
  });

  describe('createUser', function () {
    it.skip('should return a user object with a first name and last name', function() {
      var user = createUser('Jeremiah', 'Black')

      assert.equal(user.firstName, 'Jeremiah');
      assert.equal(user.lastName, 'Black');
    })

    it.skip('should return a user object with their name and birthdate', function () {
      var user = createUser('Kayla', 'Gordon', 'May 15th');

      assert.equal(user.firstName, 'Kayla');
      assert.equal(user.lastName, 'Gordon');
      assert.equal(user.birthDate, 'May 15th')
    });

    it.skip('should default with the user being signed off', function () {
      var user = createUser('Travis', 'Rollins', 'June 8th');

      assert.deepEqual(user, {
        firstName: 'Travis', 
        lastName: 'Rollins',
        birthDate: 'June 8th',
        onlineStatus: false
      });
    });
  });

  describe('makePizza', function() {
    it.skip('should be able to cook our pizza', function() {
      var pizza = { toppings: [], cooked: false };

      makePizza(pizza);

      assert.equal(pizza.cooked, true);
    })

    it.skip('should add toppings to our pizza', function() {
      var pizza = { toppings: [], cooked: false };

      makePizza(pizza, 'cheese');

      assert.equal(pizza.cooked, true);
      assert.deepEqual(pizza.toppings, ['cheese'])

      makePizza(pizza, 'pepperoni');
      makePizza(pizza, 'jalapenos');
      makePizza(pizza, 'pineapple');

      assert.deepEqual(pizza.toppings, ['cheese', 'pepperoni', 'jalapenos', 'pineapple']);
    });

    it.skip('should not be able to have more than 5 toppings', function() {
      var pizza = { toppings: [], cooked: false };

      makePizza(pizza, 'cheese');
      makePizza(pizza, 'pepperoni');
      makePizza(pizza, 'jalapenos');
      makePizza(pizza, 'pineapple');
      makePizza(pizza, 'black olives');

      assert.deepEqual(pizza.toppings, ['cheese', 'pepperoni', 'jalapenos', 'pineapple', 'black olives']);

      makePizza(pizza, 'ham');

      assert.deepEqual(pizza.toppings, ['cheese', 'pepperoni', 'jalapenos', 'pineapple', 'black olives']);
    });
  });
});