const isPrime = (a) => {
    if (!Number.isInteger(a) || a < 0) {
        return 'Dữ liệu không hợp lệ';
    }
    let count = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            count++;
        }
    }
    if (count == 2) {
        return `${a} là số nguyên tố`;
    } else {
        return `${a} không phải là số nguyên tố`;
    }
}
let a = +prompt('Nhập số nguyên dương bất kì');
console.log(isPrime(a));