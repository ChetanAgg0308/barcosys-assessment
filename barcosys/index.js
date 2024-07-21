// Data array for demonstration purposes
const airdrops = [
  { color: "#F0B90B", smt: "$smt", rewards: 1000 },
  { color: "#526D82", smt: "$smt", rewards: 1000 },
  { color: "#203046", smt: "$smt", rewards: 1000 },
  { color: "#F0B90B", smt: "$smt", rewards: 1000 },
  { color: "#1569EE", smt: "$smt", rewards: 1000 },
  { color: "#E00000", smt: "$smt", rewards: 1000 },
];

// New data array for demonstration purposes
const secondAirdrops = [
  { color: "#9DB2BF", smt: "$smt", rewards: 1000 },
  { color: "#9DB2BF", smt: "$smt", rewards: 1000 },
];

// Get the container elements from the DOM
const container = document.getElementById("airdrop-container");
const secondContainer = document.getElementById("second-airdrop-container");

// Loop through the airdrops array and create elements for each item
airdrops.forEach((airdrop) => {
  // Create a new div element for each airdrop item
  const row = document.createElement("div");
  row.classList.add("container");

  // Define the HTML content for the airdrop item
  const activeAirdropBox = `
          <div class="row active-airdrops-box">
              <div class="col-md-2 solid-circle">
                  <div class="circle" style="background-color: ${airdrop.color};"></div>
              </div>
              <div class="col-md-8">
                  <p class="smt">${airdrop.smt}</p>
                  <p class="available-rewards">AVAILABLE REWARDS :</p>
                  <p class="thousand"><img src="./assets/nft-free.png" alt="nft free" class="airdrop-nft"/>${airdrop.rewards}</p>
              </div>
              <div class="col-md-2 acordian-circle">
                  <div class="accordian">
                      <div class="triangle"></div>
                  </div>
              </div>
          </div>
      `;

  // Set the innerHTML of the row element to the airdrop item HTML content
  row.innerHTML = activeAirdropBox;

  // Append the row element to the main container
  container.appendChild(row);
});

// Loop through the secondAirdrops array and create elements for each item
secondAirdrops.forEach((airdrop) => {
  // Create a new div element for each airdrop item
  const row = document.createElement("div");
  row.classList.add("container");

  // Define the HTML content for the airdrop item
  const activeAirdropBox = `
          <div class="row active-airdrops-box">
              <div class="col-md-2 solid-circle">
                  <div class="circle" style="background-color: ${airdrop.color};"></div>
              </div>
              <div class="col-md-8">
                  <p class="smt">${airdrop.smt}</p>
                  <p class="available-rewards">AVAILABLE REWARDS :</p>
                  <p class="thousand"><img src="./assets/nft-free.png" alt="nft free" class="airdrop-nft"/>${airdrop.rewards}</p>
              </div>
              <div class="col-md-2 acordian-circle">
                  <div class="accordian">
                      <div class="triangle"></div>
                  </div>
              </div>
          </div>
      `;

  // Set the innerHTML of the row element to the airdrop item HTML content
  row.innerHTML = activeAirdropBox;

  // Append the row element to the second container
  secondContainer.appendChild(row);
});
