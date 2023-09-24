function togglePasswordVisibility() {
  const senhaInput = document.getElementById('password');
  const showHideButton = document.getElementById('showHideButton');

  if (senhaInput.type === 'password') {
    senhaInput.type = 'text';
    showHideButton.textContent = 'visibility';
  } else {
    senhaInput.type = 'password';
    showHideButton.textContent = 'visibility_off';
  }
}
