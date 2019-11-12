function Airport(capacity = 10) {
  this.capacity = capacity
  this.planes = []
  }

  Airport.prototype.land = function(plane) {
    this.planes.push(plane)
    return plane;
  }

  Airport.prototype.takeOff = function(plane) {
    var index = this.planes.indexOf(plane)
    this.planes.splice(index,1)
    return plane;
  }

  Airport.prototype.spyTest = function(plane) {

    return plane.isFlying()
  }
