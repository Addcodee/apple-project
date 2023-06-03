import React from "react";

const FooterLinkColumn = ({ link }) => {
  return (
    <ul>
      <li>{link.name}</li>
    </ul>
  );
};

export default FooterLinkColumn;
