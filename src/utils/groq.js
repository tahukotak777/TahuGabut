import {Groq} from "groq-sdk"

const groq = new Groq({
    apiKey: process.env.NEXT_PUBLIC_API_KEY_GROQ,
    dangerouslyAllowBrowser: true
})

export const reqGroqAi = async (content) => {
    const reply = await groq.chat.completions.create({
        messages : [{
            role: "user", 
            content
        }], 
        model: "llama3-8b-8192"
    })
    return reply.choices[0].message.content;
}