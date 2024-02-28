import { useState } from "react";
import AccoItem from "./components/AccoItem";

function App() {
  const [conts, setConts] = useState([
    {
      id: 1,
      heading: "Home",
      content: "This is a description text that shows when expanded.",
      active: false,
      color: "bg-orange",
      textColor: "text-txtOrange",
    },
    {
      id: 2,
      heading: "About",
      content: "This is a description text that shows when expanded.",
      active: false,
      color: "bg-pink",
      textColor: "text-txtPink",
    },
    {
      id: 3,
      heading: "Client",
      content: "This is a description text that shows when expanded.",
      active: false,
      color: "bg-green",
      textColor: "text-txtGreen",
    },
    {
      id: 4,
      heading: "Contact",
      content: "This is a description text that shows when expanded.",
      active: false,
      color: "bg-purple",
      textColor: "text-txtPurple",
    },
  ]);

  const accoList = conts.map((cont) => (
    <AccoItem
      key={cont.id}
      bgColor={cont.color}
      textColor={cont.textColor}
      handleShowBtn={() => {
        setConts((prevConts) => {
          return prevConts.map((item) =>
            item.id === cont.id
              ? { ...item, active: true }
              : { ...item, active: false }
          );
        });
      }}
      handleHideBtn={() => {
        setConts((prevConts) =>
          prevConts.map((item) =>
            item.id === cont.id ? { ...item, active: false } : item
          )
        );
      }}
      heading={cont.heading}
      isActive={cont.active}
      content={cont.content}
    />
  ));
  return <div>{accoList}</div>;
}

export default App;
