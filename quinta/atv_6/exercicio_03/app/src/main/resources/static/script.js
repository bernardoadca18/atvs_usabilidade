class Veiculo
{
    #num_chassi
    #placa

    constructor(num_chassi, placa)
    {
        this.#num_chassi = num_chassi;
        this.#placa = placa;
    };

    get_num_chassi()
    {
        return this.#num_chassi;
    }

    get_placa()
    {
        return this.#placa;
    }
};


const card_holder = document.getElementById("card_holder");
const n_chassi_input = document.getElementById("chassi_num");
const n_placa_input = document.getElementById("placa_num");

let veiculos = [];
let current_id = 0;

function add_vehicle()
{
    const vehicle_card = document.createElement("div");
    const id_text = document.createElement("p");
    const placa_text = document.createElement("p");
    const chassi_text = document.createElement("p");

    vehicle_card.classList.add("vehicle_card");

    const veiculo = new Veiculo((n_chassi_input.value).toUpperCase(), (n_placa_input.value).toUpperCase());
    veiculos.push(veiculo);

    id_text.innerText = "ID : " + current_id;
    placa_text.innerText = "PLACA : " + veiculo.get_placa();
    chassi_text.innerText = "CHASSI : " + veiculo.get_num_chassi();

    current_id = current_id + 1;

    vehicle_card.appendChild(id_text);
    vehicle_card.appendChild(placa_text);
    vehicle_card.appendChild(chassi_text);

    card_holder.appendChild(vehicle_card);
}