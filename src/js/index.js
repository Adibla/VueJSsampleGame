new Vue({
    el: '#app',
    data: {
        monsterHealth: 100,
        playerHealth: 100
    },
    computed: {
        attack: function(){
            return this.monsterHealth - 5;
        },
        specialAttack: function(){
            return this.monsterHealth - 15;
        }
    }
})