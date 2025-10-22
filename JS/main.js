import { renderJobs } from "./renderJobs.js";
import { fetchData } from "./utils/fetchData.js";


const clickItemList = [];

//Step 1: Fetching Data 
const data = await fetchData("/API/data.json");
data.map((jobData) => {
 renderJobs(jobData, clickItemList);
});

console.log(clickItemList);


