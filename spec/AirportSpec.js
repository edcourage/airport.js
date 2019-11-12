describe("Airport", function(){

  var heathrow;
  var planeReal;

  beforeEach(function() {
    heathrow = new Airport()
    // plane = jasmine.createSpy("bigPlane")
    planeReal = new Plane()
    plane = jasmine.createSpyObj("plane",['isFlying'])
});




  describe("land", function(){

    it("returns a plane thats landed", function() {
      expect(heathrow.land(plane)).toEqual(plane)
    })

    it('returns true', function() {
      var plane_2;
      // spyOn(plane, 'plane').and.callFake(function(isFlying){return true})
      spyOn(plane_2, 'isFlying').andReturn(true)

      // spyOn(plane,'isFlying').and.returnValue(true);

      expect(heathrow.spyTest(plane_2)).toEqual(true)


    })



  })



  describe("take off", function(){

    it("returns a plane that has taken off", function() {
      expect(heathrow.takeOff(plane)).toEqual(plane)
    })
  })





})
