import React, { useEffect, useState, useMemo, useRef } from "react";

interface ShapeProps {
  data: number[][];
}
const Shape = ({ data }: ShapeProps) => {
  const [selected, setSelected] = useState(new Set());
  const [deselect, setDeselect] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);

  const boxes = useMemo(() => data.flat(Infinity) as number[],[data])
  const boxes_shown = useMemo(() => (
    boxes.reduce((count, item) => item === 1 ? count + 1 : count, 0)
  ), [boxes])

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const code = target.getAttribute('data-code');
    const status = target.getAttribute('data-status');

    if(!code || status === 'hidden' || deselect || selected.has(code)){
      return 
    }
    setSelected(prev => new Set(prev.add(code)))
  }

  const deselectHandler = () => {
    setDeselect(true);
    const keys = Array.from(selected.keys());
    const removeNextKey = () => {
      if (keys.length) {
        const currentKey = keys.shift();
        setSelected(prev => {
          const updatedKeys = new Set(prev);
          updatedKeys.delete(currentKey);
          return updatedKeys;
        })
        timerRef.current = setTimeout(removeNextKey,500)
      } else{
        setDeselect(false);
        clearTimeout(timerRef.current)
      }
    }
    timerRef.current = setTimeout(removeNextKey, 100)
  }
  useEffect(()=>{
    if(selected.size>=boxes_shown){
       //deselect
      deselectHandler();
    }
  },[selected])

  return (
    <>
      <h1>Answer to exercise</h1>

      {data &&
        data.map((items, rowIndex) => (
          <div key={rowIndex} className="row">
            {items.map((item, colIndex) => {
              const code = `${rowIndex}-${colIndex}`
              const status = item === 1 ? 'visible' : 'hidden';
              const isSelected = selected.has(code)
              return (
              <div
                key={colIndex}
                className={`box ${status} ${isSelected && "selected"}`}
                onClick={handleClick}
                data-code={code}
                data-status={status} 
              />
            )})}
          </div>
        ))}
    </>
  );
};

export default Shape;
