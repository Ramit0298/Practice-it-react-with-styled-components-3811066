import React from "react";

export const greetingWithReact = React.createElement("h1", null, "Hello, JSX!");
export const greetingWithJSX = <h1>Hello, JSX!</h1>;

const name = "React Enthusiast";
export const dynamicGreeting = <h2>Hello {name}!</h2>;

export const OldButton = ({ label }) => {
  return <button>{label}</button>;
};
