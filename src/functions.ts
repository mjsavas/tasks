/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    const Celsius: number = (temperature - 32) * (5 / 9);
    return Celsius;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let total = 0;
    if (first > 0) {
        total = first + total;
    }
    if (second > 0) {
        total = second + total;
    }
    if (third > 0) {
        total = third + total;
    }
    return total;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    const ns: string = message.toUpperCase() + "!";
    return ns;
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    let ans: boolean;
    const last = message.charAt(message.length - 1);
    return last === "?" ? (ans = true) : (ans = false);
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    const t1: string = "yes";
    const t2: string = "YES";
    const f1: string = "no";
    const f2: string = "NO";

    let resp: boolean | null = null;
    if (word === t1 || word === t2) {
        resp = true;
    }
    if (word === f1 || word === f2) {
        resp = false;
    }
    return resp;
}
