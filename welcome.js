const injectWelcome = function(){
  const welcomeMsg = document.createElement('h1');
  welcomeMsg.innerHTML = 'Welcome';
  document.querySelector("div").prepend(welcomeMsg)
}
injectWelcome();
