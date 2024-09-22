



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

   
