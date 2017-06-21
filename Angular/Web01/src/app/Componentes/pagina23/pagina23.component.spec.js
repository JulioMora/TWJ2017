"use strict";
var testing_1 = require('@angular/core/testing');
var pagina23_component_1 = require('./pagina23.component');
describe('Pagina23Component', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [pagina23_component_1.Pagina23Component]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(pagina23_component_1.Pagina23Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pagina23.component.spec.js.map