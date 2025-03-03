// 1. Chuỗi + số => Nối chuỗi thành "javascript5"
let result = "javascript" + 5;
console.log(result); // "javascript5"

// 2. Chuỗi - số => Không thể thực hiện phép toán => NaN
result = "javascript" - 1;
console.log(result); // NaN

// 3. Chuỗi số + số => Ép số thành chuỗi rồi nối thành "32"
result = "3" + 2;
console.log(result); // "32"

// 4. Chuỗi số - số => Chuyển chuỗi thành số rồi trừ: 5 - 4 = 1
result = "5" - 4;
console.log(result); // 1

// 5. isNaN("123") => "123" là số hợp lệ => false
result = isNaN("123");
console.log(result); // false

// 6. isNaN("hello") => "hello" không phải số => true
result = isNaN("hello");
console.log(result); // true

// 7. Number.isNaN("123") => Kiểm tra trực tiếp, không chuyển đổi => false
result = Number.isNaN("123");
console.log(result); // false

// 8. Number.isNaN(NaN) => NaN là NaN => true
result = Number.isNaN(NaN);
console.log(result); // true
