import { useState } from "react";


// Props: inputs passed to a component. Similar to func args. Immutable.
// State: data managed by a component. Similar to local vars. Mutable.

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //props: ListGroupProps

  // hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   const [name, setName] = useState('');
  //   arr[0]; // variable (selectedIndex)
  //   arr[1]; // updater function

  // Event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  // React can only return 1 elemen, can wrap in div or fragment
  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              onSelectItem(item);
              setSelectedIndex(index);
            }} // (event) => console.log("Clicked", item, index)
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
