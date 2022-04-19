const Excel = require('exceljs');
const path = require('path');

exports.upload = async (req, res) => {
  try {
    const wb = new Excel.Workbook();
    const file = req.file
    
    wb.xlsx.readFile(file.path).then(() => {
      const ws = wb.getWorksheet('Sheet1');
      const startTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + ":" + new Date().getMilliseconds();
      const c1 = ws.getColumn(1);
      c1.eachCell(e => {
        console.log(e.value);
      });
      const endTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + ":" + new Date().getMilliseconds();

      console.log(`Start Time : ${startTime},  End Time: ${endTime}`);
    }).catch(err => {
      console.log(err);
    });
    
  } catch (error) {
    res.send(error);
  }
};