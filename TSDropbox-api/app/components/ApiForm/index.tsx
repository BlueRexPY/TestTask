import { UseInput } from "@/hooks/useInput";
import { useStores } from "@/hooks/useStore";
import { useRouter } from "next/router";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ApiForm = () => {
  const token = UseInput("");
  const { AuthStore } = useStores();
  const router = useRouter();
  const handleToken = () => {
    if (token.value.length === 143) {
      AuthStore.Login(token.value);
      router.push("/dropbox/_");
    } else {
      alert("token is not valid");
    }
  };

  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>AccessToken</Form.Label>
        <Form.Control placeholder="Enter Token" {...token} />
        <Form.Text className="text-muted">
          dropbox.com/developers/apps/info
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={() => handleToken()}>
        Submit
      </Button>
    </div>
  );
};

export default ApiForm;
