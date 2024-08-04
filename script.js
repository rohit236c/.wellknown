// import { copy } from './node_modules/copy-to-clipboard/index.js';

// setTimeout(async () => {
//     navigator.clipboard.writeText("Your text").then(function () {
//        console.log("Copy to clipboard successfully.");
//     }, function () {
//        console.log("Copy to clipboard unsuccessfully.");
//     });
// });

// const copyContent = async () => {
//     try {
//       await navigator.clipboard.writeText("Copy success 2");
//       console.log('Content copied to clipboard');
//     } catch (err) {
//       console.error('Failed to copy: ', err);
//     }
// }

const clipboardItem = new ClipboardItem({
    'text/plain': someAsyncMethod().then((result) => {

    /**
     * We have to return an empty string to the clipboard if something bad happens, otherwise the
     * return type for the ClipBoardItem is incorrect.
     */
    if (!result) {
        return new Promise(async (resolve) => {
            resolve(new Blob[``]())
        })
    }

    const copyText = `some string`
        return new Promise(async (resolve) => {
            resolve(new Blob([copyText]))
        })
    }),
})
// Now, we can write to the clipboard in Safari
navigator.clipboard.write([clipboardItem])

console.log('Content to clipboard');
// copyContent();
// copy('rohit sharma is indian captain....');