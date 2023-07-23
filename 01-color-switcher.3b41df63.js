!function(){var t=null,e={body:document.querySelector("body"),stopBtn:document.querySelector("button[data-stop]"),startBtn:document.querySelector("button[data-start]")};e.startBtn.addEventListener("click",(function(){e.startBtn.setAttribute("disabled","true"),e.stopBtn.getAttribute("disabled")&&e.stopBtn.removeAttribute("disabled");t=setInterval((function(){return e.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)}
//! function for stop the interval
)),e.stopBtn.addEventListener("click",(function(){e.startBtn.removeAttribute("disabled"),e.stopBtn.setAttribute("disabled","true"),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.3b41df63.js.map
