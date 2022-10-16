import {AddressModel} from "./address.model";
import {Company} from "./company";

export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressModel;
  phone: string;
  website: string;
  company: Company;
}
