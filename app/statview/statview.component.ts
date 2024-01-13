import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StatOpenerComponent } from '../stat-opener/stat-opener.component';
import { CricapiService } from '../cricapi.service';
import { RouterService } from '../router.service';
import { Find } from '../find';
import { Favs } from '../fav';

@Component({
  selector: 'app-statview',
  templateUrl: './statview.component.html',
  styleUrls: ['./statview.component.css']
})
export class StatviewComponent implements OnInit {
  stat :any;
  constructor(private diaRef: MatDialogRef<StatOpenerComponent>, @Inject(MAT_DIALOG_DATA) private data: any,
   private cric: CricapiService, private route :RouterService) { 
   }

  ngOnInit(): void {

    if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
      this.route.tologin();
    }
    console.log("Call the Cric Player ApI based on PID to get player stats.");
    this.cric.statsPlayer(sessionStorage.getItem('pId')).subscribe(
      res => {
        this.stat = res['data']
      },
      err => console.log(err)
    )
  }

}
