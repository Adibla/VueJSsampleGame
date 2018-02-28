new Vue({
    el: '#app',
    data: {
        monsterHealth: 100,
        playerHealth: 100,
        actions: []
    },
    computed:{
        result: function(){
            return this.monsterHealth <= 3 ? 'Hai vinto' : '';
        }
    },
    methods: {
        newGame: function(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.actions = [];
        },
        heal: function(){
            if(this.playerHealth >= 100){
                return;
            }
            this.actions.push({
                type: "health",
                value: 20   
            });
            this.playerHealth += 20;
            this.monsterAttack();   
        },
        attack: function (){
            this.actions.push({
                type: "monster",
                value: 5    
            });
            this.monsterAttack();

            return this.monsterHealth -= 5;
        },
        specialAttack: function(){
            this.actions.push({
                type: "monster",
                value: 15    
            });
            this.monsterAttack();
            return this.monsterHealth -= 15;
        },
        monsterAttack: function() {
            var randomValue = Math.floor((Math.random() * 15) + 1);
            this.actions.push({
                type: "user",
                value: randomValue  
            });
            return this.playerHealth -= randomValue;
        }

    }
})