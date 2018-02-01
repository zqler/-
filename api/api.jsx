const baseUrl = "http://"+window.location.host;
module.exports = {
    login:baseUrl+"/mokeJson/login.json",
    getTableData:baseUrl+"/mokeJson/tableJson.json",
    getNewTableData:baseUrl+"/mokeJson/tableJson.json",
    getLisData:baseUrl + "/mokeJson/list.json"
};

