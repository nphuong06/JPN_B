let month = +prompt('Nhập tháng cần kiểm tra:');

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        alert('Tháng có 31 ngày')
        break;
    case 4: case 6: case 9: case 11:
        alert('Tháng này có 30 ngày');
        break;
    case 2:
        alert('Tháng có 28 hoặc 29 ngày');
        break;
    default:
        alert('Tháng không hợp lệ');
        break;
}