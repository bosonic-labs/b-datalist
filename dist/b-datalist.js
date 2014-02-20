(function() {
    

    Bosonic.registerElement(
        'b-datalist',
        {
    get options() {
        return this.querySelectorAll('option');
    }
}
    );
}());