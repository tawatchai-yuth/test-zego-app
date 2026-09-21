# work-app

แบบฟอร์มใบสมัครงานสองภาษา (ไทย/อังกฤษ) สำหรับ **ZEGO GROUP** สร้างด้วย Next.js App Router ปัจจุบันเป็น frontend ล้วน ๆ ยังไม่มี API, database, auth หรือการ submit/บันทึกข้อมูล

## Tech Stack

- **Next.js 16.3.5** (App Router) + **React 19.2.8** + **TypeScript 5** (strict)
- **Tailwind CSS v4 + DaisyUI v5** (ลงทะเบียนธีม `light` เท่านั้น), **next-themes** (ยังไม่ได้เปิดใช้หลายธีม)
- **react-day-picker** — date picker
- **thailand-address** — ข้อมูลจังหวัด/อำเภอ/ตำบล/รหัสไปรษณีย์แบบออฟไลน์ (`lib/thai-address.ts`)
- **clsx + tailwind-merge** — รวม/แก้ conflict ของ class (`lib/utils.ts` → `cn()`)
- **ESLint + Prettier** (พร้อม `prettier-plugin-tailwindcss`)
- ติดตั้งไว้แต่ไม่ได้ใช้งาน: `@heroicons/react`, `class-variance-authority`
- ไม่มี: database, ORM, auth, validation library, state management library, test framework, Docker, CI/CD, environment variables

## Folder Structure

```text
work-app/
├── app/                    # Routing (route group ไม่มีผลต่อ URL)
│   ├── (setup)/            # "/" → redirect ไป /job
│   └── (main)/(routes)/job # "/job" → หน้าฟอร์มหลัก
├── components/
│   ├── layout/             # Container ระดับหน้าเพจ
│   └── ui/                 # UI primitive ทั่วไป (button, input, select, table, ...)
├── feature/job-application/components/  # ประกอบฟอร์มแต่ละส่วน (header, general, family, education, working)
├── lib/                    # utils.ts (cn), thai-address.ts
├── providers/              # theme-provider.tsx
└── types/                  # type ให้ package thailand-address ที่ไม่มี type มาให้
```

แนวคิด: `app/` บาง ๆ ทำหน้าที่ routing → `feature/` ประกอบฟอร์มจาก `components/ui` (ของกลาง ใช้ซ้ำได้) → `lib/` เป็น utility ที่ทั้งสองฝั่งเรียกใช้ ทิศทาง import เป็นทางเดียว (`components/ui` ไม่รู้จัก `feature/`)

## Getting Started

```bash
npm install
npm run dev
```

เปิด http://localhost:3000 (จะ redirect ไปที่ `/job`)

## Scripts

| คำสั่ง | ทำอะไร |
| --- | --- |
| `npm run dev` | รัน dev server |
| `npm run build` | build production (`output: "standalone"`) |
| `npm run start` | รัน production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier format |
| `npm run format:check` | ตรวจฟอร์แมต (ไม่มี path default ต้องรัน `-- .` เอง) |

## ข้อควรรู้ / จุดที่ยังไม่สมบูรณ์

- ฟอร์มยังไม่มี `onSubmit`/`fetch`/API — กรอกแล้วข้อมูลหายเมื่อ refresh
- ไม่มี test, ไม่มี Dockerfile/CI แม้ `next.config.ts` จะตั้ง `output: "standalone"` ไว้แล้ว
- `components/ui/ิีbutton.tsx` ชื่อไฟล์มีอักขระไทยแปลกปนอยู่ และไม่ถูก import ใช้ที่ไหนเลย
- `.vscode/settings.json` มีการตั้งค่า Prisma formatter ทั้งที่โปรเจกต์ไม่ได้ใช้ Prisma
