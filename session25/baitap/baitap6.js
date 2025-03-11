let text = prompt('Mời bạn nhập vào chuỗi bất kì');
let textArr = [...text];

const isPalindrome = (textArr, length) => {
    let start = 0;
    let end = length - 1;
    while (start < end) {
        let temp = textArr[start];
        textArr[start] = textArr[end];
        textArr[end] = temp;
        start++;
        end--;
    }
    return textArr.join('');
}

if (text === isPalindrome(textArr, textArr.length)) {
    console.log('Đối xứng');
}
else {
    console.log('Không đối xứng');
}