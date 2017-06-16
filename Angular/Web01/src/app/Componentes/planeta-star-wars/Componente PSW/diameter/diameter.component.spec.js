"use strict";
var testing_1 = require('@angular/core/testing');
var diameter_component_1 = require('./diameter.component');
describe('DiameterComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [diameter_component_1.DiameterComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(diameter_component_1.DiameterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=diameter.component.spec.js.map