export const findItemsForDomain = (nuid, domain) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/${nuid}/${domain}`)
        .then(response => response.json())

export const addItem = async(nuid, newDomain) => {
    const response = await fetch(`http://wbdv-generic-server.herokuapp.com/api/${nuid}/${newDomain}`,{
        method: "POST"
    })
    return response.json()

}

