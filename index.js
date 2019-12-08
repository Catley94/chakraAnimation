const rootChakra = document.querySelector('.rootChakraContainer');
const sacralChakra = document.querySelector('.sacralChakraContainer');
const solarPlexusChakra = document.querySelector('.solarPlexusChakraContainer');
const heartChakra = document.querySelector('.heartChakraContainer');
const throatChakra = document.querySelector('.throatChakraContainer');
const thirdEyeChakra = document.querySelector('.thirdEyeChakraContainer');
const crownChakra = document.querySelector('.crownChakraContainer');
const crownChakraSymbol = document.querySelector('.crownChakraSymbol');
const meditator = document.querySelector('.meditator');
const rootSummary = document.querySelector('.rootSummary');
const root2CrownChakras = [rootChakra, sacralChakra, solarPlexusChakra, heartChakra, throatChakra, thirdEyeChakra, crownChakra];
const crown2RootChakras = [crownChakra, thirdEyeChakra, throatChakra, heartChakra, solarPlexusChakra, sacralChakra, rootChakra];

const lineUpChakrasHorizontally = anime({
    targets: root2CrownChakras,
    translateY: 100,
    translateX: anime.stagger(30),
    scale: 0.2,
    delay: anime.stagger(1000),
    loop: false
})

function lineUpChakrasVertically() {
    anime({
        targets: crown2RootChakras,
        translateY: anime.stagger(30),
        translateX: 120,
        scale: 0.2,
        delay: anime.stagger(1000),
        loop: false
    })
    // anime({
    //     targets: crown2RootChakras,
    //     translateY: [{value: anime.stagger(35)}]
    // })

}
function showMeditator() {
    anime({
        targets: meditator,
        // strokeDasharray: [anime.setDashArray, 581],
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        direction: 'forwards',
        duration: 5000
    })

    
}

setTimeout(lineUpChakrasVertically, 10000)
setTimeout(showMeditator, 18000)


// function chakraSummary(event) {
//     console.log(e)
//     // anime({
//     //     targets: e.target,
//     //     translateY: -175,
//     //     translateX: 450,
//     //     opacity: 1,
//     // })

// }
    // rootChakra.addEventListener('click', () => chakraSummary(e.target));
    // sacralChakra.addEventListener('mouseover', {})
    // solarPlexusChakra.addEventListener('mouseover', {})
    // heartChakra.addEventListener('mouseover', {})
    // throatChakra.addEventListener('mouseover', {})
    // thirdEyeChakra.addEventListener('mouseover', {})
    // crownChakra.addEventListener('mouseover', {})