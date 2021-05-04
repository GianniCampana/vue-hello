



const app = new Vue({

    el: '#app',
    data:{
        /* variabili */
        messaggio: 'CIAO VUE!!',
        messaggio2: 'PROVA A CLICCARE!!',
        miaclasse: '',
        miaclasse2: '',
        immagine: 'JIMIHENDRIX.jpg'
    },
    methods:{
        cambiaColoreGreen(){
          this.miaclasse = 'green'
          this.miaclasse2 = 'green'
        },
        cambiaColoreRed(){
            this.miaclasse='red'
            this.miaclasse2='red'
        },
        invertiColori(){
            if(this.miaclasse == 'green' && this.miaclasse2 == 'green'){
               this.miaclasse = 'red'
            }else if(this.miaclasse == 'red' && this.miaclasse2 == 'green'){
                this.miaclasse='green'
                this.miaclasse2='red'
            }else if(this.miaclasse == 'green' && this.miaclasse2 == 'red'){
                  this.miaclasse='red'
                  this.miaclasse2='green'
            }else if(this.miaclasse == 'red' && this.miaclasse2 == 'red'){
                  this.miaclasse2='green'
            }
            
        },
        cambiaColoreDefault(){
            this.miaclasse=''
            this.miaclasse2=''
        }
      

    }


});

