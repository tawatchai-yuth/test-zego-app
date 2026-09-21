import { Card, CardBody } from "@/components/ui/card";
import Input from "@/components/ui/input";
import { SectionTitle } from "@/components/ui/section-title";
import { Table } from "@/components/ui/table";

const EDUCATION_LEVELS = [
  { th: "มัธยมศึกษาตอนปลาย", en: "High School" },
  { th: "ปวช.", en: "Vocational" },
  { th: "ปวท. / ปวส.", en: "Diploma" },
  { th: "ปริญญาตรี", en: "Bachelor's Degree" },
  { th: "สูงกว่าปริญญาตรี", en: "Post-Graduate" },
  { th: "อื่นๆ", en: "Others" },
];

const EducationInformationFrom = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionTitle>Education (การศึกษา)</SectionTitle>
      <Card className="border-base-300 border">
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th>
                  <div className="flex flex-col gap-0">
                    <span>ระดับการศึกษา</span>
                    <span className="text-base-content/60 text-xs font-normal">
                      Education Level
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-0">
                    <span>สถาบันการศึกษา</span>
                    <span className="text-base-content/60 text-xs font-normal">
                      Institution
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-0">
                    <span>สาขาวิชา</span>
                    <span className="text-base-content/60 text-xs font-normal">
                      Major
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex flex-col gap-0">
                    <span>ตั้งแต่</span>
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
              </tr>
            </thead>
            <tbody>
              {EDUCATION_LEVELS.map((level) => (
                <tr key={level.th}>
                  <th>
                    <div className="flex flex-col gap-0">
                      <span>{level.th}</span>
                      <span className="text-base-content/60 text-xs font-normal">
                        {level.en}
                      </span>
                    </div>
                  </th>
                  <td>
                    <Input placeholder="สถาบันการศึกษา" />
                  </td>
                  <td>
                    <Input placeholder="สาขาวิชา" />
                  </td>
                  <td>
                    <Input type="month" />
                  </td>
                  <td>
                    <Input type="month" />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default EducationInformationFrom;
