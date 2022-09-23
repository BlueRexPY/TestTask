import Layout from "layouts/MianLayout";
import { Alert } from "react-bootstrap";
const notFound = () => {
  return (
    <Layout title={"Page not found"}>
      <Alert variant="danger">
        <Alert.Heading>Page not found!</Alert.Heading>
        <p>Looks like you weren't supposed to be here.</p>
      </Alert>
    </Layout>
  );
};

export default notFound;
