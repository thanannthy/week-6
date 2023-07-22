var expect = chai.expect;
describe("MyFunctions", function(){
    describe("FindWinner", function() {
        it( "Should concatenate the two parameters", function() {
            var x = findWinner(winner);
            expect(x).to.equall(winner);
        });
    });
});