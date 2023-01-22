import { Base64imgService } from './base64img.service';
import { TpAppsService } from 'src/app/services/tp-apps.service';
import * as moment from 'moment';
import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import Swal from 'sweetalert2';
import { THSarabunNewBold } from 'src/assets/fonts/THSarabunNewBold.ttf.Base64.encoded';
import { THSarabunNew } from 'src/assets/fonts/THSarabunNew.ttf.Base64.encoded';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
const THBText = require('thai-baht-text')

@Injectable({
  providedIn: 'root'
})
export class PdfgenService {

  constructor(
    // public AdmissionService: AdmissionService,
    public TpAppsService: TpAppsService,
    public imgcanva: Base64imgService
  ) {

    pdfFonts.pdfMake.vfs['thsarabun'] = THSarabunNew;
    pdfFonts.pdfMake.vfs['thsarabunbold'] = THSarabunNewBold;

    (<any>pdfMake).fonts = {
      THSarabunNew: {
        normal: 'thsarabun',
        bold: 'thsarabunbold',
      },
      Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-MediumItalic.ttf',
      },
    };
  }

  public async addresspaperpdf(id: string) {
    const documentDefinition = {
      info: {
        title: 'จ่าหน้าซองถึงโรงเรียน',
        author: 'TP-Admission (งานรับนักเรียนโรงเรียนทวีธาภิเศก)',
      },
      content: [{
        columns: [
          {
            stack: [
              {
                text: 'ที่อยู่นักเรียน',
                fontSize: 18,
                bold: true
              },
              {
                text: ' ชื่อ-นามสกุล : '
              },
              {
                text: '.....................................................................................\n.....................................................................................\n.....................................................................................\n.....................................................................................\n'
              }
            ],
            width: '50%'
          },
          {
            text: '',
            width: '5%'
          },
          {
            stack: [{
              table: {
                width: '70%',
                widths: ['*'],
                body: [
                  [
                    {
                      stack: [
                        {
                          text: 'เอกสารมอบตัวนักเรียน ปีการศึกษา ' ,
                          alignment: 'center'
                        },
                        {
                          table: {
                            widths: ['auto', '*'],
                            body: [[
                              {
                                text: 'ชื่อ - สกุล :',
                                border: [false, false, false, false]
                              },
                              {
                                text: '',
                                border: [false, false, false, true]
                              }
                            ]]
                          }
                        },
                        {
                          table: {
                            widths: ['auto', '*'],
                            body: [[
                              {
                                text: 'เลขประจำตัวผู้สอบ',
                                border: [false, false, false, false]
                              },
                              {
                                text: '',
                                border: [false, false, false, true]
                              }
                            ]]
                          }
                        },
                        {
                          table: {
                            widths: ['auto', '*'],
                            body: [[
                              {
                                text: 'รอบการสอบคัดเลือก',
                                border: [false, false, false, false]
                              },
                              {
                                text: '',
                                border: [false, false, false, true]
                              }
                            ]]
                          }
                        },
                        {
                          table: {
                            widths: ['auto', '*'],
                            body: [[
                              {
                                text: 'แผนการเรียน',
                                border: [false, false, false, false]
                              },
                              {
                                text: '',
                                border: [false, false, false, true]
                              }
                            ]]
                          }
                        },
                      ]
                    }
                  ]
                ]
              }
            }
            ],
            width: '40%'

          }
        ]
      },
      {
        text: '\n\n\n\n',
        fontSize: 30
      },
      {
        columns: [
          {
            text: '',
            width: '40%'
          },
          {
            stack: [
              { text: 'ที่อยู่ผู้รับ', bold: true, fontSize: 18 },
              { text: 'โรงเรียนทวีธาภิเศก', bold: true, fontSize: 30 },
              { text: '505/5 ซ.อิสรภาพ 42 ถ.อิสรภาพ แขวงวัดอรุณ', fontSize: 20 },
              { text: 'เขตบางกอกใหญ่  กรุงเทพมหานคร', fontSize: 20 },
              { text: '1 0 6 0 0', bold: true, fontSize: 30 },

            ]
          }
        ]
      },

      ],
      defaultStyle: {
        font: 'THSarabunNew',
        fontSize: 18,
        lineHeight: 0.8,

      },
      pageOrientation: 'landscape',
      pageSize: 'A4',
      // pageMargins: [30, 20, 30, 20],
    }
    Swal.fire({
      title: 'สร้างเอกสารเสร็จแล้ว!',
      html: "ต้องการดูเอกสารหรือดาวน์โหลดเอกสาร<br>(การดูเอกสารไม่สามารถดาวน์โหลดได้)",
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#008257',
      cancelButtonColor: '#59acff',
      confirmButtonText: 'ดูเอกสาร',
      cancelButtonText: 'ดาวน์โหลด'
    }).then((result) => {
      if (result.isConfirmed) {
        pdfMake.createPdf(<any>documentDefinition).open({}, window);
      } else {
        pdfMake.createPdf(<any>documentDefinition).download('จ่าหน้าซองถึงโรงเรียน.pdf', () => { this.closepage() });
      }
    })
  }

    closepage() {
    setTimeout(function () { window.close() }, 1000);
  }
}
