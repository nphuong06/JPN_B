let users = [`trang@gmail.com`];
let email = prompt('Nhập email đăng kí');
const checkEmail = (email) => {
    let found = false;
    let check = false;
    let count = false;
    if (email.slice(email.length - 4) === '.com') {
        found = true;
    }
    if (email.slice(email.length - 3) === '.vn') {
        check = true;
    }
    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            count = true;
        }
    }
    if (found == true || check == true && count == true) {
        for (let i = 0; i < users.length; i++) {
            if (users[i] === email) {
                console.log(`Email đã tồn tại`);
                return;
            } else {
                users.push(email);
                console.log(`Đăng kí thành công`);
                return;
            }
        }
    } else {
        console.log('Email không hợp lệ');
    }
};

checkEmail(email);