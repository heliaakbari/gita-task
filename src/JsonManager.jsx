import array from "./assets/data.json";

let data = array
export function giveList(){
    return(
        data
    )
}

export function addPerson(id,firstName,lastName,location=null,chart=null){
let newPerson ={
    "id": id,
    "firstName": firstName,
    "lastName": lastName,
    "location": location,
    "chart":chart
}

data.push(newPerson);
}

export function deletePerson(index){

let newArray = [
    ...data.slice(0, index), // Elements before the one to delete
    ...data.slice(index + 1) // Elements after the one to delete
  ];
  data = newArray
  console.log(data)
}

export function editPerson(id,firstName,lastName,index,location=null,chart=null){
    
    let newArray = [
        ...data.slice(0, index), // Elements before the one to delete
        {
        "id": id,
        "firstName": firstName,
        "lastName": lastName,
        "location": location,
        "chart":chart
        },
        ...data.slice(index + 1) // Elements after the one to delete
    ];
    data = newArray
    console.log(data)
}


