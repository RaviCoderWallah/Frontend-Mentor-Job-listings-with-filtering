import { SELECTORS } from "./constants/selectors.js";
import { renderJobs } from "./renderJobs.js";
import { createElement } from "./utils/createElement.js";
import { fetchData } from "./utils/fetchData.js";


let clickItemList = [];

const renderFilterItem = () => {
    if (clickItemList.length !== 0) {
        //inital filter item container no content
        SELECTORS.filterItemContainer.innerHTML = "";

        clickItemList.forEach((item) => {
            let filterItemcontent = `
           <p>${item}</p>
           <div class="remove-icon-container">
              <img src="/images/icon-remove.svg"/>
           </div>
        `;
            const filterItem = createElement("div", "filter-item", filterItemcontent);
            SELECTORS.filterItemContainer.appendChild(filterItem);
        });
    }
}

renderFilterItem();


//Step 1: Fetching Data 
const data = await fetchData("/API/data.json");
data.map((jobData) => {
    renderJobs(jobData, clickItemList, renderFilterItem);
});

console.log(clickItemList);


