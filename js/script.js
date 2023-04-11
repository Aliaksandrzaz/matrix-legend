function sum(num) {
    const value = Number(num) < 23 ? Number(num) : `${num}`.split('').reduce((acc, val) => acc + Number(val), 0);

    if (parseInt(value) > 22) {
        return sum(value)
    }
    return parseInt(value);
}

const params = new URLSearchParams(window.location.search);
const date = params.get('date');
const splitDate = date.split('-');
const name = params.get('name');

const birthday = new Date(splitDate[2], splitDate[1], splitDate[0]);

let seconds = Math.floor((Date.now() - birthday.getTime()) / 1000),
    minutes = Math.floor(seconds / 60),
    hours = Math.floor(minutes / 60),
    days = Math.floor(hours / 24),
    years = Math.floor(days / 365);

seconds %= 60;
minutes %= 60;
hours %= 24;
days %= 30;

const infoBlock = `<div class="relative-legend"><b>Дата рождения:</b> ${splitDate.join('.')}<br/><b>Возраст:</b> ${years}<br/>
</div>`
const matrixLegendMobileEl = document.body.querySelector('.mobile2#matrix-legend'); // Блок имя, др
if (matrixLegendMobileEl) {
    matrixLegendMobileEl.innerHTML = infoBlock;
}

const matrixLegendDesckEl = document.body.querySelector('.desk2#matrix-legend'); // Блок имя, др
if (matrixLegendDesckEl) {
    matrixLegendDesckEl.innerHTML = infoBlock;
}

document.body.querySelector('.synastry_show').textContent = name;

console.log(date, name);
//////////////////////////////////////

const point01El = document.getElementById('point-01'); //A
const point02El = document.getElementById('point-02'); //Б
const point03El = document.getElementById('point-03'); //В
const point04El = document.getElementById('point-04'); //Г
const point05El = document.getElementById('point-05'); //Д
const point06El = document.getElementById('point-06'); //Е
const point07El = document.getElementById('point-07'); //Ж
const point08El = document.getElementById('point-08'); //И
const point09El = document.getElementById('point-09'); //З
const point10El = document.getElementById('point-10'); //К
const point11El = document.getElementById('point-11'); //Л
const point12El = document.getElementById('point-12'); //М
const point13El = document.getElementById('point-13'); //Н
const point14El = document.getElementById('point-14'); //О

point01El.textContent = sum(splitDate[0]);
point02El.textContent = sum(splitDate[1]);
point03El.textContent = sum(splitDate[2]);
point04El.textContent = sum(Number(point01El.textContent) + Number(point02El.textContent) + Number(point03El.textContent));
point05El.textContent = sum(Number(point01El.textContent) + Number(point02El.textContent) + Number(point03El.textContent) + Number(point04El.textContent));
point06El.textContent = sum(Number(point01El.textContent) + Number(point02El.textContent));
point06El.textContent = sum(Number(point01El.textContent) + Number(point02El.textContent));
point07El.textContent = sum(Number(point02El.textContent) + Number(point03El.textContent));
point08El.textContent = sum(Number(point03El.textContent) + Number(point04El.textContent));
point09El.textContent = sum(Number(point01El.textContent) + Number(point04El.textContent));
point10El.textContent = sum(Number(point05El.textContent) + Number(point04El.textContent));
point11El.textContent = sum(Number(point05El.textContent) + Number(point03El.textContent));
point12El.textContent = sum(Number(point10El.textContent) + Number(point11El.textContent));
point13El.textContent = sum(Number(point10El.textContent) + Number(point12El.textContent));
point14El.textContent = sum(Number(point11El.textContent) + Number(point12El.textContent));

//////////////////////////////////////
function setValueTo(firstEl, blueId, darkBlueId, greenId) {
    const blueEl = document.getElementById(blueId); //Голубой
    const darkBlueEl = document.getElementById(darkBlueId); //Синий
    const greenEl = document.getElementById(greenId); //Зеленый

    blueEl.textContent = sum(Number(firstEl.textContent) + Number(point05El.textContent));
    darkBlueEl.textContent = sum(Number(firstEl.textContent) + Number(blueEl.textContent));

    if (greenEl) {
        greenEl.textContent = sum(Number(blueEl.textContent) + Number(point05El.textContent));
    }
}

setValueTo(point01El, 'point-15', 'point-17', 'point-29');
setValueTo(point02El, 'point-16', 'point-18', 'point-30');
setValueTo(point06El, 'point-tl1', 'point-tl2', 'point-30');
setValueTo(point07El, 'point-tr1', 'point-tr2', 'point-30');
setValueTo(point09El, 'point-bl1', 'point-bl2', 'point-30');
setValueTo(point08El, 'point-br1', 'point-br2', 'point-30');
const point19El = document.getElementById('point-19');
const point20El = document.getElementById('point-20');
point19El.textContent = sum(Number(point04El.textContent) + Number(point10El.textContent));
point20El.textContent = sum(Number(point03El.textContent) + Number(point11El.textContent));

//////////////////////////////////////
const nebo1El = document.getElementById('nebo1');
const zemlia1El = document.getElementById('zemlia1');
const forSelf1El = document.getElementById('for_self1');
const male1El = document.getElementById('male1');
const female1El = document.getElementById('female1');
const socium1El = document.getElementById('socium1');
const duhovnoe1El = document.getElementById('duhovnoe1');
const planetarnoe1El = document.getElementById('planetarnoe1');

nebo1El.textContent = sum(Number(point02El.textContent) + Number(point04El.textContent));
zemlia1El.textContent = sum(Number(point01El.textContent) + Number(point03El.textContent));
forSelf1El.textContent = sum(Number(nebo1El.textContent) + Number(zemlia1El.textContent));

male1El.textContent = sum(Number(point06El.textContent) + Number(point08El.textContent));
female1El.textContent = sum(Number(point07El.textContent) + Number(point09El.textContent));
socium1El.textContent = sum(Number(male1El.textContent) + Number(female1El.textContent));

duhovnoe1El.textContent = sum(Number(forSelf1El.textContent) + Number(socium1El.textContent));

planetarnoe1El.textContent = sum(Number(socium1El.textContent) + Number(duhovnoe1El.textContent));

/////////////////////////////////////////////////////////

function setDataToTable(selector, physicsId, emotionId) {
    const [physics, energy, emotion] = document.body.querySelectorAll(selector);
    physics.textContent = document.getElementById(physicsId).textContent;
    energy.textContent = document.getElementById(emotionId).textContent;
    emotion.textContent = sum(Number(physics.textContent) + Number(energy.textContent));
}

setDataToTable('.dast2', 'point-01', 'point-02');
setDataToTable('.dast3', 'point-17', 'point-18');
setDataToTable('.dast4', 'point-15', 'point-16');
setDataToTable('.dast5', 'point-29', 'point-30');
setDataToTable('.dast6', 'point-05', 'point-05');
setDataToTable('.dast7', 'point-11', 'point-10');
setDataToTable('.dast8', 'point-03', 'point-04');

document.querySelectorAll('.child_9 .dast8:nth-of-type(-n + 2)').forEach((el, index) => {
    const elements = document.querySelectorAll(`.health-map-table tr td:nth-of-type(${1 + index})`);
    const elementsValue = [];
    elements.forEach((item) => {
        elementsValue.push(item.textContent);
    });
    el.textContent = elementsValue.reduce((acc, value) => sum(acc + Number(value)), 0);
})
const sumOfPhysics = document.querySelector('.child_9 .dast8:nth-of-type(1)').textContent;
const sumOfEnergy = document.querySelector('.child_9 .dast8:nth-of-type(2)').textContent;
document.querySelector('.child_9 .dast8:nth-of-type(3)').textContent = sum(Number(sumOfPhysics) + Number(sumOfEnergy));

////////////////////////////////////////////////////////////////

function setValueToAges(middle, startEl, endEl, rangeSelector) {
    const middleEl = document.getElementById(middle);
    middleEl.textContent = sum(Number(startEl.textContent) + Number(endEl.textContent));
    const elements = document.body.querySelectorAll(rangeSelector);

    elements[1].textContent = sum(Number(startEl.textContent) + Number(middleEl.textContent));
    elements[0].textContent = sum(Number(startEl.textContent) + Number(elements[1].textContent));
    elements[2].textContent = sum(Number(middleEl.textContent) + Number(elements[1].textContent));

    elements[4].textContent = sum(Number(middleEl.textContent) + Number(endEl.textContent));
    elements[5].textContent = sum(Number(endEl.textContent) + Number(elements[4].textContent));
    elements[3].textContent = sum(Number(middleEl.textContent) + Number(elements[4].textContent));
}

setValueToAges('point-lt', point01El, point06El, '.from0-To10');
setValueToAges('point-tl', point06El, point02El, '.from10-To20');
setValueToAges('point-tr', point02El, point07El, '.from20-To30');
setValueToAges('point-rt', point07El, point03El, '.from30-To40');
setValueToAges('point-rb', point03El, point08El, '.from40-To50');
setValueToAges('point-br', point08El, point04El, '.from50-To60');
setValueToAges('point-bl', point04El, point09El, '.from60-To70');
setValueToAges('point-lb', point09El, point01El, '.from70-To0');
