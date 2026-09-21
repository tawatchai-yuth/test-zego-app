import addressService from "thailand-address/lib/main.es.js";
import db from "thailand-address/lib/database/db.json";

addressService.loadData(db, "json", false, true);

function exact(value: string) {
  return `^${value}$`;
}

/**
 * The underlying "thailand-address" library's field names are swapped from
 * their real-world meaning: its `subdistrict` field actually holds the
 * amphoe (district) name, and its `district` field holds the tambon
 * (subdistrict) name. These wrappers hide that quirk behind correct names.
 */

export function getProvinces(): string[] {
  return addressService.queryByType({}, "province").sort();
}

export function getAmphoes(province: string): string[] {
  return addressService
    .queryByType({ province: exact(province) }, "subdistrict")
    .sort();
}

export function getTambons(province: string, amphoe: string): string[] {
  return addressService
    .queryByType(
      { province: exact(province), subdistrict: exact(amphoe) },
      "district",
    )
    .sort();
}

export function getZipcode(
  province: string,
  amphoe: string,
  tambon: string,
): string | undefined {
  const [entry] = addressService.query({
    province: exact(province),
    subdistrict: exact(amphoe),
    district: exact(tambon),
  });
  return entry ? String(entry.zipcode) : undefined;
}
