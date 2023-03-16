import React from "react";
import { useParams } from 'react-router-dom';

export default function AdminPanel() {

  const { panel } = useParams();

  return (
    <div className="AdminPanel">
      <Table />
      <Form />
    </div>
  );
}