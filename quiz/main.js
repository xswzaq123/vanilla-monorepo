import { question } from "./question.js"

let counter = 1;
const startBtn = document.querySelector("#start")
const res = document.querySelector("#res")
const p = document.querySelector("h3")
const con = document.querySelector('#container')
const sum = document.querySelector('#summary')
const next = document.createElement('button')
const prev = document.createElement('button')
const q = document.createElement('h2')
const opt = document.createElement('div')
const div1 = document.createElement('div')
const div2 = document.createElement('div')
const div3 = document.createElement('div')
const div4 = document.createElement('div')
const divbtn = document.createElement('div')
const r1 = document.createElement('input')
const r2 = document.createElement('input')
const r3 = document.createElement('input')
const r4 = document.createElement('input')
const l1 = document.createElement('label')
const l2 = document.createElement('label')
const l3 = document.createElement('label')
const l4 = document.createElement('label')
divbtn.id = 'btncon'
next.classList.add('btnstyle')
next.classList.add('hoverTrue')
prev.classList.add('btnstyle')
prev.classList.add('hoverTrue')
const result = []
let ans = []
for (let i = 0; i < Object.keys(question).length; i++) {
    ans[i] = question[i+1].ans;
}


const inc = () => {
    if (counter >= Object.keys(question).length) {
        check()
        p.innerText = ''
        r1.remove()
        r2.remove()
        r3.remove()
        r4.remove()
        q.remove()
        l1.remove()
        l2.remove()
        l3.remove()
        l4.remove()
        showSummary()
        return
    }
    r1.checked = false
    r2.checked = false
    r3.checked = false
    r4.checked = false
    counter+=1
    startQuiz()
}

const dec = () => {
    if (counter <= 1) return
    counter-=1
    startQuiz()
}

const startQuiz = () => {
    p.innerText = counter + '/' + Object.keys(question).length
    startBtn.remove()
    con.classList.remove('center')
    q.innerText = question[counter].question
    l1.innerText = question[counter].options[0]
    l2.innerText = question[counter].options[1]
    l3.innerText = question[counter].options[2]
    l4.innerText = question[counter].options[3]
    next.innerText = 'next'
    prev.innerText = 'prev'
    opt.id = 'options'
    r1.id = '1'
    r1.type = 'radio'
    r1.name = 'opt'
    r1.value = '1'
    r2.id = '2'
    r2.type = 'radio'
    r2.name = 'opt'
    r2.value = '2'
    r3.id = '3'
    r3.type = 'radio'
    r3.name = 'opt'
    r3.value = '3'
    r4.id = '4'
    r4.type = 'radio'
    r4.name = 'opt'
    r4.value = '4'
    con.append(q)
    con.append(opt)
    opt.append(div1)
    opt.append(div2)
    opt.append(div3)
    opt.append(div4)
    div1.append(r1)
    div2.append(r2)
    div3.append(r3)
    div4.append(r4)
    div1.append(l1)
    div2.append(l2)
    div3.append(l3)
    div4.append(l4)
    con.append(divbtn)
    divbtn.append(prev)
    divbtn.append(next)
    r1.addEventListener('change', ()=> result[counter-1] = r1.value)
    r2.addEventListener('change', ()=> result[counter-1] = r2.value)
    r3.addEventListener('change', ()=> result[counter-1] = r3.value)
    r4.addEventListener('change', ()=> result[counter-1] = r4.value)
}

const check = () => {
    let cor = 0;
    for (let i = 0; i < Object.keys(question).length; i++) {
        if(JSON.stringify(ans[i]) == JSON.stringify(result[i])) {
            cor++
        }
    }
    res.style.fontSize = '3rem'
    res.innerText = 'Your score: ' +cor + '/' + Object.keys(question).length
    next.remove()
    prev.remove()
    const restart = document.createElement('button')
    restart.classList.add('btnstyle')
    restart.classList.add('hoverTrue')
    restart.innerText = 'restart'
    con.append(restart)
    restart.addEventListener('click', () => window.location.reload())
    
}

const showSummary = () => {
    for (let i = 1; i <= Object.keys(question).length; i++) {
        const sumQ = document.createElement('div')
        const sumA = document.createElement('div')
        sumA.classList.add('sumA')
        sumQ.innerText = `Q${i}. ${question[i].question}`; 
        question[i].options.forEach((element, index) => {
            const btn = document.createElement('button')
            btn.classList.add('sumBtn')
            btn.id = (index + 1)
            btn.innerText = element
            if (btn.id == question[i].ans && result[i] == question[i].ans) { // if selected option is correct
                btn.style.background = '#70b752'
                console.log(btn.id)
            }
            else if (btn.id == question[i].ans) { // correct option
                btn.style.background = '#70b752'
            }
            else if (btn.id == result[i - 1]) { // if selected option is wrong
                btn.style.background = '#d17474'
            }
            sumA.append(btn)
        });
        sum.append(sumQ)
        sum.append(sumA)
    }

}

startBtn.addEventListener('click', startQuiz)
next.addEventListener('click', inc)
prev.addEventListener('click', dec)







