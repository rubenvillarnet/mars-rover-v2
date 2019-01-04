// Rover Object Goes Here
// ======================
rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  var dir;
  switch(rover.direction){
    case "N": 
      rover.direction = "W";
      dir = "West";
      break;
    case "W":
      rover.direction = "S";
      dir = "South";
      break;
    case "S":
      rover.direction = "E";
      dir = "East";
      break;
    case "E":
      rover.direction = "N";
      dir = "North";
  }

  console.log("Rover if facing now " + dir + " direction.")
}

function turnRight(rover){
  console.log("turnRight was called!");
  var dir;
  switch(rover.direction){
    case "N": 
      rover.direction = "E";
      dir = "East";
      break;
    case "W":
      rover.direction = "N";
      dir = "North";
      break;
    case "S":
      rover.direction = "W";
      dir = "West";
      break;
    case "E":
      rover.direction = "S";
      dir = "South";
  }

  console.log("Rover if facing now " + dir + " direction.")
}

function moveForward(rover){
  console.log("moveForward was called");
  var previousCoords = [rover.x, rover.y]
  switch(rover.direction){
    case "N":
      rover.y -= 1;
      break;
    case "W":
      rover.x -= 1;
      break;
    case "S":
      rover.y += 1;
      break;
    case "E":
      rover.x += 1;
      break;
  }
  if(checkPosition(rover)){
    showCurrentPosition(rover);
    rover.travelLog.push(previousCoords);
  }else{
    console.log("Invalid coordinates! Command cancelled");
    rover.x = previousCoords[0];
    rover.y = previousCoords[1];
  }
  
}

function checkPosition(rover){
  if((0 <= rover.x && rover.x < 10) && (0 <= rover.y && rover.y < 10)){
    return true;
  }else{
    return false;
  }
}

function showCurrentPosition(rover){
  console.log("Rover's current coordinates are [" + rover.x + "," + rover.y + "].");
}

function commandsList(commands){
  for(var i = 0; i < commands.length ; i++){
    if(commands[i] == "r"){
      turnRight(rover);
    } else if(commands[i] == "l"){
      turnLeft(rover);
    }else if(commands[i] == "f"){
      moveForward(rover);
    }else{
      console.log("Invalid command."+ " [" + commands[i] + "] is not a valid command.");
    }
  }

  console.log("List of commands processed. Rover's travel log is: ");
  for(var i = 0; i < rover.travelLog.length; i++){
    console.log("["+ rover.travelLog[i][0] + "," + rover.travelLog[i][1] + "]");
  }
  rover.travelLog = [];
}