// JavaScript HTML DOM -- Changing CSS
// HTML DOM, JavaScript'in HTML öğelerinin stilini değiştirmesine olanak tanır.
class ChangeCSS {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
    }
    setFontSize(value) {
        return this.element.style.fontSize = value;
    }
    
    setColor(value) {
        return this.element.style.color = value;
    }

    animeCSS(width, height, position, bgColor) {
        this.element.style.width = width;
        this.element.style.height = height;
        this.element.style.position = position;
        this.element.style.backgroundColor = bgColor;
    }

    setPerspective(value) {
        return this.element.style.perspective = value;
    }

    animation() {
        let animeId = null;
        const animeItem = document.getElementById("animation");
        let pos = 0;
        clearInterval(animeId);
        animeId = setInterval(frame, 5);
        function frame() {
            if(pos === 350) {
                clearInterval(animeId);
            }else {
                pos++;
                animeItem.style.top = pos + "px";
                animeItem.style.left = pos + "px";
            }
        }
    }
}

const demo20 = new ChangeCSS("demo20");
demo20.setFontSize("4rem");

const demo21 = new ChangeCSS("demo21");
document.getElementById("colorChanger").addEventListener('click', () => {
    demo21.setColor('blue');
});


// HTML DOM Animation 
const animeContainer = new ChangeCSS("anime-container");
animeContainer.animeCSS("400px", "400px", "relative", "yellow")

const animeItem = new ChangeCSS("animation");
animeItem.animeCSS("50px", "50px", "absolute", "red");

document.getElementById("start-anime").addEventListener('click', () => {
    animeItem.animation();
})

// Another Example
const perspectiveCon = new ChangeCSS("perspective-con");
document.getElementById("start-perspective").addEventListener('click', () => {
    perspectiveCon.setPerspective("100px");
})