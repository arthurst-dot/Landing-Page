// script.js - comportamento simples (menu móvel, captura do form local e nav include)
document.addEventListener('DOMContentLoaded', ()=>{

  // simple nav for mobile: toggles menu if exists
  const toggler = document.querySelector('#menu-toggle');
  if(toggler){
    toggler.addEventListener('click', ()=>{
      const menu = document.querySelector('.menu');
      if(menu) menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    });
  }

  // Form capture script (for contato.html). Saves to localStorage and shows success message.
  const contactForm = document.querySelector('#contact-form');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = {
        nome: contactForm.nome.value,
        telefone: contactForm.telefone.value,
        email: contactForm.email.value,
        pessoa: contactForm.pessoa.value,
        horario: contactForm.horario.value,
        servico: [...contactForm.servico.options].filter(o=>o.selected).map(o=>o.value),
        descricao: contactForm.descricao.value,
        timestamp: new Date().toISOString()
      };
      // save (array) in localStorage
      const saved = JSON.parse(localStorage.getItem('leads')) || [];
      saved.push(data);
      localStorage.setItem('leads', JSON.stringify(saved));
      // feedback simples
      alert('Obrigado! Seus dados foram registrados localmente. Substitua por envio real ao servidor quando possível.');
      contactForm.reset();
    });
  }

});