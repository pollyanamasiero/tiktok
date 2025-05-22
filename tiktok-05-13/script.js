const toggle = document.getElementById('toggle');
    const body = document.body;
  
    toggle.addEventListener('click', () => {
      body.classList.toggle('dark');
      toggle.textContent = body.classList.contains('dark')
        ? 'Ativar Light Mode'
        : 'Ativar Dark Mode';
    });