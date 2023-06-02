import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        "preprocess": true
      }
    ],
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: [
    "js", "ts", "svelte"
  ],
  setupFiles: './setupjest.ts'
};

export default config;
