// 'this' inside the second function will refer to the global object
// which is not what we would expect, use 'self' to avoid this issue


var c = {
  name: 'The c object',
  log: function() {
    this.name = 'Update c object';
    console.log(this);

    var setname = function(newname) {
      this.name = newname;
    }
    setname('Updated again! The c object');
    console.log(this)
  }
};


// in this example we use 'self' to store the 'this' variable
// this is a good way to work around the issue above
var c = {
  name: 'The c object',
  log: function() {
    var self = this;

    self.name = 'Update c object';
    console.log(self);

    var setname = function(newname) {
      self.name = newname;
    }

    setname('Updated again! The c object');
    console.log(self);
  }
};