// Initialize SweetAlert
(function() {
    var sweetAlertScript = document.createElement('script');
    sweetAlertScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
    document.head.appendChild(sweetAlertScript);
})();

(async function() {
    var scriptUrls = [
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/menu.js',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/player.js',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/custom%20loading',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/selector',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/teleport',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/perma%20morph',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/set%20level',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/uncap%20level',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/remove%20item',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/delete%20pet',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/add%20pet',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/clear%20inventory',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/obtain%20furniture',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/item%20stacker',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/find%20userid',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/get%20all%20pets%20100',
        'https://pxi-fusion-menu.pages.dev/Sweet%20Alert',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/bounty',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/member%20star',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/spins',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/bobbified',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/walk-speed',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/reset',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/set%20name',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/max%20account',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/basic%20items',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/clear%20pets',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/dark%20tower',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/change%20name',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/save%20inventory',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/set%20grade',
        'https://pxi-fusion-menu.pages.dev/Hacks/Pet%20Slots',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/complete%20quest',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/dino%20dig%20100%20days',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/dino%20walk%20speed',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/dino%20walk%20speed',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/set%20gold',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/end%20dinodig',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/pvp%20health',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/edit%20pet',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/save%20pet%20data',
        'https://pxi-fusion-menu.pages.dev/addFusion',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/fix%20battle',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/member',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/treasure%20free%20complete',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/treasure%20core%20complete',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/treasure%20plus%20complete',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/teleport%20click',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/set%20rift%20keys',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/magicoin',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/exit%20battle',
        'https://raw.githubusercontent.com/cabscer/cornball-prod-menu/refs/heads/main/duels%20element',

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
