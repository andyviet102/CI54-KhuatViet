const style = `
*{
  margin: 0;
  padding: 0;
}
.container{
  font-family: 'Montserrat', sans-serif;
  background-color: #1976D2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 10%;
}
.logo, .user-info{
  display: flex;
  align-items: center;
}
.branch{
  font-size: 1.8rem;
  color: #fff;
  margin-left: 20px;
  font-weight: 600;
}
.user-info i{
  font-size: 1.8rem;
  color: #fff;
}
.btn {
  background-color: transparent;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  outline: none;
}
`
class StoryHeader extends HTMLElement{
  constructor() {
    super()
    this._shadowDom = this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this._shadowDom.innerHTML =  `
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
      ${style}
    </style>
    <div class="container">
      <div class="logo">
        <img src="data:image/png;base64,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" width="40px" height="40px" alt="">
        <div class="branch">Share story</div>
      </div>
      <div class="user-info">
        <div class="avatar"><i class="fas fa-cloud"></i></div>
        <button class="btn"><i class="fa fa-sign-out" aria-hidden="true"></i></button>
      </div>
    </div>
    ` 
   
  }
}
window.customElements.define('story-header', StoryHeader)