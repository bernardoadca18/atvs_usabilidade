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

let veiculos = [];