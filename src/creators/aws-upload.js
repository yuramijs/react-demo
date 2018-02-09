const AWS = require('aws-sdk');

class Status {
  constructor(success, message) {
    this.success = success;
    this.message = message;
  }
}

AWS.config.update({
  accessKeyId: "AKIAIPF6I6EGEMMKASAQ",
  secretAccessKey: "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",
  region: "eu-west-1",
});
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

const upload = (Body, id, file, res) => {

  const Bucket = `adnami-dev-440674/macro/${id}`;
  const Key = file;
  const params = {
    Body,
    Bucket,
    Key,
  };

  s3.putObject(params, err => {
    if (err) {
      const error = new Status(false, err.message);
      res.send(error);
      return;
    }

    const success = new Status(true, `file ${Key} uploaded`);
    res.send(success);
  });

};

export default upload;
