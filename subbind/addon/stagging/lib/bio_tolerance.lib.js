function injectCSS() { 
$( "head" ).append(`<style id="subbind">
/**
* @name vividant
* @author ibtisam midlet
* @authorId 403390454273409011
* @version 1.0
* @description HDR vivid theme
* @source https://github.com/x/vividant
* @updateUrl https://github.com/blueb442/x/blob/main/vividant.theme.css
*/

/* Commissioner font, Source Sans Pro and Fira Code font, please do not remove.
@import url(https://fonts.googleapis.com/css2?family=Commissioner:wght@100;200;300;400;500;600;700;800;900&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap);
 */

/* Main Theme File, please do not remove 
@import url(https://blueb442.github.io/purpura/assets/main/main.css);
*/
/* Commissioner font, Source Sans Pro and Fira Code font, please do not remove. */
@import url(https://fonts.googleapis.com/css2?family=Commissioner:wght@100;200;300;400;500;600;700;800;900&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap);

:root {
  --font-primary: Comic Sans MS;
/*   --font-display: Commissioner; */
/*   --font-headline: Commissioner; */
/*   --font-code: Fira Code; */
}

* {
    --header-primary: #fff;
    --header-secondary: #b9bbbe;
    --text-normal: #dcddde;
    --text-muted: #72767d;
    --text-positive: hsl(139,calc(var(--saturation-factor, 1)*66.8%),58.6%);
    --text-warning: hsl(38,calc(var(--saturation-factor, 1)*95.7%),54.1%);
    --text-danger: hsl(359,calc(var(--saturation-factor, 1)*82.6%),59.4%);
    --text-brand: hsl(235,calc(var(--saturation-factor, 1)*86.1%),77.5%);
    --interactive-normal: #b9bbbe;
    --interactive-hover: #dcddde;
    --interactive-active: #fff;
    --interactive-muted: #4f545c;
    --background-primary: #000;
    --background-secondary: #121016;
    --background-secondary-alt: #0e0c11;
    --background-tertiary: #08070a;
    --background-accent: #24212c;
    --background-floating: #030203;
    --background-mobile-primary: #08070a;
    --background-mobile-secondary: #08070a;
    --background-modifier-hover: rgba(79,84,92,0.16);
    --background-modifier-active: rgba(79,84,92,0.24);
    --background-modifier-selected: rgba(79,84,92,0.32);
    --background-modifier-accent: hsla(0,0%,100%,0.06);
    --info-positive-text: #fff;
    --info-warning-text: #fff;
    --info-danger-text: #fff;
    --info-help-background: hsla(197,calc(var(--saturation-factor, 1)*100%),47.8%,0.1);
    --info-help-foreground: hsl(197,calc(var(--saturation-factor, 1)*100%),47.8%);
    --info-help-text: #fff;
    --status-warning-text: #000;
    --scrollbar-thin-thumb: #202225;
    --scrollbar-thin-track: transparent;
    --scrollbar-auto-thumb: #202225;
    --scrollbar-auto-track: hsl(210,calc(var(--saturation-factor, 1)*9.8%),20%);
    --scrollbar-auto-scrollbar-color-thumb: #202225;
    --scrollbar-auto-scrollbar-color-track: #15131a;
    --elevation-stroke: 0 0 0 1px rgba(4,4,5,0.15);
    --elevation-low: 0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05);
    --elevation-medium: 0 4px 4px rgba(0,0,0,0.16);
    --elevation-high: 0 8px 16px rgba(0,0,0,0.24);
    --logo-primary: rgb(194, 194, 194);
    --control-brand-foreground: hsl(235,calc(var(--saturation-factor, 1)*86.1%),77.5%);
    --control-brand-foreground-new: hsl(235,calc(var(--saturation-factor, 1)*86.1%),77.5%);
    --background-mentioned: hsla(38,calc(var(--saturation-factor, 1)*95.7%),54.1%,0.1);
    --background-mentioned-hover: hsla(38,calc(var(--saturation-factor, 1)*95.7%),54.1%,0.08);
    --background-message-hover: rgba(4,4,5,0.07);
    --channels-default: #918e97;
    --guild-header-text-shadow: 0 1px 1px rgba(0,0,0,0.4);
    --activity-card-background: #202225;
    --textbox-markdown-syntax: #8e9297;
    --deprecated-card-bg: rgba(32,34,37,0.6);
    --deprecated-card-editable-bg: rgba(32,34,37,0.3);
    --deprecated-store-bg: #36393f;
    --deprecated-quickswitcher-input-background: #72767d;
    --deprecated-quickswitcher-input-placeholder: hsla(0,0%,100%,0.3);
    --deprecated-text-input-bg: rgba(0,0,0,0.1);
    --deprecated-text-input-border: rgba(0,0,0,0.3);
    --deprecated-text-input-border-hover: #040405;
    --deprecated-text-input-border-disabled: #202225;
/* ibti */
    --deprecated-text-input-prefix: #dcddde;
    --green-360 : #00aff4;
}


.message-2CShn3 .messageContent-2t3eCI .timestamp-p1Df1m {
    color: transparent;
}
.message-2CShn3:hover .messageContent-2t3eCI .timestamp-p1Df1m {
    color: var(--text-muted);
}

button[aria-label="Open GIF picker"] {
    display: none;
    color: transparent;
}
button[aria-label="Open sticker picker"] {
    display: none;
    color: transparent;
}

/* Begin Localized Stuff */

button[aria-label="Open GIF picker"] {
    display: none;
    color: transparent;
}
button[aria-label="Open sticker picker"] {
    display: none;
    color: transparent;
}

/* Dansk */

button[aria-label="Åbn sticker-vælgeren"] {
    display: none;
    color: transparent;
}
button[aria-label="Åbn GIF-vælger"] {
    display: none;
    color: transparent;
}

/* Deutsch */

button[aria-label="Stickerauswahl öffnen"] {
    display: none;
    color: transparent;
}
button[aria-label="GIF-Auswahl öffnen"] {
    display: none;
    color: transparent;
}

/* Espanol */

button[aria-label="Abrir selector de pegatinas"] {
    display: none;
    color: transparent;
}
button[aria-label="Abrir selector de GIFs"] {
    display: none;
    color: transparent;
}

/* Francais */

button[aria-label="Ouvrir le sélecteur d'autocollant"] {
    display: none;
    color: transparent;
}
button[aria-label="Ouvrir l'onglet des GIF"] {
    display: none;
    color: transparent;
}

/* Hrvatski */

button[aria-label="Otvori picker za naljepnice"] {
    display: none;
    color: transparent;
}
button[aria-label="Otvori GIF picker"] {
    display: none;
    color: transparent;
}

/* Italiano */

button[aria-label="Apri selettore di adesivi"] {
    display: none;
    color: transparent;
}
button[aria-label="Apri selettore di GIF"] {
    display: none;
    color: transparent;
}

/* Lietuviskai */

button[aria-label="Atidaryti lipdukų paieškos priemonę"] {
    display: none;
    color: transparent;
}
button[aria-label="Atidaryti GIF paieškos priemonę"] {
    display: none;
    color: transparent;
}

/* Magyar */

button[aria-label="Matricaválogató megnyitása"] {
    display: none;
    color: transparent;
}
button[aria-label="GIF válogató megnyitása"] {
    display: none;
    color: transparent;
}

/* Nederlands */

button[aria-label="Stickerkiezer openen"] {
    display: none;
    color: transparent;
}
button[aria-label="GIF-kiezer openen"] {
    display: none;
    color: transparent;
}

/* Norsk */

button[aria-label="Åpne klistremerkevelger"] {
    display: none;
    color: transparent;
}
button[aria-label="Åpne GIF-velger"] {
    display: none;
    color: transparent;
}

/* Polski */

button[aria-label="Otwórz wybór naklejek"] {
    display: none;
    color: transparent;
}
button[aria-label="Otwórz wybieranie GIF-ów"] {
    display: none;
    color: transparent;
}

/* Portuges do Brasil */

button[aria-label="Abrir selecionador de figurinhas"] {
    display: none;
    color: transparent;
}
button[aria-label="Abrir o selecionador de GIFs"] {
    display: none;
    color: transparent;
}

/* Romana */

button[aria-label="Deschide selectorul de stickere"] {
    display: none;
    color: transparent;
}
button[aria-label="Deschide selectorul de GIF"] {
    display: none;
    color: transparent;
}

/* Suomi */

button[aria-label="Avaa tarravalitsin"] {
    display: none;
    color: transparent;
}
button[aria-label="Avaa GIF-valitsin"] {
    display: none;
    color: transparent;
}

/* Svenska */

button[aria-label="Öppna dekalväljare"] {
    display: none;
    color: transparent;
}
button[aria-label="Öppna GIF-väljare"] {
    display: none;
    color: transparent;
}

/* Tieng Viet */

button[aria-label="Mở trình chọn sticker"] {
    display: none;
    color: transparent;
}
button[aria-label="Mở trình chọn ảnh GIF"] {
    display: none;
    color: transparent;
}

/* Turkce */

button[aria-label="Çıkartma seçiciyi aç"] {
    display: none;
    color: transparent;
}
button[aria-label="GIF seçiciyi aç"] {
    display: none;
    color: transparent;
}

/* Cestina */

button[aria-label="Otevřít výběr samolepek"] {
    display: none;
    color: transparent;
}
button[aria-label="Otevřít okno s GIFy"] {
    display: none;
    color: transparent;
}

/* Eyynvilka */

button[aria-label="Άνοιγμα επιλογέα αυτοκόλλητων"] {
    display: none;
    color: transparent;
}
button[aria-label="Άνοιγμα επιλογέα GIF"] {
    display: none;
    color: transparent;
}

/* български */

button[aria-label="Отвори избиране на стикери"] {
    display: none;
    color: transparent;
}
button[aria-label="Отвори избиране на GIF"] {
    display: none;
    color: transparent;
}

/* PYCCknn */

button[aria-label="Открыть меню выбора стикеров"] {
    display: none;
    color: transparent;
}
button[aria-label="Открыть меню GIF"] {
    display: none;
    color: transparent;
}

/* Ykpaihcbka */

button[aria-label="Відкрити програму вибору стікерів"] {
    display: none;
    color: transparent;
}
button[aria-label="Відкрити програму вибору GIF"] {
    display: none;
    color: transparent;
}

/* Another Language */

button[aria-label="स्टीकर पिकर खोलें"] {
    display: none;
    color: transparent;
}
button[aria-label="GIF पिकर खोलें"] {
    display: none;
    color: transparent;
}

/* Another Language */

button[aria-label="เปิดตัวเลือกสติกเกอร์"] {
    display: none;
    color: transparent;
}
button[aria-label="เปิดตัวเลือก GIF"] {
    display: none;
    color: transparent;
}

/* Another Language */

button[aria-label="打开贴纸选取器"] {
    display: none;
    color: transparent;
}
button[aria-label="打开 GIF 选取器"] {
    display: none;
    color: transparent;
}

/* Another Language */

button[aria-label="スタンプピッカーを開く"] {
    display: none;
    color: transparent;
}
button[aria-label="GIFピッカーを開く"] {
    display: none;
    color: transparent;
}

/* Another Language */

button[aria-label="開啟貼圖選取器"] {
    display: none;
    color: transparent;
}
button[aria-label="開啟 GIF 選取器"] {
    display: none;
    color: transparent;
}

/* Another Language */

button[aria-label="스티커 선택기 열기"] {
    display: none;
    color: transparent;
}
button[aria-label="GIF 선택기 열기"] {
    display: none;
    color: transparent;
}

/* End Localized Stuff */


.sprite-2lxwfc {
    background-image: url("https://blueb442.github.io/purpura/assets/allinone-sprite.png");
    background-position: 50%;
    background-repeat: no-repeat;
    width: 22px;
    height: 22px;
    display: block;
}

.scrollableContainer-15eg7h {
    background-color: var(--background-accent);
}

.scrollableContainer-15eg7h {
    border-radius: 12px;
}

.mention {
    border-radius: 8px;
    padding-left: 3px;
    padding-right: 3px;
}

button, .item-1OdjEX, .item-3XjbnG, .content-1gYQeQ {
    border-radius: 8px!important;
}

:root {
    --is: #a890b30e;
}

.modeSelected-3DmyhH .content-1gYQeQ, .selected-g-kMVV .item-3XjbnG {
    background-color: var(--is)!important;
}

.menu-1QACrS {
    border-radius: 10px;
}

.panels-3wFtMD {
    padding: 3px;
    background-color: var(--background-secondary);
}

.sidebar-1tnWFu {
    margin-top: 10px;
    margin-right: 5px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}


.chat-2ZfjoI {
    margin-top: 10px;
    margin-right: 10px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}

#BDFDB-card {
    border-radius: 8px;
}

.selected-g-kMVV.item-3XjbnG {
    background-color: var(--is)!important;
}

.accountProfileCard-lbN7n- {
    border-radius: 15px;
}

.notice-1Qe0b_{
    border-radius: 12px;
}

.radioBar-3w9XY-, .item-2idW98 {
    border-radius: 12px;
}

.codeRedemptionRedirect-2hYMSQ, .noItemsCard-2V85P5 {
    border-radius: 12px;
    background-color: var(--background-secondary)!important;
    border: none;
}

input, .select-1Ia3hD, .container-3jbRo5 {
    border-radius: 8px!important;
}

.card-16VQ8C {
    border-radius: 12px;
    border: none;
}

.container-3NTP7o {
    border-radius: 5px!important;
}

.formNotice-2nS8ey {
    background-color: var(--background-secondary);
}

.activeGame-1OdxzI, .bd-addon-card {
    border-radius: 8px!important;
}

.grabber-2GQyvM {
    border-radius: 15px;
    width: 13px;
}

* {
    --scrollbar-thin-thumb: #0e0c11;
    --scrollbar-thin-track: transparent;
    --scrollbar-auto-thumb: #0e0c11;
    --scrollbar-auto-track: transparent;
    --scrollbar-auto-scrollbar-color-thumb: #0e0c11;
    --scrollbar-auto-scrollbar-color-track: transparent;
    --background-floating: #0a080c;
}

.autocomplete-3NRXG8, .autocompleteInner-2tOQrf {
    border-radius: 10px!important;
    background-color: var(--background-secondary-alt);
}
.selected-3H3-RC.base-2v-uc0 {
    background-color: var(--background-secondary);
    border-radius: 8px;
}

.searchBar-2M9mRP {
    border-radius: 8px;
}

.username-h_Y3Us {
    font-family: var(--font-display);
    font-size: 15px;
}

.role-2TIOKu {
    border-radius: 6px;
    background-color: var(--background-primary);
}

.userPopout-2j1gM4 {
    border-radius: 12px;
}

 .circleIconButton-1VxDrg[aria-label="Add a Server"] > svg > path:first-child {
     fill: currentcolor;
     fill-rule: evenodd;
     clip-rule: evenodd;
     d: path("M11.5 1C9.4233 1 7.39323 1.61581 5.66652 2.76957C3.9398 3.92332 2.59399 5.5632 1.79927 7.48182C1.00455 9.40045 0.796614 11.5116 1.20176 13.5484C1.6069 15.5852 2.60693 17.4562 4.07538 18.9246C5.54383 20.3931 7.41476 21.3931 9.45156 21.7982C11.4884 22.2034 13.5996 21.9955 15.5182 21.2007C17.4368 20.406 19.0767 19.0602 20.2304 17.3335C21.3842 15.6068 22 13.5767 22 11.5C22 10.1211 21.7284 8.75574 21.2007 7.48182C20.6731 6.2079 19.8996 5.05039 18.9246 4.07538C17.9496 3.10036 16.7921 2.32694 15.5182 1.79926C14.2443 1.27159 12.8789 1 11.5 1V1ZM14.65 12.55H12.55V14.65C12.55 14.9285 12.4394 15.1955 12.2425 15.3925C12.0456 15.5894 11.7785 15.7 11.5 15.7C11.2215 15.7 10.9545 15.5894 10.7575 15.3925C10.5606 15.1955 10.45 14.9285 10.45 14.65V12.55H8.35C8.07153 12.55 7.80445 12.4394 7.60754 12.2425C7.41063 12.0455 7.3 11.7785 7.3 11.5C7.3 11.2215 7.41063 10.9544 7.60754 10.7575C7.80445 10.5606 8.07153 10.45 8.35 10.45H10.45V8.35C10.45 8.07152 10.5606 7.80445 10.7575 7.60754C10.9545 7.41062 11.2215 7.3 11.5 7.3C11.7785 7.3 12.0456 7.41062 12.2425 7.60754C12.4394 7.80445 12.55 8.07152 12.55 8.35V10.45H14.65C14.9285 10.45 15.1956 10.5606 15.3925 10.7575C15.5894 10.9544 15.7 11.2215 15.7 11.5C15.7 11.7785 15.5894 12.0455 15.3925 12.2425C15.1956 12.4394 14.9285 12.55 14.65 12.55Z");
 }

 .circleIconButton-1VxDrg[aria-label="Explore Public Servers"] > svg > path:first-child {
     fill: currentcolor;
     fill-rule: evenodd;
     clip-rule: evenodd;
     d: path("M10.5 11.5C10.5 12.0523 10.9477 12.5 11.5 12.5V12.5C12.0523 12.5 12.5 12.0523 12.5 11.5V11.5C12.5 10.9477 12.0523 10.5 11.5 10.5V10.5C10.9477 10.5 10.5 10.9477 10.5 11.5V11.5Z M11.5 1C9.4233 1 7.39323 1.61581 5.66652 2.76957C3.9398 3.92332 2.59399 5.5632 1.79927 7.48182C1.00455 9.40045 0.796614 11.5116 1.20176 13.5484C1.6069 15.5852 2.60693 17.4562 4.07538 18.9246C5.54383 20.3931 7.41476 21.3931 9.45156 21.7982C11.4884 22.2034 13.5996 21.9955 15.5182 21.2007C17.4368 20.406 19.0767 19.0602 20.2304 17.3335C21.3842 15.6068 22 13.5767 22 11.5C22 10.1211 21.7284 8.75574 21.2007 7.48182C20.6731 6.2079 19.8996 5.05039 18.9246 4.07538C17.9496 3.10036 16.7921 2.32694 15.5182 1.79927C14.2443 1.27159 12.8789 1 11.5 1ZM16.6331 7.23367C16.7284 7.59653 16.5395 7.95875 16.3669 8.29181L13.789 13.264C13.7362 13.394 13.6579 13.512 13.5587 13.6112C13.4595 13.7104 13.3415 13.7887 13.2115 13.8415L7.791 16.6265C7.65098 16.6824 7.50058 16.7074 7.35 16.7C7.21034 16.6981 7.07246 16.6683 6.94445 16.6124C6.82419 16.5599 6.71491 16.4853 6.62222 16.3926C6.61077 16.3812 6.59534 16.3745 6.57915 16.3745V16.3745C6.56191 16.3745 6.54546 16.367 6.53456 16.3537C6.42175 16.2157 6.34584 16.051 6.31421 15.8753C6.28097 15.6906 6.29782 15.5004 6.363 15.3245L9.2005 9.8515C9.25331 9.72154 9.33162 9.60349 9.4308 9.5043C9.52999 9.40511 9.64805 9.3268 9.778 9.274L15.1985 6.489C15.3951 6.41145 15.6105 6.39501 15.8165 6.44184C16.0226 6.48868 16.2098 6.5966 16.3535 6.7515C16.4884 6.8841 16.585 7.0507 16.6331 7.23367V7.23367Z");
 }

.mainContent-20q_Hp[aria-label*=poll][aria-label$="text channel)"] > div > svg > path:first-child {
    fill: currentcolor;
    fill-rule: evenodd;
    clip-rule: evenodd;
    d: path("M17 12C17 11.4477 17.4477 11 18 11H19C19.5523 11 20 11.4477 20 12V20C20 20.5523 19.5523 21 19 21H18C17.4477 21 17 20.5523 17 20V12Z M10 3C10 2.44771 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V20C13 20.5523 12.5523 21 12 21H11C10.4477 21 10 20.5523 10 20V3Z M3 8C3 7.44772 3.44772 7 4 7H5C5.55228 7 6 7.44772 6 8V20C6 20.5523 5.55228 21 5 21H4C3.44772 21 3 20.5523 3 20V8Z");
}
.mainContent-20q_Hp[aria-label*=vote][aria-label$="text channel)"] > div > svg > path:first-child {
    fill: currentcolor;
    fill-rule: evenodd;
    clip-rule: evenodd;
    d: path("M17 12C17 11.4477 17.4477 11 18 11H19C19.5523 11 20 11.4477 20 12V20C20 20.5523 19.5523 21 19 21H18C17.4477 21 17 20.5523 17 20V12Z M10 3C10 2.44771 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V20C13 20.5523 12.5523 21 12 21H11C10.4477 21 10 20.5523 10 20V3Z M3 8C3 7.44772 3.44772 7 4 7H5C5.55228 7 6 7.44772 6 8V20C6 20.5523 5.55228 21 5 21H4C3.44772 21 3 20.5523 3 20V8Z");
}
.mainContent-20q_Hp[aria-label*=voting][aria-label$="text channel)"] > div > svg > path:first-child {
    fill: currentcolor;
    fill-rule: evenodd;
    clip-rule: evenodd;
    d: path("M17 12C17 11.4477 17.4477 11 18 11H19C19.5523 11 20 11.4477 20 12V20C20 20.5523 19.5523 21 19 21H18C17.4477 21 17 20.5523 17 20V12Z M10 3C10 2.44771 10.4477 2 11 2H12C12.5523 2 13 2.44772 13 3V20C13 20.5523 12.5523 21 12 21H11C10.4477 21 10 20.5523 10 20V3Z M3 8C3 7.44772 3.44772 7 4 7H5C5.55228 7 6 7.44772 6 8V20C6 20.5523 5.55228 21 5 21H4C3.44772 21 3 20.5523 3 20V8Z");
}
svg[class="repliedTextContentIcon-1ivTae"] > path {
    fill: currentcolor;
    fill-rule: evenodd;
    clip-rule: evenodd;
    d: path("M7.27778 9.38889C8.15223 9.38889 8.86111 8.68001 8.86111 7.80556C8.86111 6.9311 8.15223 6.22222 7.27778 6.22222C6.40333 6.22222 5.69444 6.9311 5.69444 7.80556C5.69444 8.68001 6.40333 9.38889 7.27778 9.38889Z M17.8333 2H5.16667C4.32681 2 3.52136 2.33363 2.9275 2.9275C2.33363 3.52136 2 4.32681 2 5.16667V17.8333C2 18.6732 2.33363 19.4786 2.9275 20.0725C3.52136 20.6664 4.32681 21 5.16667 21H17.8333C18.6732 21 19.4786 20.6664 20.0725 20.0725C20.6664 19.4786 21 18.6732 21 17.8333V5.16667C21 4.32681 20.6664 3.52136 20.0725 2.9275C19.4786 2.33363 18.6732 2 17.8333 2ZM5.16667 4.11111H17.8333C18.1133 4.11111 18.3818 4.22232 18.5797 4.42028C18.7777 4.61823 18.8889 4.88672 18.8889 5.16667V13.9911L15.5111 11.1094C14.9878 10.6788 14.3311 10.4434 13.6533 10.4434C12.9756 10.4434 12.3189 10.6788 11.7956 11.1094L4.11111 17.5167V5.16667C4.11111 4.88672 4.22232 4.61823 4.42028 4.42028C4.61823 4.22232 4.88672 4.11111 5.16667 4.11111Z");
}
.mainContent-20q_Hp[aria-label*=tw][aria-label$="text channel)"] > div > svg > path:first-child {
    fill: currentcolor;
    fill-rule: evenodd;
    clip-rule: evenodd;
    d: path("M13.905 8C13.905 7.44772 13.4573 7 12.905 7H9.66504L10.2707 3.58738C10.3251 3.28107 10.0895 3 9.77847 3H8.7941C8.55167 3 8.34417 3.17391 8.3018 3.41262L7.66504 7H4.08514C3.84225 7 3.63449 7.17456 3.59262 7.41381L3.41762 8.41381C3.36408 8.71977 3.59952 9 3.91014 9H7.31504L6.25504 15H2.67514C2.43225 15 2.22449 15.1746 2.18262 15.4138L2.00762 16.4138C1.95408 16.7198 2.18952 17 2.50014 17H5.90504L5.2993 20.4126C5.24493 20.7189 5.4805 21 5.7916 21H6.77597C7.0184 21 7.22591 20.8261 7.26828 20.5874L7.90504 17H13.905L13.2993 20.4126C13.2449 20.7189 13.4805 21 13.7916 21H14.7759C15.0184 21 15.2259 20.8261 15.2682 20.5874L15.905 17H19.4849C19.7278 17 19.9356 16.8254 19.9774 16.5862L20.1524 15.5862C20.206 15.2802 19.9705 15 19.6599 15H16.255L16.5808 13.1558C16.6873 12.5529 16.2236 12 15.6113 12C15.1336 12 14.7249 12.3429 14.6418 12.8133L14.2554 15H8.25548L9.31548 9H12.905C13.4573 9 13.905 8.55228 13.905 8Z M21.2438 8.55654L18.8914 3.80204C18.5251 3.06172 17.4701 3.05951 17.1007 3.79829L14.7235 8.55279C14.391 9.21769 14.8745 10 15.6179 10H20.3475C21.0891 9.99999 21.5726 9.22119 21.2438 8.55654ZM18.4999 7H17.5V5H18.4999H18.5V7H18.4999ZM17.9998 9C17.7238 9 17.4998 8.77589 17.4998 8.49887C17.4998 8.22224 17.7238 7.99773 17.9998 7.99773C18.2759 7.99773 18.4999 8.22224 18.4999 8.49887C18.4999 8.77589 18.2759 9 17.9998 9Z");
}
.shield-1-PEa- > g > path:first-child {
    fill-rule: evenodd;
    clip-rule: evenodd;
    d: path("M11.5 10.4583C12.3241 10.4583 13.1297 10.214 13.8149 9.75612C14.5001 9.29828 15.0341 8.64754 15.3495 7.88618C15.6649 7.12482 15.7474 6.28704 15.5866 5.47879C15.4258 4.67054 15.029 3.92811 14.4463 3.34539C13.8636 2.76267 13.1211 2.36583 12.3129 2.20506C11.5046 2.04429 10.6668 2.1268 9.90548 2.44217C9.14413 2.75753 8.49338 3.29159 8.03554 3.97679C7.5777 4.662 7.33333 5.46758 7.33333 6.29167C7.33333 7.39674 7.77232 8.45654 8.55372 9.23794C9.33512 10.0193 10.3949 10.4583 11.5 10.4583ZM17.75 20.875C18.0263 20.875 18.2912 20.7653 18.4866 20.5699C18.6819 20.3746 18.7917 20.1096 18.7917 19.8333C18.7917 17.8995 18.0234 16.0448 16.656 14.6773C15.2885 13.3099 13.4339 12.5417 11.5 12.5417C9.56613 12.5417 7.71146 13.3099 6.34401 14.6773C4.97656 16.0448 4.20833 17.8995 4.20833 19.8333C4.20833 20.1096 4.31808 20.3746 4.51343 20.5699C4.70878 20.7653 4.97373 20.875 5.25 20.875H17.75Z");
}
.mainContent-20q_Hp[aria-label*=help][aria-label$="text channel)"] > div > svg > path:first-child {
    fill: currentcolor;
    fill-rule: evenodd;
    clip-rule: evenodd;
    d: path("M11.5 1C9.4233 1 7.39323 1.61581 5.66652 2.76957C3.9398 3.92332 2.59399 5.5632 1.79927 7.48182C1.00455 9.40045 0.796615 11.5116 1.20176 13.5484C1.6069 15.5852 2.60693 17.4562 4.07538 18.9246C5.54383 20.3931 7.41475 21.3931 9.45155 21.7982C11.4884 22.2034 13.5996 21.9955 15.5182 21.2007C17.4368 20.406 19.0767 19.0602 20.2304 17.3335C21.3842 15.6068 22 13.5767 22 11.5C22 10.1211 21.7284 8.75574 21.2007 7.48182C20.6731 6.2079 19.8996 5.05039 18.9246 4.07538C17.9496 3.10036 16.7921 2.32694 15.5182 1.79926C14.2443 1.27159 12.8789 1 11.5 1V1ZM11.5 17.8C11.2923 17.8 11.0893 17.7384 10.9167 17.623C10.744 17.5077 10.6094 17.3437 10.5299 17.1518C10.4505 16.96 10.4297 16.7488 10.4702 16.5451C10.5107 16.3415 10.6107 16.1544 10.7575 16.0075C10.9044 15.8607 11.0915 15.7607 11.2952 15.7202C11.4988 15.6797 11.71 15.7005 11.9018 15.7799C12.0937 15.8594 12.2577 15.994 12.373 16.1666C12.4884 16.3393 12.55 16.5423 12.55 16.75C12.55 17.0285 12.4394 17.2955 12.2425 17.4925C12.0456 17.6894 11.7785 17.8 11.5 17.8ZM12.55 12.382V13.6C12.55 13.8785 12.4394 14.1455 12.2425 14.3425C12.0456 14.5394 11.7785 14.65 11.5 14.65C11.2215 14.65 10.9545 14.5394 10.7575 14.3425C10.5606 14.1455 10.45 13.8785 10.45 13.6V11.5C10.45 11.2215 10.5606 10.9544 10.7575 10.7575C10.9545 10.5606 11.2215 10.45 11.5 10.45C11.8115 10.45 12.116 10.3576 12.375 10.1846C12.634 10.0115 12.8359 9.76552 12.9551 9.47772C13.0743 9.18993 13.1055 8.87325 13.0447 8.56773C12.984 8.26221 12.834 7.98157 12.6137 7.7613C12.3934 7.54104 12.1128 7.39103 11.8073 7.33026C11.5017 7.26949 11.1851 7.30068 10.8973 7.41989C10.6095 7.5391 10.3635 7.74097 10.1904 7.99998C10.0174 8.25898 9.925 8.56349 9.925 8.875C9.925 9.15348 9.81438 9.42055 9.61746 9.61746C9.42055 9.81437 9.15348 9.925 8.875 9.925C8.59653 9.925 8.32945 9.81437 8.13254 9.61746C7.93563 9.42055 7.825 9.15348 7.825 8.875C7.82226 8.19281 8.00944 7.52333 8.36561 6.9415C8.72178 6.35967 9.23286 5.88846 9.84165 5.58063C10.4504 5.2728 11.1329 5.14049 11.8126 5.19852C12.4923 5.25656 13.1425 5.50264 13.6903 5.90922C14.238 6.3158 14.6619 6.86683 14.9142 7.50062C15.1666 8.13441 15.2376 8.82593 15.1192 9.49778C15.0009 10.1696 14.6979 10.7953 14.2441 11.3047C13.7903 11.814 13.2038 12.1871 12.55 12.382V12.382Z");
}
.mainContent-20q_Hp[aria-label*=support][aria-label$="text channel)"] > div > svg > path:first-child {
    fill: currentcolor;
    fill-rule: evenodd;
    clip-rule: evenodd;
    d: path("M11.5 1C9.4233 1 7.39323 1.61581 5.66652 2.76957C3.9398 3.92332 2.59399 5.5632 1.79927 7.48182C1.00455 9.40045 0.796615 11.5116 1.20176 13.5484C1.6069 15.5852 2.60693 17.4562 4.07538 18.9246C5.54383 20.3931 7.41475 21.3931 9.45155 21.7982C11.4884 22.2034 13.5996 21.9955 15.5182 21.2007C17.4368 20.406 19.0767 19.0602 20.2304 17.3335C21.3842 15.6068 22 13.5767 22 11.5C22 10.1211 21.7284 8.75574 21.2007 7.48182C20.6731 6.2079 19.8996 5.05039 18.9246 4.07538C17.9496 3.10036 16.7921 2.32694 15.5182 1.79926C14.2443 1.27159 12.8789 1 11.5 1V1ZM11.5 17.8C11.2923 17.8 11.0893 17.7384 10.9167 17.623C10.744 17.5077 10.6094 17.3437 10.5299 17.1518C10.4505 16.96 10.4297 16.7488 10.4702 16.5451C10.5107 16.3415 10.6107 16.1544 10.7575 16.0075C10.9044 15.8607 11.0915 15.7607 11.2952 15.7202C11.4988 15.6797 11.71 15.7005 11.9018 15.7799C12.0937 15.8594 12.2577 15.994 12.373 16.1666C12.4884 16.3393 12.55 16.5423 12.55 16.75C12.55 17.0285 12.4394 17.2955 12.2425 17.4925C12.0456 17.6894 11.7785 17.8 11.5 17.8ZM12.55 12.382V13.6C12.55 13.8785 12.4394 14.1455 12.2425 14.3425C12.0456 14.5394 11.7785 14.65 11.5 14.65C11.2215 14.65 10.9545 14.5394 10.7575 14.3425C10.5606 14.1455 10.45 13.8785 10.45 13.6V11.5C10.45 11.2215 10.5606 10.9544 10.7575 10.7575C10.9545 10.5606 11.2215 10.45 11.5 10.45C11.8115 10.45 12.116 10.3576 12.375 10.1846C12.634 10.0115 12.8359 9.76552 12.9551 9.47772C13.0743 9.18993 13.1055 8.87325 13.0447 8.56773C12.984 8.26221 12.834 7.98157 12.6137 7.7613C12.3934 7.54104 12.1128 7.39103 11.8073 7.33026C11.5017 7.26949 11.1851 7.30068 10.8973 7.41989C10.6095 7.5391 10.3635 7.74097 10.1904 7.99998C10.0174 8.25898 9.925 8.56349 9.925 8.875C9.925 9.15348 9.81438 9.42055 9.61746 9.61746C9.42055 9.81437 9.15348 9.925 8.875 9.925C8.59653 9.925 8.32945 9.81437 8.13254 9.61746C7.93563 9.42055 7.825 9.15348 7.825 8.875C7.82226 8.19281 8.00944 7.52333 8.36561 6.9415C8.72178 6.35967 9.23286 5.88846 9.84165 5.58063C10.4504 5.2728 11.1329 5.14049 11.8126 5.19852C12.4923 5.25656 13.1425 5.50264 13.6903 5.90922C14.238 6.3158 14.6619 6.86683 14.9142 7.50062C15.1666 8.13441 15.2376 8.82593 15.1192 9.49778C15.0009 10.1696 14.6979 10.7953 14.2441 11.3047C13.7903 11.814 13.2038 12.1871 12.55 12.382V12.382Z");
}
.mainContent-20q_Hp[aria-label*=intro][aria-label$="text channel)"] > div > svg > path:first-child {
    fill: currentcolor;
    fill-rule: evenodd;
    clip-rule: evenodd;
    d: path("M11.5 10.4583C12.3241 10.4583 13.1297 10.214 13.8149 9.75612C14.5001 9.29828 15.0341 8.64754 15.3495 7.88618C15.6649 7.12482 15.7474 6.28704 15.5866 5.47879C15.4258 4.67054 15.029 3.92811 14.4463 3.34539C13.8636 2.76267 13.1211 2.36583 12.3129 2.20506C11.5046 2.04429 10.6668 2.1268 9.90548 2.44217C9.14413 2.75753 8.49338 3.29159 8.03554 3.97679C7.5777 4.662 7.33333 5.46758 7.33333 6.29167C7.33333 7.39674 7.77232 8.45654 8.55372 9.23794C9.33512 10.0193 10.3949 10.4583 11.5 10.4583ZM17.75 20.875C18.0263 20.875 18.2912 20.7653 18.4866 20.5699C18.6819 20.3746 18.7917 20.1096 18.7917 19.8333C18.7917 17.8995 18.0234 16.0448 16.656 14.6773C15.2885 13.3099 13.4339 12.5417 11.5 12.5417C9.56613 12.5417 7.71146 13.3099 6.34401 14.6773C4.97656 16.0448 4.20833 17.8995 4.20833 19.8333C4.20833 20.1096 4.31808 20.3746 4.51343 20.5699C4.70878 20.7653 4.97373 20.875 5.25 20.875H17.75Z");
}
.mainContent-20q_Hp[aria-label*=starboard][aria-label$="text channel)"] > div > svg > path:first-child {
    fill: currentcolor;
    fill-rule: evenodd;
    clip-rule: evenodd;
    d: path("M10.289 2.32864L7.77496 7.426L2.15015 8.24604C1.14146 8.39234 0.737209 9.63588 1.4687 10.3481L5.53812 14.3136L4.57563 19.9153C4.40238 20.9278 5.46882 21.6863 6.36202 21.2127L11.3939 18.5678L16.4258 21.2127C17.319 21.6824 18.3855 20.9278 18.2122 19.9153L17.2497 14.3136L21.3192 10.3481C22.0506 9.63588 21.6464 8.39234 20.6377 8.24604L15.0129 7.426L12.4989 2.32864C12.0484 1.42005 10.7433 1.4085 10.289 2.32864Z");
}
.botTag-2mryIa, .botTagCompact-1idyyC, .botTagCozy-3NTBvK {
    border-radius: 5px!important;
}
.channel-1Shao0 {
    border-radius: 8px;
}

.selected-3veCBZ {
    background-color: var(--background-primary);
}

* {
    text-rendering: optimizeSpeed;
}

.tooltip-14MtrL {
    background-color: var(--background-tertiary)!important;
    border-radius: 8px;
    box-shadow: 0px 1px 6px 0px var(--background-tertiary)!important;
    margin-left: -6px;
}

.tooltipPointer-3L49xb {
    display: none;
}

.layout-1qmrhw {
    border-radius: 8px!important;
    font-family: var(--font-display);
}

.name-3Vmqxm {
    font-size: 14.5px!important;
}

.activityText-1rR-8O {
    font-family: var(--font-primary);
    font-size: 12px!important;
}

* {
    --elevation-low: 0px 0px 6px var(--background-secondary);
}

.input-3r5zZY {
    transition: .5s;
    text-align: center;
    background-color: var(--background-accent);
    box-shadow: 0px 0px 10px 0px var(--background-accent);
    font-family: var(--font-display)!important;
}
.input-3r5zZY:hover {
    transition: .2s;
    background-color: var(--background-accent);
    box-shadow: 0px 0px 20px 0px var(--background-accent);
    font-family: var(--font-display)!important;
}
.input-3r5zZY:active {
    transition: .1s;
    font-family: var(--font-display)!important;
}

.result-u66Ywh {
    border-radius: 8px;
    background-color: var(--background-accent)!important;
}

.quickswitcher-pKcM9U, .container-qBnZJg {
    border-radius: 15px;
    border: none!important;
    border-color: transparent!important;
}
.channelMention {
    font-size: 14px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-right: 5px;
    font-family: var(--font-display);
}

.jump-1vIlrw {
    border-radius: 8px;
}

.inputDefault-3FGxgL, .input-2g-os5, .select-1Ia3hD.disabled-28GpyJ, .select-1Ia3hD.lookFilled-1GseHa {
    border: none;
    background-color: var(--background-accent);
}

.roleRow-230vCm {
    border-radius: 10px;
}

.roleRow-230vCm:hover:not(.roleRowDisableHover-3En0vy) {
    border-radius: 10px;
    background-color: var(--background-secondary);
}

.container-3EtAkD {
    border-radius: 10px;
}

.container-3EtAkD:hover {
    transition: .2s;
    border-radius: 10px;
    background-color: var(--background-secondary-alt);
}

.container-2oNtJn {
    border-radius: 8px;
}

.inputDefault-3FGxgL, .inputDefault-1AaKiD, .copyInputDefault-3jiMHw.copyInput-3AbKWB {
    border-radius: 8px;
    background-color: var(--background-accent)!important;
}

.radioBar-3w9XY- {
    border-radius: 10px;
}

.root-g14mjS, .footer-1hTRRZ {
    border-radius: 10px;
    border: none!important;
    background-color: var(--background-primary)!important;
}

.inputDefault-3FGxgL, .input-2g-os5, .select-1Ia3hD.disabled-28GpyJ, .select-1Ia3hD.lookFilled-1GseHa {
    border-radius: 8px!important;
}

button {
    font-family: var(--font-display);
}

.inviteRow-3vmB7i {
    border-radius: 8px!important;
}

.option-ayUoaq:after {
    display: none;
}

.container-2McqkF {
    border-radius: 8px;
}

.repliedMessage-3Z6XBG:before {
    border-color: var(--background-accent);
}

.messagesPopoutWrap-3zryHW {
    border-radius: 10px;
}

.footer-5ji8u1, .header-1w9Q93 {
    background-color: var(--background-secondary-alt);
}

.messageGroupWrapper-1jf_7C {
    border-radius: 8px;
    border-color: transparent;
}

.footer-31IekZ {
    box-shadow: none!important;
    border-radius: 10px;
    background-color: var(--background-secondary);
    border-color: var(--background-secondary)!important;
}

.textarea-_59yqs {
    border-radius: 5px;
    background-color: transparent!important;
}

.selected-1-Z6gm .layout-1qmrhw {
    background-color: var(--background-accent);
}

.searchBar-jGtisZ {
    border-radius: 7px;
}

.container-2ebMPP {
    border-radius: 10px;
}

.spoilerText-27bIiA {
    border-radius: 6px;
    background-color: var(--background-accent)!important;
}

.message-2CShn3 {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}

.header-3OsQeK {
    border-radius: 12px;
}

.reactors-1VXca7 {
    background-color: var(--background-primary)!important;
}

.scroller-2GkvCq {
    background-color: var(--background-secondary)!important;
}

.reactionSelected-1aMb2K {
    border-radius: 8px;
}

.container-2cd8Mz {
    margin-top: 10px;
    margin-right: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: #15131a!important;
}

.container-ZMc96U.themed-Hp1KC_ {
    background: #15131a!important;
}

.itemCard-3Etziu {
    border-radius: 8px;
    border-color: transparent;
}

.itemCard-3Etziu:hover {
    transition: .1s;
    background-color: var(--background-secondary-alt)!important;
    border-radius: 8px;
    border-color: transparent;
}

.peopleListItem-u6dGxF:hover {
    background-color: var(--background-secondary);
}

.item-3mHhwr {
    font-family: var(--font-display);
    font-size: 14px;
}

.mention {
    border-radius: 6px;
}

.wrapper-2vIMkT {
    border-radius: 8px;
    background-color: var(--background-secondary);
    border: none;
}

.wrapper-2SplAX {
    border-radius: 10px;
}

.image-3FliiM {
    height: 55px;
    margin-bottom: 1px;
    margin-right: 15px;
}

.reactionCount-1zkLcN {
    font-size: 13px;
    font-family: var(--font-display);
}

.channelTextArea-1FufC0, .channelTextArea-1VQBuV {
    border-radius: 14px;
}

.newMessagesBar-1hF-9G {
    margin-top: 6px;
    box-shadow: 0px 0px 7px var(--brand-experiment-500);
    border-radius: 8px;
}

.scrollableContainer-15eg7h {
    background-color: transparent;
    border: solid 2px var(--background-accent);
}

.perksModalContentWrapper-3RHugb {
    background-color: var(--background-primary);
}

.tierTitle--wPpA8 {
    font-family: var(--font-display);
}

.tierHeader-wgo0w_, .tierHeaderLocked-3ItHYn {
    border-top-left-radius: 8px!important;
    border-top-right-radius: 8px!important;
    background-color: var(--background-secondary)!important;
}

.tierBody-3ju-rc {
    background-color: var(--background-secondary)!important;
    border-bottom-left-radius: 8px!important;
    border-bottom-right-radius: 8px!important;
}

.perk-19D_HN {
    background-color: var(--background-secondary)!important;
}

.userPopout-2j1gM4[data-user-id="403390454273409028"] .headerText-1-WmDq::after{
  content:"Purpura Developer";
  margin-top: 5px!important;
  color: rgb(117, 117, 117);
  font-size: 13px;
  font-family: var(--font-display), sans-serif;
  font-weight: 500;
}

.inputDefault-3FGxgL, .input-2g-os5, .select-1Ia3hD.disabled-28GpyJ, .select-1Ia3hD.lookFilled-1GseHa {
    background-color: var(--background-secondary)!important;
}

textarea[aria-label="Note"] {
    background-color: transparent!important;
}

.header-3_zmOb {
    background-color: var(--background-secondary-alt)!important;
}

.px-MnE_OR.botTag-7aX5WZ { 
    border-radius: 5px;
}

.tabBarItem-30Te4-.selected-g-kMVV, .tabBarItem-30Te4-:hover {
    background-color: var(--background-floating)!important;
    border-radius: 0px!important;
}


.searchFilter-2UfsDk {
    padding-left: 5px;
    background-color: var(--background-primary)!important;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}

.searchAnswer-23w-CH {
    padding-right: 5px;
    background-color: var(--background-primary)!important;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

.queryContainer-ZunrLZ {
    background-color: var(--background-floating)!important;
}

.option-ayUoaq {
    border-radius: 8px;
}

.avatarUploader-2S1mwW .avatarUploaderInner-1Cp1oP, .avatarUploaderDisabled-1ewBlI .avatarUploaderInner-1Cp1oP {
    height: 170px;
    width: 170px;
}

.avatarUploaderInnerSquare-2J8lU8 {
    border-radius: 8px!important;
}

.roleName-1zfJkq {
    font-family: var(--font-display);
    margin-left: 3px;
    font-size: 14px;
}

.imageUploaderInner-IIRaFr.avatarUploaderInner-1Cp1oP:hover {
    border-radius: 55px;
    transition: .1s;
}

.imageUploaderInner-IIRaFr.avatarUploaderInner-1Cp1oP {
    transition: .5s;
}

.imageUploaderIcon-2OHmFu {
    height: 28px;
    width: 28px;
}

.itemFilled-1cPbtg[aria-checked=true] {
    background-color: var(--background-accent)!important;
}

.itemFilled-1cPbtg:hover {
    transition: .2s;
    background-color: var(--background-accent)!important;
}

.container-20TyK0 {
    border-radius: 10px;
    opacity: 93%;
    background-color: var(--background-secondary-alt)!important;
}

.message-3C6JQ1 {
    font-family: var(--font-display);
}

.name-3IqW9M, .membersHeader-6GlAlu {
    font-family: var(--font-display);
}

.membersFilterPopout-2bbQRK {
    border-radius: 10px;
}

.countdown-305GRY, .uses-28EKvR, .inviteCode-3IYjBf {
    font-family: var(--font-code);
}

.item-3XjbnG[aria-label="Delete Server"] {
    border: solid 1px;
    border-color: var(--status-danger);
    color: white;
    font-size: 14px;
    font-family: var(--font-display);
}

.timestampInline-_lS3aK {
    font-family: var(--font-display);
    font-size: 11px!important;
}

.applicationStore-2nk7Lo {
    margin-top: 10px;
    margin-right: 10px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}

.searchBarComponent-18D6hD {
    border-radius: 8px;
}

.tag-15zcD_ {
    border-radius: 5px;
}

.friendSelected-3cwmD7 {
    border-radius: 8px;
}

.contentTransitionWrap-1YD530 h3[class="defaultColor-24IHKz heading-xl-medium-_XBxHT defaultColor-HXu-5n"] {
    font-weight: 700;
}

button[class="button-1kaRT6 button-f2h6uQ lookFilled-yCfaCM colorBrand-I6CyqQ sizeMedium-2bFIHr grow-2sR_-F"] .contents-3ca1mk {
    width: 150px;
}

.perkTitle-1GQnag {
    font-family: var(--font-display);
}

.tierBody-1d3UiS {
    background-color: var(--background-secondary)!important;
    border-bottom-right-radius: 10px!important;
    border-bottom-left-radius: 10px!important;
}

.tierHeader-3q9jIw {
    background-color: var(--background-secondary)!important;
    border-top-right-radius: 10px!important;
    border-top-left-radius: 10px!important;
}

.background-3xJH_4, .tierInProgress-1vFUnw {
    color: var(--background-accent)!important;
    background-color: var(--background-accent)!important;
}

.mention {
    font-size: 14px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-right: 5px;
    font-family: var(--font-display);
}

.banner-1YaD3N {
    border-radius: 8px;
}

.profileCardUsernameRow-1bb6fi .username-3JLfHz {
    font-weight: 700;
}

.connectedAccountName-j0meX4 {
    font-size: 14px;
    font-family: var(--font-display);
}

.connectedAccount-1xKpli {
    border-radius: 8px;
    background-color: var(--background-secondary-alt);
    border-color: transparent;
}

.searchBarComponent-3N7dCG {
    text-align: center!important;
}

div[aria-label="Quick switcher"] .root-g14mjS {
    background-color: transparent!important;
}

.button-3bklZh:hover {
    border-radius: 8px!Important;
}

.mention {
    padding-left: 5px;
}

.root-22AK9z {
    background-color: var(--background-secondary-alt)!important;
}

.speakerRaiseHandButton-2xNQGu {
    background-color: var(--background-primary)!important;
}

.buttonSpacing-ZuQU_D[aria-label="Invite"] {
    background-color: var(--background-primary)!important;
}

.makeMeASpeakerButton-I5v_9C {
    background-color: var(--background-primary)!important;
}

.controlButton-2PMNom {
    border-radius: 100px!important;
}

.channelIcon-3I2O7O {
    margin-left: 2px;
}

code[class="inline"] {
    border-radius: 6px!important;
}

.addGamePopout-2SKNIV {
    border: solid 0px transparent;
    border-radius: 8px;
    background-color: var(--background-primary)!important;
}

.membershipDialog-2wAdpQ {
    border-radius: 10px;
}

.title-2pQsrN {
    font-family: var(--font-display);
}

.exampleContainer-2O-nVK {
    background-image: url('https://raw.githubusercontent.com/blueb442/purpura/main/assets/membership-screening.svg');
    border-radius: 12px;
}

.message-G6O-Wv {
    border-radius: 10px;
    background-color: var(--background-secondary)!important;
}

.radioBar-3w9XY- .radioLabelName-3FiyYq {
    font-family: var(--font-display)!important;
}

.content-1Tgc42 {
    border-radius: 8px!important;
}

.list-2u03C- {
    border-top-right-radius: 10px;
    background-color: var(--background-primary);
}

.categoryHeader-OpJ1Ly {
    box-shadow: 0px 0px 5px var(--background-primary)!important;
    background-color: var(--background-primary)!important;
}

.base-2v-uc0 {
    padding-right: 20px;
    padding-left: 20px;
}

.base-2v-uc0:hover {
    border-radius: 8px!important;
    padding-right: 20px;
    background-color: var(--background-secondary)!important;
}

.optionPill-2kmuZR, .optionPillKey-2JyeoP {
    border-radius: 7px;
    margin-left: 4px;
}

.name-1DypRz, .commandName-1s8HNs {
    font-family: var(--font-display);
}

.base-2v-uc0 {
    border-radius: 8px!important;
}


.footer-VCsJQY {
    border-radius: 10px!important;
    background-color: var(--background-secondary);
}

.ephemeral-2nDdnn {
    box-shadow: 0px 0px 30px rgba(88, 101, 242, 0.08);
}

.component-ifCTxY {
    background-color: var(--background-accent)!important;
}

.reaction-3vwAF2 {
    border-radius: 20px;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 1px;
}

.reaction-3vwAF2 .emoji {
    margin-left: -1px!important;
    border-radius: 3px;
}

.reactors .more-reactors {
    margin-right: -3px!important;
}

.blockquoteDivider-363utW {
    background-color: var(--background-accent);
}

.embedFull-1HGV2S {
    border-radius: 6.5px!important;
}

.userInfoTitle-39qq0Y {margin-top: 7px;}

#floating-editor-window {z-index: 9999999999;}

.platform-win .chat-2ZfjoI, .platform-win .sidebar-1tnWFu, .platform-win .container-2cd8Mz, .platform-win .applicationStore-2nk7Lo {
    margin-top: 1px!important;   
}

.list-3FIpnh {
    background-color: var(--background-secondary);
}


/* Image assets, still very important, please do not remove. */
@import url(https://blueb442.github.io/purpura/assets/allinone-sprite.png);

/* Microsoft Fluent Emoji, Optional */
@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/EmojiReplace/base/Microsoft.css);


/* ibti */
svg.artwork-L5TAwQ {
    display: none;
}
 .markup-eYLPri a span {
    font-size: 14px;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-right: 5px;
    font-family: var(--font-display);
	border-radius: 6px;
    padding-left: 5px;
}
.markup-eYLPri a span:hover {
    color: var(--white-500);
    background-color: var(--brand-experiment);
	text-decoration: underline;
}

/* cursor https://8kun.top/fringe/res/117496.html */
html, *, hover {
    cursor: url(https://i.imgur.com/vyaLY2f.png), default !important;
}
</style>`);
}
function uninjectCSS() { $("#subbind").remove() }

let isDone = false;
const checkSERVER = () => {
  window.location.href.includes("1001420842179239936") ? /* true */(!isDone && injectCSS(), isDone = true) : /* else */ (isDone && uninjectCSS(), isDone = false);
};



// Define the checkURL function
const checkURL = () => {
  if (window.location.href.includes("https://discord.com/login")) {
    // Do something if the URL contains "https://discord.com/login"
    $(".appMount-2yBXZl", "body").css("background", "var(--bg-overlay-app-frame,url(https://i.imgur.com/PKRXF8e.jpeg))");
  } else {
    // Do something else if the URL does not contain "https://discord.com/login"
    $(".appMount-2yBXZl", "body").css("background", "var(--bg-overlay-app-frame,var(--background-tertiary))");
  }
}



const shadowban = () => {
// Select all div elements with class starting with "contents-"
$("div[class^='contents-'] img").each(function() {
  // Get the src attribute of the img element inside the div
  var src = $(this).attr("src");
  // Check if the src contains "610853977227001894"
  if (src.includes("610853977227001894") || src.includes("940037358907187270")) { //** blank, neti
    // Hide the parent li element of the div
    $(this).parent().parent().parent().hide();
  } else {}
});
}

/*
import { * } from 'https://raw.githubusercontent.com/ibtisammidlet/midlet/main/interval.js'
*/


const copycat = () => {
var origin= $('[role="textbox"]').find("span[data-slate-string='true']");
var cat= $('[role="textbox"]').find("span[data-slate-string='true']").text();
var copy= $("[class^='emojiItem'] div").css("background-image");
var neworigin = origin.text(cat+copy)
console.log(copy)
}
/*
const toggleFullscreen = () => {
document.documentElement.requestFullscreen()
}
*/
/*
const PWA = () => {
$( "head" ).append(`<link rel="manifest" href="/idle/manifest.json">
<script>if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/idle/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered: ', registration);
      })
      .catch(error => {
        console.log('Service Worker registration failed: ', error);
      });
  });
}</script>`);
}PWA();
 https://developer.chrome.com/docs/workbox/reference/workbox-build/#method-generateSW */

//** channel muter for next hidding
const mute = () => {
/*	http rquset should do this
/api/v9/users/@me/guilds/1011367020182376478/settings
  "body": {"channel_overrides":{"1096787455933419632":{"muted":true,"mute_config":{"selected_time_window":-1,"end_time":null}}}}
*/
}

//** replay videos
const replayer = () => {
	            $('[aria-label="Play again"]').click();
/* v2
        if ($('[aria-label="Play"]').offsetParent !== null && $('[aria-label="Pause"]') === null) {
            $('[aria-label="Play"]').click();
			$('[aria-label="Play again"]').click();
		} else {
			$('[aria-label="Pause"]').click();
		}
*/
}

//** cooler color
const cooler = () => { 
const body = document.body;
  body.style.filter = `hue-rotate(8deg)`;
}

const mutemyself = () => { 
(window.location.href.includes("1130816287090679889") || window.location.href.includes("1146608028557254776")) ? /* true */$("head").append(`<style  class="mutemyself">.form-3gdLxP{display:none;}</style>`) : /* else */$(".mutemyself").remove() ;
}

//** server bumb
const bumb = () => { 
fetch("https://disboard.org/server/bump/1001420842179239936", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1"
  },
  "referrer": "https://disboard.org/dashboard/servers",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});
}/** let interval = async () => { bumb(); } setInterval(interval, 60 x 60 x 2); // call interval every 2 hours **/



let interval = async () => { /** global async function **/
/*  shadowban(); */
 checkSERVER(); 
  replayer(); 
  cooler(); 
  mutemyself(); 
}
setInterval(interval, 8000); // call interval every 1000 ms
checkURL();
document.addEventListener('click', toggleFullscreen);
