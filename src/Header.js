import React from "react";

export default function Header({ content }) {
  return (
    <header>
      <h3 data-testid="h3id" className="fancy-h3">
        {content}
      </h3>
    </header>
  );
}
