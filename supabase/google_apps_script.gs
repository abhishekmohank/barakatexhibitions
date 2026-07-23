// Paste this into Extensions > Apps Script for the leads spreadsheet,
// then deploy it as a Web App (see instructions from the assistant).
//
// Sheet columns expected: A = Email, B = Submitted At

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([data.email, data.submitted_at]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
