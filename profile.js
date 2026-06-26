// ── Per-device profile using a unique device ID ──
// Each browser/device gets its own ID so profiles don't clash when link is shared

function getDeviceId() {
    let id = localStorage.getItem('awwja_device_id');
    if (!id) {
        id = 'device_' + Math.random().toString(36).substr(2, 9) + Date.now();
        localStorage.setItem('awwja_device_id', id);
    }
    return id;
}

function getProfile() {
    const key = 'awwja_profile_' + getDeviceId();
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : {};
}

function saveProfile(data) {
    const key = 'awwja_profile_' + getDeviceId();
    localStorage.setItem(key, JSON.stringify(data));
}

function getOrders() {
    const key = 'awwja_orders_' + getDeviceId();
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {

    let profile = getProfile();

    // ── Populate Header ──
    function refreshHeader() {
        const name = profile.name && profile.name.trim() ? profile.name : '';
        const email = profile.email && profile.email.trim() ? profile.email : '';

        const nameEl = document.querySelector('.profile-name');
        const emailEl = document.querySelector('.profile-email');

        nameEl.innerText = name || 'Tap to add your name';
        nameEl.style.color = name ? '#1a1a1a' : '#bbb';
        emailEl.innerText = email;

        const avatarSrc = profile.photo
            ? profile.photo
            : name
                ? `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2d6a4f&color=fff&size=200`
                : `https://ui-avatars.com/api/?name=?&background=cccccc&color=fff&size=200`;

        document.querySelector('.profile-avatar').src = avatarSrc;
        document.getElementById('modalAvatar').src = avatarSrc;
    }

    refreshHeader();

    // ── Pre-fill form with saved data ──
    document.getElementById('inputName').value = profile.name || '';
    document.getElementById('inputEmail').value = profile.email || '';
    document.getElementById('inputPhone').value = profile.phone || '';
    document.getElementById('inputAddress').value = profile.address || '';

    // ── Open Modals ──
    const links = document.querySelectorAll('.profile-link');
    links[0].addEventListener('click', (e) => { e.preventDefault(); openModal('personalInfoModal'); });
    links[1].addEventListener('click', (e) => { e.preventDefault(); openOrdersModal(); });
    links[3].addEventListener('click', (e) => { e.preventDefault(); openModal('passwordModal'); });

    // ── Close Modals ──
    document.getElementById('closePersonalModal').addEventListener('click', () => closeModal('personalInfoModal'));
    document.getElementById('closePasswordModal').addEventListener('click', () => closeModal('passwordModal'));
    document.getElementById('closeOrdersModal').addEventListener('click', () => closeModal('ordersModal'));
    document.getElementById('modalOverlay').addEventListener('click', () => {
        closeModal('personalInfoModal');
        closeModal('passwordModal');
        closeModal('ordersModal');
    });

    // ── Save Personal Info ──
    document.getElementById('savePersonalInfo').addEventListener('click', () => {
        const name = document.getElementById('inputName').value.trim();
        const email = document.getElementById('inputEmail').value.trim();
        const phone = document.getElementById('inputPhone').value.trim();
        const address = document.getElementById('inputAddress').value.trim();

        if (!name) {
            showToast('Please enter your name!', true);
            return;
        }

        profile.name = name;
        profile.email = email;
        profile.phone = phone;
        profile.address = address;

        saveProfile(profile);
        refreshHeader();
        closeModal('personalInfoModal');
        showToast('Profile saved! ✓');
    });

    // ── Avatar Upload ──
    document.getElementById('avatarInput').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            profile.photo = ev.target.result;
            saveProfile(profile);
            refreshHeader();
            showToast('Photo updated! ✓');
        };
        reader.readAsDataURL(file);
    });

    // ── Password Toggle ──
    document.querySelectorAll('.toggle-eye').forEach(eye => {
        eye.addEventListener('click', () => {
            const input = document.getElementById(eye.dataset.target);
            if (input.type === 'password') {
                input.type = 'text';
                eye.classList.replace('fa-eye-slash', 'fa-eye');
            } else {
                input.type = 'password';
                eye.classList.replace('fa-eye', 'fa-eye-slash');
            }
        });
    });

    // ── Save Password ──
    document.getElementById('savePassword').addEventListener('click', () => {
        const current = document.getElementById('currentPassword').value;
        const newPass = document.getElementById('newPassword').value;
        const confirm = document.getElementById('confirmPassword').value;

        if (!current || !newPass || !confirm) {
            showToast('Please fill all fields!', true);
            return;
        }
        if (newPass !== confirm) {
            showToast('Passwords do not match!', true);
            return;
        }
        if (newPass.length < 6) {
            showToast('Password must be at least 6 characters!', true);
            return;
        }

        profile.password = newPass;
        saveProfile(profile);

        document.getElementById('currentPassword').value = '';
        document.getElementById('newPassword').value = '';
        document.getElementById('confirmPassword').value = '';

        closeModal('passwordModal');
        showToast('Password updated! ✓');
    });

    // ── Logout / Clear Profile ──
    document.querySelector('.logout-btn').addEventListener('click', () => {
        if (confirm('Clear your profile data?')) {
            const key = 'awwja_profile_' + getDeviceId();
            localStorage.removeItem(key);
            window.location.href = 'homepage.html';
        }
    });
});

// ── Orders Modal ──
function openOrdersModal() {
    const orders = getOrders();
    const list = document.getElementById('ordersList');
    list.innerHTML = '';

    if (orders.length === 0) {
        list.innerHTML = `
            <div class="empty-orders">
                <i class="fa fa-box-open" style="font-size:40px; color:#ccc; display:block; text-align:center; margin-bottom:10px;"></i>
                <p style="text-align:center; color:#aaa;">You have no orders yet.</p>
            </div>`;
    } else {
        orders.forEach((order, i) => {
            list.innerHTML += `
                <div class="order-card">
                    <div class="order-card-top">
                        <span class="order-id">Order #${i + 1}</span>
                        <span class="order-status">${order.status || 'Processing'}</span>
                    </div>
                    <p class="order-date"><i class="fa fa-calendar"></i> ${order.date || 'N/A'}</p>
                    <p class="order-total"><i class="fa fa-tag"></i> Total: <strong>${order.total || 'N/A'}</strong></p>
                </div>`;
        });
    }

    openModal('ordersModal');
}

function openModal(id) {
    document.getElementById(id).classList.add('active');
    document.getElementById('modalOverlay').classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
    document.getElementById('modalOverlay').classList.remove('active');
}

function showToast(msg, isError = false) {
    const existing = document.querySelector('.awwja-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'awwja-toast';
    toast.innerText = msg;
    toast.style.cssText = `
        position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%);
        background: ${isError ? '#e53935' : '#2d6a4f'}; color: white; padding: 12px 24px;
        border-radius: 20px; font-size: 14px; z-index: 9999;
        white-space: nowrap; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}


// document.addEventListener('DOMContentLoaded', () => {
//     const logoutButton = document.querySelector('.logout-btn');
//     if (logoutButton) {
//         logoutButton.addEventListener('click', () => {
//             // Implement logout logic here
//             alert('Logging out...');
//             // Redirect to login page or home page after logout
//             // window.location.href = 'login.html';
//         });
//     }

//     document.querySelectorAll('.profile-link').forEach(link => {
//         link.addEventListener('click', (e) => {
//             // You can add routing logic here based on the link's text or a data attribute
//             // For now, they just navigate to '#' as defined in HTML
//         });
//     });
// });