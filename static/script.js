// Get references to DOM elements
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const instructionInput = document.getElementById('instruction-input');
const recentList = document.getElementById('recent-list');

// Function to send data to Python backend
function sendDataToPython(instruction) {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = '/process_instruction';
  
    const instructionInput = document.createElement('input');
    instructionInput.type = 'hidden';
    instructionInput.name = 'instruction';
    instructionInput.value = instruction;
  
    form.appendChild(instructionInput);
    document.body.appendChild(form);
    form.submit();
  }

// Function to update the recent instructions list
function updateRecentInstructions(instruction) {
    const listItem = document.createElement('li');
    listItem.textContent = instruction;
    recentList.appendChild(listItem);
}

// Event listener for the input field
instructionInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const instruction = instructionInput.value.trim();
        if (instruction) {
            sendDataToPython(instruction);
            updateRecentInstructions(instruction);
            instructionInput.value = '';
        }
    }
});

// Load and display the images
// Implement the code to fetch the image paths from the backend and set the src attributes
image1.src = '/images/image1.png';
image2.src = '/images/image2.png';