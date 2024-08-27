function sum(a) {
    var sum = 0; //start at 0 instead of a[0] to take empty lists into account
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}
