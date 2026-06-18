import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <p>
        This App was created by{" "}
        <a
          href="https://github.com/RparraTZ?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rosalba Parra.{" "}
        </a>
        It's hosted on{" "}
        <a
          href="https://elegant-horse-fb314b.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify{" "}
        </a>
        and is{" "}
        <a
          href="https://github.com/RparraTZ/Alba-s-Live-Simple-Weather-App--React"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on Github.
        </a>
      </p>
    </div>
  );
}
