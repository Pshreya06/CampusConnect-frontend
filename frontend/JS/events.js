// =========================================
// CAMPUSCONNECT - EVENTS PAGE
// =========================================


// Get all event cards
const eventItems = Array.from(
    document.querySelectorAll(".event-item")
);


// Get search input
const searchInput =
    document.getElementById("eventSearch");


// Get category buttons
const filterButtons =
    document.querySelectorAll(".filter-button");


// Get sorting dropdown
const sortSelect =
    document.getElementById("eventSort");


// Get "no events" message
const noEvents =
    document.getElementById("noEvents");


// Keep track of selected category
let selectedCategory = "all";


// =========================================
// FILTER EVENTS
// =========================================

function filterEvents() {

    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();

    let visibleEvents = [];


    eventItems.forEach(function(event) {

        const category =
            event.dataset.category;

        const eventName =
            event.dataset.name.toLowerCase();


        // Check category
        const categoryMatch =
            selectedCategory === "all" ||
            category === selectedCategory;


        // Check search
        const searchMatch =
            eventName.includes(searchText);


        // Show or hide event
        if (categoryMatch && searchMatch) {

            event.style.display = "";

            visibleEvents.push(event);

        } else {

            event.style.display = "none";

        }

    });


    // Show "No events found"
    if (visibleEvents.length === 0) {

        noEvents.style.display = "block";

    } else {

        noEvents.style.display = "none";

    }

}


// =========================================
// CATEGORY FILTER
// =========================================

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active class
        filterButtons.forEach(function(btn) {

            btn.classList.remove(
                "active-filter"
            );

        });


        // Add active class
        button.classList.add(
            "active-filter"
        );


        // Get selected category
        selectedCategory =
            button.dataset.category;


        // Apply filter
        filterEvents();

    });

});


// =========================================
// SEARCH
// =========================================

searchInput.addEventListener(
    "input",
    function() {

        filterEvents();

    }
);


// =========================================
// SORT EVENTS
// =========================================

sortSelect.addEventListener(
    "change",
    function() {

        const selectedSort =
            sortSelect.value;


        const eventsGrid =
            document.getElementById(
                "eventsGrid"
            );


        if (selectedSort === "name") {

            eventItems.sort(function(a, b) {

                const nameA =
                    a.dataset.name.toLowerCase();

                const nameB =
                    b.dataset.name.toLowerCase();


                return nameA.localeCompare(
                    nameB
                );

            });

        }


        else if (selectedSort === "date") {

            // Dates are stored in the
            // order they appear on the page.
            // For now, sort by the date
            // shown in each card.

            const dateOrder = {

                "25 Oct 2026": 1,
                "28 Oct 2026": 2,
                "2 Nov 2026": 3,
                "6 Nov 2026": 4,
                "12 Nov 2026": 5,
                "18 Nov 2026": 6

            };


            eventItems.sort(function(a, b) {

                const dateA =
                    a.querySelector(
                        ".event-meta span"
                    ).textContent.trim();

                const dateB =
                    b.querySelector(
                        ".event-meta span"
                    ).textContent.trim();


                return dateOrder[dateA] -
                       dateOrder[dateB];

            });

        }


        else {

            // Return to original order

            eventItems.sort(function(a, b) {

                return 0;

            });

        }


        // Put sorted cards back into grid

        eventItems.forEach(function(event) {

            eventsGrid.appendChild(event);

        });


        // Re-apply search/filter

        filterEvents();

    }
);


// =========================================
// INITIAL LOAD
// =========================================

filterEvents();

console.log(
    "CampusConnect Events page loaded successfully."
);