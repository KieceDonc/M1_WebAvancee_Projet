
/*
    Function to fetch data w/ api url
*/
function api<T>(url:string):Promise<T>{
    return fetch(url).then(response => {
        if(!response.ok)
        {
            throw new Error(response.statusText);
        }
        return response.json() as Promise<T>;
    })
}

export {api};

