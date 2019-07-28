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

    // function copyToClipboard (containerid) {
  /* Create temporary textarea to copy text
  let textarea = document.createElement('textarea')
  textarea.id = 'temp_element'
  textarea.style.height = 0
  document.body.appendChild(textarea)
  textarea.value = document.querySelector(".calculator__display--2").innerText*/
  
  }

})