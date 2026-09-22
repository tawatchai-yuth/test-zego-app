"use client";

import { useRef, useState } from "react";
import { Card, CardBody } from "@/components/ui/card";
import Input from "@/components/ui/input";
import { SectionTitle } from "@/components/ui/section-title";
import Select from "@/components/ui/select";
import { Table } from "@/components/ui/table";
import { occupationOptions } from "@/feature/job-application/constants/select-options";

const FamilyInformationFrom = () => {
  const [siblingRows, setSiblingRows] = useState<number[]>([0, 1, 2]);
  const nextRowId = useRef(3);

  const addSiblingRow = () => {
    setSiblingRows((rows) => [...rows, nextRowId.current++]);
  };

  const removeSiblingRow = (id: number) => {
    setSiblingRows((rows) => rows.filter((rowId) => rowId !== id));
  };

  return (
    <div className="flex flex-col gap-4">
      <SectionTitle>Family Information (ประวัติครอบครัว)</SectionTitle>
      <Card>
        <CardBody className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  บิดา ชื่อ - นามสกุล <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Father&apos;s name-surename
                </span>
              </legend>
              <Input placeholder="บิดา ชื่อ - นามสกุล" required />
            </fieldset>
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
                  อาชีพ <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Occupation
                </span>
              </legend>
              <Select
                options={occupationOptions}
                placeholder="เลือกอาชีพ"
                defaultValue=""
                required
              />
            </fieldset>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  มารดา ชื่อ - นามสกุล <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Mother&apos;s name-surename
                </span>
              </legend>
              <Input placeholder="มารดา ชื่อ - นามสกุล" required />
            </fieldset>
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
                  อาชีพ <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Occupation
                </span>
              </legend>
              <Select
                options={occupationOptions}
                placeholder="เลือกอาชีพ"
                defaultValue=""
                required
              />
            </fieldset>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>ชื่อภรรยา/สามี</span>
                <span className="text-base-content/60 text-xs font-normal">
                  Name of wife / Husband
                </span>
              </legend>
              <Input placeholder="ชื่อภรรยา/สามี" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>สถานที่ทำงาน</span>
                <span className="text-base-content/60 text-xs font-normal">
                  Working place
                </span>
              </legend>
              <Input placeholder="สถานที่ทำงาน" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>ตำแหน่ง</span>
                <span className="text-base-content/60 text-xs font-normal">
                  Position
                </span>
              </legend>
              <Input placeholder="ตำแหน่ง" />
            </fieldset>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>มีบุตร</span>
                <span className="text-base-content/60 text-xs font-normal">
                  Number of children
                </span>
              </legend>
              <Input type="number" placeholder="มีบุตร" suffix="คน" required />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>ชาย</span>
                <span className="text-base-content/60 text-xs font-normal">
                  Male
                </span>
              </legend>
              <Input type="number" placeholder="ชาย" suffix="คน" required />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>หญิง</span>
                <span className="text-base-content/60 text-xs font-normal">
                  Female
                </span>
              </legend>
              <Input type="number" placeholder="หญิง" suffix="คน" required />
            </fieldset>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  มีพี่น้อง (รวมผู้สมัคร) <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Number of Members in the family
                </span>
              </legend>
              <Input
                type="number"
                placeholder="มีพี่น้อง"
                suffix="คน"
                required
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  ชาย <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Male
                </span>
              </legend>
              <Input type="number" placeholder="ชาย" suffix="คน" required />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend flex-col items-start gap-0">
                <span>
                  หญิง <span className="text-error">*</span>
                </span>
                <span className="text-base-content/60 text-xs font-normal">
                  Female
                </span>
              </legend>
              <Input type="number" placeholder="หญิง" suffix="คน" required />
            </fieldset>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-0">
              <span className="font-semibold">รายชื่อพี่น้อง</span>
              <span className="text-base-content/60 text-xs font-normal">
                List of Siblings
              </span>
            </div>

            <Table>
              <thead>
                <tr>
                  <th className="w-14">
                    <div className="flex flex-col gap-0">
                      <span>ลำดับ</span>
                    </div>
                  </th>
                  <th className="min-w-48">
                    <div className="flex flex-col gap-0">
                      <span>ชื่อ - นามสกุล</span>
                      <span className="text-base-content/60 text-xs font-normal">
                        Name
                      </span>
                    </div>
                  </th>
                  <th className="w-40 min-w-40">
                    <div className="flex flex-col gap-0">
                      <span>อายุ</span>
                      <span className="text-base-content/60 text-xs font-normal">
                        Age
                      </span>
                    </div>
                  </th>
                  <th className="min-w-40">
                    <div className="flex flex-col gap-0">
                      <span>อาชีพ</span>
                      <span className="text-base-content/60 text-xs font-normal">
                        Occupation
                      </span>
                    </div>
                  </th>
                  <th className="w-12" />
                </tr>
              </thead>
              <tbody>
                {siblingRows.map((id, index) => (
                  <tr key={id}>
                    <th>{index + 1}</th>
                    <td>
                      <Input placeholder="ชื่อ - นามสกุล" />
                    </td>
                    <td>
                      <Input type="number" placeholder="อายุ" suffix="ปี" />
                    </td>
                    <td>
                      <Select
                        options={occupationOptions}
                        placeholder="เลือกอาชีพ"
                        defaultValue=""
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm btn-circle"
                        onClick={() => removeSiblingRow(id)}
                        aria-label="ลบแถว"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <button
              type="button"
              className="btn btn-outline btn-sm w-fit"
              onClick={addSiblingRow}
            >
              + เพิ่มพี่น้อง (Add Sibling)
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
export default FamilyInformationFrom;
