const gamedata = {

    memory:{
        started:false,
        found:0,
        tries:0,
        time:0,
        cards:[],
        comparar:[],
        timerId:false,
        saveProps:null,
        over:false,
        delay:false,
        
        
    },
    mine:{
        started:false,
        pontos:0,
        time:0,
        mines:[],
        timerId:false,
        over:false,
        delay:false,
        saveProps:null,
        set:false
    },
    leaderBoard:{},
    username:false

}

export default gamedata