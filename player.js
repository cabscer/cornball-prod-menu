document.getElementById('fixProdigy').onclick = async function() {
const prodigy = await fetch('https://pxi-fusion-menu.pages.dev/Main/initialize-prodigy.js');
    const code = await prodigy.text();
    eval(code);

const containers = await fetch('https://pxi-fusion-menu.pages.dev/Main/containers.js');
    const code2 = await containers.text();
    eval(code2);

setTimeout(() => {
  // Ensure Boot and nested structure exist
  if (typeof Boot === 'undefined') Boot = { prototype: {} };
  if (!Boot.prototype.game) Boot.prototype.game = {};
  if (!Boot.prototype.game._state) Boot.prototype.game._state = {};
  if (!Boot.prototype.game._state._current) Boot.prototype.game._state._current = {};
  if (!Boot.prototype.game._state._current.user) Boot.prototype.game._state._current.user = {};

  // Assign .source to _.player
  Boot.prototype.game._state._current.user.source = _.prodigy.player;
}, 1000);console.clear();
console.log("Player should be back in Boot.prototype.game._state._current.user.source");
Swal.fire("Success", "Fixed Prodigy", "success");
setTimeout(() => {
    console.clear();
    console.log("Fixed Prodigy");
}, 2000);
}
