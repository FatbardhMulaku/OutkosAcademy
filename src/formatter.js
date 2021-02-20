exports.format = function (msgs) {
  const results = {};
  for (const [id, msg] of Object.entries(msgs)) {
    // const idr = id.replace(".string", "");
    /* results[id] = {
      string: msg.defaultMessage,
      comment: msg.description,
    }; */
    results[id] = msg.defaultMessage;

  }
  return results;
};

//for extract
// npm run extract -- 'src/**/*.js*' --out-file src/lang/messages/en-GB.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' --format src/formatter.js
