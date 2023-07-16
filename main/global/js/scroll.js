const boxes = document.querySelectorAll('article')
window.addEventListener('scroll', activeBox)
    activeBox()

    function activeBox(){
        const triggerBox = window.innerHeight / 5 * 4
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top
            if(boxTop < triggerBox){
                box.classList.add('show')
            }
            else{
                box.classList.remove('show')
            }
        })
    }

const title = new SplitType('#text')

gsap.to('.char', {
    y: 0,
    stagger: 0.06,
    delay: 0.2,
    duration: .5
})

const icon = new SplitType('#icon')

gsap.to('.ic', {
    y: 0,
    stagger: 0.06,
    delay: 0.2,
    duration: .5
})

