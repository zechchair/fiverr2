import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: "/admin/logs",
    permanent: false,
  },
});
const Admin = () => null;
export default Admin;
