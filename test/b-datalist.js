// This is the only option to force IE9 to have <option>s in something other than <optgroup> or <select>
// You just can't do: document.body.innerHTML = '<b-datalist><option value="test"></b-datalist>'
function addDatalistOption(datalist, value) {
    var opt = document.createElement('option');
    opt.setAttribute('value', value);
    datalist.appendChild(opt);
}

function createDatalist(options, id) {
    var datalist = document.createElement('b-datalist');
    if (id) {
        datalist.setAttribute('id', id);
    }
    if (options) {
        options.forEach(function(value) {
            addDatalistOption(datalist, value);
        });
    }
    document.body.appendChild(datalist);
    return datalist;
}

describe('b-datalist', function() {

    it("may be created without options", function() {
        var datalist = createDatalist();
        expect(datalist).to.have.property('options');
        expect(datalist.options.length).to.equal(0);
    });

    it("may be created with options", function() {
        var datalist = createDatalist(['toto', 'titi']);
        expect(datalist).to.have.property('options');
        expect(datalist.options.length).to.equal(2);
    });

    it("should update its options property when options are added", function() {
        var datalist = createDatalist(['toto', 'titi']);
        addDatalistOption(datalist, 'tata');
        expect(datalist.options.length).to.equal(3);
    });
});