function doGet(e) {
    var template = HtmlService.createTemplateFromFile('Index');
/// Ini Judul Halaman ///
    return template.evaluate()
        .setTitle('Upload')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function uploadFiles(form) {
/// Cari folder dan Upload File ///
    try {
/// Cari folder dengan nama Document ///
        var himCloud = form.myName  + "; " + form.myEmail;
        var folder, folders = DriveApp.getFoldersByName('Document');
/// Kalo folder Document ga ketemu bikin baru pake Nama Uploader ///
        if (folders.hasNext()) {
            folder = folders.next();
        } else {
            folder = DriveApp.createFolder(himCloud);
        }
/// Menambahkan Description pada File yang diupload ke Document ///
        var blob = form.myFile;
        var file = folder.createFile(blob);
        file.setDescription("Uploaded by " + ": " + form.myName + "; " + form.myNumber + "; " + form.myEmail);
    } catch (e) {
        return {
            'error': e.toString()
        }
    }
/// Kalo Document ga bisa diupload ga keluar error @.@a malah blank ///
}