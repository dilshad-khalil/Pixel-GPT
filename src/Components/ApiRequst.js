const options = {
    method: 'POST',
    url: 'https://openai80.p.rapidapi.com/chat/completions',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'YOUR_API_KEY',
        'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
    },
    data: {
        model: 'gpt-3.5-turbo',
        messages: [{
            role: 'user',
            content: 'Hello!'
        }]
    }
};

export default options