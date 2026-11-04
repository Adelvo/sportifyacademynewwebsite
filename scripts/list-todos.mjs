// Lists every [TODO: ...] marker left in the site content. Run: npm run todos
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

let total = 0;
for (const file of walk("content")) {
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      for (const match of line.match(/\[TODO:[^\]]*\]/g) ?? []) {
        total += 1;
        console.log(`${file}:${i + 1}  ${match}`);
      }
    });
}
console.log(`\n${total} TODO marker(s) in /content`);
