const animationInstructions = [
    {
        id:1,
        from: {opacity:0, marginLeft: -100},
        to: {opacity:1, marginLeft: 0},
        config: {duration: 200},
        delay: 100
    },
    {
        id:2,
        from: {opacity:0, marginLeft: -80},
        to: {opacity:1, marginLeft: 0},
        config: {duration: 300},
        delay: 200  
    },

    {
        id:3,
        from: {opacity:0, marginLeft: -60},
        to: {opacity:1, marginLeft: 0},
        config: {duration: 400},
        delay: 300

    },
    {
        id:4,
        from: {opacity:0, marginLeft: -40},
        to: {opacity:1, marginLeft: 0},
        config: {duration: 500},
        delay: 400
    },
    ]

export default {animationInstructions};