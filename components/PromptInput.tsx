'use client'

import { FormEvent, useState } from "react";
import useSWR from "swr";
import toast from "react-hot-toast";
import fetchSuggestion from "../lib/fetchFromGPT";


function PromptInput() {
    const [input, setInput] =useState("");

    const {
        data: suggestion,
        isLoading,
        mutate,
        isValidating,
      } = useSWR("/api/suggestion", fetchSuggestion, {
        revalidateOnFocus: false,
    });

    const submitPrompt = async (useSuggestion?: boolean) => {
        const inputPrompt = input;
        console.log(inputPrompt);
        setInput("");
    
        const notificationPrompt = inputPrompt || suggestion;
        const notificationPromptShort = notificationPrompt.slice(0, 20);
    
        const notification = toast.loading(
          `DALL·E is creating: ${notificationPromptShort}...`
        );
    
        const p = useSuggestion
          ? suggestion
          : inputPrompt || (!isLoading && !isValidating && suggestion);
    
        const res = await fetch("/api/generateImage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: p,
          }),
        });
    
        const data = await res.json();
    
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(`Your AI Art has been Generated!`, {
            id: notification,
          });
        }
    
        updateImages();
      };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await submitPrompt();
    };

    const loading = isLoading || isValidating;
  
    return (
    <div className="m-10">
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border rounded-md lg:divide-x">
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
                disabled={!input} >
                    Generate
            </button>
            <button 
                className={`p-4 bg-orange-300 text-white transition-colors duration-400 font-bold disabled:text-gray-300 disabled:cursor-not-allowed disabled:bg-gray-400`}
                onClick={() => submitPrompt(true)}
                disabled={isLoading || isValidating}
                type="button" >
                    Use Suggestion
            </button>
            <button 
                className={`p-4 bg-white text-orange-500 border-none transition-colors duration-400 rounded-b-md md:rounded-r-md md:rounded-bl-none font-bold`}
                type="button"
                onClick= {mutate} >
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