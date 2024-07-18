const getOsToken = async (tokens) => {
    try {
        const response = await fetch('/os-token');
        const json = await response.json();
        
        if (json.access_token) {
            tokens.os = json.access_token;
            const timeout = (json.expires_in - 30) * 1000;
            setTimeout(() => getOsToken(tokens), timeout);
        } else {
            throw new Error('No access token received');
        }
    } catch (err) {
        console.log('Error getting OS access token: ', err);
        throw err;
    }
};

const getEsriToken = async (tokens) => {
    try {
        const response = await fetch('/esri-token');
        const json = await response.json();
        
        if (json.token) {
            tokens.esri = json.token;
        } else {
            throw new Error('No ESRI token received');
        }
    } catch (err) {
        console.log('Error getting ESRI access token: ', err);
        throw err;
    }
};