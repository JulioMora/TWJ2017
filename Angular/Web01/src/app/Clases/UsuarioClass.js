"use strict";
/**
 * Created by julio_000 on 07/06/2017.
 */
var UsuarioClass = (function () {
    function UsuarioClass(nombre, id, createdAt, updatedAt, editar) {
        this.nombre = nombre;
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.editar = editar;
    }
    return UsuarioClass;
}());
exports.UsuarioClass = UsuarioClass;
//# sourceMappingURL=UsuarioClass.js.map