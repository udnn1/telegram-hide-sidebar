<div align="center">

# Telegram Web - Hide Sidebar

**Chowaj listę czatów jednym kliknięciem i czytaj Telegram na pełną szerokość.**

[![Wersja](https://img.shields.io/badge/wersja-3.4.0-3390ec?style=flat-square)](https://github.com/udnn1/telegram-hide-sidebar/releases)
[![Licencja](https://img.shields.io/github/license/udnn1/telegram-hide-sidebar?style=flat-square&color=brightgreen)](LICENSE)
[![Tampermonkey](https://img.shields.io/badge/Tampermonkey-wymagany-00485b?style=flat-square)](https://www.tampermonkey.net/)
[![Telegram Web](https://img.shields.io/badge/Telegram_Web-A-229ED9?style=flat-square&logo=telegram&logoColor=white)](https://web.telegram.org/a/)
[![Ostatni commit](https://img.shields.io/github/last-commit/udnn1/telegram-hide-sidebar?style=flat-square)](https://github.com/udnn1/telegram-hide-sidebar/commits/main)

[Instalacja](#instalacja) · [Użycie](#użycie) · [Jak to działa](#jak-to-działa) · [FAQ](#faq)

</div>

---

## Po co to

Na szerokim monitorze lista czatów zjada miejsce, a sam czat zostaje wąski. Ten userscript pozwala schować lewą kolumnę jednym kliknięciem - czat rozciąga się wtedy na całą szerokość okna. Drugie kliknięcie przywraca listę. Stan jest zapamiętywany.

## Funkcje

- **Jedno kliknięcie** - cienki uchwyt przyklejony do krawędzi listy chowa i pokazuje kolumnę.
- **Pełna szerokość** - po schowaniu listy czat zajmuje całe okno, bez pustych pasów.
- **Trzyma się krawędzi** - pozycja uchwytu liczona na żywo, więc działa też po zmianie rozmiaru okna.
- **Pamięć stanu** - wybór zapisany między sesjami (`localStorage`).
- **Autoaktualizacja** - Tampermonkey pobiera nowe wersje wprost z tego repo.

## Instalacja

<div align="center">

[![Zainstaluj skrypt](https://img.shields.io/badge/⬇%20Zainstaluj%20skrypt-3390ec?style=for-the-badge)](https://raw.githubusercontent.com/udnn1/telegram-hide-sidebar/main/telegram-hide-sidebar.user.js)

</div>

1. Zainstaluj [Tampermonkey](https://www.tampermonkey.net/) w przeglądarce.
2. Kliknij przycisk powyżej (albo wejdź na [surowy plik](https://raw.githubusercontent.com/udnn1/telegram-hide-sidebar/main/telegram-hide-sidebar.user.js)).
3. Tampermonkey otworzy okno instalacji - potwierdź.
4. Odśwież `web.telegram.org`.

> Instalacja z tego linku podpina skrypt pod autoaktualizację. Kolejne wersje pojawią się u Ciebie automatycznie.

## Użycie

| Strzałka | Pozycja | Działanie |
| :---: | :--- | :--- |
| `‹` | na krawędzi listy | schowaj listę |
| `›` | na lewej krawędzi ekranu | pokaż listę |

Uchwyt to cienki pionowy pasek wyśrodkowany w pionie. Na najechanie kursorem podświetla się na niebiesko.

## Jak to działa

<details>
<summary>Szczegóły techniczne</summary>

<br>

`#Main` w Telegram Web A to kontener **CSS Grid** z dwiema kolumnami: `grid-template-columns: <szerokość listy> <reszta>` (lista | czat).

Naiwne `display: none` na liście nie działa - czat wypada wtedy z siatki i zwija się do zerowej wysokości. Dlatego skrypt zamiast tego nadpisuje definicję siatki:

```css
#Main { grid-template-columns: 0px 1fr !important; }
#LeftColumn { visibility: hidden !important; }
```

Tor listy dostaje zerową szerokość, czat przejmuje całą przestrzeń (`1fr`), pozostając w swoim wierszu - dzięki czemu zachowuje pełną wysokość i poprawnie się renderuje. Lista jest dodatkowo ukrywana przez `visibility: hidden`.

Uchwyt to element `position: fixed`, którego pozycja w stanie pokazanym jest liczona z `getBoundingClientRect()` listy i aktualizowana przez `ResizeObserver`.

</details>

## Kompatybilność

- ✅ Telegram Web **A** (`web.telegram.org/a/`)
- ✅ Firefox + Tampermonkey (testowane)
- ❌ Telegram Web **K** (`web.telegram.org/k/`) - nieobsługiwane

## FAQ

**Skrypt przestał działać po aktualizacji Telegrama.**
Telegram czasem zmienia nazwy klas i identyfikatorów w DOM. Zgłoś to w [Issues](https://github.com/udnn1/telegram-hide-sidebar/issues).

**Nie widzę uchwytu.**
Upewnij się, że jesteś na wersji A (`/a/` w adresie) i że Tampermonkey jest włączony.

**Czy zbiera jakieś dane?**
Nie. Skrypt działa wyłącznie lokalnie, nie wysyła niczego na zewnątrz. Jedyny zapis to `localStorage` z informacją, czy lista ma być schowana.

## Licencja

[MIT](LICENSE)
