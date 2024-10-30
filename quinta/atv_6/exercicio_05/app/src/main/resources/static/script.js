const table_body = document.getElementById("table_body");
const id_input = document.getElementById("product_id");

fetch("http://localhost:8080/products").then(response => response.json()).then(data => {
    const table_body = document.querySelector("#product-table tbody");

    data.forEach(product => {
        const row = document.createElement("tr");
        row.setAttribute("data-id", product._id);

        const id_cell = document.createElement("td");
        id_cell.textContent = product._id;
        
        const name_cell = document.createElement('td');
        name_cell.textContent = product._product_name;
                    
        const price_cell = document.createElement('td');
        price_cell.textContent = `R$ ${product._price.toFixed(2)}`;

        row.appendChild(id_cell);
        row.appendChild(name_cell);
        row.appendChild(price_cell);

        table_body.appendChild(row);
    });
}).catch(error => console.error("Erro : ", error));

function buscar()
{
    let current_val = id_input.value;

    for (let i = 0; i < table_body.children.length; i++)
    {
        const row = table_body.children[i];

        if (current_val-1 == i)
        {
            row.classList.add("selected_table_row");
        }
        else
        {
            row.classList.remove("selected_table_row");
        }
    }
}

function limpar()
{
    for (let i = 0; i < table_body.children.length; i++)
    {
        const row = table_body.children[i];
        row.classList.remove("selected_table_row");
    }

    id_input.value = "";
}

limpar();