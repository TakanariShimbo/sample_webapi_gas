// Ref1. https://m12watanabe1a.hatenablog.com/entry/2018/12/19/143926
// Ref2. https://iwb.jp/google-apps-script-contentservice-htmlservice/

function doPost(e) {
    // get data from request
    let data_get = JSON.parse(e.postData.contents);
    let value1 = data_get.value1;
    let value2 = data_get.value2;

    // return result as json
    let data_send = {
        'value1': value1,
        'value2': value2
    };
    let output = ContentService.createTextOutput();
    output.setMimeType(ContentService.MimeType.JSON);
    output.setContent(JSON.stringify(data_send));
    return output;
};
