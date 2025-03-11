let arr = [1, 2, 3, 4];
function findMinElement(arr) {
    if (!Array.isArray(arr)) {
        return 'Giá trị không hợp lệ';
    }
    if (arr.length == 0) {
        return 'Mảng không chứa phần tử'
    }
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findMinElement(arr));