"use client";

import { useRef, useState } from "react";
import { Card, CardBody } from "@/components/ui/card";
import Input from "@/components/ui/input";
import { SectionTitle } from "@/components/ui/section-title";
import { Table } from "@/components/ui/table";

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
      <Card className="border-base-300 border">
        <CardBody className="flex flex-col gap-4">
          <Table>
            <thead>
              <tr>
                <th>
                  <div className="flex flex-col gap-0">
                    <span>สถานที่ทำงาน</span>
                    <span className="text-base-content/60 text-xs font-normal">
                      Company
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-0">
                    <span>เริ่ม</span>
                    <span className="text-base-content/60 text-xs font-normal">
                      From
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-0">
                    <span>ถึง</span>
                    <span className="text-base-content/60 text-xs font-normal">
                      To
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-0">
                    <span>ตำแหน่ง</span>
                    <span className="text-base-content/60 text-xs font-normal">
                      Position
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-0">
                    <span>ลักษณะงาน</span>
                    <span className="text-base-content/60 text-xs font-normal">
                      Job description
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-0">
                    <span>ค้าจ้าง</span>
                    <span className="text-base-content/60 text-xs font-normal">
                      Salary
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-0">
                    <span>เหตุที่ออก</span>
                    <span className="text-base-content/60 text-xs font-normal">
                      Reasons of resignation
                    </span>
                  </div>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {rows.map((id) => (
                <tr key={id}>
                  <td>
                    <Input placeholder="สถานที่ทำงาน" />
                  </td>
                  <td>
                    <Input type="month" />
                  </td>
                  <td>
                    <Input type="month" />
                  </td>
                  <td>
                    <Input placeholder="ตำแหน่ง" />
                  </td>
                  <td>
                    <Input placeholder="ลักษณะงาน" />
                  </td>
                  <td>
                    <Input type="number" placeholder="ค่าจ้าง" />
                  </td>
                  <td>
                    <Input placeholder="เหตุที่ออก" />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm btn-circle"
                      onClick={() => removeRow(id)}
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
