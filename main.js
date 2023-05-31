//first question
function max(a,b) {
    if (a > b){
        console.log('Maximum is: ', a)
    }
    else{
        console.log('Maximum is: ', b)
    }
}
max(5,10)

//second question
let admin
let name = 'Vitaliy'
admin = name
console.log("admin:" + admin)

//third question
function ask_age(){
let age = prompt('Введите ваш возраст','Введите ваш возраст');
    if(!confirm("Вам точно - "+age + " лет?")){
        ask_age()
    }
}
ask_age()

//fourth question
text_field = document.querySelector('input')
h1_text = document.querySelector('h1')
function change_text(){
    console.log(h1_text)
    console.log(text_field)
    h1_text.innerHTML = text_field.value + " Vitaliy"
}

button = document.querySelector('button');
button.addEventListener("click", change_text)
