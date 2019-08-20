import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';


@Injectable({
  providedIn:'root'
})
export class Restaurant_serviceService {

  constructor(private http:HttpClient) { }

  getCity(city){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept','Application/json');
    headers = headers.append('user-key','448c994d51ce1a22639ac9bc4d6b1c33');
    console.log("HHBJHB");
    console.log(city);
    return this.http.get('https://developers.zomato.com/api/v2.1/cities?q='+city,{headers});
  }


  getRestaurant(id){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept','Application/json');
    headers = headers.append('user-key','448c994d51ce1a22639ac9bc4d6b1c33');
    return this.http.get('https://developers.zomato.com/api/v2.1/search?entity_id='+id+'&entity_type=city&count=10',{headers});

  }

  genaratePdf()
  {
    var print = document.getElementById('Content_to_Print');
    html2canvas(print).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }
}
