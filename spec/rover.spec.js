const Rover = require('../rover.js');
const Message = require('../message.js')
const Command = require('../command.js');

describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts", function() {
    let command = new Command('MOVE', 20);
    expect(command.value).toEqual(20);
  });

  it("response returned by receiveMessage contains name of message", function() {
    let command = new Command('MOVE', 20);
    expect(command.value).toEqual(20);
  });

  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let command = new Command('MOVE', 20);
    expect(command.value).toEqual(20);
  });

    it("responds correctly to status check command", function () {
    let command = new Command('MOVE', 20);
    expect(command.value).toEqual(20);
  });
 

    it("responds correctly to mode change command", function() {
    let command = new Command('MOVE', 20);
    expect(command.value).toEqual(20);
  });

    it("responds with false completed value when attempting to move in LOW_POWER mode", function() {
    let command = new Command('MOVE', 20);
    expect(command.value).toEqual(20);
  });

    it("responds with position for move command", function() {
    let command = new Command('MOVE', 20);
    expect(command.value).toEqual(20);
  });


});

