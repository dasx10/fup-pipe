export type Pipe <
    ExpectedParameters extends readonly unknown[] = unknown[],
    ExpectedResult     extends unknown            = unknown
> = {
    <
        Parameters extends ExpectedParameters,
        Result     extends ExpectedResult,
    >(executor: (...parameters: Parameters) => Result): {
        <LastResult>(f1 : (x: Result) => LastResult): (...arguments: Parameters) => LastResult;
        <LastResult>(...fs : [(x: Result) => unknown, ...((x) => unknown)[], (x) => Result]): (...arguments: Parameters) => LastResult;
        (...arguments: Parameters): Result;
    } 
    
    <
        Parameters extends ExpectedParameters,
        X1,
        Result     extends ExpectedResult,
    >(
        f0: (...parameters: Parameters) => X1,
        f1: (x: X1)                     => Result
    ): (...arguments: Parameters) => Result;

    <
        Parameters extends ExpectedParameters,
        X1, X2,
        Result     extends ExpectedResult,
    >(
        f0: (...parameters: Parameters) => X1,
        f1: (x: X1)                     => X2,
        f2: (x: X2)                     => Result
    ): (...arguments: Parameters) => Result;

    <
        Parameters extends ExpectedParameters,
        X1, X2, X3,
        Result     extends ExpectedResult,
    >(
        f0: (...parameters: Parameters) => X1,
        f1: (x: X1)                     => X2,
        f2: (x: X2)                     => X3,
        f3: (x: X3)                     => Result
    ): (...arguments: Parameters) => Result;

    <
        Parameters extends ExpectedParameters,
        X1, X2, X3, X4,
        Result     extends ExpectedResult,
    >(
        f0: (...parameters: Parameters) => X1,
        f1: (x: X1)                     => X2,
        f2: (x: X2)                     => X3,
        f3: (x: X3)                     => X4,
        f4: (x: X4)                     => Result
    ): (...arguments: Parameters) => Result;

    <
        Parameters extends ExpectedParameters,
        X1, X2, X3, X4, X5,
        Result     extends ExpectedResult,
    >(
        f0: (...parameters: Parameters) => X1,
        f1: (x: X1)                     => X2,
        f2: (x: X2)                     => X3,
        f3: (x: X3)                     => X4,
        f4: (x: X4)                     => X5,
        f5: (x: X5)                     => Result
    ): (...arguments: Parameters) => Result;

    <
        Parameters extends ExpectedParameters,
        X1, X2, X3, X4, X5, X6,
        Result     extends ExpectedResult,
    >(
        f0: (...parameters: Parameters) => X1,
        f1: (x: X1)                     => X2,
        f2: (x: X2)                     => X3,
        f3: (x: X3)                     => X4,
        f4: (x: X4)                     => X5,
        f5: (x: X5)                     => X6,
        f6: (x: X6)                     => Result
    ): (...arguments: Parameters) => Result;

    <
        Parameters extends ExpectedParameters,
        X1, X2, X3, X4, X5, X6, X7,
        Result     extends ExpectedResult,
    >(
        f0: (...parameters: Parameters) => X1,
        f1: (x: X1)                     => X2,
        f2: (x: X2)                     => X3,
        f3: (x: X3)                     => X4,
        f4: (x: X4)                     => X5,
        f5: (x: X5)                     => X6,
        f6: (x: X6)                     => X7,
        f7: (x: X7)                     => Result
    ): (...arguments: Parameters) => Result;

    <
        Parameters extends ExpectedParameters,
        X1, X2, X3, X4, X5, X6, X7, X8, X9,
        Result     extends ExpectedResult,
    >(
        f0: (...parameters: Parameters) => X1,
        f1: (x: X1)                     => X2,
        f2: (x: X2)                     => X3,
        f3: (x: X3)                     => X4,
        f4: (x: X4)                     => X5,
        f5: (x: X5)                     => X6,
        f6: (x: X6)                     => X7,
        f7: (x: X7)                     => X8,
        f8: (x: X8)                     => X9,
        f9: (x: X9)                     => Result
    ): (...arguments: Parameters) => Result;

    <
        Parameters extends ExpectedParameters,
        X1,
        Result     extends ExpectedResult
    >(
        f0    : (...parameters: Parameters) => X1,
        ...fs : [(x: X1) => unknown, ...((x) => unknown)[], (x) => Result]
    ): (...arguments: Parameters) => Result;
};

/**
 * @param    {[(...parameters: Parameters) => unknown,...((x) => unknown)[], (x) => Return]} executors
 * @returns  {(...args: Args) => FS extends readonly [...unknown[], infer Last] ? ReturnType<Last> : R2}
 * @template {unknown[]} Parameters
 * @template Return
 * @example
 * const repeatString  = x => x + x;
 * const repeatNumeric = pipe(String, repeatString);
 * 
 * const result = repeatNumeric(2); // '22'
 */
declare const pipe: Pipe;
export default pipe;