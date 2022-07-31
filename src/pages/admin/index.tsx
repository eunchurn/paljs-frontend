import React from "react";
import { Settings } from "@paljs/admin/Settings";
import Layout from "Layouts";

const languateKr = {
  dir: "경로",
  header: "모델 Tables 수정",
  dbName: "DB이름",
  displayName: "표시이름",
  modelName: "모델 이름",
  idField: "ID 필드",
  displayFields: "표시 필드",
  // fieldName: string;
  // actions: string;
  // create: string;
  // update: string;
  // delete: string;
  // read: string;
  // filter: string;
  // sort: string;
  // editor: string;
  // upload: string;
  // tableView: string;
  // inputType: string;
};
export default function SettingsPage() {
  return (
    <Layout title="설정">
      <Settings language={languateKr} />
    </Layout>
  );
}
