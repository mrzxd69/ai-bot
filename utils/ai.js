const { Configuration, OpenAIApi } = require("openai");
const config = require("../config");

const configuration = new Configuration({
    apiKey: config.AiKey,
});

const openai = new OpenAIApi(configuration);

module.exports = async (prompt) => {
    return new Promise(async (resolve) => {
        const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        resolve(response.data.choices[0].text);
    });
};
