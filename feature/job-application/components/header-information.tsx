"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import { Card, CardBody } from "@/components/ui/card";
import ImageUpload from "@/components/ui/image-upload";

const HeaderInformation = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Release the previous object URL when it's replaced or the component unmounts.
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setPreviewUrl(file ? URL.createObjectURL(file) : null);
  };

  return (
    <Card className="overflow-hidden">
      <div className="from-primary/15 via-primary/5 h-2 bg-gradient-to-r to-transparent" />
      <CardBody className="flex flex-col items-center gap-8 py-12 sm:flex-row sm:justify-between">
        <div className="flex flex-1 flex-col items-center gap-3 text-center sm:items-start sm:text-left">
          <span className="text-primary text-xs font-semibold tracking-widest uppercase">
            Application for Employment
          </span>
          <div className="flex flex-col gap-0.5">
            <h1 className="text-2xl font-bold sm:text-3xl">ใบสมัครงาน</h1>
            <p className="text-primary text-lg font-semibold">ZEGO GROUP</p>
            <p className="text-base-content/60 text-sm">ซีโก้ กรุ๊ป</p>
          </div>
          <p className="text-base-content/60 text-xs">
            กรอกข้อมูลด้วยตัวเอง (To be completed in own handwriting)
          </p>
        </div>

        <label className="group border-primary/30 bg-base-200 hover:border-primary/60 hover:bg-primary/5 text-base-content/50 relative flex h-40 w-40 shrink-0 cursor-pointer flex-col items-center justify-center gap-1 overflow-hidden rounded-full border-2 border-dashed text-sm transition-colors sm:h-48 sm:w-48">
          <ImageUpload visuallyHidden required onChange={handleImageChange} />
          {previewUrl ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element -- local blob URL preview */}
              <img
                src={previewUrl}
                alt="Preview"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100">
                เปลี่ยนรูป
              </span>
            </>
          ) : (
            <span className="group-hover:text-primary transition-colors">
              Image <span className="text-error">*</span>
            </span>
          )}
        </label>
      </CardBody>
    </Card>
  );
};

export default HeaderInformation;
