new Vue ({

  el: '#app',

  data () {
    return {
      current: '',
      numbers: [1,2,3,4,5,6,7,8,9,0],
      operators: ['+','-','*','/']
    }
  },

  methods: {
    input(char){
      this.current += char;
    },
    clear () {
      this.current = '';
    },
    cal (){
      this.current = eval(this.current);
    }

   }

})
