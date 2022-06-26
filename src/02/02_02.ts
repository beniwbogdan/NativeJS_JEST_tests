export type StreetType = {
    title: string
}
export type AddressType = {
    number: number,
    street: StreetType

}
export type HousesType = {
    buildedAt: number,
    repaired: boolean,
    address: AddressType
}
export type StuffCount={
    number:number
}
export type GovTitle={
    title:string
}
export type GovSrteetType={
    street:GovTitle
}
export type GovernmentBuildings={
    type:string,
    budget:number,
    stuffCount:StuffCount
    address:GovSrteetType
}
export type CityType = {
    title: string,
    houses: Array<HousesType>,
    governmentBuildings:Array<GovernmentBuildings>,
    citizensNumber: number
}