const fileUrl = "/homework1-4.json";
function readJsonFile() {
    async function fetchData() {
        try {
            const response = await axios.get(fileUrl);
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            return null;
        }
    }
    function displayData(data) {
        const tableBody = document.getElementById("filteredData");
        if (!tableBody) {
            console.log("Table body not found.");
            return;
        }

        tableBody.innerHTML = "";

        data.map((person) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${person.name}</td>
                <td>${person.gender}</td>
                <td>${person.company}</td>
                <td>${person.email}</td>
                <td>${person.friends.map(friend =>  '<p>'+friend.name+'</p>').join("")}</td>
                <td>${person.balance.toFixed(2)}</td>
            `;
            tableBody.appendChild(row);
        });
    }
    async function processData() {
        // Fetch data from URL
        const data = await fetchData();
        if (!data) return;

        // Filter and manipulate data
        const filteredData = data
            .filter(
                (person) =>
                    person.gender === "male" && person.friends.length >= 2
            )
            .map((person) => ({
                name: person.name,
                gender: person.gender,
                company: person.company,
                email: person.email,
                friends: person.friends,
                balance:
                    parseFloat(
                        person.balance.replace("$", "").replace(",", "")
                    ) / 10
            }));

        // Display filtered data

        displayData(filteredData);
    }

    // Call processData function to start the process
    processData();
}
readJsonFile();