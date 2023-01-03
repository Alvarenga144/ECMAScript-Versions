// valores por defecto en funciones
function newUser(name, age, country) {
    var name = name || 'Esteban';
    var age = age || 20;
    var country = country || 'ES';
    console.log(name, age, country);
}
newUser();
newUser('Vladimir', 18, 'CH');

// Misma lógica con sintaxis más limpia
function newAdmin(name = 'Andrea', age = '18', address = 'Los Guardados') {
    console.log(`${name} - ${age} - ${address}`);
}
newAdmin();
newAdmin('Carolina', 21, 'San Rafael');