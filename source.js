const curryLimitCore = require('fup-curry-limit-core');

const pipe = function (f, f1, ...executors) {
    switch (arguments.length) {
        case 0  : return pipe;
        case 1  : return function (f1, ...executors) {
            if (arguments.length > 0) {
                if (typeof f1 !== 'function') return f(f1, ...executors);
                return pipe(f, f1, ...executors);
            }
            return pipe(f);
        }
        default : return Object.defineProperty((...args) => {
            let result = f1(f(...args));
            const { length } = executors;
            if (length > 0) {
                let index = 0;
                while (index < length) {
                    result = functions[index](result);
                    index++;
                }
            }
            return result;
        }, "length", {
            enumerable   : false,
            configurable : false,
            writable     : false,
            value        : f.length,
        });
    }
}

module.exports = pipe;