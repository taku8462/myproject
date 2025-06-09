// 新年度のデータが出た際に実行
// 新しい年のデータを追加するプログラム

function appendDataToAccidentSheet() {
  // 入力ダイアログを表示してシートの名前を取得
  var year = SpreadsheetApp.getUi().prompt("シートの名前を入力してください。").getResponseText();

  // "事故"シートの名前を指定
  var accidentSheetName = "事故";

  // 元のシートと"事故"シートを取得
  var accidentSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(accidentSheetName);
  var yearSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(year);

  if (!accidentSheet || !yearSheet) {
    Logger.log("指定されたシートが見つかりません。");
    return;
  }

  // 年のシートからデータを取得
  var yearData = yearSheet.getDataRange().getValues();

  // "事故"シートの最終行を取得
  var lastRow = accidentSheet.getLastRow();

  // 年のデータを"事故"シートに追加
  accidentSheet.getRange(lastRow + 1, 1, yearData.length, yearData[0].length).setValues(yearData);
}
