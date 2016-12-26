interface Friend{
    firstName:string;
    lastName:string;
}

let friend:Friend ={firstName:"Thomas",lastName:"Huber"};

for(let propName in friend)
{
    console.log(`${propName}: ${friend[propName]}`);
}