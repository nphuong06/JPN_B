let password = prompt('Nhập mật khẩu');
let newPassword = password.split('');
let countLowerCase = 0;
let countUpperCase = 0;
let countNumber = 0;
const isStrongPassword = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if ('a' <= arr[i] && arr[i] <= 'z') {
            countLowerCase++;
        }
        if ('A' <= arr[i] && arr[i] <= 'Z') {
            countUpperCase++;
        }
        if ('0' <= arr[i] && arr[i] <= '9') {
            countNumber++;
        }
    }
    if (countLowerCase === 0 || countNumber === 0 || countUpperCase === 0 || arr.length < 8) {
        console.log(`Password is false`);
    } else {
        console.log(`Password is true`);
    }
};

isStrongPassword(newPassword);