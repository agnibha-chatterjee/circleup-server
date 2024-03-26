import { stat } from 'fs/promises';

export const checkIfEnvExists = async () => {
  try {
    await stat('.env');
  } catch (err) {
    console.error(
      'No .env file found. Please create one and add the necessary environment variables (https://github.com/agnibha-chatterjee/circleup-server)'
    );
    process.exit(1);
  }
};
