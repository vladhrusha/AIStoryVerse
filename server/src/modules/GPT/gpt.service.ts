import { Injectable } from '@nestjs/common';
import devKeys from '../../config/dev';
import { Configuration, OpenAIApi } from 'openai';
import logger from '../../../tools/logger';
const configuration = new Configuration({
  apiKey: devKeys.openAIKey,
});
const openai = new OpenAIApi(configuration);

// const getModelsIds = async () => {
//   const modelsList = (await openai.listModels()).data.data;
//   const modelIds = await modelsList.map((model) => {
//     return model.id;
//   });
//   return modelIds;
// };

@Injectable()
export class GPTService {
  async basic(prompt: string): Promise<any> {
    if (!configuration.apiKey) {
      return 'OpenAI API key not configured';
    }
    if (!prompt) {
      return 'Prompt is missing';
    }

    try {
      // note createChatCompletion for gpt-3.5-turbo not createCompletion

      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'you are writing jokes',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 100, // allegedly 1000 tokens is 750 words in unknown model
        temperature: 0.5, // randomness of generated text, 1.0 - high, 0.01 - low
      });

      return { result: response.data.choices[0].message };
    } catch (err) {
      logger.error(err);
    }
  }
}
