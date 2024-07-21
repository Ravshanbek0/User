var api_link="https://randomuser.me/api/?results=9";
const cards=document.querySelector(".cards")
const clearBtn=document.querySelector("#clearBtn")
const liveWrite=document.querySelector(".liveWrite")

const getData=async(link)=>{
    const req=await fetch(link)
    const data=await req.json()
    writeData(data)
    
}
getData(api_link)

function writeData(id) {
    id.results.forEach((item) => {
        cards.innerHTML+=`
        <div class="card">
            <div class="img-Div">
                <img src="${item.picture.large}" alt="">
            </div>
        <div class="text-Div">
            <p><span>${item.name.title}</span> <span class="user-name"> ${item.name.first}</span> <span class="user-family">${ item.name.last}</span></p>
            <p><span>${item.dob.age}</span> years old</p>
            <p>${item.location.city},${item.location.country}</p>
            <p>${item.gender}</p>
        </div>
    </div>
        `
    });
}
clearBtn.addEventListener("click",()=>{
    cards.innerHTML=""
    clearBtn.style="display:none"
})
liveWrite.addEventListener("input",()=>{
    const card=document.querySelectorAll(".card")
    
    card.forEach((item)=>{
        var name=item.querySelector(".user-name").textContent.toLowerCase()
        var familya=item.querySelector(".user-family").textContent.toLowerCase()
        var value=liveWrite.value.trim().toLowerCase().replaceAll(" ","")
        if (value== "") {
            item.classList.remove("hidden")
        }
        else if(!name.includes(value) && !familya.includes(value)){
            item.classList.add("hidden")
        }
        else{
            item.classList.remove("hidden")
        }
    })
    
})