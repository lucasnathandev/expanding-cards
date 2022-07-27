const panels = document.querySelectorAll(".panel")

// Functions definition area

function resetActive() {
  panels.forEach((element) => {
    element.classList.remove("active")
  })
}

function setActive(element) {
  element.classList.toggle("active")
}

function findActiveIndex() {
  const index = Array.from(panels).findIndex((element) =>
    element.classList.contains("active")
  )
  return index
}

function main() {
  const activePanelIndex = findActiveIndex()
  if (activePanelIndex > -1) {
    resetActive()
  }
  panels.forEach((panel) =>
    panel.addEventListener("pointerup", (e) => {
      if (e.currentTarget.classList.contains("active")) {
        return resetActive()
      }
      resetActive()
      setActive(e.currentTarget)
    })
  )
}
// Code execution
main()

fetch(`https://source.unsplash.com/1600x900/?beach`).then((r) => {
  console.log(r)
})
