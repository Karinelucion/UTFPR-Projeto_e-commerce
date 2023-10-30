import { headerComponent } from  "./components/header.js";
import { footerComponent } from "./components/footer.js";

window.onload = function(){
    document.querySelector('#appHeader').innerHTML = headerComponent;
    document.querySelector('#appFooter').innerHTML = footerComponent;
}