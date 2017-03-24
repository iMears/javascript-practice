var Dictionary = require('./dictionary.js');

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.add = function(other) {
  return new Point(this.x + other.x, this.y + other.y);
}

function Grid(width, height) {
  this.width = width;
  this.height = height;
  this.cells = new Array(width * height);
}

Grid.prototype.valueAt = function(point) {
  return this.cells[point.y * this.width + point.x];
}

Grid.prototype.setValueAt = function(point, value) {
  this.cells[point.y * this.width + point.x] = value;
}

Grid.prototype.isInside = function(point) {
  return point.x >= 0 && point.y >= 0 && point.x < this.width && point.y < this.width;
}

Grid.prototype.moveValue = function(from, to) {
  this.setValueAt(to, this.valueAt(from));
  this.setValueAt(from, undefined);
}

Grid.prototype.each = function(action) {
  for (var y = 0; y < this.height; y++) {
    for (var x = 0; x < this.height; x++) {
      var point = new Point(x, y);
      action(point, this.valuesAt(point));
    }
  }
}


//--------------------------Dictionary-----------------------
//-----------------------------------------------------------

// function(object, action) {
//   for (var property in object) {
//     if (object.hasOwnProperty(property)) {
//       action(property, object[property]);
//     }
//   }
// }

// function Dictionary(startValues) {
//   this.values = startValues || {};
// }

// Dictionary.prototype.store = function(name, value) {
//   this.values[name] = value;
// };

// Dictionary.prototype.lookup = function(name) {
//   return this.values[name];
// };

// Dictionary.prototype.contains = function(name) {
//   return Object.prototype.propertyIsEnumerable.call(this.values, name);
// };

// Dictionary.prototype.each = function(action) {
//   forEachIn(this.values, action);
// };

//-------------------------- -----------------------
//-----------------------------------------------------------


var directions = new Dictionary(
  {"n" : new Point(0, -1),
   "ne": new Point(1, -1),
   "e" : new Point(1, 0),
   "se": new Point(1, 1),
   "s" : new Point(0, 1),
   "sw": new Point(-1, 1),
   "w" : new Point(-1, 0),
   "nw": new Point(-1, -1)
  });


function StupidBug() {};

StupidBug.prototype.character = "o";

StupidBug.prototype.act = function(surroundings) {
  return {type: "move", directions: "s"};
}


//--------------------------------------

var wall = {};
wall.character = "#";

function elementFromCharacter(character) {
  if (character == " ") {
    return undefined;
  } else if (character == "#") {
    return wall;
  } else if (character == "o") {
    return new StupidBug();
  }
}

function characterFromElement(element) {
  if (element == undefined) {
    return " ";
  } else {
    return element.character;
  }
}

function Terrarium(plan) {
  var grid = new Grid(plan[0].length, plan.length);
  for (var y = 0; y < plan.length; y++) {
    var line = plan[y];
    for (var x = 0; x < plan.length; x++) {
      grid.setValueAt(new Point(x, y), elementFromCharacter(line.charAt(x)));
    }
  }
  this.grid = grid;
}

Terrarium.prototype.toString = function() {
  var characters = [];
  var endOfLine = this.grid.width - 1;
  this.grid.each(function(point, value) {
    characters.push(characterFromElement(value));
    if (point.x == endOfLine) {
      characters.push("\n");
    }
  });
  return characters.join("");
};

Terrarium.prototype.listActingCreatures = function() {
  var found = [];
  this.grid.each(function(point, value) {
    if (value != undefined && value.act) {
      found.push({object: value, point: point});
    }
  });
  return found;
};

Terrarium.prototype.listSurroundings = function(center) {
  var result = {};
  var grid = this.grid;
  directions.each(function(name, direction) {
    var place = center.add(direction);
    if (grid.isInside(place))
      result[name] = characterFromElement(grid.valueAt(place));
    else
      result[name] = "#";
  });
  return result;
};

Terrarium.prototype.processCreature = function(creature, point) {
  var action = creature.act(this.listSurroundings(point));
  if (action.type == "move" && directions.contains(action.direction)) {
    var to = point.add(directions.lookup(action.direction));
    if (this.grid.isInside(to) && this.grid.valueAt(to) == undefined) {
      this.grid.moveValue(point, to);
    }
  }
  else {
    throw new Error("Unsupported action: " + action.type);
  }
};

Terrarium.prototype.step = function() {
  forEach(this.listActingCreatures(), bind(this.processCreature, this));
};

function bind(func, object) {
  return function(){
    return func.apply(object, arguments);
  };
}

var thePlan =
   ["############################",
    "#     #    #        o     ##",
    "#                          #",
    "#                          #",
    "#         #                #",
    "#         #####            #",
    "#    ####                  #",
    "#           ##o            #",
    "# o         #      o ###   #",
    "#       #                  #",
    "############################"];

var terrarium = new Terrarium(thePlan);
terrarium.step();
print(terrarium);