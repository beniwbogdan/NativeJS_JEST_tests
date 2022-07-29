

type GovTitle = {
    title: string
}
type GovSrteetType = {
    street: GovTitle
}
type StuffCount = {
    number: number
}
type GovernmentBuildings = {
    type: string,
    budget: number,
    stuffCount: StuffCount
    address: GovSrteetType
}
type StreetType = {
    title: string
}
type AddressType = {
    number: number,
    street: StreetType

}
type HousesType = {
    buildedAt: number,
    repaired: boolean,
    address: AddressType
}
export type CityType = {
    title: string,
    houses: Array<HousesType>,
    governmentBuildings: Array<GovernmentBuildings>,
    citizensNumber: number
}