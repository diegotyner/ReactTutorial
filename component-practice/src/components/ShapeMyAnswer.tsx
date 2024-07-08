import React, { useEffect, useState } from "react";

interface ShapeProps {
  data: number[][];
}
const Shape = ({ data }: ShapeProps) => {
  const [stack, setStack] = useState<string[]>([]);
  const [shown, setShown] = useState<Set<string>>(new Set())
  const [allSelected, setAllSelected] = useState(false);
  const boxes_shown = (data.flat(Infinity) as number[]).reduce((count, item) => item === 1 ? count + 1 : count, 0)

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const code = target.getAttribute('data-location');
    if (code && !shown.has(code) && !allSelected) {
      setShown((prevShown) => new Set(prevShown).add(code));
      setStack((prevStack) => [...prevStack, code]);
    }
  }

  useEffect(() => {
    if (stack.length >= boxes_shown) { 
      setAllSelected(true);
      const interval = setInterval(() => {
        setStack(prevStack => {
          if (prevStack.length === 0) {
            clearInterval(interval);
            setAllSelected(false);
            return prevStack;
          }
          const newStack = [...prevStack];
          const fadeCode = newStack.pop();
          setShown(prevShown => {
            const newShown = new Set(prevShown);
            newShown.delete(fadeCode as string);
            return newShown;
          });
          return newStack;
        });
      }, 100);
    }
  }, [stack])




  return (
    <>
      <h1>My answer to exercise</h1>

      {data &&
        data.map((items, rowIndex) => (
          <div key={rowIndex} className="row">
            {items.map((item, colIndex) => (
              <div
                key={colIndex}
                className={`box ${item === 1 ? "show" : "noshow"} ${shown.has(`${rowIndex}-${colIndex}`) ? "green" : ""}`}
                onClick={handleClick}
                data-location={`${rowIndex}-${colIndex}`}
              />
            ))}
          </div>
        ))}
    </>
  );
};

export default Shape;