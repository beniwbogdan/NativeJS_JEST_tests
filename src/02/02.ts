
type TechnologiesType = {
    id: number,
    title: string
}

type LocalCityType = {
    title: string,
    countryName: string
}
type AddressType = {
    streetName: string,
    city: LocalCityType
}
type StudentType = {
    name: string,
    age: number,
    isActive: boolean,
    address: AddressType
    technologies: Array<TechnologiesType>
}


const student: StudentType = {
    name: "Test",
    age: 34,
    isActive: false,
    address: {
        streetName: "Grota Roweckiego",
        city: {
            title: "Krakow",
            countryName: "Poland"
        }
    },
    technologies: [
        {
            id: 1,
            title: "Js"
        }, {
            id: 2,
            title: "Js"
        }, {
            id: 3,
            title: "Js"
        }
    ]
}

console.log(student.address.city.title);
console.log(student.technologies[0].title);