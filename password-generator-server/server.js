const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

app.post("/api/password/generate", (req, res) => {
  const length = req.body.length;
  const useUppercase = req.body.useUppercase;
  const useLowercase = req.body.useLowercase;
  const useNumbers = req.body.useNumbers;
  const useSymbols = req.body.useSymbols;

  let generatedPassword = "";

  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const symbols = "_!@#$%&";
  let randomChoice = 0; // Used to pick a random string (uppercase, lowercase, numbers, symbols).

  generatedPassword = "";

  while (generatedPassword.length < length) {
    randomChoice = Math.floor(Math.random() * 4) + 1;
    switch (randomChoice) {
      case 1:
        if (useUppercase)
          // If the 'Uppercase' checkbox is checked, we add a randomly selected character from the string to create the password.
          generatedPassword += uppercase.charAt(
            Math.floor(Math.random() * uppercase.length)
          );
        break;
      case 2:
        if (useLowercase)
          generatedPassword += lowercase.charAt(
            Math.floor(Math.random() * lowercase.length)
          );
        break;
      case 3:
        if (useNumbers)
          generatedPassword += numbers.charAt(
            Math.floor(Math.random() * numbers.length)
          );
        break;
      case 4:
        if (useSymbols)
          generatedPassword += symbols.charAt(
            Math.floor(Math.random() * symbols.length)
          );
        break;
    }
  }
  res.json({ generatedPassword });
  console.log({ generatedPassword });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
