import './style'
const popoverBtn = document.querySelector('button')
const popoverContainer = document.querySelector('.popover-container')
const popoverWindow = document.querySelector('.popover-window')

popoverBtn.onclick = (event) => {
  const rect = event.target.getBoundingClientRect()
  
  if(popoverContainer.style.display === "none"){
    popoverContainer.style.display = "block"
  } else {
    popoverContainer.style.display = "none"
  }
  console.log((rect.top - rect.height))
  popoverWindow.style.top = (rect.top - rect.height - 65) + 'px'
  popoverWindow.style.left = (rect.left - (rect.width / 2) - 25) + 'px'
  
}

popoverContainer.onclick = () => {
  popoverContainer.style.display = "none"
}

popoverWindow.onclick = (e) => {
  e.stopPropagation()
}