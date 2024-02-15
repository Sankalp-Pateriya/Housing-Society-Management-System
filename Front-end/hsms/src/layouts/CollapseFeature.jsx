import React, { useState } from "react";
import { Collapse, NavbarToggler } from "reactstrap";

export default function CollapseFeature() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <NavbarToggler onClick={()=>setIsOpen(!isOpen)}>
        <Collapse isOpen={isOpen} navbar>
            Header component
        </Collapse>
      </NavbarToggler>
    </div>
  );
}
