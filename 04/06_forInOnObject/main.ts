interface Friend{
    firstName:string;
    lastName:string;
}

let friend:Friend ={firstName:"Thomas",lastName:"Huber"};

for(let propKey in friend)
{
    console.log(`${propKey}: ${friend[propKey]}`);
}