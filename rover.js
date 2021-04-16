class Rover {
  constructor(position, mode) {
    this.position = position;
    if (!position) {
      throw Error("Position name required.");
    }
    this.mode = mode;
  }

  receiveMessage(message){
    let response ={
      message: message.name,
      results:[]
    }
  }
   
}


module.exports = Rover;

