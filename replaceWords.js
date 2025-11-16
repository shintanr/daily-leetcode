// Example 1:

// Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// Output: "the cat was rat by the bat"
// Example 2:

// Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
// Output: "a a b c"

var replaceWords = function(dictionary, sentence) {
    let rootSet = new Set(dictionary);
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        for (let j = 1; j <= words[i].length; j++) {
            let prefix = words[i].substring(0, j);
            if (rootSet.has(prefix)) {
                words[i] = prefix;
                break;
            }
        }
    }
    return words.join(" ");
}
console.log(replaceWords(["cat","bat","rat"], "the cattle was rattled by the battery"));

console.log(replaceWords(["a","b","c"], "aadsfasf absbs bbab cadsfafs"));

