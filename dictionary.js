console.log("Dictionary Loaded...")

function forEachIn(object, action) {
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      action(property, object[property]);
    }
  }
}

function Dictionary(startValues) {
  this.values = startValues || {};
}

Dictionary.prototype.store = function(name, value) {
  this.values[name] = value;
};

Dictionary.prototype.lookup = function(name) {
  return this.values[name];
};

Dictionary.prototype.contains = function(name) {
  return Object.prototype.propertyIsEnumerable.call(this.values, name);
};

Dictionary.prototype.each = function(action) {
  forEachIn(this.values, action);
};

module.exports = Dictionary;
