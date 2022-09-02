const electronInstaller = require('electron-winstaller');
const path = require('path')

async function start() {
    try {
        await electronInstaller.createWindowsInstaller({
            appDirectory: path.join(__dirname, '/out/web-cam-application-win32-x64'),
            outputDirectory: '/tmp',
            authors: 'iParadocx Inc.',
            exe: 'web-cam-application.exe'
        });
        console.log('It worked!');
    } catch (e) {
        console.log(`No dice: ${e.message}`);
    }
}


start();