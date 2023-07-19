!function(){var t={body:document.querySelector("body"),stopBtn:document.querySelector("button[data-stop]"),startBtn:document.querySelector("button[data-start]")};t.startBtn.addEventListener("click",(function(){t.startBtn.setAttribute("disabled","true"),t.stopBtn.getAttribute("disabled")&&t.stopBtn.removeAttribute("disabled");changingColotInterval=setInterval((function(){return t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)}
//! function for stop the interval
)),t.stopBtn.addEventListener("click",(function(){t.startBtn.removeAttribute("disabled"),t.stopBtn.setAttribute("disabled","true"),clearInterval(changingColotInterval)}))}();
//# sourceMappingURL=01-color-switcher.777ee881.js.map
