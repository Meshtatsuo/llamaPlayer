const settingsbtn = document.querySelector(".settings-trigger")

window.api.receive("fromMain", (data) => {
    console.log(`Received ${data} from main process`);
});

console.log(settingsbtn);