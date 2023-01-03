const btnclick = document.querySelector('#btn');
btnclick.addEventListener('click', async function () {
    const module = await import('./module.js');
    console.log(module);
    module.hello();
    console.log('Import Succesfully');
})