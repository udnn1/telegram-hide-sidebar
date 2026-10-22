// ==UserScript==
// @name         Telegram Web - Hide Sidebar
// @namespace    https://github.com/udnn1
// @version      3.4.0
// @description  Chowa liste czatow na Telegram Web A. Uchwyt-zwijacz przyklejony do krawedzi listy.
// @author       udnn1
// @match        https://web.telegram.org/*
// @run-at       document-start
// @grant        none
// @homepageURL  https://github.com/udnn1/telegram-hide-sidebar
// @supportURL   https://github.com/udnn1/telegram-hide-sidebar/issues
// @downloadURL  https://raw.githubusercontent.com/udnn1/telegram-hide-sidebar/main/telegram-hide-sidebar.user.js
// @updateURL    https://raw.githubusercontent.com/udnn1/telegram-hide-sidebar/main/telegram-hide-sidebar.user.js
// ==/UserScript==

(function () {
    'use strict';

    const STORAGE_KEY = 'tg_hide_sidebar';
    const STYLE_ID = 'tg-hide-sidebar-style';
    const BTN_ID = 'tg-hide-sidebar-handle';

    const CSS = `
        #Main { grid-template-columns: 0px 1fr !important; }
        #LeftColumn { visibility: hidden !important; }
    `;

    let hidden = localStorage.getItem(STORAGE_KEY) === '1';
    let btn = null;

    function applyStyle() {
        let style = document.getElementById(STYLE_ID);
        if (hidden && !style) {
            style = document.createElement('style');
            style.id = STYLE_ID;
            style.textContent = CSS;
            (document.head || document.documentElement).appendChild(style);
        } else if (!hidden && style) {
            style.remove();
        }
    }

    function position() {
        if (!btn) return;
        if (hidden) {
            btn.style.left = '0px';
            btn.textContent = '›';
            btn.title = 'Pokaz liste czatow';
        } else {
            const left = document.querySelector('#LeftColumn');
            const edge = left ? left.getBoundingClientRect().right : 0;
            btn.style.left = Math.max(0, edge - 9) + 'px';
            btn.textContent = '‹';
            btn.title = 'Ukryj liste czatow';
        }
    }

    function toggle() {
        hidden = !hidden;
        localStorage.setItem(STORAGE_KEY, hidden ? '1' : '0');
        applyStyle();
        position();
    }

    function makeButton() {
        btn = document.createElement('div');
        btn.id = BTN_ID;
        btn.style.cssText = [
            'position:fixed',
            'top:50%',
            'transform:translateY(-50%)',
            'width:18px',
            'height:56px',
            'z-index:2147483647',
            'display:flex',
            'align-items:center',
            'justify-content:center',
            'font:18px/1 system-ui,sans-serif',
            'color:#fff',
            'background:rgba(60,70,85,0.55)',
            'border-radius:5px',
            'cursor:pointer',
            'user-select:none',
            'opacity:0.45',
            'transition:opacity .15s,background .15s'
        ].join(';');
        btn.addEventListener('mouseenter', () => {
            btn.style.opacity = '1';
            btn.style.background = 'rgba(51,144,236,0.95)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.opacity = '0.45';
            btn.style.background = 'rgba(60,70,85,0.55)';
        });
        btn.addEventListener('click', toggle);
        document.body.appendChild(btn);

        const left = document.querySelector('#LeftColumn');
        if (left && window.ResizeObserver) {
            new ResizeObserver(position).observe(left);
        }
        position();
    }

    applyStyle();
    const iv = setInterval(() => {
        if (document.body && document.querySelector('#LeftColumn')) {
            clearInterval(iv);
            makeButton();
        }
    }, 300);
})();
