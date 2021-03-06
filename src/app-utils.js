const sessionIds = new Map();
const uuid = require('node-uuid');

module.exports.splitStringResponse = function (str) {
    if (str.length <= 320) {
        return [str];
    }
    return chunkString(str, 300);
}

module.exports.setSessionId = function (sender) {
    if (!sessionIds.has(sender)) {
        sessionIds.set(sender, uuid.v1());
    }
}

module.exports.getSessionId = function (sender) {
    return sessionIds.get(sender)
};

module.exports.isObjectDefined = function (obj) {
    if (typeof obj == 'undefined') {
        return false;
    }

    if (obj == 'undefined' || obj == 'null') {
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