const fs = require('fs');

let temperaturaChart = null;
let umidadeChart = null;
let temperaturaUmidadechart = null;

function f_gerar_temp()
{
  const vetorTemperatura = [];
  console.log(vetorTemperatura.length);
  for (let i = 0; i < 100; i++) {
      num =(Math.random()*100);
      const decimal = num.toFixed(2);
      vetorTemperatura.push(decimal);
      console.log(decimal);
  }  
  fs.writeFileSync('html/assets/txt/temperatura.txt', String(vetorTemperatura.join('\n')));
}

function mostra_temperatura(){
  // Remover o gráfico anterior, se existir
  if (temperaturaChart !== null) {
    temperaturaChart.destroy();
  }

  // Carregar o vetor de temperatura do arquivo
  const vetorTemperatura = fs.readFileSync('html/assets/txt/temperatura.txt', 'utf8').split('\n').map(Number);

  // Criar um vetor de índices de 0 a 99
  const vetorIndices = [];
  for (let i = 0; i < 100; i++) {
    vetorIndices.push(i);
  }

  // Criar o gráfico com o chart.js
  const ctx = document.getElementById('temperatura').getContext('2d');
  temperaturaChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: vetorIndices,
          datasets: [{
              label: 'Temperatura',
              data: vetorTemperatura,
              backgroundColor: 'rgba(255, 102, 102, 0.2)',
              borderColor:     'rgba(255, 102, 102, 1)',
              borderWidth: 1
          }]
      },
      options: {
        aspectRatio: 1.3,
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
  const vetorUmidade = [];
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
  // Remover o gráfico anterior, se existir
  if (umidadeChart !== null) {
    umidadeChart.destroy();
  }

  // Carregar o vetor de temperatura do arquivo
  var vetorUmidade = fs.readFileSync('html/assets/txt/umidade.txt', 'utf8').split('\n').map(Number);

  // Criar um vetor de índices de 0 a 99
  var vetorIndices = [];
  for (let i = 0; i < 100; i++) {
    vetorIndices.push(i);
  }
  // Criar o gráfico com o chart.js
  var ctx = document.getElementById('umidade').getContext('2d');
  umidadeChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: vetorIndices,
          datasets: [{
              label: 'Umidade',
              data: vetorUmidade,
              backgroundColor: 'rgba(102, 153, 255, 0.2)',
              borderColor:     'rgba(102, 153, 255, 1)',
              borderWidth: 1
          }]
      },
      options: {
        tension: 0.4,
        aspectRatio: 1.3,
        scales: {
            y: {
                beginAtZero: true
            }
        }
      }
  });
}


/*Plot Grafico em Conjunto*/
function umidade_temperatura(){
   // Remover o gráfico anterior, se existir
   if (temperaturaUmidadechart !== null) {
    temperaturaUmidadechart.destroy();
  }

  // Carregar o vetor de temperatura do arquivo
  var vetorUmidade = fs.readFileSync('html/assets/txt/umidade.txt', 'utf8').split('\n').map(Number);
  var vetorTemperatura = fs.readFileSync('html/assets/txt/temperatura.txt', 'utf8').split('\n').map(Number);

  // Criar um vetor de índices de 0 a 99
  var vetorIndices = [];
  
  for (let i = 0; i < 100; i++) {
    vetorIndices.push(i);
  }
  var ctx2 = document.getElementById('umidade_temperatura').getContext('2d');
  temperaturaUmidadechart = new Chart(ctx2, {
      type: 'line',
      data: {
          labels: vetorIndices,
          datasets: [{
              label: 'Umidade',
              data: vetorUmidade,
              backgroundColor: 'rgba(102, 153, 255, 0.2)',
              borderColor:     'rgba(102, 153, 255, 1)',
              borderWidth: 1
          },
          {
            label: 'Temperatura',
            data: vetorTemperatura,
            backgroundColor: 'rgba(255, 102, 102, 0.2)',
            borderColor:     'rgba(255, 102, 102, 1)',
            borderWidth: 1
        }]
      },
      options: {
        aspectRatio: 1.8,
        scales: {
          y: {
              beginAtZero: true
            }
        }
      }
  });
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
  body.classList.toggle('dark-mode'); // toggle "dark-mode" class

  const htmlElement = document.documentElement;
  const toggleBtn = document.getElementById("toggle-btn");
  
  if (htmlElement.getAttribute("data-bs-theme") === "dark") {
    htmlElement.setAttribute("data-bs-theme", "light");
    toggleBtn.innerText = "Dark mode";
  } else {
    htmlElement.setAttribute("data-bs-theme", "dark");
    toggleBtn.innerText = "Light mode";
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