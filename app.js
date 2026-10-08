// Global memory state storage
let localVoteData = [];

// Initialize and pull dataset on screen compile
document.addEventListener("DOMContentLoaded", () => {
    fetch('data/votes.json')
        .then(response => response.json())
        .then(data => {
            localVoteData = data.votes;
            
            // Populate basic content UI blocks
            document.getElementById('bill-title').innerText = data.billName;
            document.getElementById('bill-summary').innerText = data.summary;
            
            // Trigger operational routines
            calculateAndRenderChart(data.votes);
            renderList(data.votes);
        })
        .catch(err => console.error("Error pulling database structures:", err));
});

// Chart.js implementation configuration mapping
function calculateAndRenderChart(votes) {
    const yesCount = votes.filter(v => v.vote === "Yes").length;
    const noCount = votes.filter(v => v.vote === "No").length;
    const abstainCount = votes.filter(v => v.vote === "Abstain").length;

    const ctx = document.getElementById('voteChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Yes', 'No', 'Abstain'],
            datasets: [{
                data: [yesCount, noCount, abstainCount],
                backgroundColor: ['#22c55e', '#ef4444', '#94a3b8'],
                borderWidth: 2
            }]
        },
        options: {
            plugins: {
                legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 11 } } }
            },
            cutout: '65%'
        }
    });
}

// Layout template engine renderer targeting structural records
function renderList(votesToDisplay) {
    const listContainer = document.getElementById('votes-list');
    listContainer.innerHTML = ""; // Clear existing records

    if(votesToDisplay.length === 0) {
        listContainer.innerHTML = `<p class="text-gray-400 text-sm italic text-center py-4">No records found matching criterion.</p>`;
        return;
    }

    votesToDisplay.forEach(rep => {
        // Compute structural style color tags based on target string patterns
        let pillColor = "bg-gray-100 text-gray-700";
        if(rep.vote === "Yes") pillColor = "bg-green-100 text-green-700";
        if(rep.vote === "No") pillColor = "bg-red-100 text-red-700";

        const repCard = document.createElement('div');
        repCard.className = "p-4 border border-gray-100 rounded-lg bg-gray-50/50 flex flex-col sm:flex-row sm:items-start justify-between gap-2 transition hover:bg-gray-50";
        
        repCard.innerHTML = `
            <div>
                <div class="flex items-center gap-2">
                    <h4 class="font-bold text-gray-800 text-md">${rep.name}</h4>
                    <span class="text-xs text-gray-500 font-mono">(${rep.party})</span>
                </div>
                <p class="text-xs text-gray-600 mt-1 italic">"${rep.reason}"</p>
            </div>
            <div class="self-start sm:self-center">
                <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${pillColor}">
                    ${rep.vote}
                </span>
            </div>
        `;
        listContainer.appendChild(repCard);
    });
}

// Interactive runtime layout state filter modifier routine
function filterVotes(criteria) {
    if (criteria === 'All') {
        renderList(localVoteData);
    } else {
        const filtered = localVoteData.filter(v => v.vote === criteria);
        renderList(filtered);
    }
}
