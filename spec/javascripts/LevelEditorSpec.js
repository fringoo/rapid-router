/**
 * Created by ruth.wall on 26/08/2015.
 */

describe("Level Editor AddRemoveRoad", function() {

    it('exists', function(){
        expect(ocargo.LevelEditor.AddRemoveRoad).toBeDefined();
    });

    it('has a click handler function', function(){
        expect(ocargo.LevelEditor.AddRemoveRoad.handleMouseDown).toBeDefined();
    });

});