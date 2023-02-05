const submit = document.getElementById('submit-btn');
const main = document.getElementById('main');
const thankyou = document.getElementById('thankyou');
const selected = document.getElementById('selected');
const labels =  document.querySelectorAll('.rate');
let rating = 0;

for (let label of labels) {
  label.addEventListener("click", function() {
    for (let l of labels) {
      l.style.backgroundColor = "";
      l.style.color = "";
    }
    label.style.backgroundColor = "hsl(216, 12%, 54%)";
    label.style.color = "hsl(0, 0%, 100%)";
    rating = label.textContent;
    selected.innerHTML =  rating;
  });
}

submit.addEventListener('click', function(){
  main.style.display = 'none';
  thankyou.style.display = 'block';
})
