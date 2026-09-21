# work-app

แบบฟอร์มใบสมัครงานสองภาษา (ไทย/อังกฤษ) ที่สร้างด้วย Next.js App Router ปัจจุบันโปรเจกต์นี้มีฟอร์มเดียว — "APPLICATION FOR EMPLOYMENT / ใบสมัครงาน" ของ **ZEGO GROUP** — ครอบคลุมข้อมูลส่วนตัว ข้อมูลครอบครัว ประวัติการศึกษา และประวัติการทำงาน

ในสถานะปัจจุบัน โปรเจกต์นี้เป็น frontend ล้วน ๆ ยังไม่มี API layer, database หรือระบบ authentication และฟอร์มยังไม่มีการ submit หรือบันทึกข้อมูลไปที่ใด

## Features

- ฟอร์มใบสมัครงานแบบหลายส่วน: หัวข้อ/อัปโหลดรูป, ข้อมูลส่วนตัว, ข้อมูลครอบครัว, ประวัติการศึกษา, ประวัติการทำงาน
- แถวข้อมูลที่เพิ่ม/ลบได้สำหรับพี่น้องและประสบการณ์ทำงาน โดยจัดการผ่าน local component state (`feature/job-application/components/family-information-from.tsx`, `working-information-from.tsx`)
- ตัวเลือกที่อยู่แบบไทย (province → amphoe/อำเภอ → tambon/ตำบล → รหัสไปรษณีย์ auto-fill) โดยใช้ข้อมูลออฟไลน์จาก `thailand-address` (`components/ui/thai-address-select.tsx`)
- Date picker ที่สร้างขึ้นเองบน native CSS anchor-positioning/`popover` API ร่วมกับ `react-day-picker` (`components/ui/date-picker.tsx`)
- ชุด UI primitive แบบ DaisyUI ที่นำกลับมาใช้ซ้ำได้: button, input, select, checkbox, radio, table, card, combobox, image upload
- Route หลัก (`/`) จะ redirect ไปที่ `/job` ซึ่งเป็นหน้าเดียวที่ implement ไว้ในตอนนี้

## Tech Stack

| ส่วนประกอบ | ที่เลือกใช้ | หลักฐานที่พบ |
| --- | --- | --- |
| Framework | Next.js 16.3.5 (App Router) | `next.config.ts`, โฟลเดอร์ `app/`, `package.json` |
| UI library | React 19.2.8 | `package.json` |
| ภาษา | TypeScript 5 (strict mode) | `tsconfig.json` (`"strict": true`) |
| Styling | Tailwind CSS v4 + DaisyUI v5 | `app/globals.css`, `postcss.config.mjs` |
| Theming | `next-themes` | `providers/theme-provider.tsx`, `app/layout.tsx` |
| วันที่ | `react-day-picker` | `components/ui/date-picker.tsx` |
| ข้อมูลที่อยู่ไทย | `thailand-address` | `lib/thai-address.ts` |
| Linting | ESLint 9 (flat config) + `eslint-config-next` | `eslint.config.mjs` |
| Formatting | Prettier + `prettier-plugin-tailwindcss` | `.prettierrc` |

ไม่พบ database, ORM, authentication library, validation library, state-management library หรือ test framework ในโปรเจกต์นี้

## Dependencies

### Runtime (`dependencies`)

| Package | ใช้ทำอะไรในโปรเจกต์นี้ | ทำไมถึงใช้ |
| --- | --- | --- |
| `next` | App Router, routing, layouts, ปรับ font ให้เหมาะสมด้วย `next/font/google`, ตั้งค่า image | Framework หลักที่ใช้สร้างแอปนี้ |
| `react`, `react-dom` | เรนเดอร์ UI | จำเป็นสำหรับ Next.js |
| `next-themes` | ถูกห่อไว้ใน `providers/theme-provider.tsx` แล้วนำไปใช้ใน `app/layout.tsx` ด้วย `attribute="class"`, `defaultTheme="light"`, `enableSystem={false}` | เป็นกลไกสำหรับสลับธีม แม้ว่าตอนนี้จะลงทะเบียนธีม DaisyUI ไว้เพียงธีมเดียว (`light`) ใน `app/globals.css` |
| `clsx` | ใช้ภายใน helper `cn()` ของ `lib/utils.ts` เพื่อรวม class name แบบมีเงื่อนไข | ถูกใช้แทบทุก component ใน `components/ui` |
| `tailwind-merge` | ใช้คู่กับ `clsx` ภายใน `cn()` เพื่อแก้ปัญหา class ของ Tailwind ที่ขัดแย้งกัน | ทำให้ `className` ที่ผู้เรียกส่งเข้ามาสามารถ override class เริ่มต้นของ component ได้แทนที่จะถูกใช้พร้อมกันทั้งคู่ |
| `react-day-picker` | เรนเดอร์ปฏิทินภายใน `components/ui/date-picker.tsx` | ใช้กับช่องวันเกิดและวันหมดอายุบัตรประชาชน |
| `thailand-address` | ชุดข้อมูลจังหวัด/อำเภอ/ตำบล/รหัสไปรษณีย์แบบออฟไลน์ ถูกห่อไว้ใน `lib/thai-address.ts` | เป็นแกนหลักของ dropdown ที่อยู่แบบลำดับขั้นใน `components/ui/thai-address-select.tsx` |
| `@heroicons/react` | ไม่พบการ import ใช้งานที่ใดในซอร์สโค้ด | Installed but currently not used |
| `class-variance-authority` | ไม่พบการ import ใช้งานที่ใดในซอร์สโค้ด | Installed but currently not used |

### Development (`devDependencies`)

| Package | ใช้ทำอะไร |
| --- | --- |
| `typescript`, `@types/node`, `@types/react`, `@types/react-dom` | Type สำหรับ Node, React และ DOM |
| `tailwindcss`, `@tailwindcss/postcss` | Utility-first CSS เชื่อมเข้ากับ PostCSS pipeline ใน `postcss.config.mjs` |
| `daisyui` | Tailwind plugin ที่ลงทะเบียนไว้ใน `app/globals.css` (`@plugin "daisyui"`) เป็นที่มาของ class name ของ component ต่าง ๆ (`btn`, `card`, `input`, `select`, `checkbox`, `radio`, `table`, `fieldset`, …) ที่ใช้ทั่วทั้ง `components/ui` และ `feature/job-application` |
| `eslint`, `eslint-config-next` | Lint โค้ดด้วย flat config format (ชุดกฎ `core-web-vitals` + `typescript`) |
| `prettier`, `prettier-plugin-tailwindcss` | จัดฟอร์แมตโค้ด; plugin ของ Tailwind ช่วยเรียงลำดับ class name ให้ตามลำดับที่ DaisyUI/Tailwind แนะนำ |

## Architecture

แอปนี้ไม่มี backend layer ทุกอย่างทำงานฝั่ง client หรือเป็น static/server-rendered React บน App Router:

```text
Browser
  ↓
Next.js App Router (app/)          — ทำหน้าที่ routing เท่านั้น
  ↓
Feature composition (feature/job-application)  — ประกอบหน้าเดียวจากส่วนต่าง ๆ ของฟอร์ม
  ↓
Reusable UI primitives (components/ui, components/layout) — สไตล์แบบ DaisyUI เน้นการแสดงผลอย่างเดียว
  ↓
Utilities (lib/)                   — รวม class ด้วย cn(), ค้นหาข้อมูลที่อยู่ไทย
```

ส่วนที่มี interactive (`general-information-from.tsx`, `family-information-from.tsx`, `working-information-from.tsx`, `combobox.tsx`, `date-picker.tsx`, `thai-address-select.tsx`) ถูกกำกับด้วย `"use client"` เพราะมี local state (`useState`/`useRef`) ส่วนที่เป็น static (`header-information.tsx`, `education-information-from.tsx`) ไม่มี client directive และเรนเดอร์เป็น Server Component

## Folder Structure

```text
work-app/
├── app/
│   ├── (setup)/
│   │   └── page.tsx                     # "/" — redirect ไปที่ /job
│   ├── (main)/
│   │   └── (routes)/
│   │       └── job/
│   │           └── page.tsx             # "/job" — ประกอบฟอร์มใบสมัครงาน
│   ├── layout.tsx                       # Root layout: fonts, ThemeProvider
│   └── globals.css                      # ตั้งค่า Tailwind + DaisyUI
├── components/
│   ├── layout/
│   │   └── container.tsx                # Container จำกัดความกว้างของหน้า
│   └── ui/                              # UI primitive แบบ DaisyUI ที่ใช้ซ้ำได้ทั่วไป
│       ├── ิีbutton.tsx                 # Button (ยังไม่ถูก import ใช้งานที่ใดเลย)
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── combobox.tsx
│       ├── date-picker.tsx
│       ├── image-upload.tsx
│       ├── input.tsx
│       ├── radio.tsx
│       ├── section-title.tsx
│       ├── select.tsx
│       ├── table.tsx
│       └── thai-address-select.tsx
├── feature/
│   └── job-application/
│       └── components/                  # การประกอบส่วนที่เจาะจงกับฟอร์มใบสมัครงาน
│           ├── education-information-from.tsx
│           ├── family-information-from.tsx
│           ├── general-information-from.tsx
│           ├── header-information.tsx
│           └── working-information-from.tsx
├── lib/
│   ├── thai-address.ts                  # ห่อ package `thailand-address`
│   └── utils.ts                         # helper รวม class ชื่อ cn()
├── providers/
│   └── theme-provider.tsx               # ตัวห่อ next-themes
├── types/
│   └── thailand-address.d.ts            # Ambient type สำหรับ package `thailand-address` ที่ไม่มี type มาให้
└── public/                              # ไฟล์ static (SVG เริ่มต้นจาก create-next-app)
```

**หมายเหตุเรื่องชื่อโฟลเดอร์ในวงเล็บ**: `(setup)` และ `(routes)` คือ [Next.js route groups](node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/route-groups.md) — วงเล็บใช้จัดกลุ่มไฟล์เท่านั้น ไม่มีผลต่อ URL จริง route ที่ใช้งานได้จริงมีเพียง `/` และ `/job`

### หน้าที่ของแต่ละโฟลเดอร์

| โฟลเดอร์ | หน้าที่ | ทำไมถึงมีโฟลเดอร์นี้ |
| --- | --- | --- |
| `app/` | Routing, layouts, global CSS/fonts | ตั้งใจให้บาง — หน้าเพจแค่ประกอบ feature component เข้าด้วยกัน |
| `components/layout` | Layout primitive ระดับหน้าเพจ (เช่น `Container`) | ใช้ร่วมกันได้กับหน้าเพจในอนาคต ไม่ผูกกับ feature ใดโดยเฉพาะ |
| `components/ui` | Form control แบบ DaisyUI ที่ใช้งานทั่วไป | เป็น building block ที่ใช้ซ้ำได้ ไม่มี business logic หรือข้อความเฉพาะฟอร์มไทย |
| `feature/job-application` | ประกอบ primitive จาก `components/ui` ให้เป็นส่วนต่าง ๆ ของฟอร์มจริง พร้อม label และโครงสร้างเฉพาะของฟอร์มใบสมัครงาน | แยกการประกอบที่เจาะจงตาม domain/feature ออกจาก UI ทั่วไป |
| `lib/` | Helper ที่ไม่ผูกกับ framework (`cn()`, การค้นหาที่อยู่ไทย) | ใช้ร่วมกันทั้งใน `components/ui` และ `feature/` |
| `providers/` | React context provider ที่ mount ไว้ที่ root เพียงจุดเดียว | แยกออกจากโค้ดของหน้าเพจ/feature |
| `types/` | Ambient TypeScript declaration สำหรับ package ที่ไม่มี type มาให้ | จำเป็นสำหรับ `thailand-address` ซึ่งไม่มี type definition |

## Why This Folder Structure

โครงสร้างโค้ดนี้แยก **UI ทั่วไปที่ใช้ซ้ำได้** (`components/ui`, `components/layout`) ออกจาก **การประกอบเฉพาะ feature** (`feature/job-application`) โดยให้ `app/` เป็นเพียง routing layer บาง ๆ ที่ประกอบ feature component เข้าเป็นหน้าเพจเท่านั้น นี่คือการแบ่งแบบ Separation of Concerns: `components/ui` ไม่มีการ import จาก `feature/` เลย ในขณะที่ `feature/` เป็นฝ่าย import `components/ui` มาใช้ — ไม่ใช่ในทางกลับกัน ทำให้ทิศทางของ dependency เป็นทางเดียว

```text
app/                (routes; import จาก feature/)
  ↓
feature/job-application  (import จาก components/ui, components/layout)
  ↓
components/ui, components/layout  (import จาก lib/, react)
  ↓
lib/                (utility ที่เป็น leaf สุดท้าย)
```

ปัจจุบันมีเพียง feature เดียว (`job-application`) จึงยังไม่สามารถยืนยันรูปแบบนี้กับ feature ที่สองได้ แต่โครงสร้างแบบ `feature/<name>/components` ที่วางคู่กับ `components/ui` ที่เป็นของกลาง ดูเหมือนจะถูกออกแบบมาเพื่อให้เพิ่ม feature ใหม่ในอนาคตได้โดยไม่ต้องแตะ shared UI primitive

## Data Flow

ไม่มี network หรือ persistence layer ใด ๆ ข้อมูลทั้งหมดในตอนนี้อยู่ใน React state ชั่วคราวเท่านั้น:

```text
ผู้ใช้กรอกข้อมูล
  ↓
Feature form component (feature/job-application/components/*)  — เก็บ state ระดับฟิลด์ด้วย useState/useRef
  ↓
components/ui primitive (Input, Select, DatePicker, Combobox, …)  — เรนเดอร์ตัวควบคุมฟอร์ม
```

ไม่มีการส่งค่าใด ๆ ไปยังเซิร์ฟเวอร์หรือบันทึกเกินกว่า session ของหน้าปัจจุบัน — ไม่มี `onSubmit` handler, ไม่มีการเรียก `fetch` และไม่มี route ใน `app/api` ในโค้ดทั้งหมด

## Getting Started

โปรเจกต์นี้ใช้ **npm** (มีเฉพาะ `package-lock.json` ไม่มี `yarn.lock` หรือ `pnpm-lock.yaml`)

```bash
git clone <repository-url>
cd work-app
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) — ระบบจะ redirect ไปที่ `/job` ให้อัตโนมัติ

## Environment Variables

ไม่มีการใช้ environment variable ใด ๆ ในโปรเจกต์นี้ ไม่มีไฟล์ `.env.example` และไม่พบการเรียก `process.env` ที่ใดในซอร์สโค้ดเลย

## Available Scripts

| คำสั่ง | คำอธิบาย |
| --- | --- |
| `npm run dev` | เริ่ม development server ของ Next.js |
| `npm run build` | สร้าง production build (`next.config.ts` ตั้งค่า `output: "standalone"`) |
| `npm run start` | รัน production build |
| `npm run lint` | รัน ESLint (`eslint.config.mjs`) |
| `npm run format` | จัดฟอร์แมตโค้ดด้วย Prettier |
| `npm run format:check` | ตรวจสอบฟอร์แมตด้วย Prettier — ตามที่เขียนไว้ สคริปต์นี้ (`prettier --check`) ไม่มีการระบุ path ควรรันเป็น `npm run format:check -- .` เพื่อตรวจทั้งโปรเจกต์ |

## Development

```text
npm install
  ↓
npm run dev
  ↓
แก้ไข feature/job-application/components/* หรือ components/ui/*
  ↓
npm run lint
  ↓
npm run format
  ↓
npm run build
```

ไม่มีการตั้งค่า CI/CD (ไม่มีโฟลเดอร์ `.github/workflows`) ดังนั้นขั้นตอน lint, format และ build ในตอนนี้ต้องรันด้วยตัวเองทั้งหมด

## Testing

ไม่มีการตั้งค่า test framework ใด ๆ (Vitest, Jest หรืออื่น ๆ) ไม่มีไฟล์ทดสอบในโปรเจกต์ และ `package.json` ก็ไม่มีสคริปต์ `test` โครงสร้างพื้นฐานสำหรับการทดสอบยังไม่ถูกจัดทำขึ้นในโปรเจกต์นี้

## Code Quality

- **TypeScript** — `tsconfig.json` เปิด `"strict": true` ช่วยจับ type error ตั้งแต่ตอน compile (เช่น ฟังก์ชัน query ใน `lib/thai-address.ts` และ ambient declaration ใน `types/thailand-address.d.ts`)
- **ESLint** — ใช้ flat config (`eslint.config.mjs`) โดย extend ชุดกฎ `core-web-vitals` และ `typescript` จาก `eslint-config-next`
- **Prettier** — บังคับให้ฟอร์แมตโค้ดสม่ำเสมอ; `prettier-plugin-tailwindcss` ช่วยเรียงลำดับ class name ของ Tailwind/DaisyUI เพิ่มเติม
- ไม่มีการตั้งค่า Husky/lint-staged pre-commit hook หรือ CI check ใด ๆ — การตรวจสอบคุณภาพโค้ดในตอนนี้ต้องรันผ่าน npm script ข้างต้นด้วยตัวเอง

## Deployment

`next.config.ts` ตั้งค่า `output: "standalone"` ซึ่งสร้าง build ที่รันได้ในตัวเอง เหมาะกับการ deploy แบบ container อย่างไรก็ตาม ในโปรเจกต์นี้ยังไม่มี `Dockerfile` หรือ `docker-compose.yml` และไม่มีการตั้งค่า CI/CD workflow ใด ๆ ดังนั้นโหมด output นี้จึงยังไม่ได้ถูกเชื่อมต่อเข้ากับ deployment pipeline จริง

## Design Decisions

#### TypeScript แบบ strict mode
**Fact**: `tsconfig.json` เปิด `"strict": true`; ไฟล์ซอร์สทั้งหมดเป็น `.ts`/`.tsx`
**Design Rationale**: การเช็ค type อย่างเข้มงวดช่วยจับข้อผิดพลาดในฟิลด์ฟอร์มจำนวนมากและฟังก์ชัน query ที่อยู่ไทยใน `lib/thai-address.ts`

#### Route group แยก "/" ออกจาก "/job"
**Fact**: `app/(setup)/page.tsx` redirect จาก `/` ไปที่ `/job`; ฟอร์มจริงอยู่ที่ `app/(main)/(routes)/job/page.tsx`
**Design Rationale**: โครงสร้างนี้ดูเหมือนจะถูกออกแบบมาเพื่อแยก route สำหรับ entry/redirect แบบเบา ๆ ออกจาก route หลักของแอป โดยใช้ route group เพื่อไม่ให้โฟลเดอร์ที่ใช้จัดกลุ่มมีผลต่อ URL

#### Tailwind CSS v4 + DaisyUI
**Fact**: `app/globals.css` import Tailwind และลงทะเบียน `@plugin "daisyui"` ด้วยธีม `light` เพียงธีมเดียว; ทุก component ใน `components/ui` ใช้ class name แบบ DaisyUI (`btn`, `card`, `input`, `select`, `checkbox`, `radio`, `table`, `fieldset`)
**Design Rationale**: Class ของ DaisyUI ที่มีความหมายในตัว ช่วยให้ฟิลด์จำนวนมากในฟอร์มมีสไตล์ที่สอดคล้องกันโดยไม่ต้องเขียน CSS เองในแต่ละ component

#### `next-themes` ถูกตั้งค่าไว้แต่ล็อกไว้ที่ธีม light
**Fact**: `providers/theme-provider.tsx` ห่อ `next-themes` และถูกเรียกใช้ด้วย `defaultTheme="light"` และ `enableSystem={false}`; `app/globals.css` ลงทะเบียนธีม DaisyUI ไว้เพียงธีม `light` เท่านั้น
**Design Rationale**: ไม่สามารถระบุได้แน่ชัดจากโค้ด — โครงสร้างสำหรับสลับธีมมีอยู่แล้วแต่ลงทะเบียนไว้เพียงธีมเดียว ซึ่งอาจบ่งชี้ว่าเตรียมไว้สำหรับรองรับหลายธีมในอนาคตที่ยังไม่ได้ทำต่อ

#### ใช้ `cn()` helper แทน `class-variance-authority`
**Fact**: ทุก component ประกอบ class name ด้วย `cn()` helper ในเครื่อง (`clsx` + `tailwind-merge`, `lib/utils.ts`); `class-variance-authority` เป็น dependency ที่ประกาศไว้แต่ไม่พบการ import ใช้งานที่ใดเลย
**Design Rationale**: ไม่มีหลักฐานในโค้ดที่อธิบายว่าทำไมถึงติดตั้ง `class-variance-authority` จึงควรถือว่าเป็น dependency ที่ยังไม่ได้ใช้งาน มากกว่าจะเป็นการตัดสินใจเชิงออกแบบที่ตั้งใจ

#### การห่อ `thailand-address` เพื่อแก้ชื่อฟิลด์
**Fact**: `lib/thai-address.ts` มีคอมเมนต์อธิบายไว้ว่า field `subdistrict` ของ package ต้นทางจริง ๆ แล้วเก็บชื่ออำเภอ (amphoe) และ field `district` เก็บชื่อตำบล (tambon) ฟังก์ชันที่ห่อไว้ (`getAmphoes`, `getTambons`) จึงเปลี่ยนชื่อให้ตรงกับคำเรียกเขตการปกครองไทยที่ถูกต้อง
**Design Rationale**: นี่คือสิ่งที่ระบุไว้ตรง ๆ ในคอมเมนต์ของซอร์สโค้ดเอง ไม่ใช่ข้อสันนิษฐาน — wrapper นี้มีไว้เพื่อซ่อนความไม่สอดคล้องของชื่อฟิลด์ใน package ภายนอก

#### Ambient type declaration สำหรับ `thailand-address`
**Fact**: `types/thailand-address.d.ts` ประกาศ type ให้กับ `thailand-address/lib/main.es.js` ซึ่งเป็นโมดูลที่ไม่มี TypeScript type มาให้
**Design Rationale**: จำเป็นสำหรับ TypeScript แบบ strict mode เพื่อให้ตรวจสอบ type ของโค้ดที่ import package ภายนอกที่ไม่มี type ได้

## Developer Guide

Developer ใหม่ควรอ่านโปรเจกต์ตามลำดับนี้:

1. README ฉบับนี้ โดยเฉพาะหัวข้อ **Tech Stack** และ **Folder Structure**
2. `app/layout.tsx` — การตั้งค่า font และ `ThemeProvider` ระดับ global
3. `app/(setup)/page.tsx` และ `app/(main)/(routes)/job/page.tsx` — routing และการประกอบหน้าเพจ
4. `feature/job-application/components/*.tsx` — อ่านตามลำดับที่ถูกประกอบใน `job/page.tsx` (Header → General → Family → Education → Working information)
5. `components/ui/*.tsx` — primitive แบบ DaisyUI ที่ feature component นำไปใช้ซ้ำ
6. `lib/utils.ts` และ `lib/thai-address.ts` — utility module ที่ใช้ร่วมกันสองตัว

## Troubleshooting

- **ฟอร์มไม่บันทึกหรือ submit อะไรเลย** เป็นเรื่องปกติในสถานะปัจจุบันของโปรเจกต์ — ไม่มี `onSubmit` handler, ไม่มีการเรียก `fetch`, และไม่มี route ใน `app/api` ค่าทุกฟิลด์อยู่ใน local component state และจะหายไปเมื่อ refresh หรือเปลี่ยนหน้า
- **`components/ui/ิีbutton.tsx`** มีอักขระประสมภาษาไทย (สระ/วรรณยุกต์) ปนอยู่ในชื่อไฟล์ (ไม่ได้อ่านเป็น `button.tsx` ธรรมดา) และ component `Button` ที่ export ออกมาก็ไม่ถูก import ใช้งานที่ใดในโค้ดเลย
- **`npm run format:check` ดูเหมือนจะไม่ทำอะไร** เพราะสคริปต์ถูกกำหนดไว้เป็น `prettier --check` โดยไม่มี path ให้รันเป็น `npm run format:check -- .` เพื่อตรวจสอบทั้งโปรเจกต์
- **`.vscode/settings.json`** มีการตั้งค่า Prisma formatter (`"[prisma]"`, `prisma-smart-formatter.*`) แต่ในโปรเจกต์นี้ไม่มี dependency `prisma` หรือไฟล์ schema `.prisma` เลย ค่านี้จึงไม่มีผลใด ๆ ในตอนนี้

## Future Improvements

ช่องว่างต่อไปนี้เป็นสิ่งที่พบจากการตรวจสอบโค้ดปัจจุบัน บันทึกไว้ตามข้อเท็จจริง ไม่ใช่แผนงานที่ยืนยันแล้ว:

- ยังไม่มี logic สำหรับ submit ฟอร์ม (`onSubmit`, API route หรือ persistence layer)
- ยังไม่มีการทดสอบอัตโนมัติ
- ยังไม่มี CI/CD workflow แม้ว่า `next.config.ts` จะตั้งค่าไว้สำหรับ standalone/containerized build แล้วก็ตาม
- `@heroicons/react` และ `class-variance-authority` ถูกติดตั้งไว้แต่ยังไม่ได้ใช้งาน
