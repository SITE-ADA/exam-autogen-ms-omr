table2 = document.getElementById("table2");
console.log(table2.innerHTML)
fullnameHTML = ""
flag = ""
for(i=0;i<10;i++) {
    row = document.createElement('tr')

    row.innerHTML = 
    `
    <td><span class="question-number">${i+1}.</span></td>
    <td><div class="bubble">A</div></td>
    <td><div class="bubble">B</div></td>
    <td><div class="bubble">C</div></td>
    <td><div class="bubble">D</div></td>
    <td><div class="bubble">E</div></td>
    <td><span class="question-number"> ${i+11}.</span></td>
    <td><div class="bubble">A</div></td>
    <td><div class="bubble">B</div></td>
    <td><div class="bubble">C</div></td>
    <td><div class="bubble">D</div></td>
    <td><div class="bubble" >E</div></td>
    <td><span class="question-number">${i+21}.</span></td>
    <td><div class="bubble">A</div></td>
    <td><div class="bubble">B</div></td>
    <td><div class="bubble">C</div></td>
    <td><div class="bubble">D</div></td>
    <td><div class="bubble">E</div></td>
    `
    table2.appendChild(row);
}
let start = 'A'.charCodeAt(0);

studentIdTable = document.getElementById("studentId")

function bubbleMaker(row_number,column_number,table_name) {
    let headerRow;
    row = document.createElement('tr')
    if (table_name=="studentId") {
        headerRow = "Student ID"
        flag = 'num'
    }
    if (table_name == "fullName"){
        headerRow = "Full Name"
        flag = 'alpha'
    }

    if (table_name == "variant") {
        headerRow = "Variant"
        flag = 'alpha'
    }

    row.innerHTML = `<p class="fieldText">${headerRow}</p>`
    tableName = document.getElementById(table_name)
    tableName.appendChild(row)
    for(i=0;i<row_number;i++) {
        column_string = ""
        row = document.createElement('tr')
        if(i==0) {
            row.innerHTML = `<p class="emptyRow"></p>`
            tableName.appendChild(row)
            i++;
            continue
        }
        for(j=0;j<column_number;j++) {
            
            if(flag=='num')
                column_string += `<td><div class="bubble">${i-2}</div></td>`
            else 
              column_string += `<td><div class="bubble">${String.fromCharCode(i+start-2)}</div></td>`
        }
        row.innerHTML = column_string   
        console.log(row)
        tableName.appendChild(row)
    }
}

bubbleMaker(7,5,"studentId")
bubbleMaker(28,12,"fullName")
bubbleMaker(3,5,"variant")
// bubbleMaker(4,11)