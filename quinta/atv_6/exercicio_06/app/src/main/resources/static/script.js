const table_body = document.getElementById("table_body");
const id_input = document.getElementById("product_id");

let employees = [];

fetch("http://localhost:8080/employees").then(response => response.json()).then(data => {
    const table_body = document.querySelector("#product-table tbody");

    data.forEach(employee => {
        const row = document.createElement("tr");
        row.setAttribute("data-id", employee._id);

        const id_cell = document.createElement("td");
        id_cell.textContent = employee._id;
        
        const name_cell = document.createElement('td');
        name_cell.textContent = employee._name;
                    
        const wage_cell = document.createElement('td');
        wage_cell.textContent = `R$ ${employee._hour_wage.toFixed(2)}`;

        row.appendChild(id_cell);
        row.appendChild(name_cell);
        row.appendChild(wage_cell);

        table_body.appendChild(row);

        employees.push(employee);
    });
}).catch(error => console.error("Erro : ", error));

const employee_code_input = document.getElementById("employee_id_input");
const worked_hours_input = document.getElementById("worked_hours_input");
const total_val = document.getElementById("total_val_paragraph");


function buscar()
{
    const current_employee_id = employee_code_input.value - 1;
    let current_worked_hours = worked_hours_input.value;
    let current_total_val = employees[current_employee_id]._hour_wage *  current_worked_hours;
    
    for(let i = 0; i < table_body.children.length; i++)
    {
        const row = table_body.children[i];

        if (current_employee_id == i)
        {
            row.classList.add("selected_table_row");
        }
        else
        {
            row.classList.remove("selected_table_row");
        }
    }

    total_val.innerText = "R$ " + current_total_val.toFixed(2);
}

function limpar()
{
    for (let i = 0; i < table_body.children.length; i++)
        {
            const row = table_body.children[i];
            row.classList.remove("selected_table_row");
        }
    
        employee_code_input.value = "";
        worked_hours_input.value = "";
        total_val.innerText = "";
}