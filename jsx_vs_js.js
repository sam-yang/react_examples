JSX Example

<h1>Hello World!</h1>

------------------------------------------------

Transpiled to JavaScript:

React.createElement("h1", null, "Hello World!");

------------------------------------------------
------------------------------------------------

JSX Example 2

<div className="example">Example Text</div>
<div id="2">
  <h1>Hello World!</h1>
</div>;

------------------------------------------------

Transpiled to JavaScript:

React.createElement("div", { className: "example" }, "Example Text");
React.createElement(
  "div",
  { id: "2" },
  React.createElement("h1", null, "Hello World!"),
);