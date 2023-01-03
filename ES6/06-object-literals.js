// enahced object literals

function newAdmin(name, username, sex, age, altura) {
    return {
        name,
        username,
        sex,
        age,
        height: altura,
    }
}

console.log(newAdmin('Esteban', 'Alvarenga144', 'Man', 20, 1.81));
/* 
IMPORTANTE // Las asignaciones pueden hacerse sin doble punto, unicamente si tienen
el mismo nombre en el objeto que se retorna 
*/