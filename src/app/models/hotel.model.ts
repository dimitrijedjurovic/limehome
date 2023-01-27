import {ICoordinates} from "./map.model";

export interface IHotel {
  title: string;
  distance: number;
  address: IAddress;
  position: ICoordinates
}

export interface IAddress {
  label: string,
  countryCode: string,
  countryName: string,
  stateCode: string,
  state: string,
  countyCode: string,
  county: string,
  city: string,
  district: string,
  street: string,
  postalCode: string,
  houseNumber: string
}
