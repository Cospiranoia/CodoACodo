


const names = []

for (let index = 0; index < 5; index++) {
    const name = prompt(`Ingrese un nombre:`);
    names.push(name)
}

names.join(",")
alert(`Los nombres ingresados son ${names} .`)