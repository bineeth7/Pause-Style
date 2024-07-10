document.getElementById('toggle-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  
    // Update the icon
    const icon = document.getElementById('toggle-icon');
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  });
  