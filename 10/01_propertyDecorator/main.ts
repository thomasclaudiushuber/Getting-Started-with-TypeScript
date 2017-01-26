function logChanges(target:any,key:string){
   // grab the value
   let value = this[key];

   // define a setter
   let setter=(newValue)=>{
      value=newValue;
      console.log(`set ${key}: ${value}`);
   };
   // define a getter
   let getter=()=>{
      console.log(`get ${key}: ${value}`);
      return value;
   };

   // replace the property
   if(delete this[key])
   {
       Object.defineProperty(
           target,key,{
               configurable:true,
               enumerable:true,
               get:getter,
               set:setter
           });
   }
}

class Friend {
    @logChanges
    name:string;
}

let friend = new Friend();
friend.name="Thomas";
friend.name="Julia";
let theName = friend.name;