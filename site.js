const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');


menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})


// Lupa de Pesquisa
const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");


searchButton.addEventListener("click", function() {
    if (searchInput.value !== "") {
        alert("Você está buscando por: " + searchInput.value);
    } else {
        alert("Por favor, insira algo para buscar.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const dropdownBtn = document.querySelector(".dropdown-btn");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownBtn.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("show");
    });
});

// Validação do formulário
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

// Exemplo de validação simples
    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    document.getElementById("feedback-message").textContent = "Mensagem enviada com sucesso!";
    return true;
}

// Animações de efeito
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelectorAll(".contact-form input, .contact-form textarea").forEach((element) => {
            element.classList.add("animated");
        });
    }, 500);
});

document.getElementById('reserva-form').addEventListener('enviar', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;
    const mealType = document.getElementById('meal-type').value;
    const tablePreference = document.getElementById('table-preference').value;
    const specialRequest = document.getElementById('special-request').value;

    if (name && phone && date && time && people && mealType && tablePreference) {
        document.getElementById('confirmation-message').innerHTML = `
            Reserva feita com sucesso, ${name}!<br>
            Data: ${date}<br>
            Hora: ${time}<br>
            Para ${people} pessoa(s)<br>
            Tipo de refeição: ${mealType}<br>
            Preferência de mesa: ${tablePreference}<br>
            Pedidos especiais: ${specialRequest ? specialRequest : "Nenhum"}<br>
            Você receberá um contato pelo telefone ${phone}.
        `;
        document.getElementById('confirmation-message').style.color = '#388e3c'; 
        document.getElementById('reserva-form').reset();
    } else {
        document.getElementById('confirmation-message').innerHTML = 'Por favor, preencha todos os campos obrigatórios corretamente.';
        document.getElementById('confirmation-message').style.color = '#e64a19'; 
    }
});

 // Função para calcular o total (exemplo simples)
 function calculateTotal() {
    let items = document.querySelectorAll('#cart-items li');
    let total = 0;

    items.forEach(item => {
        let priceText = item.textContent.split(' - R$ ')[1];
        let price = parseFloat(priceText.replace(',', '.'));
        total += price;
    });

    document.getElementById('total-price').textContent = `R$ ${total.toFixed(2)}`;
}

// Função para aplicar cupom de desconto
function applyCoupon() {
    const coupon = document.getElementById('coupon').value;
    if (coupon === 'DESCONTO10') {
        alert('Cupom aplicado! Você ganhou 10% de desconto.');
        let total = parseFloat(document.getElementById('total-price').textContent.replace('R$ ', '').replace(',', '.'));
        let discount = total * 0.10;
        let newTotal = total - discount;
        document.getElementById('total-price').textContent = `R$ ${newTotal.toFixed(2)}`;
    } else {
        alert('Cupom inválido.');
    }
}

// Função para finalizar a compra
function finalizePurchase() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let paymentMethod = document.getElementById('payment-method').value;

    if (!name || !email || !address || !paymentMethod) {
        alert('Por favor, preencha todos os campos!');
        return;
    }


    alert('Compra finalizada com sucesso! Redirecionando...');

    setTimeout(function() {
        window.location.href = 'pagina_confirmacao.html'; 
    }, 2000);
}

window.onload = function() {
    calculateTotal();
};







