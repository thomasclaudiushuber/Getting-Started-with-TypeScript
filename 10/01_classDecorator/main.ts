interface ComponentDataByType{
    type:string;
    compData:ComponentData
}

let dataByType: ComponentDataByType[] = [];

interface ComponentData {
    creator: string;
}

function Component(data: ComponentData) {
    return function Component(target: Function) {
           dataByType.push({type:target.name,compData:data});
    }
}

@Component({
    creator: "Thomas"
})
class Friend {
}

console.log(dataByType[0].type);
console.log(dataByType[0].compData.creator);
