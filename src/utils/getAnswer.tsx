// "use server";
// import { radioValues } from "@/app/components/RadioValues";
// import axios from "axios";

// export const getAnswer = async (msg: any) => {
//   axios
//     .post("http://localhost:8000/api/langchain/gemini", {
//       prompt: msg,
//     })
//     .then(async (response) => {
//       console.log(await response.data.response);
//       radioValues[35].response = await response.data.response;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// // export default getAnswer;
