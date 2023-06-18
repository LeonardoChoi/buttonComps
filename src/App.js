import Accordion from "./component/Accordion";

function App() {
  const items = [
    {
      id: "doisdufajs34234",
      label: "can i use react on a project",
      content: "you can use react on any project you want",
    },
    {
      id: "doisduf4523452kl;jdfg34",
      label: "can i use react on a project",
      content: "you can use react on any project you want",
    },
    {
      id: "doiasdfasdf43512345sdufajsdsfasdf34234",
      label: "can i use react on a project",
      content: "you can use react on any project you want",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
