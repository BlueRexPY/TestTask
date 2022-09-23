import Link from "next/link";
import React from "react";
import { Breadcrumb } from "react-bootstrap";

type Props = {
  path: string;
};

const PathBreadcrumb = ({ path }: Props) => {
  return (
    <Breadcrumb className="breadcrumb">
      <Breadcrumb.Item>
        {" "}
        <Link href={"/dropbox/_"}>Dropbox</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default PathBreadcrumb;
