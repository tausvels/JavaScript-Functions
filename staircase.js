function StairCase(n) {
    var s = '';
    for (var i = 1; i <= n; i++) {
            s += ' '.repeat(n - i) + '#'.repeat(i)  + '\n';
    }
    return s;
}