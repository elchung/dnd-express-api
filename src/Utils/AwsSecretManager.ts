import AWS from 'aws-sdk';

const region = "us-east-2";

const client = new AWS.SecretsManager({
  region: region
});

export const getSecret = (secretName: string): string => {
  client.getSecretValue({SecretId: secretName}, (err, data) => {
    if (err) {
      if (err.code === 'DecryptionFailureException') {
        console.error("AWS Secrets Manager can't decrypt the protected secret text using the provided KMS key.");
      } else if (err.code === 'InternalServiceErrorException') {
        console.error("An error occurred on the server side.");
      } else if (err.code === 'InvalidParameterException') {
        console.error("You provided an invalid value for a parameter.")
      } else if (err.code === 'InvalidRequestException') {
        console.error("Provided parameter value is not valid for the current state of the resource.");
      } else if (err.code === 'ResourceNotFoundException') {
        console.error("AWS can't find the requested resource.");
      }
      throw err;
    }
    else {
      // Decrypts secret using the associated KMS CMK.
      // Depending on whether the secret is a string or binary, one of these fields will be populated.
      if ('SecretString' in data) {
        return data.SecretString;
      } else {
        const buff = new Buffer(data.SecretBinary, 'base64');
        return buff.toString('ascii');
      }
    }
  });
};
