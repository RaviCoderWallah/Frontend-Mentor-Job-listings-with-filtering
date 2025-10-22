import { SELECTORS } from "./constants/selectors.js";
import { renderJobs } from "./renderJobs.js";
import { createElement } from "./utils/createElement.js";
import { fetchData } from "./utils/fetchData.js";

let clickItemList = [];

const renderFilterItem = () => {
    // Always clear container before re-render
    SELECTORS.filterItemContainer.innerHTML = "";

    // If no items, add "empty" class and stop here
    if (clickItemList.length === 0) {
        SELECTORS.filterItemContainer.classList.add("empty");
        return;
    }

    // If there are items, remove empty class
    SELECTORS.filterItemContainer.classList.remove("empty");

    // Render each item
    clickItemList.forEach((item, index) => {
        const filterItemContent = `
           <p>${item}</p>
           <div class="remove-icon-container">
              <img src="/images/icon-remove.svg" />
           </div>
        `;

        const filterItem = createElement("div", "filter-item", filterItemContent);
        SELECTORS.filterItemContainer.appendChild(filterItem);

        
        filterItem.querySelector(".remove-icon-container").addEventListener("click", () => {
            clickItemList.splice(index, 1); 
            renderFilterItem();           
        });
    });
};

renderFilterItem();

// Step 1: Fetching Data 
const data = await fetchData("/API/data.json");
data.map((jobData) => {
    renderJobs(jobData, clickItemList, renderFilterItem);
});

console.log(clickItemList);
