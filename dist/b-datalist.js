(function () {
    var BDatalistPrototype = Object.create(HTMLElement.prototype, {
            options: {
                enumerable: true,
                get: function () {
                    return this.querySelectorAll('option');
                }
            }
        });
    window.BDatalist = document.registerElement('b-datalist', { prototype: BDatalistPrototype });
}());