const heading1 = React.createElement("h1", {}, "this is react element1");
const heading2 = React.createElement("h1", {}, "this is react element2");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
