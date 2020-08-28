/* @flow */

function foo(strs: Iterable<string>): void {
  for (var s: string of strs) {
    console.log(s);
  }
}

var m: Map<string, number> = new Map();

foo(m.keys());

const has10: boolean = m.keys().map(
  (key: string) => parseInt(key)
).some(
  (key: number) => key === 10
);
