import { pool } from "./pool.js";

let counter = 0;
const btnOne = document.getElementById("one")
const btnTen = document.getElementById("ten")
btnOne.addEventListener("click", singleWarp);
btnTen.addEventListener("click", tenWarp);
const one = document.getElementById("onePull");
const ten = document.getElementById("tenPull");
const clOne = document.getElementById("closeOne");
clOne.addEventListener("click", closeOne);
const clTen = document.getElementById("closeTen");
clTen.addEventListener("click", closeTen)

function closeOne() {
        one.classList.replace("show", "hide");
        btnTen.style.pointerEvents = "all";
}

function closeTen() {
        ten.classList.replace("showGrid", "hide");
        btnOne.style.pointerEvents = "all";
}

function warp(x) {
    const rate = Math.random()
    if (counter == "90") {
        return warp5(x)
    }
    else if (counter % 10 == 0) {
        return warp4(x)
    }
    else if (rate <= x.fivestar.baseChance){ // If its a 5* 
        return warp5(x)
    }
    else if (rate <= x.fourstar.baseChance){ //if its a 4*
        return warp4(x)
    }
    else if (rate <= x.threeStar.baseChance){
        return warp3(x)
    }
    else {
        return warp3(x)
    }
}

function warp5(x) {
    counter = 0
    if(Math.ceil(Math.random() * Object.keys(x.fivestar.items).length) === 1){
        return x.fivestar.items.featured
    }
    else {
        return x.fivestar.items.nonFeatured[Math.ceil(Math.random() * Object.keys(x.fivestar.items.nonFeatured).length)]
    }
}


function warp4(x) {
    const rate4 = Math.random()
    if (rate4 <= x.fourstar.characters.baseChance){ //if character
        if (Math.random() <= x.fourstar.characters.items.baseChance){ // if < === featured
            console.log(Math.ceil(Math.random() * Object.keys(x.fourstar.characters.items.featured).length))
            return x.fourstar.characters.items.featured[Math.ceil(Math.random() * Object.keys(x.fourstar.characters.items.featured).length)]
        }
        else {
            return x.fourstar.characters.items.nonFeatured[Math.ceil(Math.random() * Object.keys(x.fourstar.characters.items.nonFeatured).length)]
        }
    }
    else { //if lightcone
        return x.fourstar.lightCones.items[Math.ceil(Math.random() * Object.keys(x.fourstar.lightCones.items).length)]
    }
}


function warp3(x) {
    return x.threeStar.items[Math.ceil(Math.random() * Object.keys(x.threeStar.items).length)]
}

function singleWarp() {
    btnTen.style.pointerEvents = "none";
    document.getElementById("num").innerHTML = counter + 1;
    counter++;
    const pull = warp(pool)
    console.log(pull.rarity + ": " + pull.itemName)
    one.classList.replace("hide","show");
    document.getElementById("image").src = pull.pic;
    document.getElementById("itemName").innerHTML = pull.itemName;
}

function tenWarp() {
    btnOne.style.pointerEvents = "none";
    const tenPullItemName = ["itemName1", "itemName2", "itemName3", "itemName4", "itemName5","itemName6","itemName7","itemName8","itemName9", "itemName0"]
    const tenpullImg = ["img1", "img2", "img3", "img4", "img5","img6","img7","img8","img9", "img0"]
    let item = []
    document.getElementById("num").innerHTML = counter + 10;
    counter += 10;
    for(let warps = 0; warps < 10; warps++){
        item[warps] = warp(pool)
        console.log(item[warps].rarity + ": " + item[warps].itemName)
    }
    ten.classList.replace("hide","showGrid");
    for(let warp = 0; warp < 10; warp++){
        document.getElementById(tenPullItemName[warp]).innerHTML = item[warp].itemName;
        document.getElementById(tenpullImg[warp]).src = item[warp].pic;
    } 
}





