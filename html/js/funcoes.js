const fs = require('fs');

const vetorTemperatura = [];
const vetorUmidade = [];

function f_gerar_temp()
{
  vetorTemperatura.length = 0;
  console.log(vetorTemperatura.length);
  for (let i = 0; i < 100; i++) {
      num =(Math.random()*100);
      const decimal = num.toFixed(2);
      vetorTemperatura.push(decimal);
      console.log(decimal);
  }  
  fs.writeFileSync('html/assets/txt/temperatura.txt', String(vetorTemperatura.join('\n')));
  //return vetorTemperatura;
}

function mostra_temperatura(){
  // Carregar o vetor de temperatura do arquivo
  var vetorTemperatura = fs.readFileSync('html/assets/txt/temperatura.txt', 'utf8').split('\n').map(Number);

  // Criar um vetor de índices de 0 a 99
  var vetorIndices = [];
  for (let i = 0; i < 100; i++) {
    vetorIndices.push(i);
  }

  // Criar o gráfico com o chart.js
  var ctx = document.getElementById('temperatura').getContext('2d');
  var temperatura = new Chart(ctx, {
      type: 'line',
      data: {
          labels: vetorIndices,
          datasets: [{
              label: 'Temperatura',
              data: vetorTemperatura,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}
  
  
function f_gerar_umidade()
{
    vetorUmidade.length = 0;
    console.log(vetorUmidade.length);
    for (let i = 0; i < 100; i++) {
        umi =(Math.random()*100);
        const umi_decimal = umi.toFixed(2);
        vetorUmidade.push(umi_decimal);
        console.log(umi_decimal);
    }

    fs.writeFileSync('html/assets/txt/umidade.txt', String(vetorUmidade.join('\n')));
}

function mostra_umidade(){
  // Carregar o vetor de temperatura do arquivo
  var vetorUmidade = fs.readFileSync('html/assets/txt/umidade.txt', 'utf8').split('\n').map(Number);

  // Criar um vetor de índices de 0 a 99
  var vetorIndices = [];
  for (let i = 0; i < 100; i++) {
    vetorIndices.push(i);
  }

  // Criar o gráfico com o chart.js
  var ctx = document.getElementById('umidade').getContext('2d');
  var umidade = new Chart(ctx, {
      type: 'line',
      data: {
          labels: vetorIndices,
          datasets: [{
              label: 'Temperatura',
              data: vetorUmidade,
              backgroundColor: 'rgba(0, 0, 255, 0.2)',
              borderColor: 'rgba(0, 0, 255, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
}

function toggleMode() {
    const htmlElement = document.documentElement;
    const toggleBtn = document.getElementById("toggle-btn");
    
    if (htmlElement.getAttribute("data-bs-theme") === "dark") {
      htmlElement.setAttribute("data-bs-theme", "light");
      toggleBtn.innerText = "Dark mode";
      toggleBtn.classList.remove("btn-secondary");
      toggleBtn.classList.add("btn-primary");
    } else {
      htmlElement.setAttribute("data-bs-theme", "dark");
      toggleBtn.innerText = "Light mode";
      toggleBtn.classList.remove("btn-primary");
      toggleBtn.classList.add("btn-secondary");
    }
  }

function f_popup()
{
    mensagem = fs.readFileSync('mensagem.txt');
    alert(mensagem);
}

function close_window()
{
    close();
}

function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle('dark-mode'); // toggle the "dark-mode" class

  const htmlElement = document.documentElement;
  const toggleBtn = document.getElementById("toggle-btn");
  
  if (htmlElement.getAttribute("data-bs-theme") === "dark") {
    htmlElement.setAttribute("data-bs-theme", "light");
    toggleBtn.innerText = "Dark mode";
    toggleBtn.classList.remove("btn-secondary");
    toggleBtn.classList.add("btn-primary");
  } else {
    htmlElement.setAttribute("data-bs-theme", "dark");
    toggleBtn.innerText = "Light mode";
    toggleBtn.classList.remove("btn-primary");
    toggleBtn.classList.add("btn-secondary");
  }
}

function updateClock() {
  var agora = new Date(); // create a new Date object
  var dia = agora.getDate()
  var mes = agora.getMonth() + 1  
  var ano = agora.getFullYear()
  var hours = agora.getHours(); // get the current hour (0-23)
  var minutes = agora.getMinutes(); // get the current minute (0-59)
  var seconds = agora.getSeconds(); // get the current second (0-59)

  // format the time as HH:MM:SS
  var time =  hours.toString().padStart(2, '0') + ':' +
              minutes.toString().padStart(2, '0') + ':' +
              seconds.toString().padStart(2, '0');

              // format the time as HH:MM:SS
  var data =  dia.toString().padStart(2, '0') + '/' +
              mes.toString().padStart(2, '0') + '/' +
              ano.toString().padStart(4, '0');

// update the clock element
document.getElementById('clock').textContent = data  + ' - ' + time;
}

// call updateClock() every second
setInterval(updateClock, 1000);