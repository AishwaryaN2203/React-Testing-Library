import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <div>
      <h1 className="header" data-testId="header-id">
        {title}
      </h1>
      <h3 title="Header" className="header">
        Aish
      </h3>
    </div>
  );
}
