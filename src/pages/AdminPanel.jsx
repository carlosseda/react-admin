import React from "react";
import { useParams } from 'react-router-dom';
import Table from "../components/Table";
import Form from "../components/Form";

export default function AdminPanel() {

  const { panel } = useParams();

  return (
    <div className="AdminPanel">
      <Table />
      <Form />
    </div>
  );
}