require('dotenv').config();
const express = require('express');

const app = express();

// const connect = async () => {
//   try {
//     await
//     console.log()
//   } catch (error) {
//     console.log(error);
//   }
// };

//connect to server

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
