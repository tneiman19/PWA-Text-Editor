const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// DONE: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  // Store the triggered events
  window.deferredPromt = event;

  // Remove the hidden class from the button.
  butInstall.classlist.toggle("hidden", false);
});

// DONE: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promtEvent = window.defferedPrompt;

  if (!promptEvent) {
    return;
  }
  // Show prompt
  promtEvent.prompt();

  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPromt = null;

  butInstall.classList.toggle("hidden", true);
});

// DONE: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // Clear prompt
  window.defferedPrompt = null;
});
