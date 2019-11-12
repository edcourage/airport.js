function Plane() {
  this._flying = false;
}

Plane.prototype.landedAt = function(airport) {
  this._flying = false;
  return airport
}

Plane.prototype.takenOffFrom = function(airport) {
  this._flying = true;
  return airport
}

Plane.prototype.isFlying = function() {
  return this._flying
}
