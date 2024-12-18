import React, { useEffect, useState } from "react";
import Modal from "../../resources/Modal";

const Notes = ({ setIsNotesOpen, isNotesOpen, setNotesData }) => {
  const [notesInput, setNotesInput] = useState({
    strategy_name: "",
    strategy_type: "",
    Buy_in: "",
    Average_bet: "",
    no_bullets: "",
    walkaway: "",
    betting_tries: "",
    bet_settup: "",
  });

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes4");
    if (savedNotes) {
      setNotesInput(JSON.parse(savedNotes));
    }
  }, []);

  console.log('notesInput', notesInput);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setNotesInput({ ...notesInput, [name]: value });
  };

  const handleCreateNewNotes = () => {
    try {
      const existingNotes = localStorage.getItem("notes4");
  
      // If notes4 already exists, update it
      if (existingNotes) {
        const updatedNotes = { ...JSON.parse(existingNotes), ...notesInput };
        localStorage.setItem("notes4", JSON.stringify(updatedNotes));
        setNotesData(updatedNotes); // Update state with the latest data
        console.log("Notes updated:", updatedNotes);
      } else {
        // If no existing notes, save new notes
        localStorage.setItem("notes4", JSON.stringify(notesInput));
        setNotesData(notesInput); // Update state with the new data
        console.log("New notes saved:", notesInput);
      }
  
      setIsNotesOpen(false);
    } catch (err) {
      console.log("Error saving or updating notes", err);
    }
  };
  

  return (
    <>
      <Modal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        title="Notes"
      >
        <div className=" p-2 md:p-4 space-y-2 md:space-y-6">
          {/* Input fields in two-column layout */}
          <div className="flex flex-wrap justify-between gap-2 md:gap-6">
            <input
              type="text"
              name="strategy_name"
              value={notesInput.strategy_name}
              onChange={handleChangeInput}
              placeholder="Strategy Name"
              className="w-full md:w-[45%] py-1 md:py-2 px-2 md:px-4 border border-gray-300 bg-slate-300 rounded-md md:rounded-lg focus:outline-none text-black"
            />
            <input
              type="text"
              name="strategy_type"
              value={notesInput.strategy_type}
              onChange={handleChangeInput}
              placeholder="Strategy Type"
              className="w-full md:w-[45%] py-1 md:py-2 px-2 md:px-4 border border-gray-300 bg-slate-300 rounded-md md:rounded-lg focus:outline-none text-black"
            />
            <input
              type="text"
              name="Buy_in"
              value={notesInput.Buy_in}
              onChange={handleChangeInput}
              placeholder="Buy-in"
              className="w-full md:w-[45%] py-1 md:py-2 px-2 md:px-4 border border-gray-300 bg-slate-300 rounded-md md:rounded-lg focus:outline-none text-black"
            />
            <input
              type="text"
              name="Average_bet"
              value={notesInput.Average_bet}
              onChange={handleChangeInput}
              placeholder="Average Bet"
              className="w-full md:w-[45%] py-1 md:py-2 px-2 md:px-4 border border-gray-300 bg-slate-300 rounded-md md:rounded-lg focus:outline-none text-black"
            />
            <input
              type="text"
              name="no_bullets"
              value={notesInput.no_bullets}
              onChange={handleChangeInput}
              placeholder="No. of Bullets"
              className="w-full md:w-[45%] py-1 md:py-2 px-2 md:px-4 border border-gray-300 bg-slate-300 rounded-md md:rounded-lg focus:outline-none text-black"
            />
            <input
              type="text"
              name="walkaway"
              value={notesInput.walkaway}
              onChange={handleChangeInput}
              placeholder="Walkaway Amount"
              className="w-full md:w-[45%] py-1 md:py-2 px-2 md:px-4 border border-gray-300 bg-slate-300 rounded-md md:rounded-lg focus:outline-none text-black"
            />
            <input
              type="text"
              name="betting_tries"
              value={notesInput.betting_tries}
              onChange={handleChangeInput}
              placeholder="Betting Tries"
              className="w-full md:w-[45%] py-1 md:py-2 px-2 md:px-4 border border-gray-300 bg-slate-300 rounded-md md:rounded-lg focus:outline-none text-black"
            />
          </div>

          {/* Textarea for Bet Setup */}
          <textarea
            name="bet_settup"
            value={notesInput.bet_settup}
            onChange={handleChangeInput}
            placeholder="Bet Setup"
            className="w-full py-1 md:py-2 px-2 md:px-4 border border-gray-300 bg-slate-300 rounded-md md:rounded-lg focus:outline-none text-black h-16 md:h-28"
          ></textarea>

          {/* Buttons */}
          <div className="flex justify-evenly items-center mt-5 md:mt-8">
            <button
              className="font-semibold text-base px-3 py-1 md:px-6 md:py-2 bg-slate-900 text-white rounded-md md:rounded-lg hover:bg-blue-700 transition-all"
              onClick={handleCreateNewNotes}
            >
              Save
            </button>
            <button
              className="font-semibold text-base px-3 py-1 md:px-6 md:py-2 bg-red-500 text-white rounded-md md:rounded-lg hover:bg-red-700 transition-all"
              onClick={() => setIsNotesOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Notes;
