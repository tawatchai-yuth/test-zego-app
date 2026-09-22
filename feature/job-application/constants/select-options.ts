import type { SelectOption } from "@/components/ui/select";

export const positionOptions: SelectOption[] = [
  { value: "sales", label: "พนักงานขาย (Sales)" },
  { value: "marketing", label: "การตลาด (Marketing)" },
  { value: "accounting", label: "บัญชี (Accounting)" },
  { value: "finance", label: "การเงิน (Finance)" },
  { value: "hr", label: "ทรัพยากรบุคคล (Human Resources)" },
  { value: "admin", label: "ธุรการ (Administration)" },
  { value: "purchasing", label: "จัดซื้อ (Purchasing)" },
  { value: "it", label: "ไอที (IT)" },
  { value: "programmer", label: "โปรแกรมเมอร์ (Programmer)" },
  { value: "graphic-designer", label: "กราฟิกดีไซน์ (Graphic Designer)" },
  { value: "customer-service", label: "บริการลูกค้า (Customer Service)" },
  { value: "warehouse", label: "คลังสินค้า (Warehouse)" },
  { value: "driver", label: "พนักงานขับรถ (Driver)" },
  { value: "other", label: "อื่นๆ (Other)" },
];

export const raceOptions: SelectOption[] = [
  { value: "thai", label: "ไทย (Thai)" },
  { value: "chinese", label: "จีน (Chinese)" },
  { value: "lao", label: "ลาว (Lao)" },
  { value: "myanmar", label: "เมียนมา (Myanmar)" },
  { value: "cambodian", label: "กัมพูชา (Cambodian)" },
  { value: "vietnamese", label: "เวียดนาม (Vietnamese)" },
  { value: "malay", label: "มลายู (Malay)" },
  { value: "indian", label: "อินเดีย (Indian)" },
  { value: "other", label: "อื่นๆ (Other)" },
];

export const nationalityOptions: SelectOption[] = [
  { value: "thai", label: "ไทย (Thai)" },
  { value: "lao", label: "ลาว (Lao)" },
  { value: "myanmar", label: "เมียนมา (Myanmar)" },
  { value: "cambodian", label: "กัมพูชา (Cambodian)" },
  { value: "vietnamese", label: "เวียดนาม (Vietnamese)" },
  { value: "chinese", label: "จีน (Chinese)" },
  { value: "other", label: "อื่นๆ (Other)" },
];

export const religionOptions: SelectOption[] = [
  { value: "buddhism", label: "พุทธ (Buddhism)" },
  { value: "islam", label: "อิสลาม (Islam)" },
  { value: "christianity", label: "คริสต์ (Christianity)" },
  { value: "hinduism", label: "ฮินดู (Hinduism)" },
  { value: "sikhism", label: "ซิกข์ (Sikhism)" },
  { value: "none", label: "ไม่นับถือศาสนา (None)" },
  { value: "other", label: "อื่นๆ (Other)" },
];

export const occupationOptions: SelectOption[] = [
  { value: "government", label: "รับราชการ (Government Officer)" },
  { value: "state-enterprise", label: "พนักงานรัฐวิสาหกิจ (State Enterprise)" },
  { value: "employee", label: "พนักงานบริษัท (Company Employee)" },
  { value: "business-owner", label: "ธุรกิจส่วนตัว (Business Owner)" },
  { value: "merchant", label: "ค้าขาย (Merchant)" },
  { value: "farmer", label: "เกษตรกร (Farmer)" },
  { value: "freelance", label: "อาชีพอิสระ (Freelance)" },
  { value: "laborer", label: "รับจ้างทั่วไป (Laborer)" },
  { value: "student", label: "นักเรียน / นักศึกษา (Student)" },
  { value: "homemaker", label: "แม่บ้าน / พ่อบ้าน (Homemaker)" },
  { value: "retired", label: "เกษียณ (Retired)" },
  { value: "unemployed", label: "ไม่ได้ประกอบอาชีพ (Unemployed)" },
  { value: "other", label: "อื่นๆ (Other)" },
];
