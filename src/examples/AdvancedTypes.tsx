interface BasicDetails {
  firstName: string;
  lastName: string;
  age: number;
}

interface Address {
  street: string;
  number: string;
  city: string;
  state: string;
  country: string;
}

interface ExtraDetails {
  address: Address;
  phone: string | null;
}

type DetailsType = BasicDetails & ExtraDetails;

export default DetailsType;
