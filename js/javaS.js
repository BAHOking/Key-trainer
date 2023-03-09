let title = document.querySelector(".title");
let btns = document.querySelectorAll(".btn");
let inputMenu = document.querySelector(".input__menu");
let input = document.querySelector(".input__text");
let text = document.querySelector(".p__text span");
let time = document.querySelector(".p__time span");
let endMenu = document.querySelector(".end__menu");
let endTime = document.querySelector(".end__time span");
let btnRestart = document.querySelector(".btn__restart");

let timeSeconds = 0;
let startTrainer = false;

let arrStroke = [
  "0 1 2 3 4 5 6 7 8 9 60 15 27 38 42 59 61 73 84 951 ! @ # $ % ^ & * ( ) _ - + / * = ~ ` | { } : ; ? < > [ ] ' / . , № ₴",
  "А а Б б В в Г г Ґ ґ Д д Е е Є є Ж ж З з И и І і Ї ї Й й К к Л л М м Н н О о П п Р р С с Т т У у Ф ф Х х Ц ц Ч ч Ш ш Щ щ ь Ю ю Я я",
  "Яблуко, Апельсин, Банан, Груша, Ананас, Манго, Ківі, Лимон, Грейпфрут, Кавун, Абрикос, Вишня, Слива, Черешня, Мандарин, Персик, Гранат, Ягода, Клубника, Малина",
  "Сонце сходить на сході і заходить на заході. Холодно і снігопад, коли зима на дворі. Серце радіє, коли бачить улюблену людину. Не можна покидати дітей без нагляду. Літо - час для відпочинку і розваг. Найбільшою пам'яттю залишаються моменти з друзями. Птахи співають уранці, коли сонце зійшло. Мова - це один з найважливіших способів спілкування. Любов - найсильніша емоція, яку може відчувати людина. Світ змінюється з кожним днем, і нам потрібно вміти адаптуватися до змін.",
  "A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z",
  "Apple, Banana, Orange, Pineapple, Mango, Papaya, Kiwi, Strawberry, Blueberry, Raspberry, Blackberry, Peach, Pear, Plum, Cherry, Grapefruit, Lemon, Lime, Watermelon, Cantaloupe",
  "My favorite color is blue, and I love to wear it all the time. Yesterday, I watched a really good movie with my friends and we had a great time. My mom is an amazing cook, and she made a delicious lasagna for dinner last night. I love to travel and explore new places, especially countries with rich histories and cultures. This weekend, I'm planning to go hiking in the mountains with some friends. I enjoy reading books about science and technology, and staying up-to-date on the latest advancements in the field.",
  "Сьогодні я пішов на прогулянку до парку та насолодився свіжим повітрям. Today, I went for a walk in the park and enjoyed the fresh air. Моє улюблене заняття - читання книг про пригоди та фантастику. My favorite hobby is reading books about adventures and science fiction. Я люблю співати та грати на гітарі, це допомагає мені розслабитися та насолоджуватися музикою. I love to sing and play guitar, it helps me relax and enjoy the music. Завдяки своїй роботі я маю можливість допомагати людям та змінювати світ на краще. Thanks to my job, I have the opportunity to help people and make the world a better place.",
];

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function start() {
    startTrainer = true;

    input.value = arrStroke[i];
    text.innerHTML = arrStroke[i].length;

    title.style.display = "none";
    inputMenu.style.display = "block";

    for (let i = 0; i < btns.length; i++) {
      btns[i].style.display = "none";
    }

    interval = setInterval(taymer, 1000);
    function taymer() {
      time.innerHTML = `${++timeSeconds} c.`;
    }
  });
}

document.addEventListener("keypress", deleteSymbol);
function deleteSymbol(event) {
  if (startTrainer) {
    let code = event.keyCode;
    let symbol = String.fromCharCode(code);

    if (symbol == input.value[0]) {
      input.value = input.value.substr(1);
      text.innerHTML = input.value.length;
    }

    if (input.value.length === 0) {
      end();
    }
  }
}

function end() {
  startTrainer = false;

  inputMenu.style.display = "none";
  endMenu.style.display = "block";
  btnRestart.style.display = "block";

  clearInterval(interval);
  endTime.innerHTML =
    Math.floor(timeSeconds / 60) + "хв. " + (timeSeconds % 60) + "c.";
}

btnRestart.addEventListener("click", function restart() {
  title.style.display = "block";
  endMenu.style.display = "none";
  btnRestart.style.display = "none";

  for (let i = 0; i < btns.length; i++) {
    btns[i].style.display = "block";
  }

  time.innerHTML = 0;
  timeSeconds = 0;
});
