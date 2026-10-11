document.addEventListener("nav", () => {
  const btn = document.querySelector<HTMLButtonElement>(".cite-button")
  const dlg = document.querySelector<HTMLDialogElement>(".cite-dialog")
  if (!btn || !dlg) return
  const copy = dlg.querySelector<HTMLButtonElement>(".cite-copy")
  const code = dlg.querySelector("code")

  const open = () => dlg.showModal()
  const onBackdrop = (e: MouseEvent) => {
    if (e.target === dlg) dlg.close()
  }
  const onCopy = async () => {
    await navigator.clipboard.writeText(code?.textContent ?? "")
    if (copy) {
      copy.textContent = "Copied"
      setTimeout(() => (copy.textContent = "Copy"), 1500)
    }
  }

  btn.addEventListener("click", open)
  dlg.addEventListener("click", onBackdrop)
  copy?.addEventListener("click", onCopy)
  window.addCleanup(() => {
    btn.removeEventListener("click", open)
    dlg.removeEventListener("click", onBackdrop)
    copy?.removeEventListener("click", onCopy)
  })
})