export const findDomainsForNuid = (nuid) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/shh/nuids/${nuid}/domains`)
        .then(response => response.json())

export const addDomain = async(nuid, newDomain) => {
    const response = await fetch(`http://wbdv-generic-server.herokuapp.com/api/${nuid}/${newDomain}`,{
        method: 'POST'
    })
    return response.json()

}

export const deleteDomain = async(nuid, domain)=> {
    const response = await fetch(`http://wbdv-generic-server.herokuapp.com/api/${nuid}/${domain}`,{
        method: 'DELETE'
    })
    return response.json()
}
