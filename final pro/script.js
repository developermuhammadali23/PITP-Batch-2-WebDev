function filterResults() {
  // Get input value and list elements
  const input = document.getElementById('citySearch');
  const filter = input.value.toUpperCase();
  const ul = document.getElementById('resultsList');
  const li = ul.getElementsByTagName('li');

  // If input is empty, hide the list. Otherwise, show it.
  if (filter.length > 0) {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }

  // Loop through all list items and hide those that don't match the search
  for (let i = 0; i < li.length; i++) {
    let textValue = li[i].textContent || li[i].innerText;
    
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = ""; // Show item
    } else {
      li[i].style.display = "none"; // Hide item
    }
  }
}

// Optional: Add click event to select the country
document.getElementById('resultsList').addEventListener('click', function(e) {
  if (e.target && e.target.nodeName == "LI") {
    document.getElementById('countrySearch').value = e.target.innerText;
    this.style.display = "none";
  }
});