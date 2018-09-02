import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    {
        path: 'movies', component: MoviesComponent, children: [
            { path: ':id', component: MovieDetailsComponent },
            { path: 'list', component: MoviesListComponent }
        ]
    },
    { path: 'tv-shows', component: TvComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
