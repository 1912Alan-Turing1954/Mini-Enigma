const wirePairs = {
    a: 0,
    b: 1,
    c: 2,
    d: 3, 
    e: 4, 
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12, 
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
};

const alphabet = {
    0: 't',
    1: 'b',
    2: 'q',                        
    3: 'k',
    5: 'o', 
    4: 'd',
    6: 'r',
    7: 'v',
    8: 'h',
    9: 'i',
    10: 'l',
    11: 's', 
    12: 'x', 
    13: 'a',
    14: 'u',
    15: 'y',
    16: 'g',
    17: 'c',
    18: 'j',
    19: 'f',
    20: 'n',
    21: 'e',
    22: 'w',
    23: 'p',
    24: 'z',
    25: 'm', 
};

const morseCode = {
    a: '*-',
    b: '-***',
    c: '-*-*',
    d: '-**', 
    e: '*', 
    f: '**-*',
    g: '--*',
    h: '****',
    i: '**',
    j: '*---',
    k: '-*-',
    l: '*-**',
    m: '--', 
    n: '-*',
    o: '---',
    p: '*--*',
    q: '--*-',
    r: '*-*',
    s: '***',
    t: '-',
    u: '**-',
    v: '***-',
    w: '*--',
    x: '-**-',
    y: '-*--',
    z: '--**',
};

// let secretMessages = {
//     1: 'o six hundred hours weather today is clear rain in the evening heil hitler',
//     2: 'hello world',
//     3: 'six degrees north and 3 degrees west',
// };



function u_substitution(message) {
    let messageArr = message.split('').map(el => wirePairs[el]);

    let messageArr2 = messageArr.map(el => alphabet[el]);
    
    let codedMessage = messageArr2.map(el => morseCode[el]).join(' ');

    return codedMessage;
}

console.log(u_substitution('hello world'));
