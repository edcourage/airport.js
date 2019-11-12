describe("Airport", function(){

  var heathrow;

  beforeEach(function() {
    heathrow = new Airport()
    plane = "big plane"
});


  describe("land", function(){

    it("returns a plane thats landed", function() {
      expect(heathrow.land(plane)).toEqual(plane)
    })
  })

  describe("take off", function(){

    it("returns a plane that has taken off", function() {
      expect(heathrow.takeOff(plane)).toEqual(plane)
    })
  })



})
