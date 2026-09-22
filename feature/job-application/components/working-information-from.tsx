"use client";

import { useRef, useState, type ReactNode } from "react";
import { Card, CardBody } from "@/components/ui/card";
import Input from "@/components/ui/input";
import MonthPicker from "@/components/ui/month-picker";
import { SectionTitle } from "@/components/ui/section-title";
import Select from "@/components/ui/select";
import { positionOptions } from "@/feature/job-application/constants/select-options";

const Field = ({
  label,
  subLabel,
  children,
}: {
  label: string;
  subLabel: string;
  children: ReactNode;
}) => (
  <fieldset className="fieldset">
    <legend className="fieldset-legend flex-col items-start gap-0">
      <span>{label}</span>
      <span className="text-base-content/60 text-xs font-normal">
        {subLabel}
      </span>
    </legend>
    {children}
  </fieldset>
);

const WorkingInformationFrom = () => {
  const [rows, setRows] = useState<number[]>([0, 1, 2]);
  const nextRowId = useRef(3);

  const addRow = () => {
    setRows((prev) => [...prev, nextRowId.current++]);
  };

  const removeRow = (id: number) => {
    setRows((prev) => prev.filter((rowId) => rowId !== id));
  };

  return (
    <div className="flex flex-col gap-4">
      <SectionTitle>
        Working Experience In Chronological (รายละเอียดของงานที่ผ่าน
        เรียงลำดับก่อน-หลัง)
      </SectionTitle>
      <Card>
        <CardBody className="flex flex-col gap-6">
          {rows.length === 0 && (
            <p className="text-base-content/50 border-base-300 rounded-box border border-dashed py-8 text-center text-sm">
              ยังไม่มีประสบการณ์ทำงาน (No work experience added)
            </p>
          )}

          {rows.map((id, index) => (
            <div
              key={id}
              className="border-base-300/70 bg-base-200/40 hover:border-primary/40 rounded-box border p-5 transition-colors sm:p-6"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="bg-primary text-primary-content flex h-7 w-7 items-center justify-center rounded-full text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-sm font-semibold">
                    ประสบการณ์ทำงานที่ {index + 1}
                    <span className="text-base-content/60 font-normal">
                      {" "}
                      (Experience {index + 1})
                    </span>
                  </span>
                </div>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm btn-circle hover:text-error"
                  onClick={() => removeRow(id)}
                  aria-label={`ลบประสบการณ์ทำงานที่ ${index + 1}`}
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                <Field label="สถานที่ทำงาน" subLabel="Company">
                  <Input placeholder="สถานที่ทำงาน" />
                </Field>
                <Field label="ตำแหน่ง" subLabel="Position">
                  <Select
                    options={positionOptions}
                    placeholder="เลือกตำแหน่ง"
                    defaultValue=""
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-3">
                <Field label="เริ่ม" subLabel="From">
                  <MonthPicker />
                </Field>
                <Field label="ถึง" subLabel="To">
                  <MonthPicker />
                </Field>
                <Field label="ค่าจ้าง" subLabel="Salary">
                  <Input type="number" placeholder="ค่าจ้าง" suffix="บาท" />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
                <Field label="ลักษณะงาน" subLabel="Job description">
                  <textarea
                    className="textarea w-full"
                    rows={2}
                    placeholder="ลักษณะงาน"
                  />
                </Field>
                <Field label="เหตุที่ออก" subLabel="Reasons of resignation">
                  <textarea
                    className="textarea w-full"
                    rows={2}
                    placeholder="เหตุที่ออก"
                  />
                </Field>
              </div>
            </div>
          ))}

          <button
            type="button"
            className="btn btn-outline btn-primary btn-sm w-fit"
            onClick={addRow}
          >
            + เพิ่มประสบการณ์ทำงาน (Add Work Experience)
          </button>
        </CardBody>
      </Card>
    </div>
  );
};

export default WorkingInformationFrom;
