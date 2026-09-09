function escapeHtml(str) {
    return str.replace(/[<>]/g, function(match) {
        return match === '<' ? '&lt;' : '&gt;';
    });
}   

function replaceTabs(str) {
    // Remove any leading spaces or tabs at the beginning of each line
    return str.replace(/^[ \t]+/gm, '');
}

// Select all pre code elements and apply modifications
document.querySelectorAll('pre code').forEach((el) => {
    // Apply escapeHtml to the content inside <code> tags
    el.innerHTML = escapeHtml(el.innerHTML);
    
    // Replace tabs and remove leading spaces in the code block
    el.innerHTML = replaceTabs(el.innerHTML);

    // Highlight the code
    hljs.highlightElement(el);
});
