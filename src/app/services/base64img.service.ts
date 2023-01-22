import { Injectable } from '@angular/core';
// import JsBarcode from 'jsbarcode/bin/JsBarcode'
var JsBarcode = require('jsbarcode');

@Injectable({
  providedIn: 'root'
})
export class Base64imgService {

  constructor() { }
  getBase64ImageFromURL(url: string) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossorigin", "anonymous");
      img.src = url;

      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        var ctx = canvas.getContext("2d");
        (<any>ctx).drawImage(img, 0, 0);

        var dataURL = canvas.toDataURL("image/png");
        resolve(dataURL);
      };

      img.onerror = error => {
        reject(error);
      };

    });
  }

  textToBase64Barcode(text: string) {
    var canvas = document.createElement("canvas");
    JsBarcode(canvas, text, { format: "CODE128" });
    return canvas.toDataURL("image/png");
  }
}
