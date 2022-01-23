import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipiesService } from '../recipies.service';
import { Recipies } from '../recipies.model';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-recipie-details',
  templateUrl: './recipie-details.page.html',
  styleUrls: ['./recipie-details.page.scss'],
})
export class RecipieDetailsPage implements OnInit {
 loadedRecipie: Recipies;
  constructor(private activatedRoute: ActivatedRoute,
    private recipieService: RecipiesService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
 if(!paramMap.has('recipieID')){
   return this.router.navigate(['/recipies']);;
 }
      const recipieID = paramMap.get('recipieID');
      this.loadedRecipie = this.recipieService.getRecipie(recipieID);
      });
  }

  deleteRecipie(){
     this.alertCtrl.create({
       header:'Are you sure?',
     message:'Do you want to delete this Recipie?',
   buttons:[
     {
       text:'Cancel',
       role: 'cancel'
     },
     {
       text: 'Delete',
       handler:()=>{
        this.recipieService.deleteRecipie(this.loadedRecipie.id);
        this.router.navigate(['/recipies']);
       }
     }
   ]}).then(
     alertEL => {
       alertEL.present();
     }
   );

  }

}
