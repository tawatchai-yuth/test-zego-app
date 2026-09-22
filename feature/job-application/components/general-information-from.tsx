"use client";

import { useState } from "react";
import { Card, CardBody } from "@/components/ui/card";
import DatePicker from "@/components/ui/date-picker";
import Input from "@/components/ui/input";
import Radio from "@/components/ui/radio";
import Select from "@/components/ui/select";
import { SectionTitle } from "@/components/ui/section-title";
import { ThaiAddressSelect } from "@/components/ui/thai-address-select";
import {
  nationalityOptions,
  positionOptions,
  raceOptions,
  religionOptions,
} from "@/feature/job-application/constants/select-options";

const GeneralInformationFrom = () => {
  const [birthDate, setBirthDate] = useState<Date | undefined>();
  const [expirationDate, setExpirationDate] = useState<Date | undefined>();

  return (
    <div className="flex flex-col gap-4">
      <SectionTitle>Personal Information (ประวิติส่วนตัว)</SectionTitle>
      <Card>
        <CardBody className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  ชื่อ - นามสกุล <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Name
                </span>
              </legend>
              <Input placeholder="ชื่อ - นามสกุล" required />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>ชื่อเล่น</span>
                <span className="text-base-content/60 text-xs font-normal">
                  Nick name
                </span>
              </legend>
              <Input placeholder="ชื่อเล่น" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  เกิดวันที่ <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Birth Day
                </span>
              </legend>
              <DatePicker value={birthDate} onChange={setBirthDate} />
            </fieldset>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  ตำแหน่งที่สมัคร <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Position Applied For
                </span>
              </legend>
              <Select
                options={positionOptions}
                placeholder="เลือกตำแหน่งที่สมัคร"
                defaultValue=""
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>เงินเดือน</span>
                <span className="text-base-content/60 text-xs font-normal">
                  Expected Salary
                </span>
              </legend>
              <Input type="number" placeholder="เงินเดือน" suffix="บาท" />
            </fieldset>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  ที่อยู่ปัจจุบันเลขที่ <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Present Address
                </span>
              </legend>
              <Input placeholder="ที่อยู่ปัจจุบันเลขที่" required />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>หมู่ที่</span>
                <span className="text-base-content/60 text-xs font-normal">
                  Moo
                </span>
              </legend>
              <Input placeholder="หมู่ที่" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>ถนน</span>
                <span className="text-base-content/60 text-xs font-normal">
                  Road
                </span>
              </legend>
              <Input placeholder="ถนน" />
            </fieldset>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ThaiAddressSelect required />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  โทรศัพท์ <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Tel.
                </span>
              </legend>
              <Input placeholder="โทรศัพท์" required />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>ไอดีไลน์</span>
                <span className="text-base-content/60 text-xs font-normal">
                  Line ID
                </span>
              </legend>
              <Input placeholder="ไอดีไลน์" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>อินสตาแกรม</span>
                <span className="text-base-content/60 text-xs font-normal">
                  Instagram
                </span>
              </legend>
              <Input placeholder="อินสตาแกรม" />
            </fieldset>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  อีเมล์ <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Email
                </span>
              </legend>
              <Input placeholder="อีเมล์" required />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>เฟสบุ๊ค</span>
                <span className="text-base-content/60 text-xs font-normal">
                  Facebook
                </span>
              </legend>
              <Input placeholder="เฟสบุ๊ค" />
            </fieldset>
          </div>

          <fieldset className="fieldset">
            <legend className="fieldset-legend flex-col items-start gap-0">
              <span>
                ที่พักอาศัยปัจจุบัน <span className="text-error">*</span>
              </span>
              <span className="text-base-content/60 text-xs font-normal">
                Current Living Situation
              </span>
            </legend>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
              <Radio
                name="livingSituation"
                label="อาศัยกับครอบครัว (Living with Family)"
                required
              />
              <Radio
                name="livingSituation"
                label="บ้านตัวเอง (Own House)"
                required
              />
              <Radio
                name="livingSituation"
                label="บ้านเช่า (Rented House)"
                required
              />
              <Radio
                name="livingSituation"
                label="หอพัก (Dormitory)"
                required
              />
            </div>
          </fieldset>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  อายุ <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Age
                </span>
              </legend>
              <Input type="number" placeholder="อายุ" suffix="ปี" required />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  เชื้อชาติ <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Race
                </span>
              </legend>
              <Select
                options={raceOptions}
                placeholder="เลือกเชื้อชาติ"
                defaultValue=""
                required
              />
            </fieldset>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  สัญชาติ <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Nattionality
                </span>
              </legend>
              <Select
                options={nationalityOptions}
                placeholder="เลือกสัญชาติ"
                defaultValue=""
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  ศาสนา <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Religion
                </span>
              </legend>
              <Select
                options={religionOptions}
                placeholder="เลือกศาสนา"
                defaultValue=""
                required
              />
            </fieldset>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  บัตรประชาชนเลขที่ <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Identity card no
                </span>
              </legend>
              <Input placeholder="บัตรประชาชนเลขที่" required />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  บัตรหมดอายุ <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Expiration date
                </span>
              </legend>
              <DatePicker value={expirationDate} onChange={setExpirationDate} />
            </fieldset>
          </div>

          <fieldset className="fieldset">
            <legend className="fieldset-legend flex-col items-start gap-0">
              <span>
                ภาวะทางทหาร <span className="text-error">*</span>
              </span>
              <span className="text-base-content/60 text-xs font-normal">
                Military status
              </span>
            </legend>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
              <Radio
                name="militaryStatus"
                label="ได้รับการยกเว้น (Exempted)"
                required
              />
              <Radio
                name="militaryStatus"
                label="ปลดเป็นทหารกองหนุน (Served)"
                required
              />
              <Radio
                name="militaryStatus"
                label="ยังไม่ได้รับการเกณฑ์ (Not yet served)"
                required
              />
            </div>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend flex-col items-start gap-0">
              <span>
                สถานภาพ <span className="text-error">*</span>
              </span>
              <span className="text-base-content/60 text-xs font-normal">
                Marital status
              </span>
            </legend>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
              <Radio name="maritalStatus" label="โสด (Single)" required />
              <Radio name="maritalStatus" label="แต่งงาน (Married)" required />
              <Radio name="maritalStatus" label="หม้าย (Widowed)" required />
              <Radio
                name="maritalStatus"
                label="แยกกัน (Separated)"
                required
              />
            </div>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend flex-col items-start gap-0">
              <span>
                เพศ <span className="text-error">*</span>
              </span>
              <span className="text-base-content/60 text-xs font-normal">
                Sex
              </span>
            </legend>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
              <Radio name="sex" label="ชาย (Male)" required />
              <Radio name="sex" label="หญิง (Female)" required />
            </div>
          </fieldset>
        </CardBody>
      </Card>
    </div>
  );
};
export default GeneralInformationFrom;
