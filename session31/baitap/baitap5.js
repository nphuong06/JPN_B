const employees = [
    {
        id: 1,
        name: 'minh',
        age: 18,
        address: 'Thanh Hoá',
    },
    {
        id: 2,
        name: 'phương',
        age: 18,
        address: 'Thái Bình',
    }
]

const table = document.querySelector('tbody');

for (let i = 0; i < employees.length; i++) {
    let row = document.createElement('tr');
    table.appendChild(row);
    for (const key in employees[i]) {
        let col = document.createElement('td');
        row.appendChild(col);
        col.innerText = employees[i][key];
    }
}