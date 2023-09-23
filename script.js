document.addEventListener("DOMContentLoaded", function () {

    const inputs = document.querySelectorAll('input');
    const outputScore = document.getElementById('score');
    const outputRisque = document.getElementById('risque');
    const inputYoung = document.getElementById('age-43');
    const inputOld = document.getElementById('age-57');
    let score = 0;
    let remarque;
    let color;

    inputs.forEach(input => {
        input.addEventListener("change", function (event) {
            (this.checked) ? score += parseInt(this.getAttribute('data-data')) : score -= parseInt(this.getAttribute('data-data'));

            if (inputOld.checked && inputYoung.checked && this.id === 'age-43') {
                inputOld.checked = false;
                score -= parseInt(inputOld.getAttribute('data-data'));
            }

            if (inputYoung.checked && inputOld.checked && this.id === 'age-57') {
                inputYoung.checked = false;
                score -= parseInt(inputYoung.getAttribute('data-data'));
            }

            if (score >= 0 && score <= 25) {
                remarque = "faible (<5%)";
                color = 'darkgreen';
            } else if (score >= 26 && score <= 35) {
                remarque = "intermédiaire (15%)";
                color = 'darkorange';
            } else if (score >= 36) {
                remarque = "élevé (>35%)";
                color = 'red';
            }

            outputScore.innerHTML = "Score à " + score + " points.";
            outputRisque.innerHTML = "Risque " + remarque + " de SCA.";
            outputRisque.style.color = color;
        });
    });
});