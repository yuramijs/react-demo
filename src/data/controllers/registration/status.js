const failure = message => ({
  status: false,
  message,
});
const success = message => ({
  status: true,
  message,
});

export {success, failure};