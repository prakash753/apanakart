document.addEventListener('DOMContentLoaded', () => {
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const counterInput = document.getElementById('counter');
    
    decrementButton.addEventListener('click', () => {
        if (parseInt(counterInput.value) > 0) {
            counterInput.value = parseInt(counterInput.value) - 1;
        }
    });
    
    incrementButton.addEventListener('click', () => {
        counterInput.value = parseInt(counterInput.value) + 1;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const decrementButton = document.getElementById('decrement1');
    const incrementButton = document.getElementById('increment1');
    const counterInput = document.getElementById('counter1');
    
    decrementButton.addEventListener('click', () => {
        if (parseInt(counterInput.value) > 0) {
            counterInput.value = parseInt(counterInput.value) - 1;
        }
    });
    
    incrementButton.addEventListener('click', () => {
        counterInput.value = parseInt(counterInput.value) + 1;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const decrementButton = document.getElementById('decrement2');
    const incrementButton = document.getElementById('increment2');
    const counterInput = document.getElementById('counter2');
    
    decrementButton.addEventListener('click', () => {
        if (parseInt(counterInput.value) > 0) {
            counterInput.value = parseInt(counterInput.value) - 1;
        }
    });
    
    incrementButton.addEventListener('click', () => {
        counterInput.value = parseInt(counterInput.value) + 1;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const decrementButton = document.getElementById('decrement3');
    const incrementButton = document.getElementById('increment3');
    const counterInput = document.getElementById('counter3');
    
    decrementButton.addEventListener('click', () => {
        if (parseInt(counterInput.value) > 0) {
            counterInput.value = parseInt(counterInput.value) - 1;
        }
    });
    
    incrementButton.addEventListener('click', () => {
        counterInput.value = parseInt(counterInput.value) + 1;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const decrementButton = document.getElementById('decrement4');
    const incrementButton = document.getElementById('increment4');
    const counterInput = document.getElementById('counter4');
    
    decrementButton.addEventListener('click', () => {
        if (parseInt(counterInput.value) > 0) {
            counterInput.value = parseInt(counterInput.value) - 1;
        }
    });
    
    incrementButton.addEventListener('click', () => {
        counterInput.value = parseInt(counterInput.value) + 1;
    });
});


const addToCartButtons = document.querySelectorAll('.add');
const cartItemsList = document.querySelector('.product1');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const productName = product.querySelector('img').textContent;
    const productPrice = product.querySelector('p').textContent.split(':')[1].trim();
    
    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - $${productPtrice}`;
    
    cartItemsList.appendChild(cartItem);
  });
});

