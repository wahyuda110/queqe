(function() {
    const storageKey = "telegram-apps/mini-app";
    const logMessage = "Query mu sudah berhasil diambil ";

    function checkAndLogStorage(storage, storageType) {
        const data = storage.getItem(storageKey);
        if (data !== null) {
            try {
                const parsedData = JSON.parse(data);
                if (parsedData.initDataRaw) {
                    console.log(`%c${logMessage}`, 'color: purple; font-weight: bold;');
                    copyToClipboard(parsedData.initDataRaw);  // Mengambil initDataRaw
                } else {
                    console.log("Tidak menemukan initDataRaw pada ", storageType);
                }
            } catch (error) {
                console.log("Gagal mem-parsing data dari ", storageType, error);
            }
        } else {
            console.log("Tidak menemukan data di ", storageType);
        }
    }

    function copyToClipboard(data) {
        const textarea = document.createElement("textarea");
        textarea.value = data;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        if (data) {
            console.log("%cBeli Kebutuhan VPS/RDP di Kuro Store, Menjual Digital Ocean Termurah\nhttps://t.me/kurodigital", 'color: blue; font-weight: bold;');
            console.log("%cData telah disalin ke clipboard.", 'color: green; font-weight: bold;');
        }
    }

    checkAndLogStorage(sessionStorage, "sessionStorage");

    function extractDataFromDevTools() {
        try {
            const element = document.querySelector(`[data-qa='${storageKey}']`);
            if (element) {
                const data = element.innerText || element.textContent;
                console.log("Menampilkan data dari DevTools", data);
                if (data) {
                    copyToClipboard(data);
                }
            }
        } catch (error) {
            console.log("Gagal mengambil data dari DevTools", error);
        }
    }

    extractDataFromDevTools();
})();
