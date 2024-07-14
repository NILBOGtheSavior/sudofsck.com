const action = ['Initializing', 'Executing', 'Performing', 'Loading', 'Analyzing', 'Activating', 'Deploying', 'Rebooting', 'Compiling', 'Processing', 'Rendering', 'Scanning', 'Transmitting', 'Encrypting', 'Decrypting', 'Syncing', 'Configuring', 'Optimizing', 'Upgrading', 'Monitoring', 'Integrating', 'Installing', 'Uninstalling', 'Backing up', 'Restoring', 'Calibrating', 'Simulating', 'Debugging'];
const word = ['debug', 'maintenance', 'safe', 'diagnostic', 'boot', 'security', 'recovery', 'update', 'error', 'malfunction', 'anomaly', 'disruption', 'integrity', 'visual', 'graphic', 'digital', 'multimedia', 'user', 'system', 'performance', 'log', 'auto-repair', 'AI-assist', 'security-enhance', 'speed-boost', 'AI', 'interface', 'kernel', 'main', 'backup', 'secure', 'external', 'operating', 'network', 'storage', 'core', 'fashion', 'collection', 'style', 'trend', 'design', 'apparel', 'wear', 'clothing', 'firmware', 'software', 'hardware', 'cache', 'bandwidth', 'latency', 'optimization', 'virtual', 'cloud', 'container', 'framework'];
const noun = ['mode', 'protocol', 'scan', 'assets', 'data', 'feature', 'module', 'system', 'network', 'environment', 'package', 'configuration', 'database', 'interface', 'session', 'process', 'architecture', 'component', 'service', 'task', 'operation', 'utility', 'platform', 'repository', 'log', 'command', 'function', 'variable', 'attribute', 'class', 'object', 'method'];

let processIndex = 0;

function sentenceCreator() {
    var randAction = action[Math.floor(Math.random() * action.length)];
    var randWord = word[Math.floor(Math.random() * word.length)];
    var randNoun = noun[Math.floor(Math.random() * noun.length)];
    var sentence = "<p>" + randAction + " " + randWord + " " + randNoun + "...</p>";
    return sentence;
}

function terminalManager() {
    const terminal = document.getElementById("terminal");
    terminal.innerHTML += sentenceCreator();
    processIndex += 1;
    if (processIndex > 21) {
        terminal.firstChild.remove();
    }
    terminal.scrollTop = terminal.scrollHeight;
    randomTimer();
}

function randomTimer() {
    setTimeout(terminalManager, Math.random() * (1000 - 200) + 200);
}

window.addEventListener("load", (event) => {
    randomTimer();
  });
  