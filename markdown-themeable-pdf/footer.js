/**
 * Your markdown-themeable-pdf custom footer.
 * After you have made any changes you need to reload or restart atom.
 *
 * The default file can be found in the folder ~/.atom/packages/markdown-themeable-pdf/templates
 *
 * @param Object For example: {fileInfo: base: "Demo.md", dir: ".../markdown-themeable-pdf/tests", ext: ".md", name: "Demo"}, root: "/", exportType: "pdf", destFileBase: "Demo.pdf", destFile: "......./markdown-themeable-pdf/tests/Demo.pdf"}
 * @returns Object {{height: string, contents: string}}
 */
module.exports = function (info) {
    var dateFormat = function () {
        return (new Date()).toLocaleDateString('en-UK', {
            /*weekday: 'long',*/
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          /*  hour: '2-digit',
            minute: '2-digit'*/
        });
    };
    return {
        height: '2cm',
        contents: '<div style="float:left;"><img src="cclogo.png" alt="Creative Commons logo"></div> <div style="float:center;">Page {{page}}/{{pages}}</div><div style="float:right;">&copy; Copyright ' + dateFormat() + ' by RaspiKidd</div>'
    };
};
/**
<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
*/
