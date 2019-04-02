function checkGood() {
    let good = document.getElementById("good");
    let fast = document.getElementById("fast");
    let cheap = document.getElementById("cheap");
    if (good.checked) {
        if (fast.checked && cheap.checked) {
            if (Math.random() < 0.5) {
                document.getElementById("fast").checked = false
            } else {
                document.getElementById("cheap").checked = false
            }
        }
    }
}
function checkFast() {
    let good = document.getElementById("good");
    let fast = document.getElementById("fast");
    let cheap = document.getElementById("cheap");
        if (fast.checked) {
            if (good.checked && cheap.checked) {
                if (Math.random() < 0.5) {
                    document.getElementById("good").checked = false
                } else {
                    document.getElementById("cheap").checked = false
                }
            }
        }
}
function checkCheap() {
    let good = document.getElementById("good");
    let fast = document.getElementById("fast");
    let cheap = document.getElementById("cheap");
    if (cheap.checked){
        if (good.checked && fast.checked) {
            if (Math.random()<0.5) {
                document.getElementById("good").checked = false
            } else {
                document.getElementById("fast").checked = false
            }
        }
    }
}