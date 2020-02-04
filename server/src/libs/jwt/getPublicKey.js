// src/jwt/getPublicKey.js

const fs = require("fs");
const fetchKey = require("./fetchKey");

/**
 * Async function to read and return the public key file
 *
 * @param {String} fileName
 */
const readFile = fileName => {
  return new Promise((resolve, reject) => {
    fs.exists(fileName, exists => {
      if (exists) {
        fs.readFile(fileName, "utf-8", (err, file) => {
          if (err) reject(err);
          resolve(file);
        });
      } else {
        resolve(null);
      }
    });
  });
};

module.exports = async () => {
  let publicKeyFile = process.env.PUBLIC_KEY_FILE;

  // see if file exists and return it
  let file = await readFile(publicKeyFile);
  if (file) return file;

  // need to fetch the key from the file
  let key = await fetchKey();
  if (!key) return null;

  // create a key file to store locally to prevent network requests
  fs.writeFile(publicKeyFile, key, err => {
    if (err) console.log(err);
  });

  return key;
};
