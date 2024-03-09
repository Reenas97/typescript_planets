let planets = [];
const situationOptions = ["Habitado", "Habitável", "Inabitável", "Inexplorado"];
const situationList = situationOptions.join(`\n`);
function savePlanet(name, coordinates, situation) {
    const planet = {
        name,
        coordinates,
        situation,
        satellites: []
    };
    planets.push(planet);
    alert(`O planeta ${planet.name} foi registrado.`);
}
function findPlanet(name) {
    let planet;
    planet = planets.find(planet => planet.name === name);
    return planet;
}
function updatePlanetSituation() {
    const planetToUpdate = prompt(`Você deseja atualizar a situação de qual planeta?\nOpções: \n ${planets.map((planet) => `- ${planet.name}`).join("\n")}`);
    const planet = findPlanet(planetToUpdate);
    if (planet) {
        while (true) {
            const situation = prompt(`Qual a situação atual do planeta ${planet.name}?\nOpções:\n${situationList}`);
            if (situation && situationOptions.indexOf(situation) !== -1) {
                const confirmation = confirm(`Deseja atualizar a situação do planeta ${planet.name} para ${situation}`);
                if (confirmation) {
                    planet.situation = situation;
                }
                break; // Sai do loop se a opção for válida
            }
            else {
                alert(`Opção ${situation} inválida, escolha uma opção válida:\n${situationList}`);
            }
        }
    }
    else {
        alert(`O planeta ${planetToUpdate} ainda não foi cadastrado.`);
    }
}
function addSatellite() {
    const planetToAdd = prompt(`A qual planeta deseja adicionar um satélite?\nOpções: \n ${planets.map((planet) => `- ${planet.name}`).join("\n")}`);
    const planet = findPlanet(planetToAdd);
    if (planet) {
        const satelliteToAdd = prompt(`Qual satélite deseja adicionar ao planeta ${planet.name}? `);
        const confirmation = confirm(`Deseja adicionar o satélite ${satelliteToAdd} ao planeta ${planet.name}?`);
        if (confirmation) {
            planet.satellites.push(satelliteToAdd);
        }
    }
    else {
        alert(`O planeta ${planetToAdd} ainda não foi cadastrado.`);
    }
}
function removeSatellite() {
    const planetToRemove = prompt(`De qual planeta deseja remover um satélite?\nOpções: \n ${planets.map((planet) => `- ${planet.name}`).join("\n")}`);
    const planet = findPlanet(planetToRemove);
    if (planet) {
        if (planet.satellites.length > 0) {
            const satelliteToRemove = prompt(`Qual satélite do planeta ${planet.name} Deseja remover?\nOpções:\n ${planet.satellites.map((sattelite) => `- ${sattelite}`).join("\n")}`);
            if (satelliteToRemove) {
                const satelliteIndex = planet.satellites.indexOf(satelliteToRemove);
                if (satelliteIndex !== -1) {
                    const confirmation = confirm(`Deseja excluir o satélite ${satelliteToRemove} do planeta ${planet.name} ?`);
                    if (confirmation) {
                        planet.satellites.splice(satelliteIndex, 1);
                        alert(`${satelliteToRemove} excluído do planeta ${planet.name}`);
                    }
                    else {
                        alert(`O satélite ${satelliteToRemove} não foi encontrado.`);
                    }
                }
            }
        }
        else {
            alert(`Ainda não há nenhum satélite cadastrado no planeta ${planet.name}`);
        }
    }
    else {
        alert(`O planeta ${planetToRemove} ainda não foi cadastrado.`);
    }
}
function listPlanets() {
    let planetsList = "Planetas Registrados:\n\n";
    planets.forEach((planet) => {
        planetsList += `Planeta: ${planet.name}\nCoordenadas: (${planet.coordinates})\nSituação: ${planet.situation}\nSatélites: ${planet.satellites.length > 0 ? planet.satellites.join(", ") : "Ainda não há satélites nesse planeta."}\n\n`;
    });
    alert(planetsList);
}
function firstMenuOption() {
    const name = prompt(`Digite o nome do planeta a ser registrado`);
    const coordinate01 = +prompt(`Informe a primeira coordinada do planeta ${name}`);
    const coordinate02 = +prompt(`Informe a segunda coordinada do planeta ${name}`);
    const coordinate03 = +prompt(`Informe a terceira coordinada do planeta ${name}`);
    const coordinate04 = +prompt(`Informe a quarta coordinada do planeta ${name}`);
    let situationValid;
    while (true) {
        const situation = prompt(`Informe a situação do planeta?\nOpções:\n${situationList}`);
        if (situation && situationOptions.indexOf(situation) !== -1) {
            situationValid = situation;
            break; // Sai do loop se a opção for válida
        }
        else {
            alert(`Opção ${situation} inválida, escolha uma opção válida:\n${situationList}`);
        }
    }
    const confirmation = confirm(`Cadastrar o planeta: ${name}
    Coordernadas: (${coordinate01}, ${coordinate02}, ${coordinate03}, ${coordinate04})
    Situação: ${situationValid}
    `);
    if (confirmation) {
        savePlanet(name, [coordinate01, coordinate02, coordinate03, coordinate04], situationValid);
    }
}
function secoundMenuOption() {
    if (planets.length > 0) {
        updatePlanetSituation();
    }
    else {
        alert("Ainda não há planetas cadastrados.");
    }
}
function thirdMenuOption() {
    if (planets.length > 0) {
        addSatellite();
    }
    else {
        alert("Ainda não há planetas cadastrados.");
    }
}
function fourthMenuOption() {
    if (planets.length > 0) {
        removeSatellite();
    }
    else {
        alert("Ainda não há planetas cadastrados.");
    }
}
function fifthMenuOption() {
    if (planets.length > 0) {
        listPlanets();
    }
    else {
        alert("Ainda não há planetas cadastrados.");
    }
}
let options;
while (options !== 6) {
    const menu = `O que deseja fazer?
    1. Registrar um planeta
    2. Atualizar a situação de um determinado planeta
    3. Adicionar um satélite a um determinado planeta
    4. Remover um satélite de um determinado planeta
    5. Listar os planetas salvos com suas informações
    6. Sair
    `;
    options = +prompt(menu);
    switch (options) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secoundMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            fifthMenuOption();
            break;
        case 6:
            alert(`Encerrando o sistema...`);
            break;
        default:
            alert(`Opção inválida! Retornando ao menu principal.`);
    }
}
