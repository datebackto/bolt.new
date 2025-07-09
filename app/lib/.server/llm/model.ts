import { createAnthropic } from '@ai-sdk/anthropic';

export function getAnthropicModel(apiKey: string, modelName = 'claude-3-5-sonnet-20240620') {
  const anthropic = createAnthropic({
    apiKey,
  });

  return anthropic(modelName);
}
