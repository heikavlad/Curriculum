fetch('datos.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('nombre').textContent = data.nombre;
    document.getElementById('email').textContent = data.email;
    document.getElementById('resumen').textContent = data.resumen;

    const expList = document.getElementById('experiencia');
    data.experiencia.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      expList.appendChild(li);
    });

    const eduList = document.getElementById('educacion');
    data.educacion.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      eduList.appendChild(li);
    });
  })
  .catch(err => console.error('Error al cargar datos:', err));
