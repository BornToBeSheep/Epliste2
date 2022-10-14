let input = document.querySelector("#inputs");
let options = document.querySelector("#options");
let outputs = document.querySelector("#outputs");


let contenedorInput = document.createElement("div");
    contenedorInput.innerHTML = `
    <input id="decimal" type="number" class="form-control" placeholder="Ingrese el numero decimal a representar" aria-label="Recipient's username" aria-describedby="button-addon2">
    <input id="bits" type="number" class="form-control" placeholder="Ingrese la cantidad de bits para esa representacion" aria-label="Recipient's username" aria-describedby="button-addon2">
    `;
    input.append(contenedorInput);




let contenedorOptions = document.createElement("div");
    contenedorOptions.innerHTML = `
    <button onClick="cargar(0)" type="button" class="btn btn-primary">BSS</button>
                <button onClick="cargar(1)" type="button" class="btn btn-primary">BCS</button>
                <button onClick="cargar(2)" type="button" class="btn btn-primary">Ca1</button>
                <button onClick="cargar(3)" type="button" class="btn btn-primary">Ca2</button>
                <button onClick="cargar(4)"n  type="button" class="btn btn-primary">Ex2</button
    `;
    options.append(contenedorOptions);


const cargar = async (representacion) =>{
    let inputs = {
        id: representacion,
        decimal: parseInt(document.querySelector("#decimal").value),
        cantbits: parseInt(document.querySelector("#bits").value)
    };
    if (inputs.decimal <= Math.pow(2,inputs.cantbits) -1 && inputs.decimal >= 0){
        inputsJSON = JSON.stringify(inputs);
        localStorage.setItem("inputs", inputsJSON);
        let representaciones = calcularBss()
            /* bcs: calcularBcs(),
            ca1: calcularCa1(),
            ca2: calcularCa2(),
            exp: calcularEx2() */
        
        representacionesJSON = JSON.stringify(representaciones)
        localStorage.setItem("outputs", representacionesJSON)
    } else{
        alert("El decimal ingresado no puede representarse con esa cantidad de bits o es menor a 0")
    }

const calcularBss =() =>{
    let arraybss = [];
    let decimal = JSON.parse(inputs.decimal);
    for (let i= JSON.parse(inputs.cantbits)-1; i >= 0; i--){
        let digito = decimal % 2;
        decimal = parseInt(decimal/2)
        arraybss[i] = digito;
        console.log(digito)
        console.log("----")
        console.log(decimal)
    }
}

}

/*     pintarbits(inputs.cantbits)
const pintarbits = () =>{
    console.log();
    outputs.append(contenedorOutputs)
    }

 */