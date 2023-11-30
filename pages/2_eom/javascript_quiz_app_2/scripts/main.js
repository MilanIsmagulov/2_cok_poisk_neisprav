let test = document.querySelector('#question_number_1');
let testAnswers = document.querySelector('#answers_buttons1');

let Dalee = document.querySelector('#check_button_3')





console.log('Script is Loaded')

let questions = [
    {
        text: 'Ознакомьтесь со способами обнаружения неисправностей.',
        right: 0,
        answers: ['для управления потоками рабочих сред путём изменения проходного сечения внутренней части трубопровода', 'для изменения основных параметров транспортируемых жидкостей и газов', 'для измерения основных параметров транспортируемых жидкостей и газов',],
    },
];

let answerLength = questions[0].answers;
let numberOfQuestion = 2; 
let numberOfQuestionSum = 14;

let stepMarkerPlace = document.querySelector('.step_marker');
console.log("stepMarkerPlace")
for (let i = 0; i < numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button_blue.svg";
    stepMarkerPlace.appendChild(markers);
}

for (let i = 0; i < numberOfQuestionSum-numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button.svg";
    stepMarkerPlace.appendChild(markers);
}

let stepPlaceDescription = document.querySelector('.number_description');
stepPlaceDescription.innerHTML = numberOfQuestion + '/' + numberOfQuestionSum;


let img1 = document.createElement('img');
img1.src = './content/correct.svg'
let img2 = document.createElement('img');
img2.src = './content/incorrect.svg'


let i = 1;
for (let question of questions){
    let div = document.createElement('div');
    test.appendChild(div);
    let p = document.createElement('p');
    p.innerHTML = '<span>' + numberOfQuestion + '. ' + '</span>' +  question.text;
    div.appendChild(p);
}


let openPopUpButton = document.querySelector('.zoom_popup')
let closePopUpButton = document.querySelector('#close_popup_button_1')
let popUpWindow = document.querySelector('#popup1')
let openPopUpButton2 = document.querySelector('#open_popup_button')
let popUpWindow2 = document.querySelector('#popup2')
let closePopUpButton2 = document.querySelector('#close_popup_button_2')

openPopUpButton2.addEventListener('click', function(){
    popUpWindow2.classList.remove('close')
})

openPopUpButton.addEventListener('click', function(){
    popUpWindow.classList.remove('close')

})

closePopUpButton.addEventListener('click', function(){
    popUpWindow.classList.add('close')
})

closePopUpButton2.addEventListener('click', function(){
    popUpWindow2.classList.add('close')
})

let openPopUpButton3 = document.querySelector('#second_image_3')
let popUpWindow3 = document.querySelector('#popup3')
let closePopUpButton3 = document.querySelector('#close_popup_button_3')
openPopUpButton3.addEventListener('click', function(){
    popUpWindow3.classList.remove('close')
})
closePopUpButton3.addEventListener('click', function(){
    popUpWindow3.classList.add('close')
})

let openPopUpButton4 = document.querySelector('#second_image_4')
let popUpWindow4 = document.querySelector('#popup4')
let closePopUpButton4 = document.querySelector('#close_popup_button_4')
openPopUpButton4.addEventListener('click', function(){
    popUpWindow4.classList.remove('close')
})
closePopUpButton4.addEventListener('click', function(){
    popUpWindow4.classList.add('close')
})

let openPopUpButton5 = document.querySelector('#second_image_5')
let popUpWindow5 = document.querySelector('#popup5')
let closePopUpButton5 = document.querySelector('#close_popup_button_5')
openPopUpButton5.addEventListener('click', function(){
    popUpWindow5.classList.remove('close')
})
closePopUpButton5.addEventListener('click', function(){
    popUpWindow5.classList.add('close')
})

let openPopUpButton6 = document.querySelector('#second_image_6')
let popUpWindow6 = document.querySelector('#popup6')
let closePopUpButton6 = document.querySelector('#close_popup_button_6')
openPopUpButton6.addEventListener('click', function(){
    popUpWindow6.classList.remove('close')
})
closePopUpButton6.addEventListener('click', function(){
    popUpWindow6.classList.add('close')
})

let openPopUpButton7 = document.querySelector('#second_image_7')
let popUpWindow7 = document.querySelector('#popup7')
let closePopUpButton7 = document.querySelector('#close_popup_button_7')
openPopUpButton7.addEventListener('click', function(){
    popUpWindow7.classList.remove('close')
})
closePopUpButton7.addEventListener('click', function(){
    popUpWindow7.classList.add('close')
})

let openPopUpButton8 = document.querySelector('#second_image_8')
let popUpWindow8 = document.querySelector('#popup8')
let closePopUpButton8 = document.querySelector('#close_popup_button_8')
openPopUpButton8.addEventListener('click', function(){
    popUpWindow8.classList.remove('close')
})
closePopUpButton8.addEventListener('click', function(){
    popUpWindow8.classList.add('close')
})