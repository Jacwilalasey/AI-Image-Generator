const fetchSuggestion = () =>
    fetch("/api/suggestions", {
        cache: 'no-store'
    }).then((res) => res.json());

export default fetchSuggestion;