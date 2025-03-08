let arr = [];
let choice;
do {
    choice = parseInt(prompt(`\n===== MENU =====\n1. Nhập mảng\n2. In mảng\n3. In số chẵn và tính tổng\n4. Tìm min max\n5. In số nguyên và tính tổng\n6. Đếm số xuất hiện\n7. Chèn phần tử\n8. Thoát\nNhập lựa chọn: `));

    if (choice === 1) {
        let n = parseInt(prompt("Nhập số phần tử: "));
        arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
        }
    }

    else if (choice === 2) {
        console.log("Mảng hiện tại:", arr);
    }

    else if (choice === 3) {
        let evens = arr.filter(x => x % 2 === 0);
        let sum = evens.reduce((a, b) => a + b, 0);
        console.log("Các phần tử chẵn:", evens, "Tổng:", sum);
    }

    else if (choice === 4) {
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        console.log("Giá trị nhỏ nhất:", min, "Giá trị lớn nhất:", max);
    }

    else if (choice === 5) {
        let integers = arr.filter(Number.isInteger);
        let sum = integers.reduce((a, b) => a + b, 0);
        console.log("Các số nguyên:", integers, "Tổng:", sum);
    }

    else if (choice === 6) {
        let num = parseInt(prompt("Nhập số cần kiểm tra: "));
        let count = arr.filter(x => x === num).length;
        console.log(`Số ${num} xuất hiện ${count} lần trong mảng.`);
    }

    else if (choice === 7) {
        let value = parseInt(prompt("Nhập giá trị cần thêm: "));
        let index = parseInt(prompt("Nhập vị trí cần chèn: "));
        if (index >= 0 && index <= arr.length) {
            arr.splice(index, 0, value);
            console.log("Mảng sau khi thêm:", arr);
        } else {
            console.log("Vị trí không hợp lệ!");
        }
    }

    else if (choice === 8) {
        console.log("Thoát chương trình.");
    }

    else {
        console.log("Lựa chọn không hợp lệ!");
    }

} while (choice !== 8);
