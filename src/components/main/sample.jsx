import React, { useState, useRef, useEffect } from "react";
import {  FaRedo } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const Project3 = () => {
  const [columns, setColumns] = useState(() => {
    const savedColumns = localStorage.getItem("columns");
    return savedColumns
      ? JSON.parse(savedColumns)
      : [];
  });;
  const [activeBoard, setActiveBoard] = useState("bigBoard");
  const containerRef = useRef(null);
  const [repeaterCoin, setRepeaterCoin] = useState("Wait");
  const [clickCount, setClickCount] = useState({ P: 0, B: 0, T: 0 });



  // Store state in localStorage whenever columns or clickCount changes
  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
    localStorage.setItem("clickCount", JSON.stringify(clickCount));
  }, [columns, clickCount]);

  // Add a new result to the respective column
  // const handleClick = (type) => {
  //   setColumns((prevColumns) => {
  //     const newColumns = [...prevColumns];
  //     const lastColumn = newColumns[newColumns.length - 1];

  //     if (lastColumn && lastColumn.type === type) {
  //       lastColumn.values.push(type);
  //     } else {
  //       newColumns.push({ type, values: [type] });
  //     } 
  //     localStorage.setItem("columns", JSON.stringify(newColumns));
  //     return newColumns;
  //   });
  //   setClickCount((prevCount) => ({
  //     ...prevCount,
  //     [type]: prevCount[type] + 1,
  //   }));
  // };

  const handleClick = (type) => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      const lastColumn = newColumns[newColumns.length - 1];
  
      if (type === "T") {
        // Add "T" to the current column without creating a new column
        if (lastColumn) {
          lastColumn.values.push(type);
        }
        return newColumns;
      }

      if (lastColumn && lastColumn.type === type) {
        lastColumn.values.push(type);
      } else {
        newColumns.push({ type, values: [type] });
      }
      return newColumns;
    });
  
    // Update click count
    setClickCount((prevCount) => ({
      ...prevCount,
      [type]: prevCount[type] + 1,
    }));
  };
  
  

  // Reset all columns and click count
  const handleReset = () => {
    setColumns([]);
    setClickCount({ P: 0, B: 0, T: 0 });
    setRepeaterCoin("Wait");
  };

  // Undo the last action
  const handleUndo = () => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns];
      const lastColumn = newColumns[newColumns.length - 1];

      if (lastColumn) {
        if (lastColumn.values.length > 1) {
          lastColumn.values.pop();
        } else {
          newColumns.pop();
        }
      }

      return newColumns;
    });
    setClickCount((prevCount) => {
      let newCount = { ...prevCount };
      const lastColumn = columns[columns.length - 1];
  
      if (lastColumn && lastColumn.values.length > 0) {
        const lastValue = lastColumn.values[lastColumn.values.length - 1];

        if (lastValue === 'P') {
          newCount.P = Math.max(newCount.P - 1, 0);
        } else if (lastValue === 'B') {
          newCount.B = Math.max(newCount.B - 1, 0);
        } else if (lastValue === 'T') {
          newCount.T = Math.max(newCount.T - 1, 0);
        }
      }
      localStorage.setItem("clickCount", JSON.stringify(newCount));
  
      return newCount;
    });
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, [columns]);

  const nineClick = columns.map((obj) => obj.values).flat();
  const columnsBead = [];
  for (let i = 0; i < nineClick.length; i += 6) {
    columnsBead.push(nineClick.slice(i, i + 6));
  }


  // logic for baccarat

  useEffect(() => {
   if(nineClick.length >=9){
    if (columns.length === 0) return;

    // Extract all values from each object and flatten into a single array
    const allValues = columns.map((obj) => obj.values).flat();

    // Split allValues into chunks of three
    const chunks = [];
    for (let i = 0; i < allValues.length; i += 3) {
      chunks.push(allValues.slice(i, i + 3));
    }

    if (repeaterCoin === allValues[allValues.length - 1]) {
      setRepeaterCoin("Wait");
      toast.success("You Win! 👍", {
        className: "bg-Tie text-white", 
      });
    }

    // Take the last complete chunk (if it has exactly 3 elements)
    const lastChunk = chunks[chunks.length - 1];
    if (!lastChunk || lastChunk.length < 3) return;

    const valueCount = lastChunk.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});

    const repeaterValue = Object.keys(valueCount).find(
      (value) => valueCount[value] >= 2
    );

    if (repeaterValue) {
      setRepeaterCoin(repeaterValue);
    } else {
      setRepeaterCoin("Wait");
    }
   }
  }, [columns]);

  return (
    <>
    <div className="w-full flex justify-end gap-3 px-1 z-20">
      <button
        onClick={handleUndo}
        className="group  bg-customBlack border-2 border-slate-300 gap-1 px-3 text-white flex rounded-full justify-center items-center shadow-lg hover:bg-superPurple hover:border-customBlack"
      >
        <p>Undo</p>
        <FaArrowRight className="text-md transform group-hover:translate-x-2 transition-all duration-300" />
      </button>

      <button
        onClick={handleReset}
        className="p-2 bg-customBlack text-white border-2 border-slate-300 rounded-full shadow-lg hover:bg-superPurple hover:border-customBlack"
      >
        <FaRedo className="text-md transform transition-transform duration-300 ease-in-out hover:rotate-180" />
      </button>
      </div>

    <div className="flex flex-col justify-center items-center">
      {/* Undo and Reset buttons */}
      

      {/* Container for columns */}
      <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center w-full">
      {/* Buttons to switch between boards */}
      <div className="flex w-full p-2 gap-2 ">
        <button
          onClick={() => setActiveBoard("bigBoard")}
          className={px-4 py-2  w-[50%] text-white rounded-2xl font-semibold transition ${
            activeBoard === "bigBoard"
              ? "bg-superPurple shadow-md"
              : "bg-purplegrad hover:bg-slate-300 "
          }}
        >
          Big Roard
        </button>
        <button
          onClick={() => setActiveBoard("beadBoard")}
          className={px-4 py-2  text-white w-[50%] rounded-2xl font-semibold transition ${
            activeBoard === "beadBoard"
              ? "bg-superPurple shadow-md"
              : "bg-purplegrad hover:bg-slate-300 "
          }}
        >
          Bead Roard
        </button>
      </div>

      {/* Container for both boards */}
      <div className="flex w-full justify-center bg-purplegrad">
        {activeBoard === "bigBoard" && (
          <div
            className="  rounded-2xl p-2 w-full sm:w-[400px] md:w-[500px] lg:w-[850px]"
            style={{
              height: "200px",
              overflow: "scroll",
              scrollbarWidth: "none",
            }} ref={containerRef}
          >
            <div
              id="bigBoard"
              className="flex flex-row gap-2"
              style={{ height: "100%" 
              }}
            >
            {columns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col items-center gap-2">
                {column.values.map((value, index) => {
                  const prevValue =
                    index > 0
                      ? column.values[index - 1]
                      : colIndex > 0
                      ? columns[colIndex - 1].values[columns[colIndex - 1].values.length - 1]
                      : null;
                      
                  const backgroundClass =
                    value === "T"
                      ? prevValue === "B"
                        ? "bg-Banker"
                        : prevValue === "P"
                        ? "bg-Player"
                        : ""
                      : value === "B"
                      ? "bg-Banker"
                      : value === "P"
                      ? "bg-Player"
                      : "";
                  return (
                    <div
                      key={index}
                      className={flex items-center justify-center text-sm w-6 h-6 text-lg font-semibold text-white rounded-full ${backgroundClass}}
                    >
                      {value}
                    </div>
                  );
                })}
              </div>
            ))}

            </div>
        </div>
        )}

        {activeBoard === "beadBoard" && (
          <div
            className="   rounded-2xl p-2 w-full sm:w-[400px] md:w-[500px] lg:w-[850px]"
            style={{
              height: "200px",
              overflow: "scroll",
              scrollbarWidth: "none",
            }} ref={containerRef}
          >
            <div
              id="beadBoard"
              className="flex flex-row gap-2 "
              style={{ height: "100%" }}
            >
              {columnsBead.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col items-center gap-2">
                {column.map((value, index) => {
                  const prevValue =
                    colIndex > 0
                      ? columnsBead[colIndex - 1][columnsBead[colIndex - 1].length - 1]
                      : column[index - 1];
                  const backgroundClass =
                    value === "T"
                      ? prevValue === "B"
                        ? "bg-Banker"
                        : prevValue === "P"
                        ? "bg-Player"
                        : ""
                      : value === "B"
                      ? "bg-Banker"
                      : value === "P"
                      ? "bg-Player"
                      : "";
                 
                  return (
                    <div
                      key={index}
                      className={flex items-center justify-center text-sm w-6 h-6 text-lg font-semibold text-white rounded-full ${backgroundClass}}
                    >
                      {value}
              </div>
                  );
                })}
              </div>
            ))}

            </div>
          </div>
        )}
      </div>
      </div>
              <div className='flex flex-col' >
        <div className='flex items-center gap-2'>
            <div className='flex-col flex items-center gap-2 mt-12'>
                <p className='border-2 border-rose-400 px-2 md:px-4 py-1 flex rounded-md text-sm md:text-base'><BsPerson />  {clickCount.P}</p>
                <button className='bg-Player px-8 md:px-12 py-1.5 text-white rounded-md text-sm md:text-base font-medium' onClick={() => handleClick("P")}>Player</button>
            </div>
            <div>
                <div className='border-[8px] border-purple-500 rounded-full '>
                    <span className='inline-block text-2xl text-white rounded-full flex justify-center items-center' style={{height:"65px",width:"65px"}}>
                    {repeaterCoin}
                    </span>
                </div>
            </div>
            <div className='flex-col flex items-center gap-2 mt-12'>
                <p className='border-2 border-rose-400 px-2 md:px-4 py-1 flex rounded-md text-sm md:text-base'><BsPerson />  {clickCount.B}</p>
                <button className='bg-Banker px-8 md:px-12 text-white py-1.5 rounded-md text-sm md:text-base font-medium'onClick={() => handleClick("B")} >Banker</button>
            </div>
        </div>
        <div className='flex justify-center mt-1'>
            <div className='flex flex-col items-center gap-2'>
                <button className='bg-Tie px-8 md:px-12 py-1.5 text-white rounded-md text-sm md:text-base  font-medium ' onClick={() => handleClick("T")}>Tie</button>
                <p className='border-2 border-rose-400  px-2 md:px-4 py-1 rounded-md text-sm md:text-base flex'  ><BsPerson />  {clickCount.T}</p>
            </div>
        </div>
    </div>


      
             
        {/* Button Container */}
        {/* <div className="w-full rounded-md shadow-lg flex flex-wrap justify-center gap-4">
         
          <button
            onClick={() => handleClick("P")}
            className="flex flex-col items-start text-white rounded-md bg-Player rounded-r-3xl p-3 z-10"
            style={{ position: "relative", left: "40px", width: "90px" }}
            id="blue"
          >
            <h2 className="text-md font-bold">PLAYER</h2>
            <div className="mt-2 text-sm font-semibold">
              <BsPerson /> {clickCount.P}
            </div>
          </button>

          
          <button
            onClick={() => handleClick("T")}
            className="relative w-40 flex flex-col items-center bg-Tie text-white p-3"
            id="green"
          >
            <h2 className="text-md font-bold">TIE</h2>
            <div className="mt-2 text-sm font-semibold">
              <BsPerson /> {clickCount.T}
            </div>
          </button>

          
          <button
            onClick={() => handleClick("B")}
            className="w-1/3 flex flex-col items-end bg-Banker rounded-md text-white rounded-l-3xl p-3"
            style={{ position: "relative", right: "40px", width: "90px" }}
            id="brown"
          >
            <h2 className="text-md font-bold">BANKER</h2>
            <div className="mt-2 text-sm font-semibold">
              <BsPerson /> {clickCount.B}
            </div>
          </button>
        </div> */}
       </div>
      </div>

      {/* ToastContainer to display the toasts */}
      <ToastContainer autoClose={2000} />
    </div>
    </>
  );
};

export default Project3;