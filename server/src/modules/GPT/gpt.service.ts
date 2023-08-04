import { Injectable } from '@nestjs/common';
import devKeys from '../../config/dev';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: devKeys.openAIKey,
});
const openai = new OpenAIApi(configuration);

@Injectable()
export class GPTService {
  async generateResponse(prompt: string): Promise<any> {
    if (!configuration.apiKey) {
      return 'OpenAI API key not configured';
    }
    if (!prompt) {
      return 'Prompt is missing';
    }

    try {
      const completion = await openai.createCompletion({
        model: 'text-ada-001', // text-ada-001 (GPT3.0) - https://platform.openai.com/docs/models/moderation#:~:text=to%20Oct%202019-,text-ada-001,Up%20to%20Oct%202019,-davinci
        prompt: prompt,
        max_tokens: 50, // allegedly 1000 tokens is 750 words in unknown model
        temperature: 0.5, // randomness of generated text, 1.0 - high, 0.01 - low
      });
      return { result: completion.data.choices[0].text };
    } catch (err) {
      console.log(err);
    }
  }
}
