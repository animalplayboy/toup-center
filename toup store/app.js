// Game Configurations Database
const gamesConfig = {
    shells: {
        name: "Shell Top Up",
        loginLabel: "Garena Username or Email",
        loginPlaceholder: "Enter Garena Username/Email",
        iconClass: "shells-bg",
        currency: "Shells",
        packages: [
            { id: "sh_320", quantity: 320, price: 1500, bonus: null },
            { id: "sh_640", quantity: 640, price: 3000, bonus: "32 Bonus" },
            { id: "sh_960", quantity: 960, price: 4500, bonus: "64 Bonus" },
            { id: "sh_1600", quantity: 1600, price: 7500, bonus: "160 Bonus" },
            { id: "sh_3200", quantity: 3200, price: 15000, bonus: "350 Bonus" },
            { id: "sh_24000", quantity: 24000, price: 105000, bonus: "3000 Bonus" }
        ]
    },
    freefire: {
        name: "Free Fire Diamonds",
        loginLabel: "Free Fire Player ID",
        loginPlaceholder: "Enter Free Fire ID (e.g., 291823791)",
        iconClass: "freefire-bg",
        currency: "Diamonds",
        packages: [
            { id: "ff_100", quantity: 100, price: 300, bonus: null },
            { id: "ff_310", quantity: 310, price: 900, bonus: "31 Bonus" },
            { id: "ff_520", quantity: 520, price: 1500, bonus: "52 Bonus" },
            { id: "ff_1060", quantity: 1060, price: 3000, bonus: "106 Bonus" },
            { id: "ff_2180", quantity: 2180, price: 6000, bonus: "218 Bonus" },
            { id: "ff_5600", quantity: 5600, price: 15000, bonus: "600 Bonus" }
        ],
        specialDeals: [
            { id: "ff_deal_1", title: "Weekly Membership", price: 500, image: "deals/weekly-membership.png" },
            { id: "ff_deal_2", title: "Monthly Membership", price: 1800, image: "deals/monthly-membership.png" },
            { id: "ff_deal_3", title: "Weekly Lite", price: 300, image: "deals/weekly-lite.png" },
            { id: "ff_deal_4", title: "Evo Access 3D", price: 400, image: "deals/evo-access-3d.png" },
            { id: "ff_deal_6", title: "Evo Access 30D", price: 2500, image: "deals/evo-access-30d.png" }
        ]
    },
    codm: {
        name: "Call of Duty Mobile CP",
        loginLabel: "CODM OpenID",
        loginPlaceholder: "Enter CODM OpenID",
        iconClass: "codm-bg",
        currency: "CP",
        packages: [
            { id: "cod_80", quantity: 80, price: 300, bonus: null },
            { id: "cod_400", quantity: 400, price: 1500, bonus: "40 Bonus" },
            { id: "cod_800", quantity: 800, price: 3000, bonus: "80 Bonus" },
            { id: "cod_2000", quantity: 2000, price: 7500, bonus: "200 Bonus" },
            { id: "cod_4000", quantity: 4000, price: 15000, bonus: "500 Bonus" },
            { id: "cod_8000", quantity: 8000, price: 30000, bonus: "1100 Bonus" }
        ]
    },
    delta: {
        name: "Delta Force Gold",
        loginLabel: "Delta Force Account ID",
        loginPlaceholder: "Enter Delta Force ID/Email",
        iconClass: "delta-bg",
        currency: "Gold",
        packages: [
            { id: "df_100", quantity: 100, price: 300, bonus: null },
            { id: "df_500", quantity: 500, price: 1500, bonus: "25 Bonus" },
            { id: "df_1000", quantity: 1000, price: 3000, bonus: "60 Bonus" },
            { id: "df_2500", quantity: 2500, price: 7500, bonus: "180 Bonus" },
            { id: "df_5000", quantity: 5000, price: 15000, bonus: "450 Bonus" },
            { id: "df_10000", quantity: 10000, price: 30000, bonus: "1000 Bonus" }
        ]
    },
    mlbb: {
        name: "Mobile Legends Diamonds",
        loginLabel: "User ID & Zone ID",
        loginPlaceholder: "UserID (ZoneID) e.g. 12345678 (1234)",
        iconClass: "mlbb-bg",
        currency: "Diamonds",
        packages: [
            { id: "ml_50", quantity: 50, price: 300, bonus: "5 Bonus" },
            { id: "ml_250", quantity: 250, price: 1500, bonus: "25 Bonus" },
            { id: "ml_500", quantity: 500, price: 3000, bonus: "60 Bonus" },
            { id: "ml_1000", quantity: 1000, price: 6000, bonus: "130 Bonus" },
            { id: "ml_2500", quantity: 2500, price: 15000, bonus: "350 Bonus" },
            { id: "ml_5000", quantity: 5000, price: 30000, bonus: "800 Bonus" }
        ]
    },
    pubg: {
        name: "PUBG Mobile UC",
        loginLabel: "PUBG Character ID",
        loginPlaceholder: "Enter 8-10 digit Character ID",
        iconClass: "pubg-bg",
        currency: "UC",
        packages: [
            { id: "pubg_60", quantity: 60, price: 300, bonus: null },
            { id: "pubg_325", quantity: 325, price: 1500, bonus: "25 Bonus" },
            { id: "pubg_660", quantity: 660, price: 3000, bonus: "60 Bonus" },
            { id: "pubg_1800", quantity: 1800, price: 7500, bonus: "200 Bonus" },
            { id: "pubg_3850", quantity: 3850, price: 15000, bonus: "450 Bonus" },
            { id: "pubg_8100", quantity: 8100, price: 30000, bonus: "1000 Bonus" }
        ]
    },
    undawn: {
        name: "Garena Undawn RC",
        loginLabel: "Undawn Player ID",
        loginPlaceholder: "Enter Player ID",
        iconClass: "undawn-bg",
        currency: "RC",
        packages: [
            { id: "ud_100", quantity: 100, price: 300, bonus: null },
            { id: "ud_500", quantity: 500, price: 1500, bonus: "20 Bonus" },
            { id: "ud_1000", quantity: 1000, price: 3000, bonus: "50 Bonus" },
            { id: "ud_2500", quantity: 2500, price: 7500, bonus: "150 Bonus" },
            { id: "ud_5000", quantity: 5000, price: 15000, bonus: "400 Bonus" },
            { id: "ud_10000", quantity: 10000, price: 30000, bonus: "900 Bonus" }
        ]
    },
    valorant: {
        name: "VALORANT Points",
        loginLabel: "Riot ID & Tagline",
        loginPlaceholder: "username#tag (e.g., XAnimal#EUW)",
        iconClass: "valorant-bg",
        currency: "VP",
        packages: [
            { id: "val_475", quantity: 475, price: 1500, bonus: null },
            { id: "val_1000", quantity: 1000, price: 3000, bonus: "50 Bonus" },
            { id: "val_2050", quantity: 2050, price: 6000, bonus: "120 Bonus" },
            { id: "val_3650", quantity: 3650, price: 10500, bonus: "250 Bonus" },
            { id: "val_5350", quantity: 5350, price: 15000, bonus: "450 Bonus" },
            { id: "val_11000", quantity: 11000, price: 30000, bonus: "1000 Bonus" }
        ]
    }
};

// Payment Gateways
const paymentsConfig = [
    { id: "paypal", name: "Paypal", tag: "", icon: `<img src="paypal.png" alt="Paypal" style="width: 100%; height: 100%; object-fit: contain; border-radius: 6px;">`, type: "qr" },
    {
        id: "card",
        name: "Credit/Debit Card",
        tag: "POPULAR",
        icon: `<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--primary-red)"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>`,
        type: "cc"
    },
    { id: "crypto", name: "Bitcoin/Crypto", tag: "+2% Bonus", icon: `<img src="Bitcoin.png" alt="Bitcoin/Crypto" style="width: 100%; height: 100%; object-fit: contain; border-radius: 6px;">`, type: "crypto" }
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

    // Apply custom background image for selected games
    const gameBanner = document.getElementById("gameBanner");
    if (gameId === "shells") {
        gameBanner.style.backgroundColor = "#e6221c";
        gameBanner.style.backgroundImage = "linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%), url('shell-bg.jpg')";
        gameBanner.style.backgroundSize = "cover";
        gameBanner.style.backgroundPosition = "center";
    } else if (gameId === "freefire") {
        gameBanner.style.backgroundColor = "#0b0b0b";
        gameBanner.style.backgroundImage = "linear-gradient(to right, #0b0b0b 0%, rgba(11, 11, 11, 0.9) 25%, rgba(11, 11, 11, 0) 50%), url('ff-bg.jpg')";
        gameBanner.style.backgroundSize = "65% auto";
        gameBanner.style.backgroundPosition = "right 10%";
        gameBanner.style.backgroundRepeat = "no-repeat";
    } else if (gameId === "mlbb") {
        gameBanner.style.backgroundColor = "#0b0b0b";
        gameBanner.style.backgroundImage = "linear-gradient(to right, #0b0b0b 0%, rgba(11, 11, 11, 0.9) 25%, rgba(11, 11, 11, 0) 50%), url('ml-bg.jpg')";
        gameBanner.style.backgroundSize = "65% auto";
        gameBanner.style.backgroundPosition = "right center";
        gameBanner.style.backgroundRepeat = "no-repeat";
    } else if (gameId === "pubg") {
        gameBanner.style.backgroundColor = "#0b0b0b";
        gameBanner.style.backgroundImage = "linear-gradient(to right, #0b0b0b 0%, rgba(11, 11, 11, 0.9) 25%, rgba(11, 11, 11, 0) 50%), url('pubg-bg.jpg')";
        gameBanner.style.backgroundSize = "65% auto";
        gameBanner.style.backgroundPosition = "right 35%";
        gameBanner.style.backgroundRepeat = "no-repeat";
    } else {
        gameBanner.style.backgroundImage = "";
        gameBanner.style.backgroundSize = "";
        gameBanner.style.backgroundPosition = "";
        gameBanner.style.backgroundColor = "";
        gameBanner.style.backgroundRepeat = "";
    }

    // Reset login section
    userInput.value = "";
    userInput.placeholder = config.loginPlaceholder;
    btnVerify.textContent = "Login";
    btnVerify.className = "ff-btn-login";
    inputFeedback.className = "ff-login-feedback";
    inputFeedback.textContent = "";

    // Update login label in the default layout
    const defaultLoginLabel = document.getElementById("defaultLoginLabel");
    if (defaultLoginLabel) {
        defaultLoginLabel.innerHTML = config.loginLabel + ' <span class="help-icon">?</span>';
    }

    // Toggle Custom Layouts vs Default Layout
    const defaultLayout = document.getElementById("defaultLayout");
    const freefireLayout = document.getElementById("freefireLayout");

    if (gameId === "freefire") {
        defaultLayout.classList.add("hidden");
        freefireLayout.classList.remove("hidden");

        // Render Free Fire specific components
        renderFFPackages();
        renderFFDeals();
        renderFFPayments();
    } else {
        defaultLayout.classList.remove("hidden");
        freefireLayout.classList.add("hidden");

        // Render standard packages and payments
        renderPackages(gameId);
        renderPayments();
    }

    // Update Checkout Summary
    summaryGame.textContent = config.name;
    updateCheckoutSummary();
}

// Render Free Fire Packages
function renderFFPackages() {
    const config = gamesConfig.freefire;
    const ffPackagesGrid = document.getElementById("ffPackagesGrid");
    ffPackagesGrid.innerHTML = "";

    config.packages.forEach(pkg => {
        const card = document.createElement("div");
        card.className = "ff-package-card";
        card.dataset.id = pkg.id;

        // Custom diamond icon
        const iconMarkup = `<img src="gem.png" alt="Diamond" style="width: 22px; height: 22px; object-fit: contain; margin-bottom: 2px;">`;

        card.innerHTML = `
            <div class="ff-pkg-top">
                ${iconMarkup}
                <span class="ff-pkg-qty">${pkg.quantity.toLocaleString()}</span>
            </div>
            <span class="ff-pkg-price">LKR ${pkg.price.toLocaleString()}</span>
            <div class="ff-qty-row">
                <button class="ff-qty-btn" data-action="minus">−</button>
                <span class="ff-qty-val">1</span>
                <button class="ff-qty-btn" data-action="plus">+</button>
            </div>
        `;

        // Quantity buttons
        const minusBtn = card.querySelector('[data-action="minus"]');
        const plusBtn = card.querySelector('[data-action="plus"]');
        const qtyVal = card.querySelector('.ff-qty-val');
        const priceEl = card.querySelector('.ff-pkg-price');
        let qty = 1;

        minusBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (qty > 1) {
                qty--;
                qtyVal.textContent = qty;
                priceEl.textContent = `LKR ${(pkg.price * qty).toLocaleString()}`;
                if (state.selectedPackage && state.selectedPackage.id === pkg.id) {
                    state.selectedPackage = { ...pkg, price: pkg.price * qty, qty };
                    updateCheckoutSummary();
                }
            }
        });

        plusBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            qty++;
            qtyVal.textContent = qty;
            priceEl.textContent = `LKR ${(pkg.price * qty).toLocaleString()}`;
            if (state.selectedPackage && state.selectedPackage.id === pkg.id) {
                state.selectedPackage = { ...pkg, price: pkg.price * qty, qty };
                updateCheckoutSummary();
            }
        });

        card.addEventListener("click", (e) => {
            if (e.target.closest('.ff-qty-btn')) return;
            state.selectedPackage = { ...pkg, price: pkg.price * qty, qty };
            selectPackage(state.selectedPackage);
            document.querySelectorAll("#ffPackagesGrid .ff-package-card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });

        ffPackagesGrid.appendChild(card);
    });
}

// Render Free Fire Special Deals
function renderFFDeals() {
    const config = gamesConfig.freefire;
    const ffDealsGrid = document.getElementById("ffDealsGrid");
    ffDealsGrid.innerHTML = "";

    if (!config.specialDeals) return;

    config.specialDeals.forEach(deal => {
        const card = document.createElement("div");
        card.className = "ff-deal-card";
        card.dataset.id = deal.id;

        const imgContent = deal.image
            ? `<img src="${deal.image}" alt="${deal.title}" style="width:100%; height:100%; object-fit:cover;">`
            : `Placeholder Image`;

        card.innerHTML = `
            <div class="ff-deal-img">${imgContent}</div>
            <div class="ff-deal-info">
                <div class="ff-deal-title">${deal.title}</div>
                <div class="ff-deal-price">LKR ${deal.price.toLocaleString()}</div>
                <div class="ff-qty-row">
                    <button class="ff-qty-btn" data-action="minus">−</button>
                    <span class="ff-qty-val">1</span>
                    <button class="ff-qty-btn" data-action="plus">+</button>
                </div>
            </div>
        `;

        // Quantity buttons
        const minusBtn = card.querySelector('[data-action="minus"]');
        const plusBtn = card.querySelector('[data-action="plus"]');
        const qtyVal = card.querySelector('.ff-qty-val');
        const priceEl = card.querySelector('.ff-deal-price');
        let qty = 1;

        minusBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (qty > 1) {
                qty--;
                qtyVal.textContent = qty;
                priceEl.textContent = `LKR ${(deal.price * qty).toLocaleString()}`;
                if (state.selectedPackage && state.selectedPackage.id === deal.id) {
                    state.selectedPackage = { id: deal.id, quantity: qty, price: deal.price * qty, title: deal.title };
                    updateCheckoutSummary();
                }
            }
        });

        plusBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            qty++;
            qtyVal.textContent = qty;
            priceEl.textContent = `LKR ${(deal.price * qty).toLocaleString()}`;
            if (state.selectedPackage && state.selectedPackage.id === deal.id) {
                state.selectedPackage = { id: deal.id, quantity: qty, price: deal.price * qty, title: deal.title };
                updateCheckoutSummary();
            }
        });

        card.addEventListener("click", (e) => {
            if (e.target.closest('.ff-qty-btn')) return;
            selectPackage({ id: deal.id, quantity: qty, price: deal.price * qty, title: deal.title });

            document.querySelectorAll(".ff-deal-card").forEach(c => c.style.borderColor = "#eee");
            card.style.borderColor = "#00b0ff";
        });

        ffDealsGrid.appendChild(card);
    });
}

// Render Free Fire Payments (reuses standard payment logic)
function renderFFPayments() {
    const ffPaymentsGrid = document.getElementById("ffPaymentsGrid");
    ffPaymentsGrid.innerHTML = "";

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
            <div class="payment-radio"></div>
            ${tagMarkup}
        `;

        card.addEventListener("click", () => {
            selectPayment(pay);
            document.querySelectorAll("#ffPaymentsGrid .payment-card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");
        });

        ffPaymentsGrid.appendChild(card);
    });
}

// Render Packages
function renderPackages(gameId) {
    const config = gamesConfig[gameId];
    packagesGrid.innerHTML = "";

    config.packages.forEach(pkg => {
        const card = document.createElement("div");
        card.className = "ff-package-card";
        card.dataset.id = pkg.id;

        // Generic gold plus icon for non-freefire games
        const iconMarkup = `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#f5a623" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>`;

        card.innerHTML = `
            <div class="ff-pkg-top">
                ${iconMarkup}
                <span class="ff-pkg-qty">${pkg.quantity.toLocaleString()}</span>
            </div>
            <span class="ff-pkg-price">LKR ${pkg.price.toLocaleString()}</span>
            <div class="ff-qty-row">
                <button class="ff-qty-btn" data-action="minus">−</button>
                <span class="ff-qty-val">1</span>
                <button class="ff-qty-btn" data-action="plus">+</button>
            </div>
        `;

        // Quantity buttons
        const minusBtn = card.querySelector('[data-action="minus"]');
        const plusBtn = card.querySelector('[data-action="plus"]');
        const qtyVal = card.querySelector('.ff-qty-val');
        const priceEl = card.querySelector('.ff-pkg-price');
        let qty = 1;

        minusBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (qty > 1) {
                qty--;
                qtyVal.textContent = qty;
                priceEl.textContent = `LKR ${(pkg.price * qty).toLocaleString()}`;
                if (state.selectedPackage && state.selectedPackage.id === pkg.id) {
                    state.selectedPackage = { ...pkg, price: pkg.price * qty, qty };
                    updateCheckoutSummary();
                }
            }
        });

        plusBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            qty++;
            qtyVal.textContent = qty;
            priceEl.textContent = `LKR ${(pkg.price * qty).toLocaleString()}`;
            if (state.selectedPackage && state.selectedPackage.id === pkg.id) {
                state.selectedPackage = { ...pkg, price: pkg.price * qty, qty };
                updateCheckoutSummary();
            }
        });

        card.addEventListener("click", (e) => {
            if (e.target.closest('.ff-qty-btn')) return;
            state.selectedPackage = { ...pkg, price: pkg.price * qty, qty };
            selectPackage(state.selectedPackage);
            document.querySelectorAll("#packagesGrid .ff-package-card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");
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
            <div class="payment-radio"></div>
            ${tagMarkup}
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
        summaryTotal.textContent = `LKR ${cost.toLocaleString()}`;
    } else {
        summaryTotal.textContent = "LKR 0";
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
    modalDueVal.textContent = `LKR ${cost.toLocaleString()}`;

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
            cryptoAddress.textContent = "0x" + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
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

    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
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
        val = val.substring(0, 2) + '/' + val.substring(2, 4);
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
        recTotal.textContent = `LKR ${cost.toLocaleString()}`;
    }, 2000);
}

// Receipt Completed: close modal and reset selections
btnPaymentDone.addEventListener("click", () => {
    closeModal();
    // Complete reset of game topup elements
    switchGame(state.selectedGame);
});

// ==========================================
// Slideshow Logic
// ==========================================
function initSlideshow() {
    const container = document.getElementById('heroSlidesContainer');
    const slides = container ? container.querySelectorAll('.slide') : [];
    const prevBtn = document.getElementById('slidePrev');
    const nextBtn = document.getElementById('slideNext');
    const indicators = document.querySelectorAll('.indicator');

    if (!container || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;

    function goToSlide(index) {
        currentIndex = index;
        if (currentIndex < 0) currentIndex = totalSlides - 1;
        if (currentIndex >= totalSlides) currentIndex = 0;

        container.style.transform = `translateX(-${currentIndex * 100}%)`;

        indicators.forEach(ind => ind.classList.remove('active'));
        if (indicators[currentIndex]) {
            indicators[currentIndex].classList.add('active');
        }
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Event Listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoSlide();
        });
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
            resetAutoSlide();
        });
    });

    // Start auto sliding
    startAutoSlide();
}

// Initialize slideshow
initSlideshow();
