import { Card, CardBody } from "@/components/ui/card";
import ImageUpload from "@/components/ui/image-upload";

const HeaderInformation = () => {
  return (
    <Card className="border-base-300 border">
      <CardBody className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
        <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
          <div>APPLICATION FOR EMPLOYMENT</div>
          <div>ใบสมัครงาน</div>
          <div>ZEGO GROUP</div>
          <div>ซีโก้ กรุ๊ป</div>
          <div>
            <p>กรอกข้อมูลด้วยตัวเอง</p>
            <p>(To be completed in own handwriting)</p>
          </div>
        </div>

        <label className="bg-base-200 text-base-content/60 flex h-48 w-48 shrink-0 cursor-pointer items-center justify-center rounded-xl sm:h-56 sm:w-56">
          <ImageUpload visuallyHidden required />
          Image <span className="text-error">*</span>
        </label>
      </CardBody>
    </Card>
  );
};

export default HeaderInformation;
