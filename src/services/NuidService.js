export const findAllNuids = () =>
    fetch(`http://wbdv-generic-server.herokuapp.com/shh/nuids`)
        .then(response => response.json())

