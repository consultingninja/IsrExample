export const config = {
    runtime: 'edge',
    isr: {
      expiration: 30, // seconds
    },
  };



export async function load({}){
    //get random user from random user api
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data);
    const user = data.results[0];
    return user;

}