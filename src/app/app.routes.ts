import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD
import { ArticleComponent } from './pages/article/article.component';
import { EcranComponent } from './pages/ecran/ecran.component';
import { PaiementComponent } from './pages/paiement/paiement.component';
import { CommentaireComponent } from './pages/commentaire/commentaire.component';
import { StockComponent } from './pages/stock/stock.component';
import { AccesComponent } from './pages/acces/acces.component';
import { LectureComponent } from './pages/lecture/lecture.component';
import { ClotureComponent } from './pages/cloture/cloture.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'article', component: ArticleComponent},
    { path: 'ecran', component: EcranComponent},
    { path: 'paiement', component: PaiementComponent},
    { path: 'commentaire', component: CommentaireComponent},
    { path: 'stock', component: StockComponent},
    { path: 'acces', component: AccesComponent},
    { path: 'lecture', component: LectureComponent},
    { path: 'cloture', component: ClotureComponent}
=======
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ArticleComponent } from './pages/configuration/article/article.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path:'article', component:ArticleComponent},

>>>>>>> 25e1204b1c890af8be0faabb24cc552143579065
];
