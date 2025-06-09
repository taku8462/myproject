//2番目に実行
//緯度列と経度列を統合するプログラム
function idokeido() {
  //アクティブなスプレッドシートを取得
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  //アクティブなシートを取得
  var sheet = spreadsheet.getActiveSheet();

  var numRows = sheet.getLastRow();
  Logger.log(numRows);
  //1つ目の列と2つ目の列の範囲を指定
  var firstColumn = sheet.getRange(1,23,numRows,1).getValues();  // 1つ目の列（X列）
  var secondColumn = sheet.getRange(1,24,numRows,1).getValues(); // 2つ目の列（Y列）

  var concatenatedData = [];

  //1つ目と2つ目の列を結合
  for (var row = 0; row < numRows; row++) {
    var valueFromFirstColumn = firstColumn[row][0];
    var valueFromSecondColumn = secondColumn[row][0];
    Logger.log(row);
    //空白以外の値がある場合に結合
    if (valueFromFirstColumn !== "" && valueFromSecondColumn !== "") {
      var concatenatedValue = valueFromFirstColumn + ", " + valueFromSecondColumn;
      concatenatedData.push([concatenatedValue]);
    } else {
      //どちらかが空白の場合は空白を結果として追加
      concatenatedData.push([""]);
    }
  }

  //新しい列に結合したデータを書き込む
  sheet.getRange(1, 27, numRows, 1).setValues(concatenatedData);
  sheet.autoResizeColumn(27);
}








