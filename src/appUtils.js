module.exports.splitStringResponse = function(str) {
    if (str.length <= 320) {
        return [str];
    }

    return chunkString(str, 300);
}

module.exports.isObjectDefined(obj) {
    if (typeof obj == 'undefined') {
        return false;
    }
    if (!obj) {
        return false;
    }
    return obj != null;
}


function chunkString(s, len) {
    var curr = len, prev = 0;

    var output = [];

    while (s[curr]) {
        if (s[curr++] == ' ') {
            output.push(s.substring(prev, curr));
            prev = curr;
            curr += len;
        }
        else {
            var currReverse = curr;
            do {
                if (s.substring(currReverse - 1, currReverse) == ' ') {
                    output.push(s.substring(prev, currReverse));
                    prev = currReverse;
                    curr = currReverse + len;
                    break;
                }
                currReverse--;
            } while (currReverse > prev)
        }
    }
    output.push(s.substr(prev));
    return output;
}