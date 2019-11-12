describe("Airport", function(){

  var heathrow;
  var planeReal;

  beforeEach(function() {
    heathrow = new Airport()
    // plane = jasmine.createSpy("bigPlane")
    planeReal = new Plane()
    plane = jasmine.createSpy()
});




  describe("land", function(){

    it("returns a plane thats landed", function() {
      expect(heathrow.land(plane)).toEqual(plane)
    })

    it('returns true', function() {
      // var plane_2;

      plane = jasmine.createSpyObj('plane',{'isFlying':true})
      expect(heathrow.spyTest(plane)).toEqual(true)


    })



  })



  describe("take off", function(){

    it("returns a plane that has taken off", function() {
      expect(heathrow.takeOff(plane)).toEqual(plane)
    })
  })





})
