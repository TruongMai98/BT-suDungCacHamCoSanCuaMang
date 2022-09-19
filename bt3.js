let n = prompt("Nhập 1 câu");
let str = n.toString();
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let result = [];
/*for (let i = 0; i < str.length; i++) {
    if (upper.indexOf(str[i]) !== -1) {
        result.push(str[i].toLowerCase());
    } else if (lower.indexOf(str[i]) !== -1) {
        result.push(str[i].toUpperCase());
    } else {
        result.push(str[i]);
    }
}
console.log(result.join(''));
document.write(result.join(''));*/
for (let i = 0; i < str.length; i++) {
    if (upper.includes(str[i])) {
        result.push(str[i].toLowerCase());
    } else if (lower.includes(str[i])) {
        result.push(str[i].toUpperCase());
    } else {
        result.push(str[i]);
    }
}
console.log(result.join(''));
document.write(result.join(''));