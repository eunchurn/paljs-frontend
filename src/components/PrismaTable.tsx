import React from "react";
import { useRouter } from "next/router";
import { PrismaTable } from "@paljs/admin/PrismaTable";
import Layout from "Layouts";

const Table: React.FC<{ model: string }> = ({ model }) => {
  const router = useRouter();
  return (
    <Layout title={model}>
      <PrismaTable model={model} push={router.push} query={router.query} />
    </Layout>
  );
};

export default Table;
