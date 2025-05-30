
  function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
  }

  function toggleMenu() {
    const navLeft = document.getElementById("nav-left");
    const navRight = document.getElementById("nav-right");
    navLeft.classList.toggle("show");
    navRight.classList.toggle("show");
  }


  const text = "Your one-stop solution for media, sound, and graphics";
  const typingElement = document.getElementById("typing");

  function typeText() {
    let index = 0;
    typingElement.innerHTML = "";

    function type() {
      if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 60);
      } else {
        setTimeout(typeText, 2000); // wait 2 seconds, then restart
      }
    }

    type();
  }

  typeText(); // initial call


   
   
   // Smooth scroll
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
 

    const testimonials = document.querySelectorAll('.testimonial-card');
  const slider = document.querySelector('.testimonial-slider');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  let currentIndex = 0;

  function updateSliderAndTestimonials() {
    testimonials.forEach((card, index) => {
      card.classList.toggle('active', index === currentIndex);
    });

    if (slider && testimonials.length > 0) {
      const cardWidth = testimonials[0].offsetWidth + 20; // + gap
      slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === testimonials.length - 1;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < testimonials.length - 1) {
      currentIndex++;
      updateSliderAndTestimonials();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderAndTestimonials();
    }
  });

  updateSliderAndTestimonials(); // Initial display and position


  
  const marquee = document.querySelector(".partners-track");
  let scrollAmount = 0;
  const speed = 1; // px per frame

  // Duplicate logos for seamless effect
  marquee.innerHTML += marquee.innerHTML;

  function animateMarquee() {
    scrollAmount -= speed;
    if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
      scrollAmount = 0; // reset
    }
    marquee.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(animateMarquee);
  }

  animateMarquee();


  document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('active');

    // Optional: Close other items
    document.querySelectorAll('.accordion-item').forEach(other => {
      if (other !== item) {
        other.classList.remove('active');
      }
    });
  });
});



const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          message.style.display = 'block';
          form.reset();
        } else {
          alert('Oops! There was a problem submitting your form.');
        }
      })
      .catch(error => {
        alert('Oops! There was a problem submitting your form.');
      });
  });