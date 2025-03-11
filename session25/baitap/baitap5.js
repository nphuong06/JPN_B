let arr = [1, 2, -1, -2, 5];
const countPositiveInteger = (arr) => {
    if (!Array.isArray(arr)) {
        return 'Dữ liệu không hợp lệ';
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            count++;
        }
    }
    return count === 0 ? 'Mảng không có số nguyên dương' : `Mảng có ${count} số nguyên dương`;
};
console.log(countPositiveInteger(arr));