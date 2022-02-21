//import { Color } from "react-bootstrap/esm/types";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const lasti: number = numbers.length - 1;
    const numbersn = [numbers[0], numbers[lasti]];
    const nums = numbersn.filter(Boolean);
    return nums;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const numbersn = numbers.map((num: number): number => num * 3);
    return numbersn;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numbersn = numbers.map(Number);
    const nums = numbersn.map((number) => (isNaN(number) ? 0 : number));
    return nums;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numbersn = amounts.map((str: string) => str.replace("$", ""));
    const num = numbersn.map(Number);
    const nums = num.map((number) => (isNaN(number) ? 0 : number));
    return nums;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const a1 = messages.filter(
        (string) => string.charAt(string.length - 1) !== "?"
    );
    const a2 = a1.map((string) =>
        string.charAt(string.length - 1) === "!" ? string.toUpperCase() : string
    );
    return a2;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const fil = words.filter((string) => string.length < 4);
    const num: number = fil.length;
    return num;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const a1 = colors.map((string) =>
        string !== "red" && string !== "blue" && string !== "green" ? "0" : "1"
    );
    const nums = a1.map(Number);
    const final = nums.reduce((run: number, num: number) => run + num, 0);
    return final === nums.length ? true : false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const nums = addends.map((number) => (number === undefined ? 0 : number));
    const sum = nums.reduce((run: number, num: number) => run + num, 0);
    const str: string = sum + "=" + nums;
    const strf1 = str.replaceAll(",", "+");
    return strf1.charAt(strf1.length - 1) === "=" ? strf1 + "0" : strf1;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const vc = [...values];
    const vf = [...values];
    const neg = values.findIndex((number): boolean => number < 0);
    const pos = vc
        .splice(0, neg)
        .reduce((run: number, num: number) => run + num, 0);
    const sum = vf.reduce((run: number, num: number) => run + num, 0);
    neg === -1 ? vf.splice(values.length, 0, sum) : vf.splice(neg + 1, 0, pos);
    return vf;
}
