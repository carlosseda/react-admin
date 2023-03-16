import React from "react";
import { useParams } from 'react-router-dom';
import Table from "../components/Table";
import Form from "../components/Form";

export default function AdminPanel() {

  const { panel } = useParams();

  return (
    <div className="adminPanel">
      <div className="table">
        <Table />
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
}