const copyContent = async () => {
    try {
      await navigator.clipboard.writeText("Copy success 2");
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}
console.log('Content to clipboard');
copyContent()