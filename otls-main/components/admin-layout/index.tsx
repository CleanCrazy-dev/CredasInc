import AdminNavBar from "../admin-navbar";

const AdminLayout = ({ children }: any) => {
  return (
    <>
      <AdminNavBar />
      {children}
    </>
  );
};

export default AdminLayout;
