export const config = {
    runtime: 'nodejs18.x',
    isr:{
        expiration:10,
    }
}


export async function load({}){
    //get a random user from the random user api
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data);
    const user = data.results[0];
    return user
}