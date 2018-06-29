//META{"name":"MemeGenerator"}*//

class MemeGenerator {

    getName() { return "Meme Generator"; }
    getDescription() { return "Allows you to generate memes."; }
    getVersion() { return "0.1.00"; }
    getAuthor() { return "Vaelek"; }
    getChanges() {
        return {
            "0.1.00":
                `
				Initial release
			`,
            "0.0.00":
                `
				Initial thought
			`
        };
    }

    load() { }

    getSettingsPanel() {
        return "Meme Generator";
    }

    start() {
        let Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 } t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } } t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/\r\n/g, "\n"); var t = ""; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t } }

        let allMemes = ['tenguy', 'afraid', 'older', 'aag', 'tried', 'biw', 'stew', 'blb', 'kermit', 'bd', 'ch', 'cbg', 'wonka', 'cb', 'gandalf', 'keanu', 'cryingfloor', 'dsm', 'disastergirl', 'live', 'ants', 'doge', 'drake', 'ermg', 'facepalm', 'firsttry', 'fwp', 'fa', 'fbf', 'fmr', 'fry', 'ggg', 'grumpycat', 'hipster', 'icanhas', 'crazypills', 'mw', 'noidea', 'regret', 'boat', 'hagrid', 'sohappy', 'captain', 'bender', 'inigo', 'iw', 'ackbar', 'happening', 'joker', 'ive', 'll', 'away', 'morpheus', 'mb', 'badchoice', 'mmm', 'spongebob', 'jetpack', 'imsorry', 'red', 'mordor', 'oprah', 'oag', 'remembers', 'philosoraptor', 'jw', 'patrick', 'rollsafe', 'obama', 'clinton', 'sadfrog', 'bush', 'biden', 'boehner', 'saltbae', 'sarcasticbear', 'dwight', 'sb', 'ss', 'soa', 'sf', 'dodgson', 'money', 'snek', 'sk', 'sohot', 'nice', 'awkward', 'awesome', 'awesome', 'awkward', 'fetch', 'success', 'scc', 'ski', 'officespace', 'interesting', 'toohigh', 'bs', 'fine', 'sparta', 'ugandanknuck', 'puffin', 'whatyear', 'center', 'both', 'winter', 'xy', 'buzz', 'yodawg', 'yuno', 'yallgot', 'bad', 'elf', 'chosen'];

        this.keydownEvent = e => {

            if (e.key === 'Enter' && e.target.value.toLowerCase().trim() === 'for the list go to http://memelist.singlehtml.com\nexample usage: \n\t/meme yuno ; line one ; line two\n\t/meme random ; take your ; chances') {
                e.preventDefault();
            }

            if (e.key === 'Enter' && e.target.value.toLowerCase().trim() === '/meme help') {
                this.chatbox.select();
                document.execCommand("insertText", false, 'For the list go to http://memelist.singlehtml.com\nExample usage: \n\t/meme yuno ; line one ; line two\n\t/meme random ; take your ; chances');
                e.preventDefault();
            }

            if (e.key === 'Enter' && e.target.value.toLowerCase().startsWith('/meme')) {
                let inputValue = e.target.value;
                if (inputValue.toLowerCase().startsWith('/meme')) {
                    let splitText = inputValue.substring(5).split(';');

                    // console.log(`Meme: ${splitText[0]}`);
                    // console.log(`Line 1: ${splitText[1]}`); 
                    // console.log(`Line 2: ${splitText[2]}`);

                    let plainString = splitText[0].trim().toLowerCase() === 'random' ? `${allMemes[Math.floor(Math.random() * allMemes.length)]}\t` : `${splitText[0].trim().toLowerCase()}\t`;

                    plainString += `${splitText[1].toLowerCase().trim().replace('_', '_')
                        .replace('-', '--')
                        .replace(/ /g, '_')
                        .replace('?', '~q')
                        .replace('%', '~p')
                        .replace('#', '~h')
                        .replace('/', '~s')
                        .replace('"', '\'\'')}`;

                    if (splitText[2]) {
                        plainString += `/${splitText[2].toLowerCase().trim().replace('_', '_')
                            .replace('-', '--')
                            .replace(/ /g, '_')
                            .replace('?', '~q')
                            .replace('%', '~p')
                            .replace('#', '~h')
                            .replace('/', '~s')
                            .replace('"', '\'\'')}`;
                    }

                    // console.log(`Base64: https://memegen.link/_${Base64.encode(plainString)}.jpg`);

                    this.chatbox.select();
                    document.execCommand("insertText", false, `https://memegen.link/_${Base64.encode(plainString)}.jpg`);
                }
            }
        };

        document.addEventListener("keydown", this.keydownEvent);
    }

    saveSettings() {
    }

    save() {
    }

    onSwitch() {
        this.attach();
    }

    attach() {
        this.chatbox = document.getElementsByClassName("textArea-2Spzkt textArea-2Spzkt scrollbarGhostHairline-1mSOM1 scrollbar-3dvm_9")[0];

        if (!this.chatbox) {
            console.log('chatbox is null!');
            return;
        }

        this.chatbox.removeEventListener("keydown", this.keydownEvent);
        this.chatbox.addEventListener("keydown", this.keydownEvent);
    }

    stop() {
        if (this.chatbox) {
            this.chatbox.removeEventListener("keydown", this.chatboxEvent);
        }

        document.removeEventListener("keydown", this.keydownEvent);
    }

}
