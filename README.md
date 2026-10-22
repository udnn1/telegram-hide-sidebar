<div align="center">

# Telegram Web - Hide Sidebar

**Chowaj listę czatów jednym kliknięciem i czytaj Telegram na pełną szerokość.**

[![Wersja](https://img.shields.io/badge/wersja-3.5.0-3390EC?style=for-the-badge)](https://github.com/udnn1/telegram-hide-sidebar/releases)
[![Tampermonkey](https://img.shields.io/badge/Tampermonkey-00485B?style=for-the-badge&logo=tampermonkey&logoColor=white)](https://www.tampermonkey.net/)
[![Telegram Web A](https://img.shields.io/badge/Telegram_Web_A-229ED9?style=for-the-badge&logo=telegram&logoColor=white)](https://web.telegram.org/a/)
[![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=firefoxbrowser&logoColor=white)](https://www.mozilla.org/firefox/)

[Instalacja](#instalacja) · [Użycie](#użycie)

</div>

---

## Po co to

Na szerokim monitorze lista czatów zjada miejsce, a sam czat zostaje wąski. Ten userscript pozwala schować lewą kolumnę jednym kliknięciem - czat rozciąga się wtedy na całą szerokość okna. Drugie kliknięcie przywraca listę. Stan jest zapamiętywany.

## Funkcje

- Chowa i pokazuje listę czatów kliknięciem uchwytu na krawędzi.
- Po schowaniu listy czat zajmuje całą szerokość okna.
- Zapamiętuje stan między sesjami.
- Gdy czat się odznaczy przy schowanej liście, otwiera ostatnio otwarty czat.
- Aktualizuje się automatycznie z tego repo.

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

## Kompatybilność

- ✅ Telegram Web **A** (`web.telegram.org/a/`)
- ✅ Firefox + Tampermonkey (testowane)
- ❌ Telegram Web **K** (`web.telegram.org/k/`) - nieobsługiwane
