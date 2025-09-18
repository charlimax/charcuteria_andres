// Global variables
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousel();
    initializeMobileMenu();
    initializeScrollEffects();
    initializeSmoothScrolling();
});

// Carousel functionality
function initializeCarousel() {
    // Auto-play carousel
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function changeSlide(direction) {
    // Remove active class from current slide and indicator
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    // Calculate new slide index
    currentSlide += direction;
    
    // Loop around if necessary
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    // Add active class to new slide and indicator
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function currentSlideFunc(n) {
    // Remove active class from current slide and indicator
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    // Set new current slide
    currentSlide = n - 1;
    
    // Add active class to new slide and indicator
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Scroll effects
function initializeScrollEffects() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.product-card, .comment-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Product modal functionality
function openProductModal(productType) {
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    
    const productData = {
        'embutidos': {
            title: 'Embutidos Premium',
            image: 'images/4Xve913BmT2C.jpg',
            description: 'Nuestra selección de embutidos premium incluye chorizo ibérico, salchichón de Vic, lomo embuchado y jamón serrano. Todos elaborados con carnes de primera calidad y curados siguiendo métodos tradicionales.',
            features: [
                'Chorizo ibérico de bellota',
                'Salchichón de Vic artesanal',
                'Lomo embuchado curado',
                'Jamón serrano 18 meses'
            ],
            price: 'Desde €12.99'
        },
        'tabla-mixta': {
            title: 'Tabla Mixta Gourmet',
            image: 'images/GwXydkhykHtQ.jpg',
            description: 'Una selección cuidadosamente elegida de nuestros mejores embutidos y quesos, perfecta para compartir. Incluye una variedad de sabores y texturas que deleitarán tu paladar.',
            features: [
                'Selección de 5 embutidos premium',
                '3 variedades de queso artesanal',
                'Aceitunas y encurtidos',
                'Pan artesanal incluido'
            ],
            price: '€24.99'
        },
        'quesos': {
            title: 'Quesos Artesanales',
            image: 'images/vq37zljfsuWg.png',
            description: 'Colección de quesos artesanales madurados con técnicas tradicionales. Desde suaves quesos frescos hasta intensos quesos curados, cada uno con su personalidad única.',
            features: [
                'Manchego curado 12 meses',
                'Cabrales DOP',
                'Queso de cabra con hierbas',
                'Roquefort francés'
            ],
            price: 'Desde €8.99'
        },
        'especialidades': {
            title: 'Especialidades de la Casa',
            image: 'images/qEKAE2mDpxlc.jpg',
            description: 'Productos únicos elaborados con recetas exclusivas de nuestra casa. Combinaciones innovadoras que respetan la tradición pero aportan un toque moderno.',
            features: [
                'Paté de hígado de pato',
                'Morcilla de Burgos premium',
                'Cecina de León IGP',
                'Fuet catalán artesanal'
            ],
            price: 'Desde €15.99'
        }
    };
    
    const product = productData[productType];
    
    modalContent.innerHTML = `
        <div class="modal-product">
            <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px; margin-bottom: 1rem;">
            <h2 style="font-family: 'Playfair Display', serif; color: #8B4513; margin-bottom: 1rem;">${product.title}</h2>
            <p style="color: #666; margin-bottom: 1.5rem; line-height: 1.6;">${product.description}</p>
            <h3 style="color: #8B4513; margin-bottom: 1rem;">Incluye:</h3>
            <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
                ${product.features.map(feature => `<li style="margin-bottom: 0.5rem; color: #555;">${feature}</li>`).join('')}
            </ul>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2rem;">
                <span style="font-size: 1.5rem; font-weight: 600; color: #D2691E;">${product.price}</span>
                <button onclick="contactForOrder('${product.title}')" style="background: linear-gradient(45deg, #D2691E, #8B4513); color: white; border: none; padding: 12px 25px; border-radius: 25px; cursor: pointer; font-weight: 600; transition: all 0.3s ease;">
                    Contactar para Pedido
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeProductModal();
    }
});

// Contact for order functionality
function contactForOrder(productName) {
    const message = `Hola, estoy interesado en ${productName}. ¿Podrían proporcionarme más información sobre disponibilidad y precios?`;
    const whatsappUrl = `https://wa.me/573204949775?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Get directions functionality
function getDirections() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const destination = "Diagonal 43 Sur # 22A - 39 Bogotá, Colombia";
            const googleMapsUrl = `https://www.google.com/maps/dir/${lat},${lng}/${encodeURIComponent(destination)}`;
            window.open(googleMapsUrl, '_blank');
        }, function(error) {
            // If geolocation fails, open Google Maps with just the destination
            const destination = "Diagonal 43 Sur # 22A - 39 Bogotá";
            const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(destination)}`;
            window.open(googleMapsUrl, '_blank');
        });
    } else {
        // If geolocation is not supported, open Google Maps with just the destination
        const destination = "Diagonal 43 Sur # 22A - 39 Bogotá";
        const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(destination)}`;
        window.open(googleMapsUrl, '_blank');
    }
}

// CTA button functionality
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productsSection = document.getElementById('productos');
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = productsSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add smooth transitions to product cards
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
        opacity: 0;
        transform: translateY(30px);
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);

/* ====== Pedidos - multi-items ====== */
(() => {
  const modal = document.getElementById("modalPedidos");
  const btnOpen = document.getElementById("btnPedidos");
  const closeBtn = modal.querySelector(".close");
  const itemsContainer = document.getElementById("itemsContainer");
  const selectTemplate = document.getElementById("selectItemTemplate").content;
  const customTemplate = document.getElementById("customItemTemplate").content;
  const addItemBtn = document.getElementById("addItemBtn");
  const addCustomBtn = document.getElementById("addCustomBtn");
  const grandTotalEl = document.getElementById("grandTotal");
  const pedidoForm = document.getElementById("pedidoForm");

  // Abrir modal
  btnOpen.addEventListener("click", (e) => {
    e.preventDefault();
    modal.setAttribute("aria-hidden", "false");
    // Si no hay filas, añadir una inicial
    if (itemsContainer.children.length === 0) addSelectItemRow();
    actualizarGranTotal();
  });

  // Cerrar modal
  function closeModal() { modal.setAttribute("aria-hidden", "true"); }
  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  // Añadir fila tipo select
  function addSelectItemRow() {
    const node = document.importNode(selectTemplate, true);
    itemsContainer.appendChild(node);
    actualizarGranTotal();
  }

  // Añadir fila personalizada
  function addCustomItemRow() {
    const node = document.importNode(customTemplate, true);
    itemsContainer.appendChild(node);
    actualizarGranTotal();
  }

  addItemBtn.addEventListener("click", addSelectItemRow);
  addCustomBtn.addEventListener("click", addCustomItemRow);

  // Delegación de eventos en itemsContainer
  itemsContainer.addEventListener("input", (e) => {
    const row = e.target.closest(".item-row");
    if (!row) return;
    actualizarLinea(row);
    actualizarGranTotal();
  });

  itemsContainer.addEventListener("change", (e) => {
    const row = e.target.closest(".item-row");
    if (!row) return;
    actualizarLinea(row);
    actualizarGranTotal();
  });

  itemsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
      e.preventDefault();
      const row = e.target.closest(".item-row");
      if (!row) return;
      row.remove();
      // Si quedan 0 filas, añade una vacía para que siempre haya al menos una
      if (itemsContainer.children.length === 0) addSelectItemRow();
      actualizarGranTotal();
    }
  });

  // Calcular total de una fila
  function actualizarLinea(row) {
    let precio = 0;
    const select = row.querySelector(".item-product");
    const priceInput = row.querySelector(".item-price-input");

    if (select) {
      const opt = select.selectedOptions[0];
      precio = parseInt(opt.dataset.precio || 0, 10);
    } else if (priceInput) {
      precio = parseInt(priceInput.value || 0, 10);
    }

    const qtyInput = row.querySelector(".item-quantity");
    const cantidad = Math.max(0, parseInt(qtyInput.value || 0, 10));
    const lineaTotal = precio * cantidad;
    const lineTotalEl = row.querySelector(".item-line-total");
    lineTotalEl.textContent = ` $${lineaTotal.toLocaleString()}`;
    return lineaTotal;
  }

  // Suma todos los totales
  function actualizarGranTotal() {
    let suma = 0;
    const filas = itemsContainer.querySelectorAll(".item-row");
    filas.forEach(row => {
      suma += actualizarLinea(row);
    });
    grandTotalEl.textContent = `Total: $${suma.toLocaleString()}`;
    return suma;
  }

  // Inicial: añade una fila si no hay
  if (itemsContainer.children.length === 0) addSelectItemRow();

  // Envío: construir mensaje con lista de items
  pedidoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const pago = document.getElementById("pago").value;
    const filas = itemsContainer.querySelectorAll(".item-row");

    let mensaje = `📦 *Nuevo pedido*\n\n👤 Cliente: ${nombre}\n📱 Teléfono: ${telefono}\n🏠 Dirección: ${direccion}\n💳 Pago: ${pago}\n\n🛒 *Pedido:*\n`;
    let suma = 0;

    filas.forEach((row, i) => {
      let nombreProd = "";
      let precioUnit = 0;
      const select = row.querySelector(".item-product");
      const productText = row.querySelector(".item-product-text");
      const priceInput = row.querySelector(".item-price-input");
      const qty = parseInt(row.querySelector(".item-quantity").value || 0, 10);

      if (select) {
        nombreProd = select.value;
        precioUnit = parseInt(select.selectedOptions[0].dataset.precio || 0, 10);
      } else if (productText) {
        nombreProd = productText.value || "Producto personalizado";
        precioUnit = parseInt(priceInput.value || 0, 10);
      }

      const lineaTotal = precioUnit * qty;
      suma += lineaTotal;
      mensaje += `- ${qty} x ${nombreProd} — $${lineaTotal.toLocaleString()}\n`;
    });

    mensaje += `\n💰 *Total:* $${suma.toLocaleString()}`;

    // número de WhatsApp (reemplaza por tu número de pedidos en formato internacional sin +)
    const whatsappNumber = "573204949775"; // <--- Cambia este número
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  });
})();


