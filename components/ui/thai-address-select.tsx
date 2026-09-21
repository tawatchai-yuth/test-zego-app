"use client";

import { useMemo, useState } from "react";
import { Combobox } from "@/components/ui/combobox";
import Input from "@/components/ui/input";
import {
  getAmphoes,
  getProvinces,
  getTambons,
  getZipcode,
} from "@/lib/thai-address";

interface ThaiAddressSelectProps {
  onZipcodeChange?: (zipcode: string | undefined) => void;
  required?: boolean;
}

export function ThaiAddressSelect({
  onZipcodeChange,
  required = false,
}: ThaiAddressSelectProps) {
  const [province, setProvince] = useState("");
  const [amphoe, setAmphoe] = useState("");
  const [tambon, setTambon] = useState("");

  const provinces = useMemo(() => getProvinces(), []);
  const amphoes = useMemo(
    () => (province ? getAmphoes(province) : []),
    [province],
  );
  const tambons = useMemo(
    () => (province && amphoe ? getTambons(province, amphoe) : []),
    [province, amphoe],
  );
  const zipcode = useMemo(
    () => (tambon ? getZipcode(province, amphoe, tambon) : undefined),
    [province, amphoe, tambon],
  );

  const handleProvinceChange = (value: string) => {
    setProvince(value);
    setAmphoe("");
    setTambon("");
    onZipcodeChange?.(undefined);
  };

  const handleAmphoeChange = (value: string) => {
    setAmphoe(value);
    setTambon("");
    onZipcodeChange?.(undefined);
  };

  const handleTambonChange = (value: string) => {
    setTambon(value);
    onZipcodeChange?.(value ? getZipcode(province, amphoe, value) : undefined);
  };

  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend flex-col items-start gap-0">
          <span>
            จังหวัด {required && <span className="text-error">*</span>}
          </span>
          <span className="text-base-content/60 text-xs font-normal">
            Province
          </span>
        </legend>
        <Combobox
          value={province}
          onChange={handleProvinceChange}
          placeholder="จังหวัด"
          required={required}
          options={provinces.map((p) => ({ label: p, value: p }))}
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend flex-col items-start gap-0">
          <span>อำเภอ {required && <span className="text-error">*</span>}</span>
          <span className="text-base-content/60 text-xs font-normal">
            District
          </span>
        </legend>
        <Combobox
          value={amphoe}
          onChange={handleAmphoeChange}
          placeholder="อำเภอ"
          disabled={!province}
          required={required}
          options={amphoes.map((a) => ({ label: a, value: a }))}
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend flex-col items-start gap-0">
          <span>ตำบล {required && <span className="text-error">*</span>}</span>
          <span className="text-base-content/60 text-xs font-normal">
            Subdistrict
          </span>
        </legend>
        <Combobox
          value={tambon}
          onChange={handleTambonChange}
          placeholder="ตำบล"
          disabled={!amphoe}
          required={required}
          options={tambons.map((t) => ({ label: t, value: t }))}
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend flex-col items-start gap-0">
          <span>รหัสไปรษณีย์</span>
          <span className="text-base-content/60 text-xs font-normal">
            Postal Code
          </span>
        </legend>
        <Input value={zipcode ?? ""} readOnly placeholder="รหัสไปรษณีย์" />
      </fieldset>
    </>
  );
}
