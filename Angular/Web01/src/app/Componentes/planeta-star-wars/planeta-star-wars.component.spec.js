"use strict";
var testing_1 = require('@angular/core/testing');
var planeta_star_wars_component_1 = require('./planeta-star-wars.component');
describe('PlanetaStarWarsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [planeta_star_wars_component_1.PlanetaStarWarsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(planeta_star_wars_component_1.PlanetaStarWarsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=planeta-star-wars.component.spec.js.map