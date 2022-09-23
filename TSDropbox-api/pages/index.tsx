import ApiForm from "@/components/ApiForm";
import Layout from "layouts/MianLayout";
import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <Layout title="Api">
      <ApiForm />
    </Layout>
  );
};

export default Home;
