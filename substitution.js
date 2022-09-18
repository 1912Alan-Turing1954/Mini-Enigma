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
    0: 'a',
    1: 'b',
    2: 'c',                        
    3: 'd',
    4: 'e', 
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j',
    10: 'k',
    11: 'l', 
    12: 'm', 
    13: 'n',
    14: 'o',
    15: 'p',
    16: 'q',
    17: 'r',
    18: 's',
    19: 't',
    20: 'u',
    21: 'v',
    22: 'w',
    23: 'x',
    24: 'y',
    25: 'z', 
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
    



function substitution() {
    let spindleOffSet=0;
    let rotatePoint=25;
    let spindleCounter = spindleOffSet;
    
    var message = document.getElementById("input").value;
    
    let messageArr = message.toLowerCase();

    let messageArr2 = messageArr.split('').filter(el => el !== ' ' ).map(el => wirePairs[el]);

    let messageArr3 = messageArr2.map(el => {
        let inputSpindle = (el + spindleCounter) % 25;
        let answer = inputSpindle;
        spindleCounter = (spindleCounter + 1) % 25;

    if (spindleCounter === rotatePoint) {
        spindleCounter = (spindleCounter - 24) % 25;
    }
        
        return answer;
    });

    return messageArr3.map(el => alphabet[el]).join('').toUpperCase();

    // let morse = messageArr2.map(el => alphabet[el]);

    // return morse.map(el => morseCode[el]).join('');
};

// console.log(substitution('' , 0, 25));