const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const deleteButton = document.querySelector('.delete');


// buttons.forEach(button => {
//     button.addEventListener('click', function(){
//         const value = button.textContent;

//         if (value === )
//     })
// })

const button = document.getElementById("myButton");

button.addEventListener("click", function(event) {
  console.log(event.target);  // 클릭한 요소를 콘솔에 출력
});