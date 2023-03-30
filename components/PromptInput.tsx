'use client'

import fetchSuggestion from "@/lib/fetchFromGPT";
import { useState } from "react";
import useSWR from "swr";

function PromptInput() {
    const [input, setInput] =useState("");

    const {
        data: suggestion,
        isLoading,
        mutate,
        isValidating,
      } = useSWR("/app/api/suggestions", fetchSuggestion, {
        revalidateOnFocus: false,
    });

    const loading = isLoading || isValidating;
  
    return (
    <div className="m-10">
        <form className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
            <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                    (loading && "ChatGPT is thinking of a suggestion...") ||
                    suggestion || "Enter a prompt to create something amazing..."}
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
                className={`p-4 bg-orange-300 text-white transition-colors duration-400 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400`}>
                    User Suggestion
                </button>
            <button 
                className={`p-4 bg-white text-orange-500 border-none transition-colors duration-400 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold`}
                type="button"
                onClick={mutate}>
                    New Suggestion
                </button>
        </form>

        {input && (
            <p className="italic pt-2 pl-2 font-light">
                Suggestions:{" "}
                <span className="text-orange-500">
                    {loading ? "ChatGPT is thinking..." : suggestion}
                </span>
            </p>
        )}

    </div>
  );
}

export default PromptInput;