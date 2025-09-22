document.addEventListener('DOMContentLoaded', ()=>{

  const toggler = document.querySelector('#menu-toggle');
  if(toggler){
    toggler.addEventListener('click', ()=>{
      const menu = document.querySelector('.menu');
      if(menu) menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    });
  }
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
      const saved = JSON.parse(localStorage.getItem('leads')) || [];
      saved.push(data);
      localStorage.setItem('leads', JSON.stringify(saved));
      alert('Obrigado! Seus dados foram registrados localmente. Substitua por envio real ao servidor quando possível.');
      contactForm.reset();
    });
  }
});