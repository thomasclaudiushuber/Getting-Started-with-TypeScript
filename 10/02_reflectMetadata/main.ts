import './node_modules/reflect-metadata/Reflect';

const componentDataKey="CompKey";

interface ComponentData {
    creator: string;
}

function Component(data: ComponentData) {
    return function Component(target: Function) {
           Reflect.defineMetadata(componentDataKey, data, target);
    }
}

@Component({
    creator: "Thomas"
})
class Friend {
}

let compData = Reflect.getMetadata(componentDataKey,Friend) as ComponentData;
console.log(compData.creator);
