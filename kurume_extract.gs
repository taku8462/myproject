//このプログラムを1番目に実行
//福岡県の情報から久留米市のみの情報を抽出するプログラム
function extractKurumeCityRows() {
  //アクティブなスプレッドシートとシートを取得
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  //データの範囲を取得（1行目はヘッダーとして使用）
  var data = sheet.getDataRange().getValues();
  
  //新しいシートが既に存在する場合は削除して再作成
  var newSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("久留米市抽出");
  if (!newSheet) {
    newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("久留米市抽出");
  } else {
    newSheet.clear();  //既存のデータをクリア
  }
  
  //ヘッダーを新しいシートにコピー
  newSheet.appendRow(data[0]);
  
  //「久留米市」を含む行を格納する配列
  var extractedRows = [];
  
  //2行目以降をループして「久留米市」を含む行を抽出
  for (var i = 1; i < data.length; i++) {
    if (data[i].join(' ').indexOf('久留米市') !== -1) {
      extractedRows.push(data[i]);  // 該当する行を追加
    }
  }
  //もし該当する行があれば、新しいシートに一括で書き込む
  if (extractedRows.length > 0) {
    newSheet.getRange(2, 1, extractedRows.length, extractedRows[0].length).setValues(extractedRows);
  }
  
  Logger.log('久留米市の行が抽出されました。');
}

