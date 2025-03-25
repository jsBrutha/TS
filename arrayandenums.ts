let a: number[] = [1, 2, 3];
let b: Array<number> = [1, 2, 3];
let c: (string | number)[] = [1, "a"];
let d: Array<string | number> = [1, "a"];

// turples: arrays with a fixed shape andf fixed length
let e: [number, string] = [1, "a"];
let f: [number, string, number] = [1, "a", 2];
let g: [number, string, ...number[]] = [1, "a", 2, 3, 4, 5];
let h: [number, string, number?] = [1, "a"];

//  readonly arrays and turples

let i: readonly number[] = [1, 2, 3];
// i.push(4); // error
type readonlyTuple = readonly [number, string]

