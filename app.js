
    const nameInput = document.getElementById('nameInput');
    const nameList = document.getElementById('nameList');
    const pickButton = document.getElementById('pickButton');
    const result = document.getElementById('result');
    const Adicion=document.getElementById('Adicionar')
    let names = [];

    // Agregar nombres a la lista
    Adicion.addEventListener('click', () => {
        if (nameInput && nameInput.value.trim() !== '') {
          const name = nameInput.value.trim();
          names.push(name);
          const li = document.createElement('li');
          li.textContent = name;
          nameList.appendChild(li);
          nameInput.value = ''; // Limpiar el campo de texto después de agregar el nombre
          result.textContent='';
        }
      });

    // Seleccionar un nombre aleatorio
    pickButton.addEventListener('click', () => {
      if (names.length === 0) {
        result.textContent = 'Por favor, ingresa un nombre.';
        return;
      }
       nameList.innerHTML = '';

      const randomIndex = Math.floor(Math.random() * names.length);
      const secretFriend = names[randomIndex];
      result.textContent = `El Amigo secreto es: ${secretFriend}`;
      names = [];
    });
   