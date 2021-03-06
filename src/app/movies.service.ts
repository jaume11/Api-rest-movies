import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey = 'f278d69b62f15e306ca90e2799c0712d';
  getPopularEndpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
  getTrendingMoviesEndpoint = `https://api.themoviedb.org/3/trending/all/day?api_key=${this.apiKey}`;
  http: HttpClient;
  getSingleMovieEndpoint = id => `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`;

  constructor(http: HttpClient) {
    this.http = http;
  }
  popularMovies() {
    return new Promise(resolve => {
      this.http.get(this.getPopularEndpoint).subscribe(result => {
        resolve(result);
      });
    });
  }
  trendingMovies() {
    return new Promise(resolve => {
      this.http.get(this.getTrendingMoviesEndpoint).subscribe(result => {
        resolve(result);
      });
    });
  }
  getSingleMovie(id) {
    return new Promise(resolve => {
      this.http.get(this.getSingleMovieEndpoint(id)).subscribe(result => {
        resolve(result);
      });
    });
  }
}
