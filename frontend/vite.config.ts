import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // เปิดให้เข้าถึงจาก container อื่นหรือ Host machine
    port: 5173, // พอร์ตที่ต้องการใช้
  },
});
