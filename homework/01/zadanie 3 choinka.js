let height = 5;

for (let i = 1; i <= height; i++) {
  let spacesCount = height - i;
  let hashCount = i;
  let spaces = "";
  for (let j = 0; j < spacesCount; j++) {
    spaces += " ";
  }
  let hashes = "";
  for (let k = 0; k < hashCount; k++) {
    hashes += "#";
  }
  console.log(spaces + hashes,hashes);
}
