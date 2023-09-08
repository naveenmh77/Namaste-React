//   const heading = React.createElement("h1", {
//     id:"heading" , xyz : " work hard"
//   }, "Hello Wolrd from React!!!");
//   console.log(heading); //    Object
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is h1 tag"),
    React.createElement("h2", {}, "this is h2 tag"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "this is h1 tag"),
    React.createElement("h2", {}, "this is h2 tag"),
  ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
