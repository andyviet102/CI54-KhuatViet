const style = `
.error{
    color: red;
    isValid = false
}
input {
    border-radius: 5px;
    width: 100%;
    border: 1px solid #dbdbdb;
    padding: 12px;
    box-sizing: border-box;
}
.input-wapper {
    margin-bottom: 10px;
    
}
`



class InputWrapper extends HTMLElement{
    constructor(){
        super()
        this._shadowRoot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this.type = this.getAttribute('type')
        this.placeholder = this.getAttribute('placeholder')
        this.error = this.getAttribute('error') || ""
        this._shadowRoot.innerHTML =`
        <style> ${style}</style>
        <div class="input-warpper">
            <input type="${this.type}" id="input-main" placeholder="${this.placeholder}">
            <div class="error">${this.error}</div>
        </div>
        `
    }
    // getValue(){
    //     const value = this._shadowRoot.getElementById('input-main').value
    //     return value
    // }

    static get observedAttributes (){
        return ['error']
    }
    attributeChangedCallback(name, oldValue,  newValue)
{
    if (name === "error"){
      this._shadowRoot.querySelector('.error').innerHTML  = newValue
    }
}  
  get value(){
        const value = this._shadowRoot.getElementById('input-main').value
        return value
    }
}
window.customElements.define("input-warpper", InputWrapper)