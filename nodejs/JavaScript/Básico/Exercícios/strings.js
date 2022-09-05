const nomeCompleto = prompt('Digite seu nome completo:')
nomeMinusculo = nomeCompleto.toLowerCase()

// window.document.write(nomeCompleto) window pode ser omitido
// document.write('<br>Seu nome novamente')

window.document.body.innerHTML = `O seu nome completo é <strong>${nomeCompleto}</strong><br>`
window.document.body.innerHTML += `Seu nome tem ${nomeCompleto.length} letras<br>`
window.document.body.innerHTML += `A segunda letra do seu nome é ${nomeCompleto[1]}<br>`
window.document.body.innerHTML += `A segunda letra do seu nome é ${nomeCompleto.charAt(1)}<br>`
window.document.body.innerHTML += `O primeiro índice da letra 'a' do seu nome é ${nomeMinusculo.indexOf('a')}<br>`
window.document.body.innerHTML += `O último índice da letra 'a' do seu nome é ${nomeCompleto.lastIndexOf('a')}<br>`
window.document.body.innerHTML += `As últimas três letras do seu nome são: ${nomeCompleto.slice(-3)}<br>`
window.document.body.innerHTML += `As palavras do seu nome são : ${nomeCompleto.split(' ')}<br>`
window.document.body.innerHTML += `O seu nome em maiúsculas é : ${nomeCompleto.toUpperCase()}<br>`
window.document.body.innerHTML += `O seu nome em minúsculas é : ${nomeCompleto.toLowerCase()}<br>`
