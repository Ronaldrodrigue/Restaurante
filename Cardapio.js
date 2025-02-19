let cart = [];

// Função para adicionar itens ao carrinho
function addToCart(itemName, itemPrice) {

    cart.push({ name: itemName, price: itemPrice });
    
    document.getElementById('cart-count').innerText = cart.length;

    updateTotalPrice();
}

function updateTotalPrice() {
    let total = 0;
    cart.forEach(item => total += item.price);
    
    document.getElementById('total-price').innerText = total.toFixed(2);
}

// Função para exibir os itens no carrinho
function showCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(listItem);
    });
}

// Função para abrir o modal do carrinho
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
        cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
    
    showCart();
}

// Função para fechar o modal do carrinho
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Função para limpar o carrinho
function clearCart() {
    cart = []; 
    document.getElementById('cart-count').innerText = 0; 
    document.getElementById('total-price').innerText = '0,00'; 
    showCart(); 
}

function finalizePurchase() {


    alert('Compra finalizada com sucesso! Redirecionando...');

    setTimeout(function() {
        window.location.href = 'pagina_de_confirmacao.html'; 
    }, 2000); 
}

// Função de pesquisa
function searchMenu() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();  // Obtém o valor da pesquisa
    const menuItems = document.querySelectorAll('.menu-item');  // Seleciona todos os itens do cardápio

    menuItems.forEach(item => {
        const itemName = item.getAttribute('data-name').toLowerCase();  


        if (itemName.includes(searchInput)) {
            item.style.display = '';  
        } else {
            item.style.display = 'none';  
        }
    });
}

// Evento de pesquisa - quando clicar na lupa ou digitar no campo
document.getElementById('search-btn').addEventListener('click', searchMenu); 
document.getElementById('search-input').addEventListener('input', searchMenu);  

