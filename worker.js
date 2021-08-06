function sendHello() {
    postMessage("Hello");
    setTimeout('sendHello()',1000);
  }
  
sendHello();