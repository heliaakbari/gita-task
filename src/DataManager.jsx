import { defaultLocation } from "./Utility";
import array from "./assets/data.json";

let data = array


const generateRandom = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
};

export function giveList(){
    return(data)
}

export function addPerson(id,firstName,lastName,location=defaultLocation,chart=null){
    if(!chart){
        chart ={"آبان": generateRandom(15000000,50000000),
			"آذر": generateRandom(15000000,50000000),
			"دی": generateRandom(15000000,50000000),
			"بهمن": generateRandom(15000000,50000000),
			"اسفند": generateRandom(15000000,50000000),
			"فروردین": generateRandom(15000000,50000000)
     }
    }
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
}

export function editPerson(id,firstName,lastName,location=defaultLocation,index="-1",chart=null){
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


