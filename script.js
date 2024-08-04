// import { copy } from './node_modules/copy-to-clipboard/index.js';

setTimeout(async () => {
    navigator.clipboard.writeText("Your text").then(function () {
       console.log("Copy to clipboard successfully.");
    }, function () {
       console.log("Copy to clipboard unsuccessfully.");
    });
});

// const copyContent = async () => {
//     try {
//       await navigator.clipboard.writeText("Copy success 2");
//       console.log('Content copied to clipboard');
//     } catch (err) {
//       console.error('Failed to copy: ', err);
//     }
// }
console.log('Content to clipboard');
// copyContent();// copy('rohit sharma is indian captain....');