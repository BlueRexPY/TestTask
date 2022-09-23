import React from "react";
import Head from "next/head";
import { ReactChild, ReactNode } from "react";
import ToolBar from "@/components/ToolBar";
import { Col, Container, Row } from "react-bootstrap";

type Props = {
  children: ReactChild | ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
};

const Layout = (props: Props) => {
  const {
    title = "Home",
    description = "file explorer",
    keywords = "Dropbox, file explorer",
  } = props;

  return (
    <div className="layout">
      <Head>
        <title>{`DropBox - ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={`DropBox, file explorer, ${keywords}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ToolBar />
      <Container>
        <Row>
          <Col className="mainList" md={{ span: 2, offset: 2 }} lg="8">
            {props.children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
