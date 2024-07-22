export interface IAddressInfo {
  props: IAddressProps[];
}

export type IAddressProps = {
  id: number;
  planet: string;
  name: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zipcode?: string;
  lot?: string;
};
