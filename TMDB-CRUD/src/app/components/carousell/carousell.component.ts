import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 
import { MovieService } from '../../services/movie-service.service';
import { TrendingMovie } from '../../models/models/trending-movies';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-carousell',
  templateUrl: './carousell.component.html',
  styleUrls: ['./carousell.component.css']
})
export class CarousellComponent implements OnInit{
	currentSlide = 0;
	currentPage = 1;
	trendingMovieBackDrops:String[] = [];
	trendingMovieList:TrendingMovie[] = [];
	showNavigationArrows = true;
	showNavigationIndicators = false;

	constructor(config: NgbCarouselConfig, private movieService: MovieService) {
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
		config.interval = 0;
	}

	ngOnInit(): void {
		this.movieService.getTrendingMoviesList().subscribe(resp => {
			this.trendingMovieList = resp.results;
			this.trendingMovieBackDrops = this.getTrendingMoviesBackDrops(this.trendingMovieList);
		})
	}

	getTrendingMoviesBackDrops(trendingMovieList: TrendingMovie[]){
		var trendingBackDrops = [];
		for (const m of trendingMovieList){
				trendingBackDrops.push(environment.originalPng.concat(m.backdrop_path));
		}
		return trendingBackDrops;
	}

	onSlideChange(event:any){
		this.currentSlide = this.getCurrentSlideNumber(event.current);
		return this.currentSlide;
	}

	getCurrentSlideNumber(slideString:String){
		return Number(slideString.split('-').reverse()[0]);
	}
}