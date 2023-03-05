import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: "https://klarna.com/de/",
    permanent: false,
  },
});
const Home = () => null;
export default Home;
