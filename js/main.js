
const play_df = document.querySelector(".play_df")
const blok = document.querySelector(".blok")
const iii = document.querySelector(".iii")
const sed = document.querySelector(".sed")
const modal = document.querySelector(".modal")
const exit = document.querySelector(".exit")
const audio = document.querySelector("audio")
const fon_imgs = document.querySelector(".fon_imgs")
const right = document.querySelector(".right")
const left = document.querySelector(".left")
const blokk = document.querySelector(".blok")
const nan = document.querySelector(".nan")
const container = document.querySelector(".container")

play_df.addEventListener("click", () => {

    play_df.classList.toggle("active")
})

iii.addEventListener("click", () => {
    iii.classList.toggle("active")
})

sed.addEventListener("click", () => {
    console.log("salom");

    modal.classList.add("active")

})

exit.addEventListener("click", () => {
    modal.classList.remove("active")

})

const musics = [
    "18 yoshim",
    "janona",
    "odamlar",
    "w",
];

var index = 0

const Loading = () => {
    audio.setAttribute("src", `./mediya/${musics[index]}.mp3`)
    fon_imgs.setAttribute("src", `./img/${musics[index]}.jpg`)
}

Loading()



right.addEventListener("click", () => {




    if (index < 3) {
        index += 1
    } else {
        index = 0
    }
    play_df.classList.toggle("active")
   
    Loading()
    playMUsic()
})

left.addEventListener("click", () => {
    console.log("salom");



    if (index == 0) {
        index = 3
    } else {
        index -= 1

    }
    play_df.classList.toggle("active")

    Loading()
    playMUsic()
});

blokk.addEventListener("click",()=>{
   playMUsic()
})

nan.addEventListener("click",()=>{
   pauseMuzic()
})

const pauseMuzic = ()=>{
    audio.pause()
}


const playMUsic = ()=>{
    audio.play()
}
