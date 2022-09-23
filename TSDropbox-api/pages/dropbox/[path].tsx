import { IFile } from "@/api/models/IFile";
import FolderService from "@/api/services/FolderService";
import FileItem from "@/components/List/FileItem";
import PathBreadcrumb from "@/components/PathBreadcrumb";
import Layout from "layouts/MianLayout";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useStores } from "../../app/hooks/useStore";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const path = params?.path;
  return {
    props: {
      path: path,
    },
  };
};

type CurrentPath = {
  path: string;
};

const Path = (SerchPath: CurrentPath) => {
  const [itemList, setitemList] = useState<IFile[]>([]);
  const router = useRouter();
  const { AuthStore } = useStores();

  useEffect(() => {
    if (!AuthStore.AuthSettings.auth) {
      router.push("/");
    } else {
      FolderService.fetchData(
        SerchPath.path.slice(1, SerchPath.path.length).replace(/_/g, "/")
      ).then((res) => setitemList(res));
    }
  }, [AuthStore.AuthSettings.auth, SerchPath]);

  return (
    <Layout title="Files">
      <PathBreadcrumb path={"a"} />
      <ListGroup>
        {itemList.map((e) => {
          return <FileItem key={e.id} item={e} />;
        })}
      </ListGroup>
    </Layout>
  );
};

export default Path;
