import React from "react";
import EditModal from "./EditModal";
import "./css/editModal.css";
import { Header } from "semantic-ui-react";

const EditPalette = () => {
  return (
    <div>
      <Header as="h1" className="palette-header">
        EditPalette
      </Header>
      <EditModal />
    </div>
  );
};

export default EditPalette;
