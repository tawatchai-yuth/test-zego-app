declare module "thailand-address/lib/main.es.js" {
  export interface ThaiAddressEntry {
    province: string;
    district: string;
    subdistrict: string;
    zipcode: string | number;
  }

  export interface ThaiAddressQuery {
    province?: string;
    district?: string;
    subdistrict?: string;
    zipcode?: string;
  }

  export class AddressService {
    loadData(
      db: unknown,
      type: "json",
      multilingual?: boolean,
      preprocess?: boolean,
      language?: string,
    ): void;
    query(query: ThaiAddressQuery): ThaiAddressEntry[];
    queryByType(
      query: ThaiAddressQuery,
      field: keyof ThaiAddressEntry,
    ): string[];
  }

  const addressService: AddressService;
  export default addressService;
}
