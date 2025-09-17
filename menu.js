(function(){
    // Create styles for the cheat menu
    var style = document.createElement('style');
    style.innerHTML = `
        #cheatMenu {
            position: fixed;
            top: -100%; /* Initially off-screen */
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(184, 4, 4, 0.5);
            color: #fff;
            z-index: 10000;
            padding: 20px;
            overflow: auto;
            box-sizing: border-box;
            transition: top 0.3s ease-in-out; /* Smooth transition */
            backdrop-filter: blur(5px); /* Add blur effect */
        }
        #particles-js {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
        #cheatMenu.visible {
            top: 0; /* Slide in from the top */
        }
        #cheatMenu.hidden {
            top: -100%; /* Slide out towards the top */
        }
        #cheatMenu.hiding {
            animation: slideUp 0.3s ease-in-out; /* Slide up animation */
        }
        @keyframes slideUp {
            0% {
                top: 0;
            }
            100% {
                top: -100%;
            }
        }
        #cheatMenu h1 {
            text-align: center;
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        #cheatMenu .section {
            margin: 20px 0;
            background: rgba(255, 255, 255, 0.1);
            padding: 15px;
            border-radius: 10px;
        }
        #cheatMenu .section h2 {
            color: #fff;
            margin-bottom: 10px;
        }
        #cheatMenu .section div {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: flex-start;
        }
        #cheatMenu button, #cheatMenu label {
            padding: 10px;
            background: rgba(255, 0, 0, 0.7);
            border: none;
            color: #fff;
            cursor: pointer;
            text-align: center;
            box-sizing: border-box;
            min-width: 150px;
            margin: 5px;
            backdrop-filter: blur(5px);
            border-radius: 5px;
            transition: all 0.3s ease;
        }
        #cheatMenu button:hover, #cheatMenu label:hover {
            background: rgba(41, 128, 185, 0.9);
            transform: translateY(-2px);
        }
        #toggleMenu {
            position: fixed;
            top: 10px;
            left: 10px;
            background: rgba(255, 255, 255, 0.2);
            color: #fff;
            padding: 10px;
            cursor: pointer;
            z-index: 10001;
            border: 1px solid rgba(255, 255, 255, 0.3);
            transition: transform 0.3s ease;
            backdrop-filter: blur(5px);
            border-radius: 5px;
        }
        #toggleMenu.rotated {
            transform: rotate(180deg);
        }
        .swal2-container {
            z-index: 10001 !important;
        }
        .swal2-bottom {
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        .toggle-switch {
            display: inline-block;
            height: 30px;
            width: 60px;
            position: relative;
            cursor: pointer;
            background-color: rgba(204, 204, 204, 0.3);
            border-radius: 15px;
            transition: background-color 0.3s ease;
        }
        .toggle-switch::before {
            content: '';
            position: absolute;
            height: 24px;
            width: 24px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            border-radius: 50%;
            transition: left 0.3s ease;
        }
        .toggle-switch.checked {
            background-color: rgba(39, 174, 96, 0.7);
        }
        .toggle-switch.checked::before {
            left: calc(100% - 27px);
        }
        #cheatMenu .icons img {
            width: 32px;
            height: 32px;
            margin-left: 15px;
            object-fit: contain;
        }
        #cheatMenu .icons a {
            display: inline-block;
            width: 32px;
            height: 32px;
            margin-left: 15px;
        }
        #cheatMenu .icons img[alt="Discord Icon"] {
            filter: none;
        }
    `;
    document.head.appendChild(style);

    // Add particles.js script
    var particlesScript = document.createElement('script');
    particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    document.head.appendChild(particlesScript);

    particlesScript.onload = function() {
        // Create particles container
        var particlesContainer = document.createElement('div');
        particlesContainer.id = 'particles-js';
        document.body.appendChild(particlesContainer);

        // Initialize particles
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                }
            },
            retina_detect: true
        });
    };

    // Create the cheat menu container
    var menu = document.createElement('div');
    menu.id = 'cheatMenu';
    menu.className = 'hidden'; // Initially hidden off-screen
    menu.innerHTML = `
    <h1>
        Cabscer
        <div class="icons">
            <a href="fart" target="_blank">
                <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" alt="Discord Icon">
            </a>
            <a href="fart" target="_blank">
                <img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-06-512.png" alt="YouTube Icon">
            </a>
        </div>
    </h1>
        <p>support my work by using my menu. </p>
        <div style="text-align: right; margin: 10px 0;">
            <p style="color: red; font-weight: bold; margin-bottom: 5px; background: rgba(255, 0, 0, 0.1); padding: 5px; display: inline-block;">Important: When loaded into Prodigy, click this button</p>
            <button id="fixProdigy" style="background: rgba(255, 0, 0, 0.7); min-width: 180px; padding: 12px; font-size: 1.1em;">Fix Prodigy</button>
        </div>
        
        <div class="section">
            <h2>Player Hacks</h2>
            <div>
                <button id="max">Max Account</button>
                <button id="setGold">Set Gold</button>
                <button id="setLevel">Set Level</button>
                <button id="memberPanel">Member Panel</button>
                <button id="permanentMorphButton">Permanent Morph</button>
                <button id="uncapLevel">Uncap Level (Client-Side Only)</button>
                <button id="memberStar">Set Member Stars</button>
                <button id="setBounty">Set Bounty Points</button>
                <button id ="dark">Set Dark Tower Floor</button>
                <button id="completeQuest">Complete Current Task In Quest</button>
                <button id="changeName">Change Name</button>
                <button id="setName">Set Name (Client-Side Only)</button>
                <button id="setGrade">Set Grade</button>
                <button id="spins">Unlimited Spins</button>
            </div>
        </div>
        <div class="section">
            <h2>Inventory Hacks</h2>
            <div>
                <button id="itemStacker">Item Stacker</button>
                <button id="clearInventory">Clear Inventory</button>
                <button id="selectorBasic">Selector (Basic)</button>
                <button id="advancedSelectorButton">Selector (Advanced)</button>
                <button id="removeItem">Remove Item</button>
                <button id="obtainFurniture">Obtain All Furniture</button>
                <button id="saveInventory">Save Inventory</button>
            </div>
        </div>
        <div class="section">
            <h2>Pet Hacks</h2>
            <div>
                <button id="getAllPets">Get All Pets</button>
                <button id="allPets150">Get All Pets Level 150</button>
                <button id="clearPets">Clear All Pets</button>
                <button id="addPet">Add Pet</button>
                <button id="deletePet">Delete Pet</button>
                <button id="editPet">Edit Pet</button>
                <button id="savePet">Save Pet Data</button>
            </div>
        </div>
        <div class="section">
            <h2>Utility Hacks</h2>
            <div>
                <label for="toggleTeleport">Toggle Click Teleporting</label>
                <div id="toggleTeleport" class="toggle-switch"></div>
                <button id="walk">Edit Walkspeed</button>
                <button id="bobby">Bobbified</button>
                <button id="reset">Reset Account</button>
                <button id="findUserId">Find the UserId of People on the Screen</button>
                <button id="dup">Duplicate an Account</button>
                <button id="teleportToWorld">Teleport To World</button>
                <button id="duelsElement">Set Duels Stadium Element</button>

            </div>
        </div>
        <div class="section">
            <h2>Minigame Hacks</h2>
            <div>
                <button id="speed">Edit Dino Dig Walkspeed</button>
                <button id="moreTime">Extra Time In Dino Dig</button>
                <button id="endDino">End Dino Dig</button>
            </div>
        </div>
        <div class="section">
            <h2>Treasure Track Hacks (Client Side)</h2>
            <div>
                <button id="treasureFree">Complete Free Treasure Tiers</button>
                <button id="treasureCore">Complete Core Treasure Tiers</button>
                <button id="treasurePlus">Complete Plus Treasure Tier</button>
            </div>
        </div>
        <div class="section">
            <h2>Secure Inventory (Client Side)</h2>
            <div>
                <button id="setRiftKeys">Set Rift Keys (Client Side)</button>
                <button id="setMagicoin">Set Magicoin (Client Side)</button>

            </div>
        </div>
        <div class="section">
            <h2>Battle Hacks</h2>
            <div>
                <button id ="escape">Escape Battle</button>
                <button id ="pvpHealth">PVP Health</button>
                <button id ="fixBattle">Fix Battle Crash</button>
            </div>
        </div>
    `;
    document.body.appendChild(menu);

    // Create the toggle button
    var toggleMenuButton = document.createElement('div');
    toggleMenuButton.id = 'toggleMenu';
    toggleMenuButton.innerHTML = '&#9660;'; // Down arrow
    document.body.appendChild(toggleMenuButton);

    // Inject SweetAlert2 if not already present
    if (typeof Swal === 'undefined') {
        var sweetAlertScript = document.createElement('script');
        sweetAlertScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
        document.head.appendChild(sweetAlertScript);
    }

    // SweetAlert wrapper function for success messages
    function success(message) {
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: message,
            toast: true,
            position: 'bottom',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
        });
    }

    // Show the cheat menu
    function showMenu() {
        menu.classList.remove('hidden');
        menu.classList.add('visible');
    }

    // Hide the cheat menu
    function hideMenu() {
        menu.classList.add('hiding');
        setTimeout(() => {
            menu.classList.remove('visible');
            menu.classList.add('hidden');
            menu.classList.remove('hiding');
        }, 300); // Match the animation duration
    }

    // Toggle the menu when the button is clicked
    toggleMenuButton.addEventListener('click', () => {
        toggleMenuButton.classList.toggle('rotated'); // Rotate the arrow
        if (menu.classList.contains('visible')) {
            hideMenu();
        } else {
            showMenu();
        }
    });

    // Initialize toggle switch
    const teleportToggleSwitch = document.getElementById('toggleTeleport');
    let isTeleportEnabled = false;

    teleportToggleSwitch.addEventListener('click', function() {
        isTeleportEnabled = !isTeleportEnabled;
        teleportToggleSwitch.classList.toggle('checked', isTeleportEnabled);
    });

    // Initialize Member Panel button
    const memberPanelButton = document.getElementById('memberPanel');
    if (memberPanelButton) {
        memberPanelButton.addEventListener('click', function() {
            if (typeof Swal === 'undefined') {
                console.error('SweetAlert2 not found!');
                return;
            }

            Swal.fire({
                title: 'Member Panel',
                html: `
                    <div style="text-align: left; font-size: 16px;">
                        <label>
                            <input type="checkbox" id="basicToggle" style="transform: scale(1.3); margin-right: 10px;">
                            Basic Member
                        </label><br><br>
                        <label>
                            <input type="checkbox" id="plusToggle" style="transform: scale(1.3); margin-right: 10px;">
                            Plus Membership
                        </label><br><br>
                        <label>
                            <input type="checkbox" id="ultimateToggle" style="transform: scale(1.3); margin-right: 10px;">
                            Ultimate Membership
                        </label>
                    </div>
                `,
                confirmButtonText: 'Close',
                didOpen: () => {
                    const basicToggle = document.getElementById('basicToggle');
                    const plusToggle = document.getElementById('plusToggle');
                    const ultimateToggle = document.getElementById('ultimateToggle');

                    if (!basicToggle || !plusToggle || !ultimateToggle) {
                        console.error('Toggle elements not found!');
                        return;
                    }

                    const user = Boot?.prototype?.game?._state?._current?.user;
                    const player = _?.prodigy?._segment?._activePlayer?._player;

                    if (!user || !player) {
                        Swal.fire('Error', 'User or player object not found.', 'error');
                        return;
                    }

                    // Detect current membership tier
                    let currentTier = 0;
                    try {
                        currentTier = typeof player.getMemberTier === 'function' ? player.getMemberTier() : 0;
                    } catch (e) {
                        currentTier = 0;
                    }

                    // Set toggle states based on current tier
                    basicToggle.checked = currentTier === 101;
                    plusToggle.checked = currentTier === 102;
                    ultimateToggle.checked = currentTier === 103;

                    function resetOthers(exceptId) {
                        ['basicToggle', 'plusToggle', 'ultimateToggle'].forEach(id => {
                            if (id !== exceptId) {
                                const el = document.getElementById(id);
                                if (el.checked) el.checked = false;
                            }
                        });
                    }

                    function applyMembership(tier) {
                        user.source.hasMembership = () => true;
                        user.source.appearanceChanged = true;
                        player.getMemberTier = () => tier;
                        console.log(`Membership tier ${tier} applied.`);
                        
                        // Add success message based on tier
                        let tierName = '';
                        switch(tier) {
                            case 101:
                                tierName = 'Basic';
                                break;
                            case 102:
                                tierName = 'Plus';
                                break;
                            case 103:
                                tierName = 'Ultimate';
                                break;
                        }
                        
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: `${tierName} Membership enabled!`,
                            toast: true,
                            position: 'bottom',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true
                        });
                    }

                    function disableMembership() {
                        user.source.hasMembership = () => false;
                        user.source.appearanceChanged = false;
                        player.getMemberTier = () => 0;
                        console.log('Membership disabled.');
                        
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: 'Membership disabled!',
                            toast: true,
                            position: 'bottom',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true
                        });
                    }

                    function toggleListener(toggle, tier, id) {
                        if (!toggle) return;
                        toggle.addEventListener('change', () => {
                            if (toggle.checked) {
                                resetOthers(id);
                                applyMembership(tier);
                            } else {
                                // Only disable if no others are checked
                                const anyChecked = [basicToggle, plusToggle, ultimateToggle].some(t => t.checked);
                                if (!anyChecked) {
                                    disableMembership();
                                }
                            }
                        });
                    }

                    toggleListener(basicToggle, 101, 'basicToggle');
                    toggleListener(plusToggle, 102, 'plusToggle');
                    toggleListener(ultimateToggle, 103, 'ultimateToggle');
                }
            });
        });
    }
})();
 
