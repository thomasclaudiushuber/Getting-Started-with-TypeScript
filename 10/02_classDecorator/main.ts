import 'reflect-metadata';

interface ComponentData {
    firstName: string;
    lastName: string;
}

let componentDataKey = "componentData";

function Component(data: ComponentData) {
    return function Component(target: Function) {
        Reflect.defineMetadata(componentDataKey, data, target);
    }
}


@Component({
    firstName: "Thomas",
    lastName: "Huber"
})
class Friend {
}


let compData = Reflect.getMetadata(componentDataKey, Friend) as ComponentData;
console.log(compData.firstName); // Logs "Thomas"
console.log(compData.lastName); // Logs "Huber"
