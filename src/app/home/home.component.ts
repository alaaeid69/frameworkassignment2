import { GatMealsService } from './../gat-meals.service';
import { Component, Inject, inject, OnInit} from '@angular/core';
import { MealsService } from '../meals.service';
import { Imeal } from '../imeal';
import { error } from 'console';
import { Icatmeals } from '../icatmeals';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  private readonly mealsService = inject(MealsService);
  private readonly gatMealsService =inject(GatMealsService)


  meal :Imeal[] =[]
  catMeal :Icatmeals[] =[]
  selectedCategory: string = ''
 getCatData(){
    this.mealsService.getCategory().subscribe({
      next:(res:any) =>{
      this.meal = res.categories;
        console.log(this.meal)

        if (this.meal.length > 0) {
          this.selectedCategory = this.meal[0].strCategory;
          this.getMealData(this.selectedCategory);
        }
      },
      error:(err) =>{
        console.log(err)
      }
    })
  }

  getCatMeals(category:string){
  this.selectedCategory = category;
  this.getMealData(this.selectedCategory)
  }
getMealData(category: string){
  this.gatMealsService.getMeals(category).subscribe({
 next:(res) =>{
  this.catMeal= res.meals;
  console.log(res)
 },
 error:(err) =>{
  console.log(err)          
 }
  })}

ngOnInit(): void {
    this.getCatData()
    
 }

}
