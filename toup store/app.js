// Game Configurations Database
const gamesConfig = {
    shells: {
        name: "Shell Top Up",
        loginLabel: "Garena Username or Email",
        loginPlaceholder: "Enter Garena Username/Email",
        iconClass: "shells-bg",
        currency: "Shells",
        packages: [
            { id: "sh_320", quantity: 320, price: 5.00, bonus: null },
            { id: "sh_640", quantity: 640, price: 10.00, bonus: "32 Bonus" },
            { id: "sh_960", quantity: 960, price: 15.00, bonus: "64 Bonus" },
            { id: "sh_1600", quantity: 1600, price: 25.00, bonus: "160 Bonus" },
            { id: "sh_3200", quantity: 3200, price: 50.00, bonus: "350 Bonus" },
            { id: "sh_24000", quantity: 24000, price: 350.00, bonus: "3000 Bonus" }
        ]
    },
    freefire: {
        name: "Free Fire Diamonds",
        loginLabel: "Free Fire Player ID",
        loginPlaceholder: "Enter Free Fire ID (e.g., 291823791)",
        iconClass: "freefire-bg",
        currency: "Diamonds",
        packages: [
            { id: "ff_100", quantity: 100, price: 0.99, bonus: null },
            { id: "ff_310", quantity: 310, price: 2.99, bonus: "31 Bonus" },
            { id: "ff_520", quantity: 520, price: 4.99, bonus: "52 Bonus" },
            { id: "ff_1060", quantity: 1060, price: 9.99, bonus: "106 Bonus" },
            { id: "ff_2180", quantity: 2180, price: 19.99, bonus: "218 Bonus" },
            { id: "ff_5600", quantity: 5600, price: 49.99, bonus: "600 Bonus" }
        ]
    },
    codm: {
        name: "Call of Duty Mobile CP",
        loginLabel: "CODM OpenID",
        loginPlaceholder: "Enter CODM OpenID",
        iconClass: "codm-bg",
        currency: "CP",
        packages: [
            { id: "cod_80", quantity: 80, price: 0.99, bonus: null },
            { id: "cod_400", quantity: 400, price: 4.99, bonus: "40 Bonus" },
            { id: "cod_800", quantity: 800, price: 9.99, bonus: "80 Bonus" },
            { id: "cod_2000", quantity: 2000, price: 24.99, bonus: "200 Bonus" },
            { id: "cod_4000", quantity: 4000, price: 49.99, bonus: "500 Bonus" },
            { id: "cod_8000", quantity: 8000, price: 99.99, bonus: "1100 Bonus" }
        ]
    },
    delta: {
        name: "Delta Force Gold",
        loginLabel: "Delta Force Account ID",
        loginPlaceholder: "Enter Delta Force ID/Email",
        iconClass: "delta-bg",
        currency: "Gold",
        packages: [
            { id: "df_100", quantity: 100, price: 0.99, bonus: null },
            { id: "df_500", quantity: 500, price: 4.99, bonus: "25 Bonus" },
            { id: "df_1000", quantity: 1000, price: 9.99, bonus: "60 Bonus" },
            { id: "df_2500", quantity: 2500, price: 24.99, bonus: "180 Bonus" },
            { id: "df_5000", quantity: 5000, price: 49.99, bonus: "450 Bonus" },
            { id: "df_10000", quantity: 10000, price: 99.99, bonus: "1000 Bonus" }
        ]
    },
    mlbb: {
        name: "Mobile Legends Diamonds",
        loginLabel: "User ID & Zone ID",
        loginPlaceholder: "UserID (ZoneID) e.g. 12345678 (1234)",
        iconClass: "mlbb-bg",
        currency: "Diamonds",
        packages: [
            { id: "ml_50", quantity: 50, price: 1.00, bonus: "5 Bonus" },
            { id: "ml_250", quantity: 250, price: 5.00, bonus: "25 Bonus" },
            { id: "ml_500", quantity: 500, price: 10.00, bonus: "60 Bonus" },
            { id: "ml_1000", quantity: 1000, price: 20.00, bonus: "130 Bonus" },
            { id: "ml_2500", quantity: 2500, price: 50.00, bonus: "350 Bonus" },
            { id: "ml_5000", quantity: 5000, price: 100.00, bonus: "800 Bonus" }
        ]
    },
    pubg: {
        name: "PUBG Mobile UC",
        loginLabel: "PUBG Character ID",
        loginPlaceholder: "Enter 8-10 digit Character ID",
        iconClass: "pubg-bg",
        currency: "UC",
        packages: [
            { id: "pubg_60", quantity: 60, price: 0.99, bonus: null },
            { id: "pubg_325", quantity: 325, price: 4.99, bonus: "25 Bonus" },
            { id: "pubg_660", quantity: 660, price: 9.99, bonus: "60 Bonus" },
            { id: "pubg_1800", quantity: 1800, price: 24.99, bonus: "200 Bonus" },
            { id: "pubg_3850", quantity: 3850, price: 49.99, bonus: "450 Bonus" },
            { id: "pubg_8100", quantity: 8100, price: 99.99, bonus: "1000 Bonus" }
        ]
    },
    undawn: {
        name: "Garena Undawn RC",
        loginLabel: "Undawn Player ID",
        loginPlaceholder: "Enter Player ID",
        iconClass: "undawn-bg",
        currency: "RC",
        packages: [
            { id: "ud_100", quantity: 100, price: 0.99, bonus: null },
            { id: "ud_500", quantity: 500, price: 4.99, bonus: "20 Bonus" },
            { id: "ud_1000", quantity: 1000, price: 9.99, bonus: "50 Bonus" },
            { id: "ud_2500", quantity: 2500, price: 24.99, bonus: "150 Bonus" },
            { id: "ud_5000", quantity: 5000, price: 49.99, bonus: "400 Bonus" },
            { id: "ud_10000", quantity: 10000, price: 99.99, bonus: "900 Bonus" }
        ]
    },
    valorant: {
        name: "VALORANT Points",
        loginLabel: "Riot ID & Tagline",
        loginPlaceholder: "username#tag (e.g., XAnimal#EUW)",
        iconClass: "valorant-bg",
        currency: "VP",
        packages: [
            { id: "val_475", quantity: 475, price: 4.99, bonus: null },
            { id: "val_1000", quantity: 1000, price: 9.99, bonus: "50 Bonus" },
            { id: "val_2050", quantity: 2050, price: 19.99, bonus: "120 Bonus" },
            { id: "val_3650", quantity: 3650, price: 34.99, bonus: "250 Bonus" },
            { id: "val_5350", quantity: 5350, price: 49.99, bonus: "450 Bonus" },
            { id: "val_11000", quantity: 11000, price: 99.99, bonus: "1000 Bonus" }
        ]
    }
};

// Payment Gateways
const paymentsConfig = [
    { id: "paypal", name: "Paypal", tag: "", icon: "🔷", type: "qr" },
    { id: "card", name: "Credit/Debit Card", tag: "POPULAR", icon: "💳", type: "cc" },
    { id: "crypto", name: "Bitcoin/Crypto", tag: "+2% Bonus", icon: "🪙", type: "crypto" }
];

// App State
let state = {
    selectedGame: "shells",
    selectedPackage: null,
    selectedPayment: null,
    isVerified: false,
    verifiedUsername: "",
    discountPercent: 0,
    qrTimerInterval: null
};

// DOM Elements
const gameCards = document.querySelectorAll(".game-card");
const bannerTitle = document.getElementById("bannerTitle");
const bannerIcon = document.getElementById("bannerIcon");
const bannerIconContainer = document.querySelector(".banner-icon-container");
const loginLabel = document.querySelector("#step-login h3");
const userInput = document.getElementById("userInput");
const btnVerify = document.getElementById("btnVerify");
const inputFeedback = document.getElementById("inputFeedback");
const packagesGrid = document.getElementById("packagesGrid");
const paymentsGrid = document.getElementById("paymentsGrid");
const summaryGame = document.getElementById("summaryGame");
const summaryPackage = document.getElementById("summaryPackage");
const summaryPayment = document.getElementById("summaryPayment");
const summaryTotal = document.getElementById("summaryTotal");
const btnCheckout = document.getElementById("btnCheckout");

// Tab Elements
const tabBtns = document.querySelectorAll(".tab-btn");
const purchaseTab = document.getElementById("purchaseTab");
const redeemTab = document.getElementById("redeemTab");
const voucherInput = document.getElementById("voucherInput");
const btnRedeem = document.getElementById("btnRedeem");
const voucherFeedback = document.getElementById("voucherFeedback");

// Modal Elements
const paymentModal = document.getElementById("paymentModal");
const btnModalClose = document.getElementById("btnModalClose");
const viewProcessing = document.getElementById("viewProcessing");
const viewCheckoutForm = document.getElementById("viewCheckoutForm");
const viewSuccess = document.getElementById("viewSuccess");
const checkoutModalTitle = document.getElementById("checkoutModalTitle");
const modalOrderRef = document.getElementById("modalOrderRef");
const modalDueVal = document.getElementById("modalDueVal");

// Payment Form Details elements
const cardDetailsForm = document.getElementById("cardDetailsForm");
const qrDetailsForm = document.getElementById("qrDetailsForm");
const cryptoDetailsForm = document.getElementById("cryptoDetailsForm");

// Card inputs and mock-card elements
const ccName = document.getElementById("ccName");
const ccNum = document.getElementById("ccNum");
const ccExp = document.getElementById("ccExp");
const ccCvc = document.getElementById("ccCvc");
const cardNumDisp = document.getElementById("cardNumDisp");
const cardHolderDisp = document.getElementById("cardHolderDisp");
const cardExpiryDisp = document.getElementById("cardExpiryDisp");
const btnPayNow = document.getElementById("btnPayNow");

// QR code scanner elements
const qrTimer = document.getElementById("qrTimer");
const btnQrPaid = document.getElementById("btnQrPaid");

// Crypto elements
const btnCopyAddress = document.getElementById("btnCopyAddress");
const cryptoAddress = document.getElementById("cryptoAddress");
const cryptoCopied = document.getElementById("cryptoCopied");
const btnCryptoPaid = document.getElementById("btnCryptoPaid");

// Success Screen elements
const recReceiptId = document.getElementById("recReceiptId");
const recAccount = document.getElementById("recAccount");
const recItem = document.getElementById("recItem");
const recPayment = document.getElementById("recPayment");
const recTotal = document.getElementById("recTotal");
const btnPaymentDone = document.getElementById("btnPaymentDone");

// Initial Setup
document.addEventListener("DOMContentLoaded", () => {
    switchGame("shells");
    renderPayments();
});

// Switch Game logic
function switchGame(gameId) {
    const config = gamesConfig[gameId];
    if (!config) return;

    state.selectedGame = gameId;
    state.selectedPackage = null;
    state.isVerified = false;
    state.verifiedUsername = "";
    
    // Update active game card styles
    gameCards.forEach(card => {
        if (card.dataset.game === gameId) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }
    });

    // Update banner details
    bannerTitle.textContent = config.name;
    
    // Copy the active game's icon HTML into the banner icon
    const activeCardIcon = document.querySelector(`.game-card[data-game="${gameId}"] .game-image`).innerHTML;
    bannerIconContainer.innerHTML = activeCardIcon;

    // Apply black background override for VALORANT to ensure visibility
    if (gameId === "valorant") {
        bannerIconContainer.style.backgroundColor = "#000000";
    } else {
        bannerIconContainer.style.backgroundColor = "";
    }

    // Reset login section
    userInput.value = "";
    userInput.placeholder = config.loginPlaceholder;
    btnVerify.textContent = "Verify";
    btnVerify.className = "btn-verify";
    inputFeedback.className = "input-feedback";
    inputFeedback.textContent = "";

    // Render new Packages
    renderPackages(gameId);

    // Update Checkout Summary
    summaryGame.textContent = config.name;
    updateCheckoutSummary();
}

// Render Packages
function renderPackages(gameId) {
    const config = gamesConfig[gameId];
    packagesGrid.innerHTML = "";

    config.packages.forEach(pkg => {
        const card = document.createElement("div");
        card.className = "package-card";
        card.dataset.id = pkg.id;

        // Custom SVG based on currency type (Shells, Diamonds, CP, etc)
        let iconMarkup = "";
        if (config.currency === "Shells") {
            iconMarkup = `<img src="shell.png" alt="Shell" style="width: 20px; height: 20px; object-fit: contain; vertical-align: middle;">`;
        } else if (config.currency === "Diamonds") {
            iconMarkup = `<svg viewBox="0 0 64 64" width="20" height="20" fill="currentColor"><polygon points="32 6 56 22 47 54 17 54 8 22"/></svg>`;
        } else {
            // General Game Coin Icon
            iconMarkup = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>`;
        }

        const bonusBadge = pkg.bonus ? `<span class="package-bonus">${pkg.bonus}</span>` : "";

        card.innerHTML = `
            <div class="package-val-row">
                <span class="package-icon">${iconMarkup}</span>
                <span class="package-quantity">${pkg.quantity.toLocaleString()}</span>
            </div>
            <span class="package-price">$${pkg.price.toFixed(2)}</span>
            ${bonusBadge}
        `;

        card.addEventListener("click", () => {
            selectPackage(pkg);
        });

        packagesGrid.appendChild(card);
    });
}

// Select Package
function selectPackage(pkg) {
    state.selectedPackage = pkg;
    
    document.querySelectorAll(".package-card").forEach(card => {
        if (card.dataset.id === pkg.id) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }
    });

    updateCheckoutSummary();
}

// Render Payments
function renderPayments() {
    paymentsGrid.innerHTML = "";

    paymentsConfig.forEach(pay => {
        const card = document.createElement("div");
        card.className = "payment-card";
        card.dataset.id = pay.id;

        const tagMarkup = pay.tag ? `<span class="payment-tag">${pay.tag}</span>` : "";

        card.innerHTML = `
            <div class="payment-meta">
                <div class="payment-logo">${pay.icon}</div>
                <div>
                    <div class="payment-title">${pay.name}</div>
                </div>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem">
                ${tagMarkup}
                <div class="payment-radio"></div>
            </div>
        `;

        card.addEventListener("click", () => {
            selectPayment(pay);
        });

        paymentsGrid.appendChild(card);
    });
}

// Select Payment
function selectPayment(pay) {
    state.selectedPayment = pay;

    document.querySelectorAll(".payment-card").forEach(card => {
        if (card.dataset.id === pay.id) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }
    });

    updateCheckoutSummary();
}

// Update Checkout Summary Section
function updateCheckoutSummary() {
    const config = gamesConfig[state.selectedGame];

    // Summary Package Val
    if (state.selectedPackage) {
        summaryPackage.textContent = `${state.selectedPackage.quantity.toLocaleString()} ${config.currency}`;
    } else {
        summaryPackage.textContent = "Select Package";
    }

    // Summary Payment Val
    if (state.selectedPayment) {
        summaryPayment.textContent = state.selectedPayment.name;
    } else {
        summaryPayment.textContent = "Select Payment";
    }

    // Cost calculations & discount
    if (state.selectedPackage) {
        let cost = state.selectedPackage.price;
        if (state.discountPercent > 0) {
            cost = cost * (1 - state.discountPercent / 100);
        }
        summaryTotal.textContent = `$${cost.toFixed(2)}`;
    } else {
        summaryTotal.textContent = "$0.00";
    }

    // Enable/Disable Checkout Button
    // Requirement: Verified login, package chosen, payment chosen
    if (state.isVerified && state.selectedPackage && state.selectedPayment) {
        btnCheckout.removeAttribute("disabled");
    } else {
        btnCheckout.setAttribute("disabled", "true");
    }
}

// Game selection clicks
gameCards.forEach(card => {
    card.addEventListener("click", () => {
        switchGame(card.dataset.game);
    });
});

// Tab changes (Step 2)
tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        if (btn.dataset.tab === "purchase") {
            purchaseTab.classList.remove("hidden");
            redeemTab.classList.add("hidden");
        } else {
            purchaseTab.classList.add("hidden");
            redeemTab.classList.remove("hidden");
        }
    });
});

// Login Verification simulator
btnVerify.addEventListener("click", () => {
    const val = userInput.value.trim();
    if (!val) {
        showFeedback(false, "Please enter a valid game account ID.");
        return;
    }

    // Simulation Loading
    btnVerify.textContent = "Verifying...";
    btnVerify.setAttribute("disabled", "true");
    userInput.setAttribute("disabled", "true");
    showFeedback(false, ""); // Clear feedback

    setTimeout(() => {
        state.isVerified = true;
        state.verifiedUsername = val;
        
        btnVerify.removeAttribute("disabled");
        userInput.removeAttribute("disabled");
        btnVerify.textContent = "Verified";
        btnVerify.classList.add("verified");

        showFeedback(true, `Account confirmed! Welcome, ${val}`);
        updateCheckoutSummary();
    }, 1200);
});

userInput.addEventListener("input", () => {
    // Reset verify state if user types new things
    if (state.isVerified) {
        state.isVerified = false;
        state.verifiedUsername = "";
        btnVerify.textContent = "Verify";
        btnVerify.classList.remove("verified");
        showFeedback(false, "");
        updateCheckoutSummary();
    }
});

function showFeedback(isSuccess, message) {
    if (!message) {
        inputFeedback.style.display = "none";
        return;
    }
    inputFeedback.className = `input-feedback ${isSuccess ? 'success' : 'error'}`;
    inputFeedback.textContent = isSuccess ? `✔ ${message}` : `✖ ${message}`;
}

// Voucher Redeeming
btnRedeem.addEventListener("click", () => {
    const code = voucherInput.value.trim().toUpperCase();
    
    if (!code) {
        showVoucherFeedback(false, "Please enter a voucher code.");
        return;
    }

    // Mock voucher evaluations
    if (code === "HICCUP") {
        state.discountPercent = 10;
        showVoucherFeedback(true, "Voucher code 'HICCUP' applied! 10% Discount!");
    } else if (code === "XANIMAL") {
        state.discountPercent = 20;
        showVoucherFeedback(true, "Voucher code 'XANIMAL' applied! 20% Discount!");
    } else if (code === "FREE") {
        state.discountPercent = 100;
        showVoucherFeedback(true, "Super voucher 'FREE' applied! 100% Free top-up!");
    } else {
        state.discountPercent = 0;
        showVoucherFeedback(false, "Invalid Voucher Code.");
    }
    updateCheckoutSummary();
});

function showVoucherFeedback(isSuccess, msg) {
    voucherFeedback.className = `voucher-feedback ${isSuccess ? 'success' : 'error'}`;
    voucherFeedback.style.color = isSuccess ? "#10b981" : "#ff2a4b";
    voucherFeedback.textContent = isSuccess ? `✔ ${msg}` : `✖ ${msg}`;
}

// Checkout Button Click
btnCheckout.addEventListener("click", () => {
    if (btnCheckout.hasAttribute("disabled")) return;

    // Show modal, run loading animation
    paymentModal.classList.add("active");
    viewProcessing.classList.add("active");
    viewCheckoutForm.classList.remove("active");
    viewSuccess.classList.remove("active");

    // Hide forms initially
    cardDetailsForm.classList.add("hidden");
    qrDetailsForm.classList.add("hidden");
    cryptoDetailsForm.classList.add("hidden");

    // Set order reference details
    const randomOrder = `#HS-${Math.floor(100000 + Math.random() * 900000)}`;
    modalOrderRef.textContent = randomOrder;

    let cost = state.selectedPackage.price;
    if (state.discountPercent > 0) {
        cost = cost * (1 - state.discountPercent / 100);
    }
    modalDueVal.textContent = `$${cost.toFixed(2)}`;

    setTimeout(() => {
        // Change from loader to checkout form view
        viewProcessing.classList.remove("active");
        viewCheckoutForm.classList.add("active");

        // Open specific form depending on payment selection
        const payType = state.selectedPayment.type;
        checkoutModalTitle.textContent = `Pay with ${state.selectedPayment.name}`;

        if (payType === "cc") {
            cardDetailsForm.classList.remove("hidden");
            resetCreditCardMock();
        } else if (payType === "crypto") {
            cryptoDetailsForm.classList.remove("hidden");
            // Set dummy crypto address
            cryptoAddress.textContent = "0x" + Array.from({length: 40}, () => Math.floor(Math.random()*16).toString(16)).join("");
            cryptoCopied.classList.add("hidden");
        } else {
            qrDetailsForm.classList.remove("hidden");
            startQrTimer();
        }
    }, 1500);
});

// Modal close button
btnModalClose.addEventListener("click", () => {
    closeModal();
});

function closeModal() {
    paymentModal.classList.remove("active");
    clearInterval(state.qrTimerInterval);
}

// Format Credit Card input interactions
ccName.addEventListener("input", (e) => {
    const val = e.target.value;
    cardHolderDisp.textContent = val ? val.toUpperCase() : "YOUR NAME";
});

ccNum.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let matches = val.match(/\d{4,16}/g);
    let match = matches && matches[0] || '';
    let parts = [];

    for (let i=0, len=match.length; i<len; i+=4) {
        parts.push(match.substring(i, i+4));
    }

    if (parts.length > 0) {
        e.target.value = parts.join(' ');
        cardNumDisp.textContent = parts.join(' ');
    } else {
        e.target.value = val;
        cardNumDisp.textContent = val ? val : "•••• •••• •••• ••••";
    }
});

ccExp.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (val.length >= 2) {
        val = val.substring(0,2) + '/' + val.substring(2,4);
    }
    e.target.value = val;
    cardExpiryDisp.textContent = val ? val : "MM/YY";
});

function resetCreditCardMock() {
    ccName.value = "";
    ccNum.value = "";
    ccExp.value = "";
    ccCvc.value = "";
    cardNumDisp.textContent = "•••• •••• •••• ••••";
    cardHolderDisp.textContent = "YOUR NAME";
    cardExpiryDisp.textContent = "MM/YY";
}

// QR Countdown Timer
function startQrTimer() {
    clearInterval(state.qrTimerInterval);
    let secondsLeft = 300; // 5 minutes

    const tick = () => {
        let mins = Math.floor(secondsLeft / 60);
        let secs = secondsLeft % 60;
        qrTimer.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        if (secondsLeft <= 0) {
            clearInterval(state.qrTimerInterval);
            qrTimer.textContent = "EXPIRED";
        }
        secondsLeft--;
    };

    tick();
    state.qrTimerInterval = setInterval(tick, 1000);
}

// Copy Crypto Address
btnCopyAddress.addEventListener("click", () => {
    navigator.clipboard.writeText(cryptoAddress.textContent).then(() => {
        cryptoCopied.classList.remove("hidden");
        setTimeout(() => {
            cryptoCopied.classList.add("hidden");
        }, 2000);
    });
});

// Finalize payment & trigger receipt screen
btnPayNow.addEventListener("click", (e) => {
    if (ccName.value.trim() && ccNum.value.trim() && ccExp.value.trim() && ccCvc.value.trim()) {
        e.preventDefault();
        processFinalPayment();
    }
});

btnQrPaid.addEventListener("click", () => {
    processFinalPayment();
});

btnCryptoPaid.addEventListener("click", () => {
    processFinalPayment();
});

function processFinalPayment() {
    clearInterval(state.qrTimerInterval);
    
    // Switch to Connection Processing screen
    viewCheckoutForm.classList.remove("active");
    viewProcessing.classList.add("active");
    
    const processingText = document.querySelector("#viewProcessing h3");
    const processingPara = document.querySelector("#viewProcessing p");
    processingText.textContent = "Verifying Transaction...";
    processingPara.textContent = "We are matching payment logs with the server. Please wait.";

    setTimeout(() => {
        // Switch to receipt page
        viewProcessing.classList.remove("active");
        viewSuccess.classList.add("active");

        // Populating receipt details
        const config = gamesConfig[state.selectedGame];
        let cost = state.selectedPackage.price;
        if (state.discountPercent > 0) {
            cost = cost * (1 - state.discountPercent / 100);
        }

        recReceiptId.textContent = modalOrderRef.textContent;
        recAccount.textContent = state.verifiedUsername;
        recItem.textContent = `${state.selectedPackage.quantity.toLocaleString()} ${config.currency}`;
        recPayment.textContent = state.selectedPayment.name;
        recTotal.textContent = `$${cost.toFixed(2)}`;
    }, 2000);
}

// Receipt Completed: close modal and reset selections
btnPaymentDone.addEventListener("click", () => {
    closeModal();
    // Complete reset of game topup elements
    switchGame(state.selectedGame);
});
