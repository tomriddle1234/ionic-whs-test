import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as WHS from 'whs/build/whs';
import * as THREE from 'three';

import { Http, Response, Headers, RequestOptions,ResponseContentType,JsonpModule,HttpModule } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public http:Http) {

    const app = new WHS.App([
      new WHS.ElementModule(), // Apply to DOM.
      new WHS.SceneModule(), // Create a new THREE.Scene and set it to app.

      new WHS.DefineModule('camera', new WHS.PerspectiveCamera({ // Apply a camera.
        position: new THREE.Vector3(0, 0, 50)
      })),

      new WHS.RenderingModule({bgColor: 0x162129}), // Apply THREE.WebGLRenderer
      new WHS.ResizeModule() // Make it resizable.
    ]);

    const sphere = new WHS.Sphere({ // Create sphere component.
      geometry: {
        radius: 3,
        widthSegments: 32,
        heightSegments: 32
      },

      material: new THREE.MeshBasicMaterial({
        color: 0xF22222,
        wireframe:true
      }),

      position: [0, 10, 0]
    });

    sphere.addTo(app); // Add sphere to world.

    new WHS.Box({
      geometry: {
        width: 10,
        height: 10,
        depth:10
      },

      material: new THREE.MeshBasicMaterial({
        color: 0xF2F2F2 ,
        wireframe:true
      }),

      rotation: {
        x: - Math.PI / 2
      },
      position: [0, 0, 0]
    }).addTo(app);

    const text = new WHS.Text({
    
        text: 'hello world',

        parameters: {
          size: 12,
          height: 50,
          curveSegments: 6,
          font: '../gentilis_bold.typeface.fjson',
        },
      

        material: new THREE.MeshBasicMaterial({
          color: 0xffffff
        })
        
      });

      text.addTo(app).then(self=>self.position.set(10,20,30));

   
    

    app.start(); // Run app.

  }

  	getActionGivenUrl (url : string): Observable<any>{
		return this.http.get(url)
						.map(this.extractData)
						.catch(this.handleError) ;
	  }

  	//this is not for binary data.
  	private extractData(res: Response) {
    	let body = res.json();
      console.log(res) ;
      let result = body || { } ;
    	return result;
    }

    private handleError (error: Response | any) {
	    // In a real world app, we might use a remote logging infrastructure
	    let errMsg: any;
	    if (error instanceof Response) {
	      const body = error.json() || '';
		  console.log("Error Raw ", body) ;
	    //   const err = body.error || JSON.stringify(body);
		//   console.log("Error Prcessed 1 ", err) ;
	      //   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		  //return the whole error
		  errMsg = body ;
	    } else {
	      errMsg = error.message ? error.message : error.toString();
	    }
	    console.error(errMsg);
	    return Observable.throw(errMsg);
  	}

}
