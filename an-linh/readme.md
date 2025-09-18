Plan: https://drive.google.com/drive/folders/11BLHpgGaeO9VCJSp-v6igqaAtcrjVvct
Mẫu: https://yenstudio.com.vn/chien-diem/thiepmoi.html



<!-- App script function -->
function doPost(e) {
  var sheetName = (e && e.parameter && e.parameter.sheet) ? e.parameter.sheet : "da-nang";
  console.log('sheet', sheetName);
  var ss = SpreadsheetApp.openById("1WrZvRPFeLqo3beX6z30YOQ7afccdDl52mwjdVxcggFw");
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    return ContentService.createTextOutput("Sheet not found");
  }

  // var data = sheet.getDataRange().getValues();
  const data = e.parameter;

  console.log('data', data);

  sheet.appendRow([
    data.name || "",
    data.confirm || "",
    data.number_guest || "",
    data.wish || "",
    new Date()
  ]);

  return ContentService.createTextOutput(JSON.stringify({result: "success"})).setMimeType(ContentService.MimeType.JSON);
}
