describe("Plane", function(){

  var superFastPlane;

  beforeEach(function() {
    superFastPlane = new Plane("Super Fast Plane")
    airport = 'Heathrow'
});


  describe("landedAt", function(){

    it("returns where the plane has landed", function() {
      expect(superFastPlane.landedAt(airport)).toEqual(airport)
    })

    it("changes the status to not flying", function(){
      superFastPlane.takenOffFrom(airport);
      superFastPlane.landedAt(airport);
      expect(superFastPlane.isFlying()).toEqual(false)
    })


  })

  describe("takenOffFrom", function(){

    it("returns the airport the plan has just left from", function() {
      expect(superFastPlane.takenOffFrom(airport)).toEqual(airport)
    })

    it("changes the status to flying", function(){
      superFastPlane.takenOffFrom(airport);
      expect(superFastPlane.isFlying()).toEqual(true)
    })

  })




})
