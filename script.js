const form = document.getElementById('formChanel');
const inputUri = document.getElementById('inputUri');
const outPut = document.getElementById('outputTab');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let inputUsername = inputUri.value;
    let outputUrl = `${inputUsername}?sub_confirmation=1`;

    outPut.innerHTML = `<p class="cursor-pointer" id="copyText">${inputUsername}</p>`;

    const copyText = document.getElementById('copyText');

    copyText.addEventListener('click', function() {
        navigator.clipboard.writeText(outputUrl).then(() => {
            alert('URL copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});
