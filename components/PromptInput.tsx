'use client'

import { useState } from "react";

function PromptInput() {
    const [input, setInput] =useState("");
  
    return (
    <div className="m-10">
        <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
            <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="enter a prompt" 
                className="flex-1 p-4 outline-none rounded-md"/>
            <button
                className={`p-4 ${
                    input
                    ? "bg-orange-500 text-white transition-colors duration-400"
                    : "text-gray-300 cursor-not-allowed"
                } font-bold`}
                type="submit"
                disabled={!input}
            >
            Generate
            </button>
            <button 
                className={`p-4 bg-orange-300 text-white transition-colors duration-400 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400`}>User Suggestion</button>
            <button 
                className={`p-4 bg-white text-orange-500 border-none transition-colors duration-400 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold`}>New Suggestion</button>
        </form>
    </div>
  );
}

export default PromptInput;