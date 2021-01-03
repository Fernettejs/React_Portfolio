const aff_url = "https://www.affirmations.dev";
async function getAff() {
    const response = await fetch(aff_url);
    const data = await response.json();
    const { affirmation } = data;

    document.getElementById('affirmation').textContent = affirmation;

    function speak() {
        speechSynthesis.speak(new SpeechSynthesisUtterance(affirmation));
      }
      speak();
}

getAff();


var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
targetUrl = 'http://catfacts-api.appspot.com/api/facts?number=99'
fetch(proxyUrl + targetUrl)
.then(blob => blob.json())
.then(data => {
console.table(data);
document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
return data;
})
.catch(e => {
console.log(e);
return e;
});

