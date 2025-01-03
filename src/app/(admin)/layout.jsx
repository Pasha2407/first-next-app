import { Sidebar } from "../components/sidebar/sidebar";

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
