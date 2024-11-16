const axios = require('axios');





export async function getInformation(url, project_address) {
    const listResult = [];
    try {
        const response = await axios.get(url);
        const result = response.data.result;
        for (let i = 0; i < result.length; i++) {
            const hash = result[i].hash;
            const from = result[i].from;
            const to = result[i].to;
            if (from.toLowerCase() === project_address.toLowerCase() || to.toLowerCase() === project_address.toLowerCase()) {
                return { txHash: hash, interactionFound: true }; // 找到交互，返回交易哈希
            }
       
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    return { txHash: false, interactionFound: false };
}


// project_address = "0xf9419d90C900e48551B0bcB294fD810ed0e27f26"
// // data = getInformation(url)
// getInformation(url,project_address).then(data => console.log(data));