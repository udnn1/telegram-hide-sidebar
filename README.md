# Telegram Web - Hide Sidebar

Userscript do Tampermonkey, który chowa listę czatów (lewą kolumnę) na [Telegram Web A](https://web.telegram.org/a/) i rozciąga okno czatu na całą szerokość. Przełączany jednym kliknięciem uchwytu przyklejonego do krawędzi listy.

## Funkcje

- Chowa i pokazuje listę czatów jednym kliknięciem.
- Czat wypełnia całą dostępną szerokość, gdy lista jest schowana.
- Uchwyt-zwijacz przyklejony do krawędzi listy (po schowaniu przeskakuje na lewą krawędź ekranu), pozycja liczona na żywo, więc trzyma się krawędzi także po zmianie rozmiaru okna.
- Stan (schowana / pokazana) zapamiętywany między sesjami.
- Autoaktualizacja przez Tampermonkey wprost z tego repo.

## Instalacja

1. Zainstaluj [Tampermonkey](https://www.tampermonkey.net/) w przeglądarce.
2. Kliknij, aby zainstalować skrypt: [telegram-hide-sidebar.user.js](https://raw.githubusercontent.com/udnn1/telegram-hide-sidebar/main/telegram-hide-sidebar.user.js)
3. Tampermonkey otworzy okno instalacji - potwierdź.
4. Odśwież `web.telegram.org`.

Dzięki nagłówkom `@updateURL` i `@downloadURL` Tampermonkey sam sprawdza i instaluje nowe wersje z tego repo.

## Użycie

- Na krawędzi listy czatów pojawia się cienki, pionowy uchwyt ze strzałką.
- Strzałka `‹` - kliknij, aby schować listę. Uchwyt przeskakuje na lewą krawędź ekranu.
- Strzałka `›` - kliknij, aby pokazać listę z powrotem.

## Jak to działa

`#Main` w Telegram Web A to kontener CSS Grid z dwiema kolumnami (lista | czat). Skrypt nadpisuje definicję siatki na `grid-template-columns: 0px 1fr`, przez co tor listy ma zerową szerokość, a czat dostaje całą przestrzeń, pozostając w swoim wierszu (pełna wysokość, zawartość renderuje się poprawnie). Lista jest dodatkowo ukrywana przez `visibility: hidden`.

## Kompatybilność

- Działa z Telegram Web A (`web.telegram.org/a/`).
- Testowane w Firefoksie z Tampermonkey.
- Wersja K (`web.telegram.org/k/`) nie jest obsługiwana.

Telegram potrafi zmieniać nazwy klas i identyfikatorów w DOM. Jeśli po aktualizacji Telegrama skrypt przestanie działać, zgłoś to w [Issues](https://github.com/udnn1/telegram-hide-sidebar/issues).

## Licencja

MIT
