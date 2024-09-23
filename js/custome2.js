



    const inputs = document.querySelectorAll('.code-input');

    if(inputs){
        inputs.forEach((input, index) => {
            input.addEventListener('input', function() {
                if (input.value.length === 1 && index < inputs.length - 1) {
                    inputs[index + 1].focus(); // Focus on the next input
                }
            });
    
            input.addEventListener('keydown', function(event) {
                if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
                    inputs[index - 1].focus(); // Focus on the previous input when backspacing
                }
            });
        });
    }


    // owl carousel for nav property card



    // amount and precentage

    discountType = document.getElementById("discount-type");
    percentage = document.querySelector(".percentage");
    amount = document.querySelector(".amount");
    if(discountType){
        discountType.addEventListener("change",()=>{
            if(discountType.value =="percentage"){
                percentage.style = "display:block"
                amount.style = "display:none";
            }
            else{
                amount.style = "display:block"
                percentage.style = "display:none";
            }
        })
    }
   



    //  date input
const dateInput = document.getElementById("dateInput");
const calendarIcon = document.getElementById("calendarIcon");

if(dateInput){
    calendarIcon?.addEventListener("click", function () {
        dateInput.showPicker();  
        console.log(',c,bv')
      });
      
}