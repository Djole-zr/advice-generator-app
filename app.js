const dugme = document.querySelector('button');
const savet = document.querySelector('.advice');
const naslov = document.querySelector('h1');



const dodavanje = async () => {
    const res = await axios.get('https://api.adviceslip.com/advice');
    savet.textContent = `${res.data.slip.advice}`;
    naslov.textContent = `ADVICE #${res.data.slip.id}`;
}



dugme.addEventListener('click', dodavanje)

