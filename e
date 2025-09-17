// Initialize SweetAlert
(function() {
    var sweetAlertScript = document.createElement('script');
    sweetAlertScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
    document.head.appendChild(sweetAlertScript);
})();

(async function() {
    var scriptUrls = [
        'https://pxi-fusion-menu.pages.dev/beta/menu.js',
        'https://pxi-fusion-menu.pages.dev/Main/player.js',
        'https://pxi-fusion-menu.pages.dev/Custom-Load-Screen/Load%20Screen%20Code',
        'https://pxi-fusion-menu.pages.dev/Hacks/Selector%20(Advanced)',
        'https://pxi-fusion-menu.pages.dev/Hacks/Teleport-To-World',
        'https://pxi-fusion-menu.pages.dev/Hacks/Permanent-Morph',
        'https://pxi-fusion-menu.pages.dev/Hacks/Set%20Level%20Button',
        'https://pxi-fusion-menu.pages.dev/Hacks/Uncap%20Level',
        'https://pxi-fusion-menu.pages.dev/Hacks/Remove-Item',
        'https://pxi-fusion-menu.pages.dev/Hacks/Delete-Pet',
        'https://pxi-fusion-menu.pages.dev/Hacks/Add-Pet',
        'https://pxi-fusion-menu.pages.dev/Hacks/Clear-Inventory',
        'https://pxi-fusion-menu.pages.dev/Hacks/Obtain-Furniture',
        'https://pxi-fusion-menu.pages.dev/Hacks/Item-Stacker',
        'https://pxi-fusion-menu.pages.dev/Hacks/Find-UserID',
        'https://pxi-fusion-menu.pages.dev/Hacks/Get-All-Pets',
        'https://pxi-fusion-menu.pages.dev/Sweet%20Alert',
        'https://pxi-fusion-menu.pages.dev/Hacks/Bounty',
        'https://pxi-fusion-menu.pages.dev/Hacks/Member-Star',
        'https://pxi-fusion-menu.pages.dev/Hacks/Spins',
        'https://pxi-fusion-menu.pages.dev/Hacks/Bobbified',
        'https://pxi-fusion-menu.pages.dev/Hacks/Walk-Speed',
        'https://pxi-fusion-menu.pages.dev/Hacks/Reset',
        'https://pxi-fusion-menu.pages.dev/Hacks/Set%20Name',
        'https://pxi-fusion-menu.pages.dev/Hacks/Max%20account',
        'https://pxi-fusion-menu.pages.dev/Hacks/basic%20item',
        'https://pxi-fusion-menu.pages.dev/Hacks/Clear%20Pets',
        'https://pxi-fusion-menu.pages.dev/Hacks/Dark%20Tower',
        'https://pxi-fusion-menu.pages.dev/Hacks/Change%20Name',
        'https://pxi-fusion-menu.pages.dev/Hacks/Save%20Inventory',
        'https://pxi-fusion-menu.pages.dev/Hacks/Set%20Grade',
        'https://pxi-fusion-menu.pages.dev/Hacks/Pet%20Slots',
        'https://pxi-fusion-menu.pages.dev/Hacks/Complete%20Quest',
        'https://pxi-fusion-menu.pages.dev/Hacks/Dino%20100%20Days',
        'https://pxi-fusion-menu.pages.dev/Hacks/Dino%20Walk%20Speed',
        'https://pxi-fusion-menu.pages.dev/Hacks/Duplicate%20Acc',
        'https://pxi-fusion-menu.pages.dev/Hacks/Set%20Gold',
        'https://pxi-fusion-menu.pages.dev/Hacks/End%20Dino',
        'https://pxi-fusion-menu.pages.dev/Hacks/PVP%20Hp',
        'https://pxi-fusion-menu.pages.dev/Hacks/Edit%20pet',
        'https://pxi-fusion-menu.pages.dev/Hacks/Save%20pet%20data',
        'https://pxi-fusion-menu.pages.dev/addFusion',
        'https://pxi-fusion-menu.pages.dev/Hacks/FixBattle',
        'https://pxi-fusion-menu.pages.dev/Hacks2/member.js',
        'https://pxi-fusion-menu.pages.dev/Hacks/all-pets-100.js',
        'https://pxi-fusion-menu.pages.dev/Hacks2/treasureFree.js',
        'https://pxi-fusion-menu.pages.dev/Hacks2/treasureCore.js',
        'https://pxi-fusion-menu.pages.dev/Hacks2/treasurePlus.js',
        'https://pxi-fusion-menu.pages.dev/Hacks2/teleportClick.js',
        'https://pxi-fusion-menu.pages.dev/Hacks2/set-rift-keys.js',
        'https://pxi-fusion-menu.pages.dev/Hacks2/magicoin.js',
        'https://pxi-fusion-menu.pages.dev/Hacks2/exit-battle.js',
        'https://pxi-fusion-menu.pages.dev/Hacks2/duels-element.js',

    ];

    for (const url of scriptUrls) {
        await fetch(url)
            .then(response => response.text())
            .then(scriptContent => {
                var script = document.createElement('script');
                script.textContent = scriptContent;
                document.body.appendChild(script);
            })
            .catch(error => console.error('Error fetching the script:', error));
    }
})();
