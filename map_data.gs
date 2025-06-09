//3番目に実行
//マップに表示する情報を集めたカラムを作成するプログラム
function hyoujijouhou() {
  //アクティブなスプレッドシートを取得
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  //アクティブなシートを取得
  var sheet = spreadsheet.getActiveSheet();

  var numRows = sheet.getLastRow();
  Logger.log(numRows);

  //1つ目の列と2つ目の列の範囲を指定
  var firstColumn = sheet.getRange(1,5,numRows,1).getValues();  // 1つ目の列
  var secondColumn = sheet.getRange(1,8,numRows,1).getValues(); // 2つ目の列
  var thirdColumn = sheet.getRange(1,6,numRows,1).getValues();
  var forthColumn = sheet.getRange(1,7,numRows,1).getValues();
  var fifthColumn = sheet.getRange(1,10,numRows,1).getValues();
  var sixthColumn = sheet.getRange(1,19,numRows,1).getValues();
  var seventhColumn = sheet.getRange(1,4,numRows,1).getValues();

  var concatenatedData = [];

  //1つ目と2つ目の列を結合
  for (var row = 0; row < numRows; row++) {
    Logger.log(row);
    var valueFromFirstColumn = firstColumn[row][0];
    var valueFromSecondColumn = secondColumn[row][0];
    var valueFromthirdColumn = thirdColumn[row][0];
    var valueFromforthColumn = forthColumn[row][0];
    var valueFromfifthColumn = fifthColumn[row][0];
    var valueFromsixthColumn = sixthColumn[row][0];
    var valueFromseventhColumn = seventhColumn[row][0];
   
    //空白以外の値がある場合に結合      
    if (valueFromFirstColumn !== " " && valueFromSecondColumn !== "") { 
      var concatenatedValue = valueFromFirstColumn + "　\n" + valueFromSecondColumn + "\n" + "発生時刻:" + valueFromthirdColumn + "時" + "　" + "発生曜日:" + valueFromforthColumn + "曜日" + "　" + "道路形状:" + valueFromfifthColumn + "　" + "時間帯:" + valueFromsixthColumn + "　" + "事故内容:" + valueFromseventhColumn;
      concatenatedData.push([concatenatedValue]);
    } else {
      //どちらかが空白の場合は空白を結果として追加
      concatenatedData.push([""]);
    }
  }

  //新しい列に結合したデータを書き込む
  sheet.getRange(1, 28, numRows, 1).setValues(concatenatedData);
  //sheet.autoResizeColumn(28);
  }


